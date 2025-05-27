"use server";

import { fetchTodos } from "@/lib/api";
import { unstable_cache } from "next/cache";

// Cache avec tag
export const getTodosWithTagCache = unstable_cache(fetchTodos, ["todos-tag"], {
	tags: ["todos-tag-cache"],
});

// Action pour invalider le tag
import { revalidateTag } from "next/cache";

export async function invalidateTodosTag() {
	revalidateTag("todos-tag-cache");
}
