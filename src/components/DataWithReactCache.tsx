import { getTodosWithReactCache } from "@/lib/api";

interface IDataWithReactCacheProps {
	bgColor: string;
	title: string;
}

export default async function DataWithReactCache(
	props: IDataWithReactCacheProps,
) {
	const data = await getTodosWithReactCache();

	return (
		<div className="flex flex-col gap-2 px-2 py-1 rounded border bg-neutral-500">
			<h2 className="text-white font-semibold">{props.title}</h2>
			<ul
				className="flex flex-col border divide-y max-h-48 overflow-y-auto"
				style={{ background: props.bgColor }}
			>
				{data.map((item) => (
					<li key={item.id} className="px-2 py-1">
						{item.title}
					</li>
				))}
			</ul>
		</div>
	);
}
