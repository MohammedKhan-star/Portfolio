"use client";

import { experiences } from "@/data/experience";
import { motion } from "framer-motion";
import Image from "next/image";
export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-gray-100">Experience</h2>
      <div className="space-y-6">
        {experiences.map(exp => (
          <motion.div
            key={exp.role}
            className="border-l-4 border-blue-600 pl-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-16 h-16 mb-2 rounded-full overflow-hidden">
              <Image
                src={exp.logo}
                alt={exp.company}
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
              {exp.role} | {exp.company}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">{exp.duration}</p>
            <p className="mt-2 text-gray-800 dark:text-gray-100">{exp.details}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
