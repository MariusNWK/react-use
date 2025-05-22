import { unstable_cache } from "next/cache";

export async function unstableCacheData(): Promise<
  { id: number; title: string }[]
> {
  console.log("🔄 Fetching data from API...");
  const res = await fetch("https://jsonplaceholder.typicode.com/todos", {
    next: { revalidate: 10 },
  });
  const data: { id: number; title: string }[] = await res.json();

  if (!res.ok) {
    throw new Error("Échec du chargement");
  }

  return data;
}

export const getCachedData = unstable_cache(
  unstableCacheData,
  ["data"], // cache key
  { revalidate: 10 } // revalidation après 10s
);
