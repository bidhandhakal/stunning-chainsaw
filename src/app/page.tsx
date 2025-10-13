import Image from "next/image";
import Link from "next/link";
import { Highlighter } from "@/components/ui/highlighter";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center font-[font4]">
      <div className="text-center text-5xl">
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
    </div>
  );
}
