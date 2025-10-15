import React from "react";
import Link from "next/link";
import { Highlighter } from "@/components/ui/highlighter";
type Props = {};

const page = (props: Props) => {
  return (
    <div className="flex justify-center items-center min-h-screen text-9xl font-[font4]">
      <Link href="/">
        <p className="text-7xl">
          Bandai xa{" "}
          <Highlighter action="underline" color="#FF9800">
            Home
          </Highlighter>{" "}
          ma ja{" "}
          <Highlighter action="highlight" color="#ff9800">
            Jatho.
          </Highlighter>{" "}
        </p>
      </Link>
    </div>
  );
};

export default page;
