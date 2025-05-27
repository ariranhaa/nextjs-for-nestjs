import clsx from "clsx";
import Link from "next/link";

type PostHeadingPros = {
  children: React.ReactNode;
  url: string;
  as?: "h1" | "h2";
};

export function PostHeading({
  children,
  url,
  as: Tag = "h2",
}: PostHeadingPros) {
  const headingClassesMap = {
    h1: "text-2xl/tight sm:text4xl font-extrabold",
    h2: "text-2xl/tight font-bold",
  };

  const commonClasses = "";

  return (
    <Tag className={clsx(headingClassesMap[Tag], commonClasses)}>
      <Link
        className="hover:text-slate-600 dark:hover:text-slate-300"
        href={url}
      >
        {children}
      </Link>
    </Tag>
  );
}
