import { X, Heart, Sparkles, Cat, Coffee } from 'lucide-react';
import { useEffect } from 'react';

interface SurprisePopupProps {
  show: boolean;
  onClose: () => void;
}

export default function SurprisePopup({ show, onClose }: SurprisePopupProps) {
  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [show]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
      <div className="relative bg-gradient-to-br from-pink-100 via-cream-100 to-amber-100 rounded-3xl shadow-2xl max-w-2xl w-full p-8 md:p-12 popup-slide">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-white/50 rounded-full transition-colors"
        >
          <X className="w-6 h-6 text-gray-600" />
        </button>

        <div className="text-center space-y-6">
          <div className="flex justify-center gap-4 mb-6">
            <Sparkles className="w-10 h-10 text-yellow-500 animate-pulse" />
            <Heart className="w-10 h-10 text-rose-500 animate-bounce" fill="currentColor" />
            <Sparkles className="w-10 h-10 text-yellow-500 animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>

          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Just in case you forgot today…
          </h3>

          <div className="space-y-4 text-xl md:text-2xl text-gray-700 font-medium">
            <p className="flex items-center justify-center gap-3">
              <Heart className="w-6 h-6 text-rose-500" fill="currentColor" />
              You are appreciated.
            </p>
            <p className="flex items-center justify-center gap-3">
              <Sparkles className="w-6 h-6 text-amber-500" />
              You are important.
            </p>
            <p className="flex items-center justify-center gap-3">
              <Heart className="w-6 h-6 text-pink-500" fill="currentColor" />
              And you make someone's life better just by being in it.
            </p>
          </div>

          <div className="pt-8 border-t border-gray-300">
            <p className="text-lg md:text-xl text-gray-700 flex items-center justify-center gap-2 flex-wrap">
              Also… don't forget to drink coffee
              <Coffee className="w-6 h-6 text-amber-600 animate-bounce" />
              and pet some cats today
              <Cat className="w-6 h-6 text-pink-500 animate-bounce" style={{ animationDelay: '0.3s' }} />
            </p>
          </div>

          <div className="floating-hearts-popup">
            <span className="text-2xl absolute top-10 left-10 animate-float">💕</span>
            <span className="text-2xl absolute top-20 right-10 animate-float" style={{ animationDelay: '0.5s' }}>✨</span>
            <span className="text-2xl absolute bottom-10 left-20 animate-float" style={{ animationDelay: '1s' }}>🐱</span>
            <span className="text-2xl absolute bottom-20 right-20 animate-float" style={{ animationDelay: '1.5s' }}>☕</span>
          </div>
        </div>
      </div>
    </div>
  );
}
