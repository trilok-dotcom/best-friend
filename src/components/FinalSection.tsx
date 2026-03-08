import { Heart } from 'lucide-react';

export default function FinalSection() {
  return (
    <section className="py-32 px-4">
      <div className="max-w-4xl mx-auto text-center fade-in-scroll">
        <div className="floating-hearts mb-8">
          <Heart className="inline-block w-8 h-8 text-rose-400 mx-2 animate-float" fill="currentColor" />
          <Heart className="inline-block w-10 h-10 text-pink-400 mx-2 animate-float" fill="currentColor" style={{ animationDelay: '0.5s' }} />
          <Heart className="inline-block w-8 h-8 text-rose-400 mx-2 animate-float" fill="currentColor" style={{ animationDelay: '1s' }} />
        </div>

        <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 mb-6">
          I'm really lucky to have you in my life.
        </h2>

        <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
          If friendship had a favorite place, mine would probably be anywhere with you,
          coffee, and a few cats around.
        </p>
      </div>
    </section>
  );
}
