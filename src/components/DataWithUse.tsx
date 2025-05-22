"use client";

import { use } from "react";
import DataToManipulate from "./DataToManipulate";

interface IDataWithUseProps {
  dataPromise: Promise<{ id: number; title: string }[]>;
}

export default function DataWithUse(props: IDataWithUseProps) {
  const data = use(props.dataPromise);

  return (
    <ul className="flex flex-col bg-neutral-300 border border-black divide-y divide-black max-h-96 overflow-y-auto">
      <DataToManipulate data={data} />
    </ul>
  );
}
