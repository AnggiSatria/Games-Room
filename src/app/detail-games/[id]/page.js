"use client";

import Detail from "@/components/detail-games/Detail";
import Navbar from "@/components/navbar/Navbar";
import React from "react";

export default function page({ params }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      <Detail params={params} />
    </main>
  );
}
