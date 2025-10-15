import Image from "next/image";
import Link from "next/link";
import { Highlighter } from "@/components/ui/highlighter";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <main>
      <section className="min-h-screen flex items-center justify-center font-[font4] bg-[#F8F8ff]">
        <div className="text-center p-9 md:p-20">
          <p className="text-4xl md:text-7xl">
            I'm{" "}
            <Highlighter action="underline" color="#FF9800">
              Bidhan
            </Highlighter>{" "}
            crafting{" "}
            <span className="block mt-4 md:mt-0 md:inline">
              <Highlighter action="highlight" color="#ff9800">
                digital experiences.
              </Highlighter>{" "}
            </span>
          </p>
        </div>
      </section>
      <section className="min-h-screen flex justify-center items-center bg-[#F8F8ff] font-[font4]">
        <div className=" text-start p-15 md:p-60 ">
          <ScrollReveal
            baseOpacity={5}
            enableBlur={true}
            baseRotation={5}
            blurStrength={10}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At ad eius
            est vel magnam esse laudantium earum repellendus reiciendis ipsa?!
          </ScrollReveal>
        </div>
      </section>
      <section className="min-h-screen flex bg-[#F8F8ff] font-[font4]">
        <div className=" text-start p-15 md:p-60">
          <ScrollReveal
            baseOpacity={5}
            enableBlur={true}
            baseRotation={5}
            blurStrength={10}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At ad eius
            est vel magnam esse laudantium earum repellendus reiciendis ipsa?!
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
