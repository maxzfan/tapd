import { Link } from 'react-router-dom';
import { Mail, Menu, ChevronDown } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#d94e1f] to-[#f09819] relative font-[Poppins,sans-serif] text-white selection:bg-orange-200 selection:text-orange-900 overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full px-8 py-6 flex justify-between items-center z-50 bg-gradient-to-b from-[#d94e1f]/80 to-transparent backdrop-blur-[2px]">
        <div className="text-2xl font-black tracking-wider cursor-pointer" onClick={() => window.scrollTo(0, 0)}>tapd.</div>
        <div className="hidden md:flex gap-12 text-sm font-bold uppercase tracking-widest">
            <a href="#home" className="hover:text-orange-200 transition-colors relative group">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
            </a>
            <a href="#about" className="hover:text-orange-200 transition-colors relative group">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
            </a>
            <a href="#sponsors" className="hover:text-orange-200 transition-colors relative group">
                Sponsors
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
            </a>
            <a href="#download" className="hover:text-orange-200 transition-colors relative group">
                Download
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
            </a>
            <a href="mailto:stanfordtapd@gmail.com" className="hover:text-orange-200 transition-colors relative group">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
            </a>
            <Link to="/privacy" className="hover:text-orange-200 transition-colors relative group">
                Privacy
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
            </Link>
        </div>
        <div className="flex items-center gap-6">
            <a href="mailto:stanfordtapd@gmail.com" className="p-2 hover:bg-white/10 rounded-full transition-colors">
                <Mail size={20} strokeWidth={2} />
            </a>
             <button className="md:hidden p-2">
                <Menu size={24} />
            </button>
        </div>
      </nav>


      {/* Main Content Sections */}
      <main className="w-full">
        
        {/* SECTION 1: HOME */}
        <section id="home" className="min-h-screen w-full flex items-center justify-center relative snap-start">
            {/* Background Water Gun (Absolute to Section) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] md:w-[45%] max-w-6xl z-0 pointer-events-none opacity-30">
                <img 
                    src="/water-gun.png" 
                    alt="Orange Water Gun" 
                    className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)] rotate-[-10deg] animate-float contrast-125"
                    style={{ animation: 'float 6s ease-in-out infinite' }}
                />
            </div>

            <div className="text-center relative z-10 w-full flex flex-col items-center justify-center">
                <h1 className="text-[18vw] md:text-[20vw] font-black leading-none tracking-tighter select-none text-white drop-shadow-lg">
                    tapd.
                </h1>
            </div>
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-30 animate-bounce opacity-70">
                <a href="#about" className="p-2 hover:text-orange-200 transition-colors">
                    <ChevronDown size={32} strokeWidth={1.5} />
                </a>
            </div>
        </section>

        {/* SECTION 2: ABOUT */}
        <section id="about" className="min-h-screen w-full flex items-center justify-center relative bg-black/10 snap-start py-20">
            <div className="max-w-4xl px-6 text-center z-10">
                <h2 className="text-4xl md:text-6xl font-black mb-12 tracking-tight">
                    What is <span className="text-orange-200">tapd</span>?
                </h2>
                <p className="text-2xl md:text-4xl font-light leading-relaxed tracking-wide opacity-90">
                    Stanford's inaugural <br className="hidden md:block" />
                    <span className="font-bold text-white drop-shadow-md">senior assassin</span> for freshmen <br className="hidden md:block" />
                    powered by local partners.
                </p>
                 <div className="mt-16">
                    <a href="https://www.instagram.com/tapdstanford/" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-widest hover:bg-white hover:text-[#d94e1f] transition-all duration-300 rounded-full">
                        Join the Waitlist
                    </a>
                </div>
            </div>
        </section>

        {/* SECTION 3: SPONSORS */}
        <section id="sponsors" className="min-h-screen w-full flex items-center justify-center relative snap-start py-20">
            <div className="max-w-4xl px-6 text-center z-10">
                 <h2 className="text-4xl md:text-6xl font-black mb-12 tracking-tight">
                    Our <span className="text-orange-200">Sponsors</span>
                </h2>
                <p className="text-xl md:text-3xl font-light leading-relaxed tracking-wide opacity-80 mb-12">
                    Proudly supported by
                </p>
                 <div className="flex justify-center items-center opacity-90">
                    <div className="flex flex-col items-center gap-4">
                        <a href="https://ases.stanford.edu/" target="_blank" rel="noopener noreferrer" className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 h-64 w-64 flex items-center justify-center hover:bg-white/20 transition-colors">
                            <img src="/ases.jpeg" alt="Stanford ASES Logo" className="max-w-full max-h-full object-contain opacity-80 hover:opacity-100 transition-opacity mix-blend-lighten filter grayscale hover:grayscale-0" />
                        </a>
                        <p className="text-lg md:text-xl font-medium tracking-wide opacity-90">Stanford ASES</p>
                    </div>
                </div>
                 <div className="mt-16">
                    <a href="mailto:stanfordtapd@gmail.com" className="text-sm uppercase tracking-widest hover:text-orange-200 transition-colors opacity-70 hover:opacity-100">
                        Become a Sponsor →
                    </a>
                </div>
            </div>
        </section>

        {/* SECTION 4: DOWNLOAD */}
        <section id="download" className="min-h-screen w-full flex items-center justify-center relative bg-black/10 snap-start py-20">
             <div className="text-center z-10 flex flex-col items-center gap-8">
                <p className="text-lg md:text-xl font-light tracking-widest uppercase opacity-90 mb-2">
                    JANUARY 2026
                </p>
                <h2 className="text-5xl md:text-8xl font-black tracking-tighter opacity-40 hover:opacity-80 transition-opacity duration-500 cursor-default mb-8">
                    COMING SOON
                </h2>
                
                {/* Store Buttons */}
                <div className="flex gap-6 justify-center items-center">
                    <button className="flex items-center gap-3 px-6 py-3 rounded-xl border border-white/30 bg-white/10 hover:bg-white/20 transition-all backdrop-blur-sm hover:scale-105 group">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 opacity-70 group-hover:opacity-100 transition-opacity">
                            <path d="M17.5,12.5c-0.3-2.7,2-4.1,2.2-4.1c-1.1-1.6-2.9-1.8-3.5-1.8c-1.5-0.2-3,0.9-3.7,0.9c-0.8,0-1.9-0.9-3.2-0.9C7.6,6.6,5.7,7.6,4.7,9.3c-2,3.5-0.5,8.6,1.4,11.4c0.9,1.4,2,2.9,3.4,2.9c1.4,0,1.9-0.9,3.6-0.9c1.7,0,2.1,0.9,3.6,0.9c1.5,0,2.4-1.3,3.3-2.7c1-1.5,1.4-2.9,1.5-3C21.4,16.9,17.8,15.2,17.5,12.5z M13,5.1C13.7,4.2,14.1,3,14,1.8c-1.2,0-2.6,0.8-3.3,1.7c-0.6,0.8-1.2,2-1,3.2C10.9,6.8,12.2,6,13,5.1z"/>
                        </svg>
                        <div className="text-left">
                            <div className="text-[10px] uppercase tracking-wider opacity-70 group-hover:opacity-100">Download on the</div>
                            <div className="text-sm font-bold opacity-80 group-hover:opacity-100">App Store</div>
                        </div>
                    </button>

                    <button className="flex items-center gap-3 px-6 py-3 rounded-xl border border-white/30 bg-white/10 hover:bg-white/20 transition-all backdrop-blur-sm hover:scale-105 group">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 opacity-70 group-hover:opacity-100 transition-opacity">
                            <path d="M3,20.5V3.5C3,2.9,3.3,2.6,3.7,2.4L12.7,10L3.7,17.6C3.3,17.4,3,17.1,3,20.5z M13.7,11L4.6,3.2l13.8,7.8L13.7,11z M14.7,12l4.1,4.1L5,20.2L14.7,12z M19.6,11.5L14.7,13l4.7,2.6C19.7,15.5,20,15.1,20,14.6C20,13.8,19.8,12.5,19.6,11.5z"/>
                        </svg>
                        <div className="text-left">
                            <div className="text-[10px] uppercase tracking-wider opacity-70 group-hover:opacity-100">Get it on</div>
                            <div className="text-sm font-bold opacity-80 group-hover:opacity-100">Google Play</div>
                        </div>
                    </button>
                </div>
            </div>
        </section>

      </main>

      {/* Global Styles for specific animations if needed */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(-10deg); }
          50% { transform: translateY(-20px) rotate(-5deg); }
          100% { transform: translateY(0px) rotate(-10deg); }
        }
        .writing-vertical-lr {
          writing-mode: vertical-lr;
        }
        html {
            scroll-behavior: smooth;
        }
      `}</style>
    </div>
  )
}
