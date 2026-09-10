export function ContactView() {
  return (
    <div className="w-full max-w-xl mx-auto p-6">
      <form action="https://api.web3forms.com/submit" method="POST" className="space-y-4">
        {/* Replace with your actual Web3Forms Access Key */}
        <input type="hidden" name="access_key" value="b6c70ab3-7883-49fb-8b5d-8be94258a4c2" />

        <div>
          <label className="block text-sm font-medium text-gray-300">Name</label>
          <input 
            type="text" 
            name="name" 
            placeholder="Jane Doe" 
            required 
            className="w-full mt-1 p-3 bg-[#111] border border-gray-800 rounded-lg text-white"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300">Email</label>
          <input 
            type="email" 
            name="email" 
            placeholder="jane@company.com" 
            required 
            className="w-full mt-1 p-3 bg-[#111] border border-gray-800 rounded-lg text-white"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300">Website</label>
          <input 
            type="text" 
            name="website" 
            placeholder="https://yourbrand.com" 
            className="w-full mt-1 p-3 bg-[#111] border border-gray-800 rounded-lg text-white"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300">Message</label>
          <textarea 
            name="message" 
            placeholder="What are you trying to achieve?" 
            required 
            rows={4}
            className="w-full mt-1 p-3 bg-[#111] border border-gray-800 rounded-lg text-white"
          />
        </div>

        <button 
          type="submit" 
          className="w-full py-3 bg-gradient-to-r from-purple-500 to-cyan-400 text-white font-medium rounded-lg"
        >
          Send message 🚀
        </button>
      </form>
    </div>
  );
}