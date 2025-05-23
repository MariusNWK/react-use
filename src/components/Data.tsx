import DataToManipulate from "./DataToManipulate";
import { getData } from "../utils/getData";

export default async function Data() {
  const data = await getData();

  return (
    <ul className="flex flex-col bg-neutral-300 border border-black divide-y divide-black max-h-96 overflow-y-auto">
      <DataToManipulate data={data} />
    </ul>
  );
}
