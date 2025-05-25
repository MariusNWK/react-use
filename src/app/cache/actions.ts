"use server";

import { fetchTodos } from "@/lib/api";
import { unstable_cache } from "next/cache";
import { cache } from "react";

// React cache (for request deduplication)
export const getTodosWithReactCache = cache(fetchTodos);

// Unstable cache (for more granular control)
export const getTodosWithUnstableCache = unstable_cache(fetchTodos, ["todos"], {
	revalidate: 1000, // Cache for 1000 seconds
});
