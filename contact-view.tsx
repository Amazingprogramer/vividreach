'use client';

import { useState } from 'react';

export function ContactView() {
  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.currentTarget);
    // Your Web3Forms Access Key
    formData.append("access_key", "b6c70ab3-7883-49fb-8b5d-8be94258a4c2");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Success! Your message has been sent.");
      event.currentTarget.reset();
    } else {
      console.log("Error", data);
      setResult(data.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <div className="contact-container">
      {/* Keep your existing header/layout text here */}
      
      <form onSubmit={onSubmit} className="space-y-4">
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

        {result && <p className="text-white mt-4 text-center">{result}</p>}
      </form>
    </div>
  );
}