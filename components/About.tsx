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
      className="py-24 px-6 max-w-6xl mx-auto bg-gray-50 dark:bg-gray-900 rounded-xl shadow-lg"
    >
      <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-gray-100">
        About Me
      </h2>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Profile Image */}
        

        {/* Text & Skills */}
        <div className="flex-1 space-y-6">
          {/* Paragraphs with scroll fade-in */}
          {[
            "Hello, I’m Mohammed Khan, a Full Stack Developer and MCA student with a strong passion for building modern, scalable, and AI-powered web applications. I specialize in the MERN stack, Next.js, and integrating OpenAI APIs to create intelligent, high-performance digital solutions.",
            "I have hands-on experience designing and developing real-world applications, including AI-based food delivery platforms, learning management systems, and full-featured e-commerce solutions. I have worked end-to-end on projects—handling frontend architecture, backend APIs, database design, authentication, and deployment. My development approach emphasizes clean, maintainable code, responsive interfaces, and intuitive user experiences.",
            "My technical skill set includes React.js, Next.js, Node.js, MongoDB, Tailwind CSS, Git, GitHub, and AI integrations. I have successfully built and deployed multiple full-stack projects, implemented secure authentication systems, and integrated third-party APIs to enhance application functionality. I am a continuous learner who enjoys solving complex problems and building impactful products that deliver real value to users and businesses.",
          ].map((text, i) => (
            <motion.p
              key={i}
              className="text-gray-600 dark:text-gray-300 leading-relaxed"
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
                <p className="text-gray-800 dark:text-gray-100 font-medium mb-1">
                  {skill.name}
                </p>
                <div className="w-full h-4 bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    className="h-4 bg-blue-500 dark:bg-blue-400 rounded-full"
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
      </div>
    </section>
  );
}
