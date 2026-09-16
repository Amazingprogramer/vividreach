'use client';

import Link from 'next/link';

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-[#0b0d17]/80 backdrop-blur-md border-b border-[#1f293d] px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-white flex items-center gap-2">
          <span className="text-[#3b82f6]">❖</span> VividReach
        </Link>
        
        <nav className="hidden md:flex gap-8 text-sm text-[#9ca3af]">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <Link href="/about" className="hover:text-white transition-colors">Core Engine</Link>
          <Link href="/aidemo" className="hover:text-white transition-colors">AI Studio</Link>
          <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
        </nav>

        <Link 
          href="/aidemo" 
          className="bg-[#2563eb] hover:bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all"
        >
          Request Access
        </Link>
      </div>
    </header>
  );
}
