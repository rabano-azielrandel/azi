import Image from "next/image";
import Link from "next/link";

interface FeatLinkProps {
  link?: string;
}

export default function FeatLink({ link }: FeatLinkProps) {
  return (
    <div className="flex w-full gap-4 px-20 bg-theme1-secondary">
      <Image
        src={link ? "/images/link-cat.png" : "/images/no-link-cat.png"}
        alt="sorry"
        width={1000}
        height={1000}
        className={`object-contain transition-all ${
          link ? "h-64 w-64" : "h-60 w-60"
        }`}
      />
      <div className="flex flex-col w-full justify-center gap-4 px-20 text-theme1-base">
        {link ? (
          <>
            <p className="text-2xl font-semibold text-balance">
              Behold! My creation lives here.
            </p>
            <Link href={link}>{link}</Link>
          </>
        ) : (
          <p className="text-2xl font-semibold text-balance">
            That system has officially gone corporate! It was bought out by the
            private sector, so I no longer have the clearance to manage it.
          </p>
        )}
      </div>
    </div>
  );
}
