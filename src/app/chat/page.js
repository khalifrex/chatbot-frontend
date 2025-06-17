'use client';

import { useEffect, useRef, useState } from 'react';
import ChatBubble from '../../components/ChatBubble';
import Navbar from '../../components/Navbar';

export default function ChatPage() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

  // Auto-scroll on new message
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Handle sending message
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
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-2">
        {messages.map((msg, i) => (
          <ChatBubble key={i} message={msg.text} isUser={msg.isUser} />
        ))}
        <div ref={chatEndRef} />
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex border-t dark:border-gray-700 p-4 gap-2"
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
