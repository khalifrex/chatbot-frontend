'use client';

import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-[85vh] px-6 bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 text-center transition">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600"
        >
          Meet Khalifrex AI
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mb-8"
        >
          Your personal AI assistant built with OpenAI & Next.js. Chat smart. No login required.
        </motion.p>

        <motion.a
          href="/chat"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="bg-blue-600 text-white px-8 py-3 rounded-full text-base font-medium shadow hover:bg-blue-700 transition"
        >
          Start Chatting
        </motion.a>
      </main>
    </>
  );
}
