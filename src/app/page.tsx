import Data from "@/Data";
import DataWithUse from "@/DataWithUse";
import { getData } from "@/utils/getData";
import { Suspense } from "react";

export default async function Home() {
  const dataPromise = getData();

  return (
    <div className="flex flex-col gap-2 bg-neutral-300 p-4 rounded">
      <h2>Bienvenue</h2>
      <div className="grid grid-cols-2">
        <Suspense fallback={<div>Chargement...</div>}>
          <Data />
        </Suspense>
        <Suspense fallback={<div>avec use...</div>}>
          <DataWithUse dataPromise={dataPromise} />
        </Suspense>
      </div>
    </div>
  );
}
