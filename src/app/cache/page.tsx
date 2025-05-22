import Header from "@/components/Header";
import { getData } from "@/utils/getData";
import { tabs } from "@/utils/tabs";

export default async function Page() {
  return (
    <div className="flex flex-col gap-2 bg-neutral-300 p-4 rounded">
      <Header tabs={tabs} currentHref="/cache" />
      <h2>Cache</h2>
    </div>
  );
}
