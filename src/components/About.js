import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare } from "react-icons/fa";
import Particles from "react-tsparticles";

const About = () => {
  return (
    <section
      id="about"
      className="relative p-10 bg-gray-900 text-white rounded-lg shadow-2xl overflow-hidden"
    >
      {/* Particle Background */}
      <div className="absolute inset-0 pointer-events-none">
        <Particles
          options={{
            background: { color: "transparent" },
            particles: {
              number: { value: 60 },
              color: { value: "#ffffff" },
              shape: { type: "circle" },
              opacity: { value: 0.5 },
              size: { value: 2 },
              move: { speed: 2, direction: "none", outMode: "bounce" },
            },
          }}
        />
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Avatar Section */}
        <div className="flex justify-center mb-8">
          <motion.img
            src="https://media.licdn.com/dms/image/v2/D5603AQE8ly3L33QEXA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1730831812800?e=1740009600&v=beta&t=CnLhVPQq770DG10iu1rVSvTeAwcvvOwrcTFbpyCUTew" // Replace with your image URL
            alt="Your Avatar"
            className="w-44 h-44 rounded-full object-cover border-4 border-indigo-500 shadow-lg hover:scale-110 transition-transform duration-300"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
          />
        </div>

        {/* Heading */}
        <h2 className="text-5xl font-extrabold text-center mb-6 bg-gradient-to-r from-indigo-400 to-pink-500 bg-clip-text text-transparent">
          About Me
        </h2>

        {/* Description */}
        <p className="text-lg text-gray-300 leading-relaxed text-center mb-8">
          I’m a <span className="font-semibold">Computer Science student</span>{" "}
          at Oriental Institute Of Science and Technology. Passionate about{" "}
          <span className="font-semibold">frontend development</span>, I craft
          modern, interactive, and user-friendly web experiences using{" "}
          <span className="font-semibold">React</span> and{" "}
          <span className="font-semibold">Tailwind CSS</span>.
        </p>

        {/* Technologies Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <motion.div
            whileHover={{ scale: 1.2, rotate: 5 }}
            className="p-5 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 shadow-lg text-white flex flex-col items-center justify-center"
          >
            <FaReact size={50} />
            <p className="mt-2 font-semibold">React</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.2, rotate: -5 }}
            className="p-5 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 shadow-lg text-white flex flex-col items-center justify-center"
          >
            <FaHtml5 size={50} />
            <p className="mt-2 font-semibold">HTML5</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.2, rotate: 5 }}
            className="p-5 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg text-white flex flex-col items-center justify-center"
          >
            <FaCss3Alt size={50} />
            <p className="mt-2 font-semibold">CSS3</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.2, rotate: -5 }}
            className="p-5 rounded-lg bg-gradient-to-r from-yellow-500 to-orange-500 shadow-lg text-white flex flex-col items-center justify-center"
          >
            <FaJsSquare size={50} />
            <p className="mt-2 font-semibold">JavaScript</p>
          </motion.div>
        </div>

        {/* Skill Progress Bars */}
        <div className="space-y-4 mb-8">
          <h3 className="text-2xl font-semibold text-center mb-4">
            My Skills Progress
          </h3>
          <div className="space-y-4">
            {[
              { skill: "React", percentage: 85 },
              { skill: "HTML5", percentage: 95 },
              { skill: "CSS3", percentage: 90 },
              { skill: "JavaScript", percentage: 80 },
            ].map((item, index) => (
              <div key={index}>
                <p className="font-medium">{item.skill}</p>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <motion.div
                    className="bg-gradient-to-r from-indigo-500 to-purple-500 h-3 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${item.percentage}%` }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                  ></motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Personal Note */}
        <p className="text-lg text-gray-300 leading-relaxed text-center">
          I believe in constant learning, improving, and pushing boundaries.
          Let’s build amazing web experiences that make an impact!
        </p>
      </motion.div>
    </section>
  );
};

export default About;
