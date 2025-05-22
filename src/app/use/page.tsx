import Data from "@/components/Data";
import DataWithUse from "@/components/DataWithUse";
import Header from "@/components/Header";
import { getData } from "@/utils/getData";
import { tabs } from "@/utils/tabs";
import { Suspense } from "react";

export default async function Page() {
  const dataPromise = getData();

  return (
    <div className="flex flex-col gap-2 bg-neutral-300 p-4 rounded">
      <Header tabs={tabs} currentHref="/use" />
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
