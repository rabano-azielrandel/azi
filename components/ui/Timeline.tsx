export default function Timeline() {
  const events = [
    { year: "2020", text: "Started my CS journey" },
    { year: "2021", text: "Built my first project" },
    { year: "2022", text: "Internship in software dev" },
    { year: "2023", text: "Graduated 🎓" },
  ];

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      {/* vertical line */}
      <div className="absolute left-1/2 top-0 h-full w-1 bg-gray-300 -translate-x-1/2"></div>

      <div className="space-y-12">
        {events.map((event, i) => (
          <div
            key={i}
            className={`flex items-center w-full ${
              i % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            <div className="w-1/2 px-4">
              <div className="bg-white/10 border border-gray-500 rounded-lg p-4 shadow-md">
                <h3 className="text-lg font-bold text-white">{event.year}</h3>
                <p className="text-gray-300 text-sm">{event.text}</p>
              </div>
            </div>
            {/* marker dot */}
            <div className="absolute left-1/2 w-4 h-4 bg-theme1-secondary rounded-full -translate-x-1/2"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
