import Image from "next/image";
import DecayCard from "@/components/DecayCard";
import gsap from "gsap";

export default function Home() {
  return (
    <div>

    
   <div className="flex items-start justify-end h-screen p-40 bg-black">
    <DecayCard width={200} height={300}>
    </DecayCard>
   </div>
   </div>
  );
}
