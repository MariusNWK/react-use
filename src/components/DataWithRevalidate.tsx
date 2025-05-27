import { getTodosWithRevalidate } from "@/app/revalidate/actions";
import ListData from "./priv/ListData";

export default async function DataWithRevalidate() {
	const data = await getTodosWithRevalidate();
	return <ListData bgColor="#a0c000" data={data} title="Revalidate (10s)" />;
}
