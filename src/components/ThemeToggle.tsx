"use client";

import { useEffect, useState } from "react";
import { FaRegMoon } from "react-icons/fa";
import { IoSunny } from "react-icons/io5";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");

      requestAnimationFrame(() => {
        setTheme("dark");
      });
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";

    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <button onClick={toggleTheme} className="mx-4 text-xl">
      {theme === "dark" ? <IoSunny /> : <FaRegMoon />}
    </button>
  );
}
