import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  title: 'Vivid Reach — Marketing Precision, Powered by Our Own AI',
  description:
    'Vivid Reach engineers its own marketing AI to turn raw data into superhuman campaign performance. Predictive ad bidding, AI-generated content at scale, and algorithmic SEO.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0b0d17',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}

        {/* VividReach AI Demo Widget */}
        <div style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 9999 }}>
          <button 
            id="chat-toggle-btn" 
            onClick={() => {
              const win = document.getElementById('chat-window');
              if (win) win.style.display = win.style.display === 'none' ? 'flex' : 'none';
            }}
            style={{ backgroundColor: '#2563eb', color: 'white', border: 'none', padding: '12px 20px', borderRadius: '30px', cursor: 'pointer', fontWeight: 'bold', boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}
          >
            ✨ Test VividReach AI
          </button>
          
          <div 
            id="chat-window" 
            style={{ display: 'none', width: '350px', height: '450px', background: 'white', borderRadius: '12px', boxShadow: '0 5px 20px rgba(0,0,0,0.2)', flexDirection: 'column', overflow: 'hidden', border: '1px solid #e5e7eb', position: 'absolute', bottom: '60px', right: '0' }}
          >
            <div style={{ background: '#2563eb', color: 'white', padding: '12px', fontWeight: 'bold', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span>VividReach Real Estate AI</span>
              <button 
                onClick={() => {
                  const win = document.getElementById('chat-window');
                  if (win) win.style.display = 'none';
                }}
                style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', fontWeight: 'bold', fontSize: '16px' }}
              >
                ×
              </button>
            </div>
            <div style={{ flex: 1, padding: '12px', overflowY: 'auto', fontSize: '14px', color: '#374151' }}>
              <div style={{ marginBottom: '8px', background: '#f3f4f6', padding: '8px', borderRadius: '6px' }}>
                Hi! I'm the VividReach AI marketing engine. Ask me to generate a Facebook ad for a new property listing or check ad performance.
              </div>
            </div>
            <div style={{ padding: '8px', borderTop: '1px solid #e5e7eb', display: 'flex' }}>
              <input 
                type="text" 
                placeholder="Type a prompt..." 
                style={{ flex: 1, padding: '8px', border: '1px solid #d1d5db', borderRadius: '4px', outline: 'none', color: '#000' }} 
              />
              <button style={{ background: '#2563eb', color: 'white', border: 'none', padding: '8px 12px', marginLeft: '6px', borderRadius: '4px', cursor: 'pointer' }}>
                Send
              </button>
            </div>
          </div>
        </div>

      </body>
    </html>
  )
}
