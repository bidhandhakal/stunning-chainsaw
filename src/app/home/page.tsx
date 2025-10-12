import React from "react";
import Link from "next/link";
import gsap from "gsap";
export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <h1>Home Page</h1>
      <Link href="/">Go to </Link>
    </div>
  );
}
