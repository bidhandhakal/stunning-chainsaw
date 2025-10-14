import Image from "next/image";
import Link from "next/link";
import { Highlighter } from "@/components/ui/highlighter";
import { div } from "framer-motion/client";

export default function Home() {
  return (
    <main>
      <section className="min-h-screen flex items-center justify-center font-[font4] bg-white">
        <div className="text-center text-7xl">
          <p className="leading-relaxed">
            I'm{" "}
            <Highlighter action="underline" color="#FF9800">
              Bidhan
            </Highlighter>{" "}
            crafting{" "}
            <Highlighter action="highlight" color="#ff9800">
              digital experiences.
            </Highlighter>{" "}
          </p>
        </div>
      </section>
      <section className="min-h-screen flex justify-center items-center bg-red-600">
        <h2 className="text-6xl text-white">Section 2</h2>
      </section>
      <section className="min-h-screen flex justify-center items-center bg-blue-600">
        <h2 className="text-6xl text-white">Section 3</h2>
      </section>
    </main>
  );
}
