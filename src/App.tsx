import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Replace these with your actual app store URLs
const APP_STORE_URL = "https://apps.apple.com/app/YOUR_APP_ID";
const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=YOUR_PACKAGE_NAME";

type Platform = "ios" | "android" | "unknown";

function App() {
  const [platform, setPlatform] = useState<Platform>("unknown");
  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {
    const detectPlatform = (): Platform => {
      const userAgent = navigator.userAgent || (navigator as any).vendor || (window as any).opera;

      // iOS detection
      if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
        return "ios";
      }

      // Android detection
      if (/android/i.test(userAgent)) {
        return "android";
      }

      return "unknown";
    };

    const detectedPlatform = detectPlatform();
    setPlatform(detectedPlatform);

    // Auto-redirect for mobile devices
    if (detectedPlatform === "ios") {
      setTimeout(() => {
        window.location.href = APP_STORE_URL;
      }, 1000);
    } else if (detectedPlatform === "android") {
      setTimeout(() => {
        window.location.href = PLAY_STORE_URL;
      }, 1000);
    } else {
      // Hide spinner for desktop
      setShowSpinner(false);
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#4A5568] font-[Poppins,system-ui,sans-serif]">
      {/* Navigation Bar */}
      <nav className="bg-[#E8DFD3] px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-[#5C2E2E] rounded-lg flex items-center justify-center">
            <span className="text-white font-black text-2xl">T</span>
          </div>
          <div className="text-[#5C2E2E] font-black text-xl uppercase tracking-tight">
            TAPD OUT
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          <a href="#features" className="text-[#5C2E2E] font-semibold hover:text-orange-600 transition-colors">
            Features
          </a>
          <a href="#about" className="text-[#5C2E2E] font-semibold hover:text-orange-600 transition-colors">
            About Us
          </a>
          <Link to="/privacy" className="text-[#5C2E2E] font-semibold hover:text-orange-600 transition-colors">
            Privacy Policy
          </Link>
          <button className="px-6 py-2 border-2 border-[#5C2E2E] text-[#5C2E2E] font-bold rounded-lg hover:bg-[#5C2E2E] hover:text-white transition-colors">
            Log in
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex items-center justify-center px-5 py-20">
        {/* Hero Section with Orange Background */}
        <div className="max-w-6xl w-full bg-[#FF5722] rounded-3xl px-16 py-20 shadow-2xl">
          <div className="flex items-center justify-between">
            {/* Left Content */}
            <div className="flex-1">
              <h1 className="text-7xl font-black text-[#2D1B1B] mb-4 leading-tight">
                Save your<br />
                team from<br />
                <span className="text-[#2D1B1B] font-black" style={{ 
                  WebkitTextStroke: "2px #FF5722",
                  WebkitTextFillColor: "transparent"
                }}>
                  burnout!
                </span>
              </h1>

              {/* Email Input */}
              <div className="flex mt-12 max-w-xl">
                <input
                  type="email"
                  placeholder="Enter E-mail"
                  className="flex-1 px-6 py-4 text-lg bg-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
                <button className="px-8 py-4 bg-[#FFC107] text-[#2D1B1B] font-black text-lg rounded-r-lg hover:bg-yellow-500 transition-colors">
                  Get Started
                </button>
              </div>

              {/* Spinner */}
              {showSpinner && (
                <div className="mt-8">
                  <div className="inline-flex items-center gap-3 text-white font-semibold">
                    <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                    Detecting your device...
                  </div>
                </div>
              )}

              {/* Download buttons */}
              {!showSpinner && (
                <div className="flex gap-4 mt-8">
                  {(platform === "ios" || platform === "unknown") && (
                    <a
                      href={APP_STORE_URL}
                      className="px-8 py-4 bg-[#2D1B1B] text-white rounded-lg font-bold hover:bg-[#1a0f0f] transition-colors shadow-lg"
                    >
                      📱 App Store
                    </a>
                  )}

                  {(platform === "android" || platform === "unknown") && (
                    <a
                      href={PLAY_STORE_URL}
                      className="px-8 py-4 bg-[#2D1B1B] text-white rounded-lg font-bold hover:bg-[#1a0f0f] transition-colors shadow-lg"
                    >
                      📱 Google Play
                    </a>
                  )}
                </div>
              )}
            </div>

            {/* Right Illustration Area */}
            <div className="flex-1 flex items-center justify-center">
              <div className="relative">
                {/* Circular badge */}
                <div className="absolute -top-8 right-0 w-32 h-32 border-4 border-[#2D1B1B] rounded-full flex items-center justify-center transform rotate-12">
                  <div className="text-[#2D1B1B] font-bold text-sm text-center leading-tight transform -rotate-12">
                    VIDEO<br />AUDIO<br />IMAGE<br />VIDEO
                  </div>
                </div>
                
                {/* Main emoji/character */}
                <div className="text-9xl">💧🔫</div>
                
                {/* Decorative elements */}
                <div className="absolute -bottom-4 left-0 text-6xl opacity-70">💧</div>
                <div className="absolute top-0 right-0 text-5xl opacity-50">💦</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section Preview */}
      <div className="bg-[#E8DFD3] px-16 py-12">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#8B6B6B] uppercase text-sm font-bold tracking-wider mb-4">
            Best Team Mood Tool
          </p>
          <h2 className="text-5xl font-black text-[#FF5722] mb-2">
            Industry leaders <span className="text-[#2D1B1B]">know</span>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default App;


