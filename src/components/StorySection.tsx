import { Cat, Coffee } from 'lucide-react';

export default function StorySection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center fade-in-scroll">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
          How Our Friendship Started
        </h2>
        <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-12">
          Somewhere along the way, you became one of the most important people in my life.
          Not because of one big moment, but because of all the small moments that slowly
          made our friendship special.
        </p>

        <div className="flex justify-center gap-8 md:gap-16 items-center">
          <div className="animate-float" style={{ animationDelay: '0s' }}>
            <Cat className="w-16 h-16 text-pink-400" />
            <p className="text-sm mt-2 text-gray-600">cats</p>
          </div>
          <div className="animate-float" style={{ animationDelay: '0.5s' }}>
            <Coffee className="w-16 h-16 text-amber-500" />
            <p className="text-sm mt-2 text-gray-600">coffee</p>
          </div>
          <div className="animate-float" style={{ animationDelay: '1s' }}>
            <span className="text-6xl">🍫</span>
            <p className="text-sm mt-2 text-gray-600">chocolate</p>
          </div>
        </div>
      </div>
    </section>
  );
}
