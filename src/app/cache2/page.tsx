import Header from "@/components/Header";
import { fetchData } from "@/utils/fetchData";
import { tabs } from "@/utils/tabs";

export default async function Page() {
  const data = await fetchData();

  return (
    <div className="flex flex-col gap-2 bg-neutral-300 p-4 rounded">
      <Header tabs={tabs} currentHref="/cache2" />
      <h2>Cache2</h2>
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
