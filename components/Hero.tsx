"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { Github, Download, Mail, Linkedin } from "lucide-react";

const roles = [
  "Full Stack Web Developer helping businesses and startups build modern, scalable, and high-performing web applications",
  "Experience building AI-powered, scalable web applications",
  "End-to-end development: frontend, backend, APIs, and deployment",
  "Specialized in MERN stack, Next.js, and OpenAI API integrations",
  "Passionate about clean code, responsive design, and intuitive UX",
  "I can build, deploy, and maintain real production applications.",
];

export default function Hero() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isPaused) return;

    timeoutRef.current = setTimeout(() => {
      if (charIndex < roles[roleIndex].length) {
        setText((prev) => prev + roles[roleIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      } else {
        setTimeout(() => {
          setText("");
          setCharIndex(0);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 2000);
      }
    }, 55);

    return () => timeoutRef.current && clearTimeout(timeoutRef.current);
  }, [charIndex, roleIndex, isPaused]);

  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
      {/* Profile */}
      <motion.img
        src="/profile/profile3.jpeg"
        alt="Mohammed Khan"
        className="object-cover w-40 h-40 border-4 border-blue-500 rounded-full shadow-lg md:w-48 md:h-48"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      />

      {/* Name */}
     {/* Name */}
<motion.h1
  className="mt-6 text-4xl tracking-wide text-transparent font-extra-italic md:text-6xl lg:text-7xl bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 bg-clip-text drop-shadow-lg"
  initial={{ opacity: 0, y: -40, filter: "blur(8px)" }}
  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
  transition={{ duration: 0.8 }}
>
  Mohammed Khan
</motion.h1>

      {/* Role */}
      <motion.p
        className="mt-4 text-lg text-gray-600 md:text-2xl dark:text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
       Software Engineer | Full Stack Developer | MERN | Next.js | AI-Powered Apps
      </motion.p>
      <motion.p
        className="mt-4 text-lg text-gray-600 md:text-2xl dark:text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
       Founder of STACKRA TECHNOLOGIES Software Web & AI Solutions
      </motion.p>

      {/* Typing */}
      <motion.div
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="flex items-center justify-center h-16 mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <p className="text-base font-medium text-transparent md:text-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 bg-clip-text">
          {text}
          <span className="ml-1 animate-blink">|</span>
        </p>
      </motion.div>

      {/* 🔥 MOBILE CTA (ONLY 2) */}
      <div className="flex gap-3 mt-10 md:hidden">
        <a
          href="#projects"
          className="px-5 py-3 text-sm font-semibold text-white bg-black rounded-xl"
        >
          View Projects
        </a>

        <a
          href="https://services-site-project.vercel.app/"
          className="px-5 py-3 text-sm font-semibold border rounded-xl"
        >
          My Service
        </a>
      </div>

      {/* 💻 DESKTOP CTA (ALL) */}
      <motion.div
        className="flex-wrap justify-center hidden gap-4 mt-10 md:flex"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
      >
        <a
          href="#projects"
          className="px-6 py-3 text-white transition bg-black rounded-xl hover:bg-gray-800"
        >
          View Projects
        </a>

        <a
          href="https://services-site-project.vercel.app/"
          className="flex items-center gap-2 px-6 py-3 border rounded-xl"
        >
          <Mail size={18} /> My Service
        </a>

        <a
          href="https://github.com/MohammedKhan-star"
          target="_blank"
          className="flex items-center gap-2 px-6 py-3 border rounded-xl"
        >
          <Github size={18} /> GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/mohammed-khan-7905a621a/"
          target="_blank"
          className="flex items-center gap-2 px-6 py-3 border rounded-xl"
        >
          <Linkedin size={18} /> LinkedIn
        </a>

        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=mohammedkhan20019@gmail.com"
          target="_blank"
          className="flex items-center gap-2 px-6 py-3 border rounded-xl"
        >
          <Mail size={18} />G-Mail
        </a>

        <a
          href="/resume.pdf"
          download
          className="flex items-center gap-2 px-6 py-3 border rounded-xl"
        >
          <Download size={18} /> Resume
        </a>
      </motion.div>
    </section>
  );
}
