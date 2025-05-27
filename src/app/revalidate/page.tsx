import DataWithRevalidate from "@/components/DataWithRevalidate";
import Header from "@/components/Header";
import { Loading } from "@/components/Loading";
import { Suspense } from "react";

export default async function Page() {
	return (
		<div className="flex flex-col gap-2 bg-neutral-300 p-4 rounded">
			<Header currentHref="/revalidate" />
			<div className="flex flex-col gap-2">
				<h2 className="text-lg font-semibold">Revalidate avec timer</h2>
				<p>
					• <b>unstable_cache</b> avec <b>revalidate</b> permet de rafraîchir
					automatiquement la donnée après un certain temps (ici 10s).
				</p>
				<p>
					• La date affichée reste la même tant que le cache n'est pas expiré.
					Après expiration, une nouvelle date apparaît.
				</p>
			</div>
			<Suspense fallback={<Loading text="Chargement en cours..." />}>
				<DataWithRevalidate />
			</Suspense>
			<details className="mt-4 bg-neutral-200 p-2 rounded text-sm">
				<summary className="cursor-pointer font-semibold">
					Explication sur <code>revalidate</code> de <code>unstable_cache</code>
				</summary>
				<p>
					L’option <b>revalidate</b> de <code>unstable_cache</code> permet de
					définir une durée (en secondes) pendant laquelle la donnée est
					considérée comme « fraîche » et servie depuis le cache.
					<br />
					Lors du premier appel, la fonction est exécutée et son résultat est
					mis en cache. Pendant <b>10 secondes</b>, toutes les requêtes
					suivantes reçoivent la même donnée (même date). Après 10 secondes, au
					prochain appel, Next.js régénère la donnée, met à jour le cache, et
					sert la nouvelle valeur.
					<br />
					C’est idéal pour des données qui doivent être à jour régulièrement,
					mais pas en temps réel.
				</p>
			</details>
		</div>
	);
}
