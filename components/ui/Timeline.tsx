import {
  Feather,
  GraduationCap,
  PencilLine,
  Rocket,
  Trophy,
  BriefcaseBusiness,
  Component,
} from "lucide-react";

// Fixed height for timeline cards to enable proper 3D flipping
const CARD_HEIGHT = "100px";

export default function Timeline() {
  const events = [
    {
      year: "2022",
      text: "Lending System",
      exp: "Baby Thesis",
      icon: Feather,
      squad: "RALPH MATTHEW, ANGELIQUE JOYCE, AZI",
    },
    {
      year: "2023",
      text: "Filenggwahe Thesis",
      exp: "Thesis",
      icon: GraduationCap,
      squad: "AZI, ANGELIQUE JOYCE, JESS LEE",
    },
    {
      year: "2023",
      text: "Resort Management System",
      exp: "Freelance",
      icon: PencilLine,
      squad: "AZI, ANGELIQUE JOYCE, JESS LEE",
    },
    {
      year: "2024",
      text: "Truck Scale System",
      exp: "Freelance",
      icon: Rocket,
      squad: "AZI",
    },
    {
      year: "2024",
      text: "Digital Payslip System",
      exp: "MinebeaMitsumi",
      icon: Trophy,
      squad: "AZI, DHAIENSCZEIL",
    },
    {
      year: "2025",
      text: "Manpower Control System",
      exp: "MinebeaMitsumi",
      icon: BriefcaseBusiness,
      squad: "MARK, DHAIENSCZEIL, AZI",
    },
  ];

  return (
    <div className="relative w-full max-w-3xl mx-auto z-20">
      {/* vertical line */}
      <div className="absolute left-1/2 top-0 h-full w-1 bg-gray-300 -translate-x-1/2"></div>

      <div className="space-y-12">
        {events.map((event, i) => {
          const Icon = event.icon;
          return (
            <div
              key={i}
              className={`flex items-center w-full relative z-10 ${
                i % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              <div className="w-1/2 px-4 group">
                {/* 2. Perspective Container - Defines the 3D viewing distance and card size */}
                <div
                  className="relative w-full cursor-pointer"
                  style={{ height: CARD_HEIGHT, perspective: "1000px" }}
                >
                  {/* 3. Flipper - Rotates 180deg on the Y-axis when the group is hovered */}
                  <div
                    className="relative w-full h-full transition-transform duration-700 ease-in-out group-hover:rotate-y-180"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {/* Front Face (Original Card Content) */}
                    <div
                      className="absolute inset-0 rounded-lg shadow-xl"
                      style={{ backfaceVisibility: "hidden" }}
                    >
                      <div className="p-4 bg-white/10 border border-gray-500 rounded-lg w-full h-full flex relative">
                        <div className="w-[80%] h-auto flex flex-col gap-[0.35rem] justify-center">
                          <h3 className="text-lg font-bold text-theme1-accent leading-none">
                            {event.year}
                          </h3>
                          <p className="text-theme-accent1 text-sm font-light leading-none">
                            {event.exp}
                          </p>
                          <p className="text-theme1-secondary text-xs font-light leading-none">
                            {event.text}
                          </p>
                        </div>
                        <div className="w-[20%] h-auto flex justify-end items-center">
                          <Icon className="w-4 h-4 text-theme-accent1" />
                        </div>
                      </div>
                    </div>

                    {/* Back Face (New Card/Overlay) */}
                    <div
                      className="absolute inset-0 rounded-lg shadow-xl"
                      style={{
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)", // Starts rotated, flips into view
                      }}
                    >
                      <div className="p-4 bg-black border border-gray-500 rounded-lg w-full h-full flex flex-col items-center justify-center text-center">
                        <Component className="w-10 h-10 text-theme1-secondary mb-2" />
                        <span className="text-theme1-accent text-xs font-semibold tracking-wide">
                          {event.squad}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* marker dot */}
              <div className="absolute left-1/2 w-4 h-4 bg-theme1-secondary rounded-full -translate-x-1/2 z-20"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
