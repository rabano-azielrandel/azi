import Wave from "./ui/Wave";
import ExpSplitCard from "./ui/ExpSplitCard";

const expData = [
  {
    backgroundImage: "/images/EXP1.jpg",
    label: "INTERN",
    p: "Interned at Toyota Bataan Inc., focusing on design tasks and computer servicing to support the company’s technical operations.",
  },
  {
    backgroundImage: "/images/EXP2.jpg",
    label: "FREELANCE",
    p: "Worked as a freelance developer on resort management and truck scale systems, focusing on backend functionality and system reliability.",
  },
  {
    backgroundImage: "/images/EXP3.jpg",
    label: "CORPORATE",
    p: "Served as a Full Stack .NET Developer for Payroll and HR systems, leading the design and deployment of Payslip Automation features.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className={`relative w-full mt-10 sm:mt-40 bg-gradient-to-t from-theme-accent2 light:bg-gradient-to-t light:from-[#e9f1fa] light:to-[#F6F6F6]/10`}
    >
      <div
        className="relative w-full max-w-[1360px] mx-auto p-2 gap-10
      flex flex-col justify-center items-center z-10"
      >
        <h2
          className={`text-4xl font-oswald font-semibold text-center tracking-[8px] text-theme1-secondary light:text-theme1-base select-none cursor-default`}
        >
          EXPERIENCE
        </h2>

        <ExpSplitCard data={expData} />
      </div>

      <Wave className="absolute object-contain w-fit h-fit  transform scale-y-[-1]" />
    </section>
  );
}
