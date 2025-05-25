import Header from "@/components/Header";
import { getTodosWithUnstableCache } from "@/lib/api";

export default async function Page() {
	const data = await getTodosWithUnstableCache();

	return (
		<div className="flex flex-col gap-2 bg-neutral-300 p-4 rounded">
			<Header currentHref="/unstable-cache" />
			<div className="flex flex-col gap-2">
				<h2 className="text-lg font-semibold">
					Pourquoi utiliser unstable cache ?
				</h2>
				<div className="flex flex-col gap-1">
					<p>
						• TODO (fonctionne entre les pages + met à jour la data stockée dans
						le cache)
					</p>
				</div>
			</div>
			<ul className="flex flex-col border divide-y max-h-96 overflow-y-auto">
				{data.map((item) => (
					<li key={item.id} className="px-2 py-1">
						{item.title}
					</li>
				))}
			</ul>
		</div>
	);
}
