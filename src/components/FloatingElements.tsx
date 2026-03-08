import { Coffee, Cat } from 'lucide-react';

export default function FloatingElements() {
  return (
    <>
      <div className="floating-icon" style={{ top: '10%', left: '10%', animationDelay: '0s' }}>
        <Cat className="w-8 h-8 text-pink-300 opacity-30" />
      </div>
      <div className="floating-icon" style={{ top: '20%', right: '15%', animationDelay: '1s' }}>
        <Coffee className="w-8 h-8 text-amber-400 opacity-30" />
      </div>
      <div className="floating-icon" style={{ top: '60%', left: '5%', animationDelay: '2s' }}>
        <span className="text-4xl opacity-20">🍫</span>
      </div>
      <div className="floating-icon" style={{ top: '40%', right: '10%', animationDelay: '1.5s' }}>
        <Cat className="w-10 h-10 text-pink-400 opacity-20" />
      </div>
      <div className="floating-icon" style={{ bottom: '20%', left: '15%', animationDelay: '0.5s' }}>
        <Coffee className="w-9 h-9 text-amber-300 opacity-25" />
      </div>
      <div className="floating-icon" style={{ bottom: '30%', right: '20%', animationDelay: '2.5s' }}>
        <span className="text-3xl opacity-20">🍫</span>
      </div>
    </>
  );
}
