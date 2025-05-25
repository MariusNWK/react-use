import Header from "@/components/Header";

export default async function Page() {
	return (
		<div className="flex flex-col gap-2 bg-neutral-300 p-4 rounded">
			<Header currentHref="/" />
			<h2>Bienvenue</h2>
		</div>
	);
}
