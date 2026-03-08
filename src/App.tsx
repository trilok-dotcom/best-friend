import { useState } from 'react';
import { Heart } from 'lucide-react';
import FloatingElements from './components/FloatingElements';
import HeroSection from './components/HeroSection';
import StorySection from './components/StorySection';
import MessageSection from './components/MessageSection';
import AppreciationSection from './components/AppreciationSection';
import MomentsSection from './components/MomentsSection';
import FinalSection from './components/FinalSection';
import SurprisePopup from './components/SurprisePopup';
import MouseFollower from './components/MouseFollower';

function App() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-cream-50 to-amber-50 relative overflow-hidden">
      <FloatingElements />
      <MouseFollower />

      <HeroSection />
      <StorySection />
      <MessageSection />
      <AppreciationSection />
      <MomentsSection />
      <FinalSection />

      <div className="py-16 text-center">
        <button
          onClick={() => setShowPopup(true)}
          className="group relative px-8 py-4 bg-gradient-to-r from-pink-400 to-rose-400 text-white rounded-full font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
        >
          <span className="flex items-center gap-2">
            Click if you're curious 👀
            <Heart className="w-5 h-5 group-hover:animate-bounce" />
          </span>
        </button>
      </div>

      <SurprisePopup show={showPopup} onClose={() => setShowPopup(false)} />
    </div>
  );
}

export default App;
