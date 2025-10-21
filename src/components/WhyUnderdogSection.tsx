export default function WhyUnderdogSection() {
  const reasons = [
    {
      title: "BUILT TO SCALE",
      description:
        "Grow seamlessly from one trainer to full academies, with tools designed to expand as you do.",
    },
    {
      title: "AFFORDABLE PRICES",
      description:
        "Professional software without the enterprise price tag - starting at just $19.99/month.",
    },
    {
      title: "MODERN & INTUITIVE",
      description:
        "Mobile-first, Stripe-native, and cleanly designed - built for trainers, parents, and academies",
    },
  ];

  return (
    <section className="py-20 bg-primary-darker">
      <div className="max-w-7xl mx-auto px-6 lg:px-24">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            WHY UNDERDOG STANDS OUT?
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Built for trainers and academies, by trainers and academies. We're not another generic booking tool & we are JUST getting started…
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-all"
            >
              <h3 className="text-xl font-bold text-white mb-4">
                {reason.title}
              </h3>
              <p className="text-white/60">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
