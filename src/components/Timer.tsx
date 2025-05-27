"use client";

import { useEffect, useState } from "react";

export default function Timer() {
	const [seconds, setSeconds] = useState(10);

	useEffect(() => {
		const interval = setInterval(() => {
			setSeconds((s) => (s <= 1 ? 10 : s - 1));
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="text-xs text-neutral-700">
			Prochaine revalidation dans : <b>{seconds}s</b>
		</div>
	);
}
