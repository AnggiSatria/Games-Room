"use client";

import ListCard from "@/components/landing-page/ListCard";
import Nav from "@/components/navbar/Nav";
import { CHECKAUTH } from "@/lib/redux/service/users/check-auth/checkAuth";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const [active, setActive] = useState();

  const dispatch = useDispatch();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between gap-3 px-10 py-24">
      <Nav />
      <ListCard />
    </main>
  );
}
