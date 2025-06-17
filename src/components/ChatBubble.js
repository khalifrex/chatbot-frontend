import { motion } from 'framer-motion';

export default function ChatBubble({ message, isUser }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex ${isUser ? 'justify-end' : 'justify-start'} px-2`}
    >
      <div
        className={`max-w-[75%] px-4 py-2 rounded-2xl text-sm leading-relaxed shadow-sm whitespace-pre-wrap ${
          isUser
            ? 'bg-blue-600 text-white'
            : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-white'
        }`}
      >
        {message}
      </div>
    </motion.div>
  );
}
