import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from "react-icons/fa"; // Adding more icons

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 1 }}
      className="bg-black text-white py-8"
    >
      <div className="max-w-7xl mx-auto text-center px-6">
        <p className="text-lg font-medium">© 2024 Mansi Sahu. All Rights Reserved.</p>
        
        <div className="mt-4 flex justify-center gap-8 text-2xl">
          {/* Social and Contact Links */}
          <a
            href="mailto:mansi@example.com" // Replace with your email
            className="text-white hover:text-indigo-400 transition duration-300 ease-in-out"
            title="Email"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/mansi9300"
            className="text-white hover:text-indigo-400 transition duration-300 ease-in-out"
            title="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/mansi-sahu-352967266/"
            className="text-white hover:text-indigo-400 transition duration-300 ease-in-out"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/mansi9300" // Replace with your Twitter handle
            className="text-white hover:text-indigo-400 transition duration-300 ease-in-out"
            title="Twitter"
          >
            <FaTwitter />
          </a>
        </div>

        <p className="mt-4 text-sm font-light">
          Made with ❤️ by Mansi Sahu
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
