"use client";

import type { Todo } from "@/types";
import { useState } from "react";
import { Loading } from "./Loading";
import ListData from "./priv/ListData";

interface INewDataWithUnstableCache {
	onFetchData: () => Promise<Todo[]>;
}

export default function NewDataWithUnstableCache(
	props: INewDataWithUnstableCache,
) {
	const [data, setData] = useState<Todo[]>([]);
	const [isLoading, setIsLoading] = useState(false);

	const onClick = async () => {
		setIsLoading(true);

		const newData = await props.onFetchData();

		setData(newData);
		setIsLoading(false);
	};

	if (isLoading) {
		return <Loading text="Chargement des données en cours..." />;
	}

	if (data.length > 0) {
		return <ListData data={data} title="New" bgColor="#028597" />;
	}

	return (
		<button
			type="button"
			className="px-2 py-1 text-white bg-neutral-600 rounded-md self-start"
			onClick={onClick}
		>
			Récupérer les données
		</button>
	);
}
