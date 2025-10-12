import Image from "next/image";
import DecayCard from "@/components/DecayCard";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen bg-[#0A0A0A]">
      <div className="absolute top-0 left-0 p-15 flex items-center text-white">
        <Avatar>
          <AvatarImage src="https://github.com/bidhandhakal.png" />
          <AvatarFallback>BD</AvatarFallback>
        </Avatar>
        <Link href="/home">Go to </Link>
      </div>

      <Button
        variant="link"
        className="text-white text-2xl flex absolute items-center bottom-32 right-40"
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

      <div className="flex items-center justify-end p-40 h-screen bg-[#0A0A0A]">
        <DecayCard width={350} height={450}></DecayCard>
      </div>
    </div>
  );
}
