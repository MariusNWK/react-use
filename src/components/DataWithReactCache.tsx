import { getTodosWithReactCache } from "@/app/cache/actions";
import ListData from "./priv/ListData";

interface IDataWithReactCacheProps {
	bgColor: string;
	title: string;
}

export default async function DataWithReactCache(
	props: IDataWithReactCacheProps,
) {
	const data = await getTodosWithReactCache();

	return <ListData title={props.title} bgColor={props.bgColor} data={data} />;
}
