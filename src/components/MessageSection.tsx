import { Heart } from 'lucide-react';

export default function MessageSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-pink-100/50 to-amber-100/50">
      <div className="max-w-4xl mx-auto">
        <div className="letter-card fade-in-scroll">
          <div className="flex items-center gap-3 mb-6">
            <Heart className="w-8 h-8 text-rose-500" fill="currentColor" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              My Message to You
            </h2>
          </div>

          <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed">
            <p>
              From the moment you became a part of my life, things started feeling a little easier and a lot happier.
              You are someone who always supports the good things I try to do and also honestly tells me when I'm wrong
              so I can become a better person. Not many people care enough to do that, but you always do.
            </p>

            <p>
              What I admire most about you is how real you are. No matter what the situation is, you stand by me and
              encourage me. Even when things are not easy for you, you still show up, like the time we went to Wonderla
              even when it wasn't simple for you. That meant more to me than you probably realize.
            </p>

            <p>
              You are not just someone who is very beautiful on the outside, but someone with a genuinely kind heart.
              The way you laugh, the way you care, and even the small things like your love for cats, coffee, and
              chocolates make you uniquely you.
            </p>

            <p className="font-medium text-rose-600">
              I just want you to know that having you in my life is something I truly value. You're not just my best
              friend — you're someone who makes my life better just by being in it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
