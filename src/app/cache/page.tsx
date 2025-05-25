import DataWithReactCache from "@/components/DataWithReactCache";
import Header from "@/components/Header";

export default async function Page() {
	return (
		<div className="flex flex-col gap-2 bg-neutral-300 p-4 rounded">
			<Header currentHref="/cache" />
			<div className="flex flex-col gap-2">
				<h2 className="text-lg font-semibold">Pourquoi utiliser cache ?</h2>
				<div className="flex flex-col gap-1">
					<p>
						• cache de React est intéressant à utiliser dans le cas de requêtes
						coûteuses, qui ne changent pas souvent, appelées à de multiples
						reprises à différents endroits
					</p>
					<p>
						• cache() permet de mémoriser le résultat d’un appel identique pour
						ne pas refaire inutilement le traitement
					</p>
					<div className="flex flex-col">
						<p>
							• Exemple ici dans les composants Cache1 et Cache2 qui fetch la
							même requête en utilisant cache de React, donc il n'y a qu'une
							seule requête
						</p>
						<p className="text-sm text-neutral-700">avec cache : 1 requête</p>
						<p className="text-sm text-neutral-700">sans cache : 2 requêtes</p>
					</div>
				</div>
			</div>
			<div className="flex flex-col gap-4">
				<DataWithReactCache title="Cache1" bgColor="#ff5733" />
				<DataWithReactCache title="Cache2" bgColor="#8c1900" />
			</div>
		</div>
	);
}
