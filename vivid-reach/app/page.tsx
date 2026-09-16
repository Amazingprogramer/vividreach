import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="bg-[#0b0d17] text-white min-h-screen">
      {/* Hero Section */}
      <section className="py-24 px-6 text-center max-w-4xl mx-auto">
        <span className="text-xs bg-[#1f293d] text-[#3b82f6] px-3 py-1 rounded-full border border-[#2563eb]/30">
          • Proprietary Core Engine — Engineered 100% In-House
        </span>
        <h1 className="text-5xl font-extrabold mt-6 mb-4 leading-tight">
          Marketing Precision, Powered by Proprietary AI.
        </h1>
        <p className="text-[#9ca3af] text-lg mb-8">
          We didn't license a generic model. We engineered VividReach from the ground up to turn raw market data into superhuman campaign performance.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/aidemo" className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold px-6 py-3 rounded-xl hover:opacity-90 transition">
            ✨ Test the AI Console
          </Link>
          <Link href="/about" className="bg-[#111827] border border-[#1f293d] text-white px-6 py-3 rounded-xl hover:border-blue-500 transition">
            Explore Engine Architecture
          </Link>
        </div>
      </section>

      {/* Advantage Summary */}
      <section className="py-16 px-6 max-w-7xl mx-auto border-t border-[#1f293d]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#111827] p-6 rounded-xl border border-[#1f293d]">
            <h3 className="text-xl font-bold mb-2">Humans Sleep. Our Engine Doesn't.</h3>
            <p className="text-[#9ca3af] text-sm">VividReach shifts ad spend automatically at 2 AM based on live market momentum.</p>
          </div>
          <div className="bg-[#111827] p-6 rounded-xl border border-[#1f293d]">
            <h3 className="text-xl font-bold mb-2">Data, Not Guesses.</h3>
            <p className="text-[#9ca3af] text-sm">Cold, statistically-grounded decisions trained strictly on conversion telemetry.</p>
          </div>
          <div className="bg-[#111827] p-6 rounded-xl border border-[#1f293d]">
            <h3 className="text-xl font-bold mb-2">Cross-Channel Mastery.</h3>
            <p className="text-[#9ca3af] text-sm">Search, social, and display modeled as one connected ecosystem simultaneously.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
