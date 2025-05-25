import type { DataFetchingOptions, Todo } from "@/types";
import { unstable_cache } from "next/cache";
import { cache } from "react";

const API_URL = "https://jsonplaceholder.typicode.com/todos";

async function fetchTodos(
	options: DataFetchingOptions = {},
	delay = 0,
): Promise<Todo[]> {
	console.log("🔄 Fetching data from API...");
	const res = await fetch(API_URL, {
		next: {
			revalidate: options.revalidate,
			tags: options.tags,
		},
		cache: options.cache,
	});

	await new Promise((resolve) => setTimeout(resolve, delay));

	if (!res.ok) {
		throw new Error("Failed to fetch todos");
	}

	return res.json();
}

// React cache (for request deduplication)
export const getTodosWithReactCache = cache(fetchTodos);

// Unstable cache (for more granular control)
export const getTodosWithUnstableCache = unstable_cache(fetchTodos, ["todos"], {
	revalidate: 10,
});

// No cache (for fresh data)
export const getTodosWithoutCache = (options: DataFetchingOptions = {}) =>
	fetchTodos({ ...options, cache: "no-store" }, 5000);

// Default cache (for static data)
export const getTodosWithDefaultCache = (options: DataFetchingOptions = {}) =>
	fetchTodos({ ...options, cache: "force-cache" });
