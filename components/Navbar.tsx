"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  
  useEffect(() => setMounted(true), []);

  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur border-b z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="font-bold text-xl text-gray-900 dark:text-white">Mohammed Khan</h1>
        <ul className="flex gap-6 text-sm font-medium text-gray-800 dark:text-gray-200">
          <li><a href="#about" className="hover:text-blue-600">About</a></li>
          <li><a href="#skills" className="hover:text-blue-600">Skills</a></li>
          <li><a href="#experience" className="hover:text-blue-600">Experience</a></li>
          <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
        </ul>
        {mounted && (
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="ml-4 px-3 py-2 border rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            

          </button>
        )}
      </div>
    </nav>
  );
}
