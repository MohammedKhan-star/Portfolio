"use client";
import { education, certifications } from "@/data/education";
import { motion } from "framer-motion";
import Image from "next/image";
export default function Education() {
  return (
    <section
      id="education"
      className="py-24 px-6 max-w-6xl mx-auto bg-gray-50 dark:bg-gray-900 rounded-xl shadow-lg"
    >
      <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-gray-100">
        Education & Certifications
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Education */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-100">
            Education
          </h3>
          <div className="space-y-6">
            {education.map((edu, i) => (
              
              
              <motion.div
                key={edu.degree}
                className="border-l-4 border-blue-500 pl-4"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
              >
                <div className="relative w-16 h-16 mb-2 rounded-full overflow-hidden">
                    <Image
                      src={edu.logo}
                      alt={edu.institute}
                      fill
                      className="object-contain"
                    />
                  </div>
                <h4 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {edu.degree} | {edu.institute}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">{edu.duration}</p>
                <p className="mt-2 text-gray-800 dark:text-gray-100">{edu.details}</p>
              </motion.div>
              
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-100">
            Certifications
          </h3>
          <div className="space-y-6">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.title}
                className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
              >
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                  {cert.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  {cert.issuer} | {cert.year}
                </p>
                {cert.link !== "#" && (
                  <a
                    href={cert.link}
                    target="_blank"
                    className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
                  >
                    View Certificate →
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
