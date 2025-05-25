"use client";

import { use, useState } from "react";

interface IDataWithUseProps {
	dataPromise: Promise<{ id: number; title: string }[]>;
}

const BORDEAUX = "#8c1900";
const PURPLE = "#5c2ce5";

export default function DataWithUse(props: IDataWithUseProps) {
	const data = use(props.dataPromise);

	const [bgColor, setBgColor] = useState(BORDEAUX);

	const onClick = () => {
		if (bgColor === BORDEAUX) {
			setBgColor(PURPLE);
		} else {
			setBgColor(BORDEAUX);
		}
	};

	return (
		<div className="flex flex-col gap-2">
			<p>↓ Cliquez sur le composant ↓</p>
			<ul className="flex flex-col bg-neutral-300 border border-black divide-y divide-black max-h-96 overflow-y-auto">
				{data.map((todo) => (
					<li
						key={todo.id}
						className="px-4 py-2 text-white"
						onClick={onClick}
						onKeyDown={(e) => {
							if (e.key === "Enter" || e.key === " ") {
								onClick();
							}
						}}
						style={{ background: bgColor }}
					>
						{todo.title}
					</li>
				))}
			</ul>
		</div>
	);
}
