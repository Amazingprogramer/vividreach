"use client";

import React, { useState } from "react";

type Message = {
  id: string;
  sender: "ai" | "user";
  text: string;
  type?: "text" | "ad_preview" | "action_card";
  data?: {
    platform?: "Meta" | "Google";
    headline?: string;
    body?: string;
    cta?: string;
    metrics?: { label: string; val: string; change: string }[];
  };
};

export default function AIDemoPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "ai",
      text: "Hello! I am the VividReach autonomous marketing engine. Connect your campaign channels below or ask me to analyze budget, generate creatives, or shift ad spend.",
      type: "text",
    },
  ]);

  const [input, setInput] = useState("");
  const [isThinking, setIsThinking] = useState(false);
  const [metaConnected, setMetaConnected] = useState(true);
  const [googleConnected, setGoogleConnected] = useState(true);
  const [selectedAccount, setSelectedAccount] = useState("Real Estate Growth Q3");

  const quickPrompts = [
    "Reallocate budget to top ROI ads",
    "Generate new Meta Carousel creative",
    "Analyze Google Search CPC trends",
    "How does the engine optimize automatically?",
  ];

  const handleSend = (userText?: string) => {
    const prompt = userText || input;
    if (!prompt.trim() || isThinking) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: prompt,
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!userText) setInput("");
    setIsThinking(true);

    setTimeout(() => {
      generateAIResponse(prompt);
      setIsThinking(false);
    }, 1100);
  };

  const generateAIResponse = (prompt: string) => {
    const lower = prompt.toLowerCase();
    let aiMsg: Message;

    if (lower.includes("how")) {
      aiMsg = {
        id: (Date.now() + 1).toString(),
        sender: "ai",
        text: "I continuously evaluate conversion signals across Meta Pixel and Google Tag Manager. When cost-per-lead spikes on an ad set, spend is autonomously shifted to higher-converting placements within 300 milliseconds.",
        type: "action_card",
        data: {
          platform: "Meta",
          metrics: [
            { label: "Cost Per Lead", val: "$18.40", change: "-28%" },
            { label: "ROAS Target", val: "4.2x", change: "+1.1x" },
            { label: "Shift Frequency", val: "14/hr", change: "Active" },
          ],
        },
      };
    } else if (lower.includes("creative") || lower.includes("generate") || lower.includes("ad")) {
      aiMsg = {
        id: (Date.now() + 1).toString(),
        sender: "ai",
        text: "Generated high-converting Meta Carousel ad variant based on top-performing buyer demographics:",
        type: "ad_preview",
        data: {
          platform: "Meta",
          headline: "Luxury Living Made Reachable | Modern Townhomes from $490k",
          body: "Stop renting, start building equity. Explore zero-down mortgage qualifying options and private virtual home tours today.",
          cta: "Book Tour Now",
        },
      };
    } else if (lower.includes("google") || lower.includes("cpc")) {
      aiMsg = {
        id: (Date.now() + 1).toString(),
        sender: "ai",
        text: "Google Search CPCs for 'homes for sale near me' increased by 14% this morning. Re-allocating $450/day into exact-match long-tail keywords to protect conversion rate.",
        type: "action_card",
        data: {
          platform: "Google",
          metrics: [
            { label: "Google Avg CPC", val: "$3.12", change: "+14%" },
            { label: "Protected CPL", val: "$22.10", change: "Stable" },
            { label: "Optimized Spend", val: "$1,850/wk", change: "Applied" },
          ],
        },
      };
    } else {
      aiMsg = {
        id: (Date.now() + 1).toString(),
        sender: "ai",
        text: `Campaign analysis complete for active account [${selectedAccount}]. Scanned Meta & Google ad pools: shifted $320 away from underperforming placements into top 5% performing creatives.`,
        type: "action_card",
        data: {
          platform: "Meta",
          metrics: [
            { label: "Budget Reallocated", val: "$320.00", change: "Completed" },
            { label: "Expected Impression Boost", val: "+12,400", change: "+18%" },
          ],
        },
      };
    }

    setMessages((prev) => [...prev, aiMsg]);
  };

  return (
    <div className="bg-[#0b0d17] text-white min-h-screen py-12 px-4 md:px-8">
      <div className="max-w-5xl mx-auto space-y-6">
        
        {/* Header Title */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Test the Autonomous Engine</h1>
          <p className="text-gray-400 text-sm md:text-base">
            Simulate dynamic optimization or connect your live Meta & Google ad accounts.
          </p>
        </div>

        {/* Campaign Integrations & Channel Selector Bar */}
        <div className="bg-[#111827] border border-[#1f293d] rounded-xl p-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">Connected Ad Channels:</span>
            
            {/* Meta Ad Toggle */}
            <button
              onClick={() => setMetaConnected(!metaConnected)}
              className={`flex items-center space-x-2 px-3 py-1.5 rounded-lg border text-xs font-medium transition ${
                metaConnected
                  ? "bg-blue-600/20 border-blue-500/50 text-blue-400"
                  : "bg-gray-800 border-gray-700 text-gray-400 opacity-60"
              }`}
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span>Meta Ads {metaConnected ? "✓ Connected" : "+ Connect"}</span>
            </button>

            {/* Google Ad Toggle */}
            <button
              onClick={() => setGoogleConnected(!googleConnected)}
              className={`flex items-center space-x-2 px-3 py-1.5 rounded-lg border text-xs font-medium transition ${
                googleConnected
                  ? "bg-emerald-600/20 border-emerald-500/50 text-emerald-400"
                  : "bg-gray-800 border-gray-700 text-gray-400 opacity-60"
              }`}
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 15.987 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
              </svg>
              <span>Google Ads {googleConnected ? "✓ Connected" : "+ Connect"}</span>
            </button>
          </div>

          {/* Selected Campaign Selector */}
          <div className="flex items-center space-x-2">
            <span className="text-xs text-gray-400">Campaign:</span>
            <select
              value={selectedAccount}
              onChange={(e) => setSelectedAccount(e.target.value)}
              className="bg-[#1f293d] text-xs text-white border border-gray-700 rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-blue-500"
            >
              <option>Real Estate Growth Q3</option>
              <option>Local Buyer Retargeting</option>
              <option>High-Intent Search Campaign</option>
            </select>
          </div>
        </div>

        {/* Main Workspace Chat Window */}
        <div className="bg-[#111827] border border-[#1f293d] rounded-2xl p-6 min-h-[480px] flex flex-col justify-between shadow-2xl">
          
          {/* Message Thread */}
          <div className="space-y-6 overflow-y-auto max-h-[500px] pr-2">
            {messages.map((m) => (
              <div key={m.id} className={`flex ${m.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-2xl rounded-2xl p-4 text-sm leading-relaxed ${
                  m.sender === "user"
                    ? "bg-blue-600 text-white rounded-br-none"
                    : "bg-[#1f293d] border border-gray-800 text-gray-200 rounded-bl-none"
                }`}>
                  <p>{m.text}</p>

                  {/* Render Visual Action Metric Cards */}
                  {m.type === "action_card" && m.data?.metrics && (
                    <div className="mt-4 grid grid-cols-3 gap-2 bg-[#0b0d17] p-3 rounded-xl border border-gray-800">
                      {m.data.metrics.map((met, idx) => (
                        <div key={idx} className="text-center p-2 bg-[#111827] rounded-lg">
                          <p className="text-[10px] text-gray-400 uppercase font-mono">{met.label}</p>
                          <p className="text-sm font-bold text-white my-0.5">{met.val}</p>
                          <span className="text-[10px] text-emerald-400 font-semibold">{met.change}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Render Visual Ad Copy Preview */}
                  {m.type === "ad_preview" && m.data && (
                    <div className="mt-4 bg-[#0b0d17] border border-blue-500/30 rounded-xl p-4 space-y-3">
                      <div className="flex items-center justify-between text-xs text-gray-400 border-b border-gray-800 pb-2">
                        <span className="font-semibold text-blue-400">Meta Sponsored Ad Preview</span>
                        <span className="text-[10px] bg-blue-900/40 text-blue-300 px-2 py-0.5 rounded">Auto-Generated</span>
                      </div>
                      <div className="bg-[#111827] h-32 rounded-lg border border-dashed border-gray-700 flex items-center justify-center text-gray-500 text-xs">
                        [ Generated Dynamic Property Image ]
                      </div>
                      <p className="font-bold text-white text-sm">{m.data.headline}</p>
                      <p className="text-xs text-gray-300">{m.data.body}</p>
                      <button className="w-full py-2 bg-blue-600 text-white font-semibold text-xs rounded-lg hover:bg-blue-500 transition">
                        {m.data.cta}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {isThinking && (
              <div className="flex justify-start">
                <div className="bg-[#1f293d] border border-gray-800 rounded-2xl p-4 text-xs text-blue-400 animate-pulse flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
                  <span>VividReach AI analyzing live signals & budget pools...</span>
                </div>
              </div>
            )}
          </div>

          {/* Quick Prompts & Input Area */}
          <div className="mt-6 pt-4 border-t border-gray-800/80 space-y-3">
            
            {/* Action Chips */}
            <div className="flex flex-wrap gap-2">
              {quickPrompts.map((qp, i) => (
                <button
                  key={i}
                  onClick={() => handleSend(qp)}
                  className="text-xs bg-[#1f293d] hover:bg-blue-600/30 hover:border-blue-500/50 border border-gray-700 text-gray-300 px-3 py-1.5 rounded-full transition"
                >
                  {qp}
                </button>
              ))}
            </div>

            {/* Input Box */}
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask the AI to optimize campaign budget, generate ad copy, or analyze CPC..."
                className="flex-1 bg-[#0b0d17] border border-gray-700 focus:border-blue-500 rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition"
              />
              <button
                onClick={() => handleSend()}
                className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-xl text-sm transition shadow-lg"
              >
                Run AI
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
