"use server";

import { fetchTodos } from "@/lib/api";
import { unstable_cache } from "next/cache";

// Cache avec revalidate de 10 secondes
export const getTodosWithRevalidate = unstable_cache(
	fetchTodos,
	["todos-revalidate"],
	{
		revalidate: 10,
	},
);
