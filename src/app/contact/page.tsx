import React from "react";
import Link from "next/link";
import { Highlighter } from "@/components/ui/highlighter";
type Props = {};

const page = (props: Props) => {
  return (
    <div className="flex justify-center items-center min-h-screen text-9xl font-[font4]  bg-[#F8F8ff]">
      <Link href="/">
        <section className="min-h-screen flex items-center justify-center font-[font4]">
          <div className="text-center p-2 md:p-20">
            <p className="text-4xl md:text-7xl">
              Bandai xa{" "}
              <Highlighter action="underline" color="#FF9800">
                Home
              </Highlighter>{" "}
              ma ja{" "}
              <span className="block mt-4 md:mt-0 md:inline">
                <Highlighter action="highlight" color="#ff9800">
                  jatho.
                </Highlighter>{" "}
              </span>
            </p>
          </div>
        </section>
      </Link>
    </div>
  );
};

export default page;
