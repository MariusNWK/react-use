export async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
    cache: "no-store",
  });
  const data: { id: number; title: string }[] = await response.json();
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return data;
}
