import DataWithUnstableCache from "@/components/DataWithUnstableCache";
import Header from "@/components/Header";
import { Loading } from "@/components/Loading";
import NewDataWithUnstableCache from "@/components/NewDataWithUnstableCache";
import { Suspense } from "react";
import { getTodosWithUnstableCache } from "../cache/actions";

export default async function Page() {
	return (
		<div className="flex flex-col gap-2 bg-neutral-300 p-4 rounded">
			<Header currentHref="/unstable-cache" />
			<div className="flex flex-col gap-2">
				<h2 className="text-lg font-semibold">
					Pourquoi utiliser unstable cache ?
				</h2>
				<div className="flex flex-col gap-1">
					<p>
						• <b>unstable_cache</b> de Next.js offre tous les avantages de{" "}
						<b>cache()</b> de React
					</p>
					<p>
						• <b>Persiste entre les pages</b> et entre les requêtes côté client
					</p>
					<p>
						• Permet la revalidation manuelle ou programmée (ex: via{" "}
						<b>revalidatePath</b> ou <b>revalidateTag</b>)
					</p>
					<p className="text-green-700">
						• La date affichée reste la même même après un refresh, tant que le
						cache n'est pas invalidé
					</p>
				</div>
			</div>
			<div className="flex flex-col gap-4">
				<Suspense fallback={<Loading text="Chargement en cours..." />}>
					<DataWithUnstableCache />
				</Suspense>

				<p>
					• Les données mises en cache persistent entre les composants serveur
					et client,
				</p>

				<NewDataWithUnstableCache onFetchData={getTodosWithUnstableCache} />
			</div>
		</div>
	);
}
