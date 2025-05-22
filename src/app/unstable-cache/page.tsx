import Header from "@/components/Header";
import UnstableCacheData from "@/components/UnstableCachaData";
import { tabs } from "@/utils/tabs";
import { Suspense } from "react";

export default async function Page() {
  return (
    <div className="flex flex-col gap-2 bg-neutral-300 p-4 rounded">
      <Header tabs={tabs} currentHref="/unstable-cache" />
      <h2>Unstable cache</h2>
      <Suspense fallback={<div>Chargement...</div>}>
        <UnstableCacheData />
      </Suspense>
    </div>
  );
}
