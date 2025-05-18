"use client";

import { useState } from "react";

interface IDataToManipulateProps {
  data: { id: number; title: string }[];
}

export default function DataToManipulate(props: IDataToManipulateProps) {
  const [bgColor, setBgColor] = useState("#ff5733");

  const onClick = () => {
    if (bgColor === "#ff5733") {
      setBgColor("#5c2ce5");
    } else {
      setBgColor("#ff5733");
    }
  };

  return props.data.map((todo) => (
    <li
      key={todo.id}
      className="px-4 py-2 text-white"
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          onClick();
        }
      }}
      style={{ background: bgColor }}
    >
      {todo.title}
    </li>
  ));
}
