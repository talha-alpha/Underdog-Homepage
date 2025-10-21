export default function CaseStudySection() {
  return (
    <section className="py-20 bg-primary-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-24">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            DIVINETIME ACADEMY'S
            <br />
            EXPLOSIVE GROWTH -
            <br />
            POWERED BY UNDERDOG.
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            DivineTime academy started with 40 players. The next summer, they scaled to 6 camps across multiple cities, serving 250+ athletes - all without extra admin work.
          </p>
        </div>

        {/* Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* With Others */}
          <div className="bg-red-500/10 border-2 border-red-500/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              WITH OTHERS
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-white/60">Events</span>
                <span className="text-3xl font-bold text-red-600">10</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/60">Camps</span>
                <span className="text-3xl font-bold text-red-600">1</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/60">Players</span>
                <span className="text-3xl font-bold text-red-600">40</span>
              </div>
              <div className="mt-6 text-center">
                <span className="inline-block px-4 py-2 bg-red-200 text-red-800 rounded-full font-medium">
                  Less Reach
                </span>
              </div>
            </div>
          </div>

          {/* With Underdog */}
          <div className="bg-green-500/10 border-2 border-green-500/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              WITH UNDERDOG
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-white/60">Events</span>
                <span className="text-3xl font-bold text-green-600">40</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/60">Camps</span>
                <span className="text-3xl font-bold text-green-600">6</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/60">Players</span>
                <span className="text-3xl font-bold text-green-600">250</span>
              </div>
              <div className="mt-6 text-center">
                <span className="inline-block px-4 py-2 bg-green-200 text-green-800 rounded-full font-medium">
                  More Reach
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
