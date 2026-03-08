import { Heart, MessageCircle, Smile, Cat, Coffee } from 'lucide-react';

const appreciationCards = [
  { icon: Heart, title: 'Your kindness', color: 'from-pink-400 to-rose-400' },
  { icon: MessageCircle, title: 'Your honesty when I need it', color: 'from-purple-400 to-pink-400' },
  { icon: Smile, title: 'Your beautiful smile', color: 'from-amber-400 to-orange-400' },
  { icon: Cat, title: 'Your love for cats', color: 'from-pink-400 to-purple-400' },
  { icon: Coffee, title: 'Your love for coffee', color: 'from-amber-500 to-brown-500' },
  { icon: null, title: 'Your love for chocolates', emoji: '🍫', color: 'from-brown-400 to-amber-600' },
];

export default function AppreciationSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-16 fade-in-scroll">
          Things I Appreciate About You
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {appreciationCards.map((card, index) => (
            <div
              key={index}
              className="appreciation-card group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${card.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {card.icon ? (
                  <card.icon className="w-8 h-8 text-white" />
                ) : (
                  <span className="text-3xl">{card.emoji}</span>
                )}
              </div>
              <h3 className="text-xl font-semibold text-gray-800">{card.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
