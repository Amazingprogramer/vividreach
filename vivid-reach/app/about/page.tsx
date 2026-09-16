export default function AboutPage() {
  const features = [
    { title: "Millisecond Data Ingestion", stat: "1.2B+ signals/day", desc: "Every impression, click, and conversion streams into the engine the instant it happens." },
    { title: "Algorithmic Budget Reallocation", stat: "4,000+ shifts/day", desc: "The engine continuously scores every campaign against real-time ROI metrics." },
    { title: "Automated Creative Variant Testing", stat: "Continuous A/B/n", desc: "Headlines and copy variations are automatically served and retired based on performance." },
    { title: "Predictive Trend Detection", stat: "Sub-second reaction", desc: "Detects emerging demand curves and auction pressure before competitors react." },
    { title: "Cross-Channel Orchestration", stat: "Unified attribution", desc: "Search, social, display, and video modeled as one single connected system." },
    { title: "Auditable Decision Logs", stat: "100% traceable", desc: "Every autonomous action is recorded with the exact data signals that triggered it." }
  ];

  return (
    <div className="bg-[#0b0d17] text-white min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center mb-4">Inside the Core Engine</h1>
        <p className="text-[#9ca3af] text-center max-w-2xl mx-auto mb-16">
          Six autonomous systems working in concert, every second of every day. This is what replaces guesswork and manual reviews.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((f, i) => (
            <div key={i} className="bg-[#111827] border border-[#1f293d] p-6 rounded-xl">
              <span className="text-xs text-[#3b82f6] font-mono bg-[#1f293d] px-2.5 py-1 rounded-md">{f.stat}</span>
              <h3 className="text-xl font-bold mt-4 mb-2">{f.title}</h3>
              <p className="text-[#9ca3af] text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
