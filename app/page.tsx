import FloatingTechStacks from "@/components/FloatingTechStacks";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-[#0e0818] h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      {/* hero section */}
      <section
        id="me"
        className="relative w-full h-screen overflow-hidden px-40 snap-start  shadow-[0_4px_44.7px_22px_rgba(0,0,0,.5)_inset]"
      >
        <Image
          src={"/images/dots1.png"}
          alt={"asdf"}
          width={500}
          height={500}
          className="object-contain w-[1100px] h-auto absolute -bottom-0 left-[0%] opacity-[20%] contrast-0"
        />

        <div className="relative flex justify-start items-center w-full h-full">
          <div className="justify-center items-center w-[50%]">
            <FloatingTechStacks />
          </div>

          {/* <Image
            src={"/images/cat3.png"}
            alt={"asdf"}
            width={500}
            height={500}
            className="object-contain w-[700px] h-auto absolute -bottom-0 left-[0%]"
          /> */}

          <div className="ml-auto relative">
            <Image
              src={"/images/me-pic.png"}
              alt={"asdf"}
              width={500}
              height={500}
              className="z-10 object-contain w-[500px] h-auto"
            />

            <div className="absolute -top-0 -left-50 flex flex-col">
              <span className="text-[100px] font-sans font-extrabold leading-[60%] tracking-[0px] text-[#3de9c4]">
                Aziel <br /> Randel
              </span>

              <Image
                src={"/images/dots2.png"}
                alt={"asdf"}
                width={500}
                height={500}
                className="object-contain w-[500px] h-auto absolute  top-[70%] -left-[20%] opacity-20 contrast-0"
              />

              <span className="text-[16px] font-thin mt-10 tracking-[8px] pr-100 max-w-fit">
                an aspiring web developer based in the philippines
              </span>
            </div>

            <div className="absolute -left-60 bottom-10 flex items-center gap-2">
              <Link
                href={"#projects"}
                className="text-[26px] font-bold text-[#3de9c4]"
              >
                view projects
              </Link>
              <div className="w-[200px] h-[6px] rounded-full bg-[#cbd5e1] border-[1px] border-black"></div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="w-full h-screen flex justify-center items-center bg-[#232029] snap-start"
      >
        Projects
      </section>

      <section
        id="experience"
        className="w-full h-screen flex justify-center items-center bg-[#0e0818] snap-start"
      >
        Experience
      </section>

      <section
        id="hobbies"
        className="w-full h-screen flex justify-center items-center bg-[#232029] snap-start"
      >
        Hobbies
      </section>

      <section
        id="socials"
        className="w-full h-screen flex justify-center items-center bg-[#0e0818] snap-start"
      >
        Socials
      </section>

      <section
        id="contacts"
        className="w-full h-screen flex justify-center items-center bg-[#232029] snap-start"
      >
        Contacts
      </section>
    </main>
  );
}
