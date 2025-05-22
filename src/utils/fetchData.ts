import { cache } from "react";

export const fetchData = cache(async () => {
  console.log("🔄 Fetching data from API...");
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");

  if (!res.ok) {
    throw new Error("Échec du chargement");
  }
  const data: { id: number; title: string }[] = await res.json();
  return data;
});
