import { getTodosWithUnstableCache } from "@/app/cache/actions";
import ListData from "./priv/ListData";

export default async function DataWithUnstableCache() {
	const data = await getTodosWithUnstableCache();

	return <ListData bgColor="#a0c000" data={data} title="Unstable cache" />;
}
