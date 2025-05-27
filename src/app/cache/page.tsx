import DataWithReactCache from "@/components/DataWithReactCache";
import Header from "@/components/Header";
import { Loading } from "@/components/Loading";
import NewDataWithReactCache from "@/components/NewDataWithReactCache copy";
import { Suspense } from "react";
import { getTodosWithReactCache } from "./actions";

export default async function Page() {
	return (
		<div className="flex flex-col gap-2 bg-neutral-300 p-4 rounded">
			<Header currentHref="/cache" />
			<div className="flex flex-col gap-2">
				<h2 className="text-lg font-semibold">Pourquoi utiliser cache ?</h2>
				<div className="flex flex-col gap-1">
					<p>
						• <b>cache()</b> de React permet de mémoriser le résultat d’un appel
						identique pour ne pas refaire inutilement le traitement lors d'un
						même cycle de rendu côté serveur.
					</p>
					<p>
						• Idéal pour des requêtes coûteuses, peu changeantes, appelées à de
						multiples endroits dans un même rendu.
					</p>
					<div className="flex flex-col">
						<p>
							• Exemple ici dans les composants Cache1 et Cache2 qui appellent
							la même fonction de génération avec <b>cache()</b> de React, donc
							il n'y a qu'une seule exécution (la date affichée est identique).
						</p>
						<p className="text-sm text-neutral-700">
							avec cache : 1 requête, même date
						</p>
						<p className="text-sm text-neutral-700">
							sans cache : 2 requêtes, dates différentes
						</p>
					</div>
					<p className="my-4 text-red-700">
						❌ <b>Limite :</b> le cache ne persiste pas entre différentes pages
						ou requêtes côté client. Si tu cliques sur le bouton en dessous, la
						date change car la fonction est rappelée.
					</p>
				</div>
			</div>
			<div className="flex flex-col gap-4">
				<Suspense fallback={<Loading text="Chargement du composant 1" />}>
					<DataWithReactCache title="Cache1" bgColor="#ff5733" />
				</Suspense>
				<Suspense fallback={<Loading text="Chargement du composant 2" />}>
					<DataWithReactCache title="Cache2" bgColor="#8c1900" />
				</Suspense>
				<p className="my-4">
					❌ ne fonctionne que pendant le même cycle de rendu sur le serveur.
					Les données mises en cache ne persistent pas entre les composants
					serveur et client, ni entre les différentes requêtes côté client. Les
					données vont donc à nouveau avoir un temps de chargement quand on
					clique sur le bouton en dessous alors que j'utilise la même fonction
					qu'au dessus
				</p>
				<NewDataWithReactCache onFetchData={getTodosWithReactCache} />
			</div>
		</div>
	);
}
