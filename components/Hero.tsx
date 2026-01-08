"use client";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const roles = [
  "Full Stack Web Developer helping businesses and startups build modern, scalable, and high-performing web applications",
  "Experience building AI-powered, scalable web applications",
  "End-to-end development: frontend, backend, APIs, and deployment",
  "Specialized in MERN stack, Next.js, and OpenAI API integrations",
  "Passionate about clean code, responsive design, and intuitive UX",
];

export default function Hero() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (isPaused) return;

    timeoutRef.current = setTimeout(() => {
      if (charIndex < roles[roleIndex].length) {
        setText((prev) => prev + roles[roleIndex][charIndex]);
        setCharIndex(charIndex + 1);
      } else {
        setTimeout(() => {
          setText("");
          setCharIndex(0);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 2000);
      }
    }, 60);

    return () => clearTimeout(timeoutRef.current);
  }, [charIndex, roleIndex, isPaused]);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
      {/* Name */}
      <motion.h1
        className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white"
        initial={{ opacity: 0, y: -40, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Mohammed Khan
      </motion.h1>

      {/* Static Role */}
      <motion.p
        className="mt-4 text-xl md:text-2xl text-gray-700 dark:text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Full Stack Developer | MERN | Next.js | AI-Powered Apps
      </motion.p>

      {/* Typing Effect */}
      <motion.div
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="mt-6 h-14 flex items-center justify-center"
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ delay: 0.6 }}
      >
        <p
          className="text-lg md:text-2xl font-medium bg-gradient-to-r 
          from-purple-500 via-pink-500 to-indigo-500 
          bg-clip-text text-transparent animate-gradient"
        >
          {text}
          <span className="ml-1 animate-blink">|</span>
        </p>
      </motion.div>

      {/* Buttons */}
      <motion.div
        className="mt-10 flex gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <a
          href="#projects"
          className="px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition"
        >
          Contact Me
        </a>
      </motion.div>
    </section>
  );
}
