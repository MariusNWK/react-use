import classNames from "classnames";
import Link from "next/link";

const tabs = [
	{
		href: "/",
		title: "Home",
	},
	{
		href: "/use",
		title: "Use",
	},
	{
		href: "/cache",
		title: "Cache",
	},
	{
		href: "/unstable-cache",
		title: "Unstable Cache",
	},
];

interface IHeaderProps {
	currentHref: string;
}

export default function Header(props: IHeaderProps) {
	return (
		<div className="flex gap-1 mb-4">
			{tabs.map((tab) => (
				<Link
					key={tab.href}
					href={tab.href}
					className={classNames(
						"px-2 py-1 rounded border",
						tab.href === props.currentHref
							? "border-neutral-400 bg-neutral-400"
							: "border-blue-900 bg-blue-400",
					)}
				>
					{tab.title}
				</Link>
			))}
		</div>
	);
}
