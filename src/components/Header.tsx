import classNames from "classnames";
import Link from "next/link";

interface IHeaderProps {
  tabs: { href: string; title: string }[];
  currentHref: string;
}

export default function Header(props: IHeaderProps) {
  return (
    <div className="flex gap-1">
      {props.tabs.map((tab) => (
        <Link
          key={tab.href}
          href={tab.href}
          className={classNames(
            "px-2 py-1 rounded border",
            tab.href === props.currentHref
              ? "border-neutral-400 bg-neutral-400"
              : "border-blue-900 bg-blue-400"
          )}
        >
          {tab.title}
        </Link>
      ))}
    </div>
  );
}
