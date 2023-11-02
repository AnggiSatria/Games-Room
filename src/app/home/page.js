"use client";

import Homepage from "@/components/home/Homepage";
import LandingPages from "@/components/landing-pages/LandingPages";
import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";

export default function Home({ params }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      <Homepage />
    </main>
  );
}
