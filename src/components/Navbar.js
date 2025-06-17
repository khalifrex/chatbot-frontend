'use client';

import { useEffect, useState } from 'react';

export default function Navbar() {
  const [theme, setTheme] = useState('light');
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Scroll direction detection
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShow(false); // scroll down → hide
      } else {
        setShow(true); // scroll up → show
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`sticky top-0 z-50 flex justify-between items-center px-6 py-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-md backdrop-blur-sm transition-transform duration-300 ${
        show ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <h1 className="text-2xl font-bold tracking-tight flex items-center gap-2">
        <span className="text-blue-600">🤖</span>
        <span>Khalifrex AI</span>
      </h1>
   
    </nav>
  );
}
