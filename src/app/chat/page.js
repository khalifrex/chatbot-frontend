'use client';

import { useEffect, useRef, useState } from 'react';
import ChatBubble from '../../components/ChatBubble';
import Navbar from '../../components/Navbar';

export default function ChatPage() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = { text: input, isUser: true };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('https://khalifrex-chatbot.onrender.com/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();
      const aiMsg = { text: data.reply || 'Sorry, no response', isUser: false };
      setMessages((prev) => [...prev, aiMsg]);
    } catch (err) {
      const errorMsg = { text: 'Failed to get response from AI.', isUser: false };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <div className="flex flex-col h-[100dvh] bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto px-4 py-6 space-y-2">
          {messages.length === 0 && (
            <div className="flex justify-center items-center h-full text-gray-400 dark:text-gray-500 text-center text-sm">
              Ask Khalifrex AI a question or anything.
            </div>
          )}
          {messages.map((msg, i) => (
            <ChatBubble key={i} message={msg.text} isUser={msg.isUser} />
          ))}
          <div ref={chatEndRef} />
        </div>

        {/* Input Bar */}
        <form
          onSubmit={handleSubmit}
          className="sticky bottom-0 z-10 bg-white dark:bg-gray-900 border-t dark:border-gray-700 p-4 flex gap-2"
        >
          <input
            className="flex-1 border dark:border-gray-700 bg-white dark:bg-gray-800 rounded px-3 py-2 outline-none"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
            disabled={loading}
          >
            {loading ? '...' : 'Send'}
          </button>
        </form>
      </div>
    </>
  );
}
