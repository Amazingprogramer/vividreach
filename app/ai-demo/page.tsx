'use client';

import { useState } from 'react';

export default function AIDemoPage() {
  const [messages, setMessages] = useState([
    { role: 'ai', text: 'Hello! I am the VividReach autonomous marketing engine. How can I optimize your real estate campaigns today?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input;
    setMessages((prev) => [...prev, { role: 'user', text: userMessage }]);
    setInput('');
    setLoading(true);

    // Simulate AI marketing intelligence response
    setTimeout(() => {
      let aiResponse = "I've analyzed local buyer search trends for that zip code. I'm currently reallocating 25% of your underperforming Facebook ad budget into high-converting carousel ads targeting local first-time homebuyers.";
      
      if (userMessage.toLowerCase().includes('ad') || userMessage.toLowerCase().includes('generate')) {
        aiResponse = "Generated Ad Copy:\n\n🏡 Just Listed in Your Area!\nStunning 4-bed, 3-bath modern home with custom upgrades. Don't miss out on weekend open houses.\n\n[Targeting Set: Active Buyers within 15 miles | Budget Optimized Automatically]";
      }

      setMessages((prev) => [...prev, { role: 'ai', text: aiResponse }]);
      setLoading(false);
    }, 1000);
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0b0d17', color: 'white', display: 'flex', flexDirection: 'column', fontFamily: 'sans-serif' }}>
      {/* Header */}
      <header style={{ padding: '20px 40px', borderBottom: '1px solid #1f293d', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ fontSize: '20px', fontWeight: 'bold', margin: 0 }}>VividReach <span style={{ color: '#3b82f6' }}>AI Studio</span></h1>
        <a href="/" style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '14px' }}>← Back to Home</a>
      </header>

      {/* Main Container */}
      <div style={{ maxWidth: '800px', width: '100%', margin: '40px auto', padding: '0 20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ marginBottom: '20px' }}>
          <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '8px' }}>Test the Autonomous Engine</h2>
          <p style={{ color: '#9ca3af', fontSize: '14px' }}>See how VividReach handles live ad optimization and content generation instantly.</p>
        </div>

        {/* Chat Box */}
        <div style={{ background: '#111827', border: '1px solid #1f293d', borderRadius: '12px', flex: 1, display: 'flex', flexDirection: 'column', height: '500px', overflow: 'hidden' }}>
          <div style={{ flex: 1, padding: '20px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {messages.map((msg, index) => (
              <div key={index} style={{ alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start', maxWidth: '80%' }}>
                <div style={{ background: msg.role === 'user' ? '#2563eb' : '#1f293d', color: 'white', padding: '12px 16px', borderRadius: '8px', fontSize: '14px', whiteSpace: 'pre-line' }}>
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
              <div style={{ alignSelf: 'flex-start', background: '#1f293d', color: '#9ca3af', padding: '12px 16px', borderRadius: '8px', fontSize: '14px' }}>
                AI is processing market signals...
              </div>
            )}
          </div>

          {/* Input Form */}
          <form onSubmit={handleSend} style={{ padding: '16px', borderTop: '1px solid #1f293d', display: 'flex', gap: '8px', background: '#0b0d17' }}>
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask the AI to generate an ad or review metrics..." 
              style={{ flex: 1, padding: '12px', background: '#111827', border: '1px solid #374151', borderRadius: '6px', color: 'white', outline: 'none' }}
            />
            <button type="submit" style={{ background: '#2563eb', color: 'white', border: 'none', padding: '0 20px', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}>
              Run AI
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
