"use client";

import { motion } from "framer-motion";

const certificates = [
  {
    title: "Full Stack Web Development",
    issuer: "Professional Training",
    year: "2026",
    icon: "📜",
  },
  {
    title: "MERN Stack Development",
    issuer: "Professional Training",
    year: "2026",
    icon: "💻",
  },
  {
    title: "React & Next.js",
    issuer: "Professional Training",
    year: "2026",
    icon: "⚛️",
  },
  {
    title: "JavaScript Programming",
    issuer: "Professional Training",
    year: "2025",
    icon: "🚀",
  },
];

const achievements = [
  {
    title: "Founder of STACKRA TECHNOLOGIES",
    icon: "🏆",
  },
  {
    title: "Built Multiple Full Stack Projects",
    icon: "💼",
  },
  {
    title: "Created Computer Education YouTube Content",
    icon: "📺",
  },
  {
    title: "Pursuing Master of Computer Applications (MCA)",
    icon: "🎓",
  },
];

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="px-6 py-20 mx-auto max-w-7xl"
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-4xl font-bold text-center"
      >
        Certificates & Achievements
      </motion.h2>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Certificates */}
        <div>
          <h3 className="mb-6 text-2xl font-semibold">
            📜 Certificates
          </h3>

          <div className="space-y-5">
            {certificates.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                className="p-5 border shadow-lg rounded-2xl"
              >
                <h4 className="text-xl font-bold">
                  {item.icon} {item.title}
                </h4>
                <p className="text-gray-400">
                  {item.issuer}
                </p>
                <p className="text-sm text-gray-500">
                  {item.year}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h3 className="mb-6 text-2xl font-semibold">
            🏆 Achievements
          </h3>

          <div className="space-y-5">
            {achievements.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                className="p-5 border shadow-lg rounded-2xl"
              >
                <h4 className="text-xl font-bold">
                  {item.icon} {item.title}
                </h4>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}