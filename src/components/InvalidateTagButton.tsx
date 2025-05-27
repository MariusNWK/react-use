"use client";

import { invalidateTodosTag } from "@/app/tag-cache/actions";
import { useTransition } from "react";

export function InvalidateTagButton() {
	const [isPending, startTransition] = useTransition();

	return (
		<button
			type="button"
			className="px-2 py-1 text-white bg-red-600 rounded-md self-start mt-4"
			disabled={isPending}
			onClick={() => startTransition(() => invalidateTodosTag())}
		>
			{isPending
				? "Rafraîchissement..."
				: "Rafraîchir la donnée (invalidate tag)"}
		</button>
	);
}
