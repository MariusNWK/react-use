import type { DataFetchingOptions, Todo } from "@/types";

const API_URL = "https://jsonplaceholder.typicode.com/todos";

export async function fetchTodos(
	options: DataFetchingOptions = {},
): Promise<Todo[]> {
	console.log("🔄 Fetching data from API...");
	const res = await fetch(API_URL, {
		next: {
			revalidate: options.revalidate,
			tags: options.tags,
		},
		cache: options.cache,
	});

	await new Promise((resolve) => setTimeout(resolve, 2000));

	if (!res.ok) {
		throw new Error("Failed to fetch todos");
	}

	return res.json();
}

// No cache (for fresh data)
export const getTodosWithoutCache = (options: DataFetchingOptions = {}) =>
	fetchTodos({ ...options, cache: "no-store" });

// Default cache (for static data)
export const getTodosWithDefaultCache = (options: DataFetchingOptions = {}) =>
	fetchTodos({ ...options, cache: "force-cache" });
