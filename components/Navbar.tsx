"use client";

import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navItems = [
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Services",
    href: "#services",
  },
  {
    name: "Work",
    href: "#projects",
  },
  {
    name: "Journey",
    href: "#experience",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <nav
          className="
            flex min-h-[68px] items-center justify-between
            rounded-2xl
            border border-black/10
            bg-white/90
            px-4
            shadow-lg shadow-black/5
            backdrop-blur-xl
            dark:border-white/10
            dark:bg-black/85
            sm:px-6
          "
        >
          {/* Brand */}
          <a
            href="#home"
            onClick={closeMenu}
            className="group flex items-center gap-3"
          >
            {/* Logo Mark */}
            <div
              className="
                flex h-10 w-10 shrink-0
                items-center justify-center
                rounded-xl
                bg-black
                text-sm font-bold
                tracking-tight
                text-white
                transition-transform
                group-hover:scale-105
                dark:bg-white
                dark:text-black
              "
            >
              MK
            </div>

            {/* Brand Text */}
            <div className="hidden sm:block">
              <div className="text-sm font-bold tracking-tight text-gray-950 dark:text-white">
                MOHAMMED KHAN
              </div>

              <div className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400">
                Founder · STACKRA TECHNOLOGIES
              </div>
            </div>

            {/* Mobile Brand */}
            <div className="sm:hidden">
              <div className="text-sm font-bold tracking-tight text-gray-950 dark:text-white">
                MOHAMMED KHAN
              </div>

              <div className="text-[9px] font-medium uppercase tracking-[0.12em] text-gray-500 dark:text-gray-400">
                Founder · STACKRA
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="
                  rounded-lg
                  px-3.5 py-2
                  text-sm font-medium
                  text-gray-600
                  transition-colors
                  hover:bg-black/5
                  hover:text-black
                  dark:text-gray-300
                  dark:hover:bg-white/10
                  dark:hover:text-white
                "
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-2 lg:flex">
            {/* STACKRA */}
            <a
              href="https://stackratechnologies.com"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                inline-flex items-center gap-1
                rounded-lg
                px-3 py-2
                text-sm font-semibold
                text-gray-700
                transition-colors
                hover:text-black
                dark:text-gray-300
                dark:hover:text-white
              "
            >
              STACKRA

              <ArrowUpRight
                size={14}
                className="
                  transition-transform
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />
            </a>

            {/* Academy */}
            <a
              href="https://stackratechnologies.com/academy"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                inline-flex items-center gap-1
                rounded-lg
                px-3 py-2
                text-sm font-semibold
                text-gray-700
                transition-colors
                hover:text-black
                dark:text-gray-300
                dark:hover:text-white
              "
            >
              Academy

              <ArrowUpRight
                size={14}
                className="
                  transition-transform
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />
            </a>

            {/* CTA */}
            <a
              href="#contact"
              className="
                inline-flex items-center gap-2
                rounded-xl
                bg-black
                px-4 py-2.5
                text-sm font-semibold
                text-white
                shadow-sm
                transition-all
                hover:-translate-y-0.5
                hover:shadow-lg
                dark:bg-white
                dark:text-black
              "
            >
              Start a Project
              <ArrowUpRight size={15} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
            className="
              rounded-xl
              p-2
              text-gray-900
              transition-colors
              hover:bg-black/5
              dark:text-white
              dark:hover:bg-white/10
              lg:hidden
            "
          >
            {isOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            className="
              mt-2
              overflow-hidden
              rounded-2xl
              border border-black/10
              bg-white/95
              p-3
              shadow-xl
              backdrop-blur-xl
              dark:border-white/10
              dark:bg-black/95
              lg:hidden
            "
          >
            {/* Navigation */}
            <div className="space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={closeMenu}
                  className="
                    block
                    rounded-xl
                    px-4 py-3
                    text-sm font-medium
                    text-gray-700
                    transition-colors
                    hover:bg-black/5
                    hover:text-black
                    dark:text-gray-300
                    dark:hover:bg-white/10
                    dark:hover:text-white
                  "
                >
                  {item.name}
                </a>
              ))}
            </div>

            <div className="my-3 h-px bg-black/10 dark:bg-white/10" />

            {/* STACKRA */}
            <a
              href="https://stackratechnologies.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="
                flex items-center justify-between
                rounded-xl
                px-4 py-3
                text-sm font-semibold
                text-gray-800
                dark:text-white
              "
            >
              STACKRA TECHNOLOGIES
              <ArrowUpRight size={17} />
            </a>

            {/* Academy */}
            <a
              href="https://stackratechnologies.com/academy"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="
                flex items-center justify-between
                rounded-xl
                px-4 py-3
                text-sm font-semibold
                text-gray-800
                dark:text-white
              "
            >
              STACKRA Academy
              <ArrowUpRight size={17} />
            </a>

            {/* Mobile CTA */}
            <a
              href="#contact"
              onClick={closeMenu}
              className="
                mt-2
                flex items-center justify-center gap-2
                rounded-xl
                bg-black
                px-4 py-3
                text-sm font-semibold
                text-white
                dark:bg-white
                dark:text-black
              "
            >
              Start a Project
              <ArrowUpRight size={17} />
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
