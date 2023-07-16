import { GAMES_ID } from "@/lib/redux/action/games/games";
import { GAMESDETAILBYID } from "@/lib/redux/service/admin/games/GET";
import Image from "next/image";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function Detail() {
  const dispatch = useDispatch();

  const GetID = useSelector((state) => {
    return state.games.games_id;
  });

  const GetGamesById = useSelector((state) => {
    return state.games.games_details;
  });

  console.log(GetGamesById);

  useEffect(() => {
    dispatch(GAMES_ID());
    dispatch(GAMESDETAILBYID(GetID));
  }, []);

  return (
    <div className="w-full md:h-[550px]  flex mt-20">
      <div className="md:w-[50%] md:h-full  justify-center items-center flex">
        <div className="md:w-3/4 md:h-[500px] bg-white drop-shadow rounded-md p-1.5">
          <Image
            src={GetGamesById?.background_image}
            className="w-full h-full rounded-md"
          />
        </div>
      </div>
      <div className="md:w-[50%] md:h-full  flex flex-col overflow-y-scroll gap-1.5">
        <label className="w-full h-full flex text-md font-semibold text-[#0a0a0a] leading-4">
          Name :
        </label>
        <label className="w-full h-full flex text-sm font-normal text-[#0a0a0a] leading-4">
          {GetGamesById?.name}
        </label>
        <label className="w-full h-full flex text-md font-semibold text-[#0a0a0a] leading-4">
          Genre :
        </label>
        <label className="w-full h-full flex text-sm font-normal text-[#0a0a0a] leading-4">
          {GetGamesById?.genres?.map((e) => {
            return `${e?.name}, `;
          })}
        </label>
        <label className="w-full h-full flex text-md font-semibold text-[#0a0a0a] leading-4">
          Ratings :
        </label>
        <label className="w-full h-full flex text-sm font-normal text-[#0a0a0a] leading-4">{`${GetGamesById?.rating}/${GetGamesById?.rating_top}`}</label>
        <label className="w-full h-full flex text-md font-semibold text-[#0a0a0a] leading-4">
          Platforms :
        </label>
        <label className="w-full h-full flex text-sm font-normal text-[#0a0a0a] leading-4">
          {GetGamesById?.parent_platforms?.map((e) => {
            return `${e.platform?.name}, `;
          })}
        </label>
        <label className="w-full h-full flex text-md font-semibold text-[#0a0a0a] leading-4">
          Released :
        </label>
        <label className="w-full h-full flex text-sm font-normal text-[#0a0a0a] leading-4">
          {GetGamesById?.released}
        </label>
        <label className="w-full h-full flex text-md font-semibold text-[#0a0a0a] leading-4">
          Description :
        </label>
        <label className="w-full h-full flex text-sm font-normal text-[#0a0a0a] leading-4">
          {GetGamesById?.description_raw}
        </label>
      </div>
    </div>
  );
}

export default Detail;
