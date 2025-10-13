import React from "react";
import Link from "next/link";
import gsap from "gsap";
import DecayCard from "@/components/DecayCard";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
export default function aboutpage() {
  return (
    <div className="h-screen bg-[#b4b4b4] font-[font1]">
      <div className="absolute top-0 left-0 p-15 flex items-center text-black">
        <Avatar>
          <AvatarImage src="https://github.com/bidhandhakal.png" />
          <AvatarFallback>BD</AvatarFallback>
        </Avatar>
        <Link href="/">Go to </Link>
      </div>

      <Button
        variant="link"
        className="text-black text-2xl flex absolute items-center bottom-32 right-40"
        asChild
      >
        <a
          href="https://github.com/bidhandhakal"
          target="_blank"
          rel="noopener noreferrer"
        >
          @bidhandhakal
        </a>
      </Button>

      <div className="flex items-center justify-end p-40 h-screen bg-[#ffffff]">
        <DecayCard width={350} height={450}></DecayCard>
      </div>
    </div>
  );
}
