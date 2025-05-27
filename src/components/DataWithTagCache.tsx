import { getTodosWithTagCache } from "@/app/tag-cache/actions";
import ListData from "./priv/ListData";

export default async function DataWithTagCache() {
	const data = await getTodosWithTagCache();

	return <ListData bgColor="#028597" data={data} title="Cache par tag" />;
}
