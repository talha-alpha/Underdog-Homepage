interface Event {
  title: string;
  type: "session" | "camp" | "clinic" | "networking";
  date: string;
  time: string;
  price: string;
  trainer: string;
  location: string;
  jobTitle: string;
}

const popularEvents: Event[] = [
  {
    title: "Kids' Fun Run and Play Day",
    type: "session",
    date: "Jan 15–23",
    time: "3:00 pm - 5:00 pm",
    price: "$90-$150",
    trainer: "Max Anderson",
    location: "Central Park, New York City",
    jobTitle: "Job title",
  },
  {
    title: "Family Adventure Race and Picnic",
    type: "camp",
    date: "Feb 15 – Mar 3",
    time: "3:00 pm - 5:00 pm",
    price: "$95-$155",
    trainer: "Emma Thompson",
    location: "Central Park, New York City",
    jobTitle: "Job title",
  },
  {
    title: "Junior Champions",
    type: "clinic",
    date: "May 20",
    time: "11:15 am",
    price: "$75",
    trainer: "All-Star Sports",
    location: "Central Park, New York City",
    jobTitle: "Job title",
  },
  {
    title: "Active Adventures",
    type: "networking",
    date: "Apr 5",
    time: "4:30 pm",
    price: "$85-$145",
    trainer: "Active Adventures",
    location: "Central Park, New York City",
    jobTitle: "Job title",
  },
  {
    title: "Game Changers Sports Week",
    type: "camp",
    date: "Jun 30",
    time: "9:00 am",
    price: "$70-$130",
    trainer: "Peak Performance Kids",
    location: "Central Park, New York City",
    jobTitle: "Job title",
  },
  {
    title: "Fit & Fun Academy",
    type: "clinic",
    date: "Mar 10",
    time: "1:00 pm",
    price: "$80-$140",
    trainer: "Fit & Fun Academy",
    location: "Central Park, New York City",
    jobTitle: "Job title",
  },
];

export default function EventsSection() {
  const getTypeColor = (type: Event["type"]) => {
    const colors = {
      session: "bg-blue-100 text-blue-700",
      camp: "bg-green-100 text-green-700",
      clinic: "bg-purple-100 text-purple-700",
      networking: "bg-orange-100 text-orange-700",
    };
    return colors[type];
  };

  return (
    <section className="py-20 bg-primary-darker">
      <div className="max-w-7xl mx-auto px-6 lg:px-24">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            DISCOVER TRAINERS & EVENTS
            <br />
            NEAR YOU.
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Underdog gives each role the tools they need - from instant booking and secure payments to smart scheduling and growth dashboards.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {popularEvents.map((event, index) => (
            <div
              key={index}
              className="bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all"
            >
              {/* Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500"></div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(
                      event.type
                    )}`}
                  >
                    {event.type}
                  </span>
                  <span className="text-sm font-semibold text-white">
                    {event.price}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2">
                  {event.title}
                </h3>

                <div className="space-y-2 text-sm text-white/60">
                  <p>{event.trainer}</p>
                  <p className="text-xs text-white/40">{event.jobTitle}</p>
                  <p>{event.location}</p>
                  <p>
                    {event.date}, {event.time}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
            Join Waitlist
          </button>
        </div>
      </div>
    </section>
  );
}
