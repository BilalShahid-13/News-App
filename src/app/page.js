"use client";
import { useEffect } from "react";
import Latest from "./Latest/page";

export default function Home() {
  useEffect(() => {
    document.addEventListener("contextmenu", function (e) {
      e.preventDefault();
    });
  }, []);

  return <Latest />;
}
