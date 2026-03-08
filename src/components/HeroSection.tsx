import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function HeroSection() {
  const [typedText, setTypedText] = useState('');
  const fullText = "Some people enter our lives quietly but end up meaning a lot more than they know.";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-4 overflow-hidden">
      <div className="text-center z-10 fade-in">
        <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 mb-8 tracking-tight">
          A Small Page For Someone Special
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto min-h-[4rem] leading-relaxed">
          {typedText}
          <span className="animate-pulse">|</span>
        </p>
      </div>

      <div className="absolute bottom-10 animate-bounce">
        <ChevronDown className="w-8 h-8 text-pink-400" />
      </div>
    </section>
  );
}
