import DataWithUse from "@/components/DataWithUse";
import Header from "@/components/Header";
import { Loading } from "@/components/Loading";
import { getTodosWithoutCache } from "@/lib/api";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

export default async function Page() {
	const dataPromise = getTodosWithoutCache();

	return (
		<div className="flex flex-col gap-2 bg-neutral-300 p-4 rounded">
			<Header currentHref="/use" />
			<div className="flex flex-col gap-2">
				<h2 className="text-lg font-semibold">Pourquoi utiliser use ?</h2>
				<div className="flex flex-col gap-1">
					<p>
						• <b>use</b> permet d'encapsuler un composant dans un{" "}
						<b>Suspense</b> pour avoir un fallback pendant le chargement.
					</p>
					<p>
						• Le composant peut être un composant <b>Client</b>, donc on peut
						gérer les interactions utilisateur et utiliser des hooks comme{" "}
						<b>useState</b>.
					</p>
					<p>
						• <span className="text-red-700">Aucune donnée n'est cachée</span> :
						chaque affichage ou rafraîchissement recharge la donnée (la date
						change à chaque fois).
					</p>
				</div>
			</div>
			<Suspense fallback={<Loading text="Chargement en cours..." />}>
				<DataWithUse dataPromise={dataPromise} />
			</Suspense>
		</div>
	);
}
