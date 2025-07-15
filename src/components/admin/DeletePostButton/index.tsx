"use client";

import clsx from "clsx";
import { Trash2Icon } from "lucide-react";

type deletePostButtonProps = {
  id: string;
  title: string;
};

export function DeletePostButton({ id, title }: deletePostButtonProps) {
  function handleClick() {
    alert("Botão clicado " + id);
  }
  return (
    <button
      className={clsx(
        "text-red-500 cursor-pointer transition",
        "[&_svg]:w-4 [&_svg]:h-4",
        "hover:scale-125 hover:text-red-800"
      )}
      aria-label={`Apagar post: ${title}`}
      title={`Apagar post: ${title}`}
      onClick={handleClick}
    >
      <Trash2Icon />
    </button>
  );
}
