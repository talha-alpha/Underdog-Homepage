interface Trainer {
  name: string;
  title: string;
  location: string;
  available: boolean;
  image?: string;
}

const popularTrainers: Trainer[] = [
  {
    name: "Mark Johnson",
    title: "Fitness and Activities Instructor",
    location: "Central Park, New York City",
    available: true,
  },
  {
    name: "Alex Brown",
    title: "Youth Sports Coach",
    location: "Central Park, New York City",
    available: true,
  },
  {
    name: "Jane Smith",
    title: "Recreational Athletics Trainer",
    location: "Central Park, New York City",
    available: true,
  },
];

export default function TrainersSection() {
  return (
    <section className="py-20 bg-primary-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-24">
        {/* Heading */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Popular trainers
          </h2>
        </div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularTrainers.map((trainer, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all"
            >
              {/* Image Placeholder */}
              <div className="h-64 bg-gradient-to-br from-indigo-400 to-cyan-400"></div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-white">
                    {trainer.name}
                  </h3>
                  {trainer.available && (
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                      available
                    </span>
                  )}
                </div>

                <p className="text-white/60 mb-2">{trainer.title}</p>
                <p className="text-sm text-white/40">{trainer.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
