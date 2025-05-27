import DataWithTagCache from "@/components/DataWithTagCache";
import Header from "@/components/Header";
import { InvalidateTagButton } from "@/components/InvalidateTagButton";
import { Loading } from "@/components/Loading";
import { Suspense } from "react";

export default async function Page() {
	return (
		<div className="flex flex-col gap-2 bg-neutral-300 p-4 rounded">
			<Header currentHref="/tag-cache" />
			<div className="flex flex-col gap-2">
				<h2 className="text-lg font-semibold">Cache par tag + invalidation</h2>
				<p>
					• <b>unstable_cache</b> avec <b>tag</b> permet d'invalider le cache à
					la demande (ex: via un bouton ci-dessous).
				</p>
				<p>
					• La date affichée reste la même tant que le cache n'est pas invalidé.
					Cliquez sur le bouton pour rafraîchir la donnée (la date changera).
				</p>
			</div>
			<Suspense fallback={<Loading text="Chargement en cours..." />}>
				<DataWithTagCache />
			</Suspense>
			<InvalidateTagButton />
		</div>
	);
}
