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
        <Button variant="link" className="text-white text-2xl" asChild>
          <a
            href="https://github.com/bidhandhakal"
            target="_blank"
            rel="noopener noreferrer"
          >
            @bidhandhakal
          </a>
        </Button>
        <Link href="/home">Go to </Link>
      </div>
      <div className="flex items-center justify-end p-40 h-screen bg-[#0A0A0A]">
        <DecayCard width={250} height={300}></DecayCard>
      </div>
    </div>
  );
}
