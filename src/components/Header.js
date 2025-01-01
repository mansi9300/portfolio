import React, { useState } from "react";
import { motion } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle mobile menu visibility
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 shadow-lg z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center text-white">
        {/* Logo */}
        <motion.div
          className="text-3xl font-extrabold text-white cursor-pointer"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          Mansi's Portfolio
        </motion.div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-12 text-lg font-semibold">
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer hover:text-yellow-400 transition-all duration-200"
          >
            <a href="#home">Home</a>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer hover:text-yellow-400 transition-all duration-200"
          >
            <a href="#about">About</a>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer hover:text-yellow-400 transition-all duration-200"
          >
            <a href="#projects">Projects</a>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer hover:text-yellow-400 transition-all duration-200"
          >
            <a href="#contact">Contact</a>
          </motion.li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            className="text-white text-3xl focus:outline-none"
            onClick={toggleMenu}
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          className="absolute top-16 left-0 w-full bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 p-6 flex flex-col items-center space-y-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.a
            href="#home"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="text-white text-xl font-semibold hover:text-yellow-400 transition-all duration-200"
          >
            Home
          </motion.a>
          <motion.a
            href="#about"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="text-white text-xl font-semibold hover:text-yellow-400 transition-all duration-200"
          >
            About
          </motion.a>
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="text-white text-xl font-semibold hover:text-yellow-400 transition-all duration-200"
          >
            Projects
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="text-white text-xl font-semibold hover:text-yellow-400 transition-all duration-200"
          >
            Contact
          </motion.a>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
