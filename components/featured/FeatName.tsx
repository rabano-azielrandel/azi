import { mainModule } from "process";

interface FeatNameProps {
  name: string;
  subdesc: string;
}

export default function FeatName({ name, subdesc }: FeatNameProps) {
  return (
    <div className="flex flex-col w-full h-64">
      <div className="flex flex-col w-full h-2/3 mt-20 px-20 gap-4 justify-center text-theme1-secondary">
        <h2 className="text-6xl font-semibold tracking-wider">{name}</h2>
        <p className="text-xl font-medium tracking-wide">{subdesc}</p>
      </div>
    </div>
  );
}
