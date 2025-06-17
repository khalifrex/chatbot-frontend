'use client';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center px-6 py-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-md">
      <h1 className="text-2xl font-bold tracking-tight flex items-center gap-2">
        <span className="text-blue-600">🤖</span>
        <span>Khalifrex AI</span>
      </h1>
    </nav>
  );
}
