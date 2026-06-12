"use client";
import { motion } from "framer-motion";

const skills = [
  { name: "React.js", level: 90 },
  { name: "Next.js", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "MongoDB", level: 75 },
  { name: "Tailwind CSS", level: 85 },
];

export default function About() {
  return (
    <section
      id="about"
      className="max-w-6xl px-6 py-24 mx-auto shadow-lg bg-gray-50 dark:bg-gray-900 rounded-xl"
    >
      <h2 className="mb-12 text-3xl font-bold text-center text-gray-800 dark:text-gray-100">
        About Me
      </h2>

      <div className="flex flex-col items-center gap-10 md:flex-row md:items-start">
        {/* Profile Image */}
        

        {/* Text & Skills */}
        <div className="flex-1 space-y-6">
          {/* Paragraphs with scroll fade-in */}
          {[
              "Hi, I'm Mohammed Khan, a passionate Full-Stack MERN & Next.js Developer and the Founder of STACKRA TECHNOLOGIES.",
              "I specialize in building modern, scalable, and high-performance web applications that help businesses establish a strong digital presence.",
              "My expertise includes React.js, Next.js, Node.js, Express.js, MongoDB, JavaScript, HTML, CSS, and REST APIs.",
              "I enjoy transforming ideas into real-world digital products, from business websites and e-commerce platforms to AI-powered applications and custom software solutions.",
              "My focus is on writing clean, maintainable code and creating responsive user experiences across all devices.",
              "Through STACKRA TECHNOLOGIES, I aim to provide innovative solutions in:",
              "• Full-Stack Web Development",
              "• AI-Powered Applications",
              "• Custom Software Development",
              "• Business Websites",
              "• Cloud-Based Solutions",
              "• Mobile and Web App Development",
              "I am continuously learning new technologies and improving my skills to deliver modern, secure, and production-ready applications for startups, businesses, and entrepreneurs.",
              "My Mission:",
              "To build technology solutions that help businesses grow, innovate, and succeed in the digital world.",
              ].map((text, i) => (
            <motion.p
              key={i}
              className="leading-relaxed text-gray-600 dark:text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.3 }}
            >
              {text}
            </motion.p>
          ))}

          {/* Skill Bars */}
          <div className="mt-6 space-y-4">
            {skills.map((skill, i) => (
              <div key={skill.name}>
                <p className="mb-1 font-medium text-gray-800 dark:text-gray-100">
                  {skill.name}
                </p>
                <div className="w-full h-4 overflow-hidden bg-gray-300 rounded-full dark:bg-gray-700">
                  <motion.div
                    className="h-4 bg-blue-500 rounded-full dark:bg-blue-400"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.2 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <motion.div
            className="flex justify-center flex-1"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
         
            <img
              src="/profile/profile3.jpeg" // Put your image inside public/images/
              alt="Mohammed Khan"
              className="object-cover w-full max-w-md border-8 border-blue-500 shadow-2xl rounded-3xl"
            />
            <div className="flex flex-col items-center gap-10 md:flex-row md:items-start">
        {/* Profile Image */}
            <motion.div
            className="flex justify-end flex-1"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <img
              src="/experience/stackra.png" // Put your image inside public/images/
              alt="Mohammed Khan"
              className="object-cover w-full max-w-md border-8 border-blue-500 shadow-2xl rounded-3xl"
            />
           
          </motion.div>
          </div>
          </motion.div>
      </div>
      
     
    </section>
  );
}
