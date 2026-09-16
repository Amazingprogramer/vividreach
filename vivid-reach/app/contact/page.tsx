export default function ContactPage() {
  return (
    <div className="bg-[#0b0d17] text-white min-h-screen py-20 px-6">
      <div className="max-w-3xl mx-auto bg-[#111827] border border-[#1f293d] rounded-2xl p-8">
        <h1 className="text-3xl font-bold mb-2">Request Platform Access</h1>
        <p className="text-[#9ca3af] text-sm mb-8">Deploy VividReach's autonomous data engine for your brand or client accounts.</p>

        <form className="space-y-4">
          <div>
            <label className="text-xs text-[#9ca3af] block mb-1">Full Name</label>
            <input type="text" placeholder="Jane Doe" className="w-full bg-[#0b0d17] border border-[#374151] rounded-lg p-3 text-sm text-white outline-none focus:border-[#2563eb]" />
          </div>
          <div>
            <label className="text-xs text-[#9ca3af] block mb-1">Work Email</label>
            <input type="email" placeholder="jane@company.com" className="w-full bg-[#0b0d17] border border-[#374151] rounded-lg p-3 text-sm text-white outline-none focus:border-[#2563eb]" />
          </div>
          <div>
            <label className="text-xs text-[#9ca3af] block mb-1">Monthly Digital Ad Spend</label>
            <select className="w-full bg-[#0b0d17] border border-[#374151] rounded-lg p-3 text-sm text-[#9ca3af] outline-none">
              <option>$10,000 - $50,000 / month</option>
              <option>$50,000 - $250,000 / month</option>
              <option>$250,000+ / month</option>
            </select>
          </div>
          <button type="submit" className="w-full bg-[#2563eb] font-bold text-sm py-3 rounded-lg hover:bg-blue-600 transition">
            Submit Access Request
          </button>
        </form>
      </div>
    </div>
  );
}
