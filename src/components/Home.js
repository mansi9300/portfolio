import React from "react";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Home = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesLoaded = () => {};

  // Greeting Message Based on Time of Day
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    else if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  };

  return (
    <section
      id="home"
      className="relative flex flex-col justify-center items-center min-h-screen bg-white text-gray-800 transition-all duration-300 dark:bg-gray-900 dark:text-gray-200"
    >
      {/* Particle Animation */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: { color: "transparent" },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              resize: true,
            },
            modes: { repulse: { distance: 200, duration: 0.4 } },
          },
          particles: {
            color: { value: "#7F9CF5" },
            links: {
              color: "#7F9CF5",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: { enable: true, speed: 2 },
            number: { value: 50 },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 5 } },
          },
        }}
      />

      {/* Greeting and Introduction */}
      <motion.div
        className="text-center z-10 relative"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          {getGreeting()}, I'm{" "}
          <span className="bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent">
            Mansi Sahu
          </span>
        </h1>

        {/* Typewriter Effect */}
        <h2 className="text-xl md:text-3xl font-medium text-gray-600 dark:text-gray-400 mb-4">
          <Typewriter
            options={{
              strings: [
                "A Frontend Developer.",
                "A Passionate Problem Solver.",
                "A Creative Designer.",
                "An Ambitious Learner.",
                "A MERN developer"
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>
      </motion.div>

      {/* Call-to-Action Buttons */}
      <motion.div
        className="mt-8 flex space-x-6 z-10 relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <a
          href="#projects"
          className="bg-indigo-500 dark:bg-pink-500 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-indigo-500/50 dark:hover:shadow-pink-500/50 transform hover:scale-105 transition duration-300"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="border-2 border-indigo-500 dark:border-pink-500 text-indigo-500 dark:text-pink-500 px-6 py-3 rounded-lg hover:bg-indigo-500 hover:text-white dark:hover:bg-pink-500 dark:hover:text-white transition transform hover:scale-105"
        >
          Contact Me
        </a>
      </motion.div>

      {/* Social Media Links */}
      <div className="mt-8 flex space-x-4 z-10 relative">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-pink-500 transition"
        >
          <i className="fab fa-github text-2xl"></i>
        </a>
        <a
          href="https://linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-pink-500 transition"
        >
          <i className="fab fa-linkedin text-2xl"></i>
        </a>
        <a
          href="mailto:yourname@email.com"
          className="text-gray-600 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-pink-500 transition"
        >
          <i className="fas fa-envelope text-2xl"></i>
        </a>
      </div>

      {/* Subtle Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="w-72 h-72 bg-indigo-400 dark:bg-pink-400 rounded-full blur-3xl opacity-30 absolute top-10 left-10"
          animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        />
        <motion.div
          className="w-72 h-72 bg-indigo-400 dark:bg-pink-400 rounded-full blur-3xl opacity-30 absolute bottom-10 right-10"
          animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        />
      </div>
    </section>
  );
};

export default Home;
