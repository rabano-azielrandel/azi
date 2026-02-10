interface FeatTakeProps {
  description?: string;
}

const default_desc = `Lorem Ipsum is simply dummy text of the printing and typesetting
industry. Lorem Ipsum has been the industry's standard dummy text ever
since the 1500s.`;

export default function FeatTake({ description }: FeatTakeProps) {
  return (
    <div className="flex w-full px-20 py-10 text-theme1-secondary">
      <div className="flex flex-col w-full gap-4">
        <p className="text-xl font-medium">Quick Take</p>
        <p className="text-3xl font-semibold">
          GENERAL OVERVIEW OF THE PROJECT
        </p>
      </div>
      <div className="w-full">
        <p className="text-xl font-normal tracking-wide text-balance">
          {description ? description : default_desc}
        </p>
      </div>
    </div>
  );
}
