"use client";

import classNames from "classnames";
import { Loader2 } from "lucide-react";

interface LoadingProps {
	text: string;
	className?: string;
}

export function Loading({ text, className }: LoadingProps) {
	return (
		<div
			className={classNames(
				"flex flex-col items-center justify-center gap-2 self-start px-4 py-2 border rounded",
				className,
			)}
		>
			<Loader2 className="h-10 w-10 animate-spin text-primary" />
			<p>{text}</p>
		</div>
	);
}
