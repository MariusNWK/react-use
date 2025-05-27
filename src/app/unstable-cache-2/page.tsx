import DataWithUnstableCache from "@/components/DataWithUnstableCache";
import Header from "@/components/Header";
import { Loading } from "@/components/Loading";
import NewDataWithUnstableCache from "@/components/NewDataWithUnstableCache";
import { Suspense } from "react";
import { getTodosWithUnstableCache } from "../cache/actions";

export default async function Page() {
	return (
		<div className="flex flex-col gap-2 bg-neutral-300 p-4 rounded">
			<Header currentHref="/unstable-cache-2" />
			<div className="flex flex-col gap-2">
				<h2 className="text-lg font-semibold">
					Pourquoi utiliser unstable cache ?
				</h2>
				<div className="flex flex-col gap-1">
					<p>• tous les avantages de cache() de React</p>
					<p>• fonctionne entre les pages</p>
					<p>• la data peut également être revalidé grâce à revalidatePath</p>
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
