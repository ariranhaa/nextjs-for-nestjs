"use client";
import clsx from "clsx";

export function Header() {
  console.log("Header");
  return (
    <h1
      className={clsx(
        "text-xl",
        "font-bold",
        "text-blue-500",
        "hover:text-black",
        "hover:bg-pink-400",
        "transition-1000"
      )}
      onClick={() => alert(123)}
    >
      Olá de dentro de page.tsx
    </h1>
  );
}
