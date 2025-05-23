import Header from "@/components/Header";
import { tabs } from "@/utils/tabs";

export default async function Page() {
  return (
    <div className="flex flex-col gap-2 bg-neutral-300 p-4 rounded">
      <Header tabs={tabs} currentHref="/" />
      <h2>Bienvenue</h2>
    </div>
  );
}
