"use client";

import LandingPages from "@/components/landing-pages/LandingPages";
import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <LandingPages />
    </main>
  );
}
