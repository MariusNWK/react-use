import DataWithUse from "@/components/DataWithUse";
import Header from "@/components/Header";
import { Loading } from "@/components/Loading";
import { getTodosWithoutCache } from "@/lib/api";
import { Suspense } from "react";

export default async function Page() {
	const dataPromise = getTodosWithoutCache();

	return (
		<div className="flex flex-col gap-2 bg-neutral-300 p-4 rounded">
			<Header currentHref="/use" />
			<div className="flex flex-col gap-2">
				<h2 className="text-lg font-semibold">Pourquoi utiliser use ?</h2>
				<div className="flex flex-col gap-1">
					<p>
						• use permet à la fois de pouvoir encapsuler un composant dans un
						Suspense permettant d'avoir un fallback le temps du chargement
					</p>
					<p>
						• mais aussi que ce composant encapsulé soit un composant Client,
						donc un composant où on va pouvoir gérer les intéractions utiliseurs
						et utiliser des hooks comme useState
					</p>
				</div>
			</div>
			<Suspense
				fallback={
					<Loading
						text="Chargement en cours..."
						className="self-start px-4 py-2 border rounded"
					/>
				}
			>
				<DataWithUse dataPromise={dataPromise} />
			</Suspense>
		</div>
	);
}
