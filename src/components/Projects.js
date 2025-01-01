import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLink } from "react-icons/fa"; // Importing GitHub and Link icons

const projects = [
  {
    title: "MoneyMap",
    description: "A responsive expense tracking app built with React and Tailwind CSS.",
    link: "https://moneymap-three.vercel.app/", // Replace with actual link
    github: "https://github.com/mansi9300/moneymap.git", // Replace with GitHub link
  },
  {
    title: "Lumina News Time",
    description: "A news aggregation platform using React and APIs.",
    link: "#", // Replace with actual link
    github: "https://github.com/mansi9300/lumina.git", // Replace with GitHub link
  },
  {
    title: "Crime Anomaly Detection",
    description: "A YOLO-based system for crime anomaly detection.",
    link: "#", // Replace with actual link
    github: "https://github.com/mansi9300/active--alert.git", // Replace with GitHub link
  },
  {
    title: "GrowGuide",
    description: "A platform to help users manage and track the growth of their plants, built using React and MongoDB.",
    link: "https://grow-five.vercel.app/", // Replace with actual link
    github: "https://github.com/mansi9300/grow.git", // Replace with GitHub link
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-500 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-extrabold text-center mb-12 text-indigo-200">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-teal-400 via-green-400 to-blue-500 text-white rounded-xl shadow-lg hover:shadow-2xl p-6 transition-all transform hover:scale-105"
            >
              <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
              <p className="text-gray-200 mb-6">{project.description}</p>
              <div className="flex justify-between items-center">
                <a
                  href={project.link}
                  className="text-white hover:text-indigo-100 flex items-center gap-2 transition-colors"
                >
                  <FaLink size={20} /> <span>View Project</span>
                </a>
                <a
                  href={project.github}
                  className="text-gray-200 hover:text-gray-100 flex items-center gap-2 transition-colors"
                >
                  <FaGithub size={20} /> <span>GitHub</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
