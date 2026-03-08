export default function MomentsSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-amber-50/50 to-pink-50/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-6 fade-in-scroll">
          Small Moments That Stay Forever
        </h2>
        <p className="text-xl text-center text-gray-600 mb-12 fade-in-scroll">
          Some memories may look small to others, but they stay in our hearts forever.
        </p>

        <div className="memory-card fade-in-scroll">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">🌊</span>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800">Wonderla Trip</h3>
          </div>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed italic">
            "A reminder that some people show up for you even when it's not easy."
          </p>
        </div>
      </div>
    </section>
  );
}
