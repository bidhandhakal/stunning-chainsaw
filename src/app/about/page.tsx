import React from "react";
import Link from "next/link";
import gsap from "gsap";
import DecayCard from "@/components/DecayCard";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
export default function aboutpage() {
  return (
    <div className="h-screen bg-[#f8f8ff] font-[font1]">
      <div className="absolute top-5 md:top-0 left-4 md:left-0 p-6 md:p-15 flex items-center text-black">
        <Avatar className="w-12 h-12 md:w-15 md:h-15">
          <AvatarImage src="https://github.com/bidhandhakal.png" />
          <AvatarFallback>BD</AvatarFallback>
        </Avatar>
        <div className="ml-2 text-2xl md:text-3xl font-[font4] uppercase">
          Bidhan
        </div>
      </div>
    </div>
  );
}
