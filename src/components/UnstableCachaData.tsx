import { getCachedData } from "@/utils/unstableCacheData";

export default async function UnstableCacheData() {
  const data = await getCachedData();

  return (
    <ul className="flex flex-col border divide-y max-h-96 overflow-y-auto">
      {data.map((item) => (
        <li key={item.id} className="px-2 py-1">
          {item.title}
        </li>
      ))}
    </ul>
  );
}
