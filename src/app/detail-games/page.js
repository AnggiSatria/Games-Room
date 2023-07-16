"use client";

import Detail from "@/components/detail-games/Detail";
import Nav from "@/components/navbar/Nav";
import { GAMES_ID } from "@/lib/redux/action/games/games";
import { GAMESDETAILBYID } from "@/lib/redux/service/admin/games/GET";
import Image from "next/image";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function page() {
  return (
    <div className="w-full h-[720px] p-3">
      <Nav />
      <Detail />
    </div>
  );
}

export default page;
