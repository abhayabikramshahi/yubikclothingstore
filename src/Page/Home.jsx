import React from 'react';
import { motion } from 'framer-motion';

function Home() {
  return (
    <div className="bg-white min-h-screen font-serif flex flex-col items-center justify-center">

      {/* Hero Section */}
      <motion.section
        id="home"
        className="relative flex flex-col items-center justify-center text-gray-900 py-20 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        {/* Title */}
        <motion.h2
          className="text-5xl font-extrabold mb-4 text-center text-gray-900"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          Welcome to Yubik Clothing Store
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-xl mb-6 text-center text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Explore the latest trends in fashion and style. Unleash your adventure.
        </motion.p>

        {/* Buttons Section */}
        <motion.div
          className="flex space-x-6 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          {/* Shop Now Button */}
          <motion.a
            href="#shop"
            className="bg-indigo-600 text-white px-8 py-4 rounded-full text-2xl font-semibold shadow-lg hover:scale-105 transform transition-all duration-300 ease-out"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Shop Now
          </motion.a>

          {/* Explore Button */}
          <motion.a
            href="#explore"
            className="bg-transparent border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-full text-2xl font-semibold hover:bg-indigo-600 hover:text-white transition-all duration-300 ease-out"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore More
          </motion.a>
        </motion.div>
      </motion.section>

    </div>
  );
}

export default Home;
