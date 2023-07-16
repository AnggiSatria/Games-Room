import React, { useEffect, useState } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { GAMES } from "@/lib/redux/service/admin/games/GET";
import Image from "next/image";
import { Ripple } from "primereact/ripple";
import Link from "next/link";
import { useRouter } from "next/router";
import { GAMES_ID } from "@/lib/redux/action/games/games";

function ListCard() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GAMES());
  }, []);

  const footer = (
    <div className="flex flex-wrap justify-content-end gap-2">
      <Button label="Save" icon="pi pi-check" />
      <Button
        label="Cancel"
        icon="pi pi-times"
        className="p-button-outlined p-button-secondary"
      />
    </div>
  );

  const GetGames = useSelector((state) => {
    return state.games.games;
  });

  console.log(GetGames);

  //   const router = useRouter();

  return (
    <div
      id="forOverFlowY"
      className="w-full  h-[750px] overflow-y-scroll overflow-x-hidden"
    >
      <div className="flex flex-wrap gap-3 w-full min-h-[300px] ">
        {GetGames?.map((e) => {
          return (
            <Link
              key={e?.id}
              className="max-w-[32.6%] min-w-[32.6%]  max-h-[384px] flex rounded-t-md"
              href={{
                pathname: `/detail-games/`,
                query: { id: e?.id },
              }}
              onClick={() => dispatch(GAMES_ID(e?.id))}
            >
              <Card
                key={e?.id}
                title={
                  e?.name?.length > 27 ? `${e?.name?.slice(0, 27)}...` : e?.name
                }
                subTitle={e?.genres?.map((e) => {
                  return `${e?.name}, `;
                })}
                //   footer={footer}
                header={
                  <Image
                    alt="Card"
                    className="w-full h-[200px] rounded-t-md"
                    src={e?.background_image}
                  />
                }
                className="w-full h-full cursor-pointer"
              >
                <p className="m-0">
                  {e?.parent_platforms?.map((e) => {
                    return `${e?.platform?.name}, `;
                  })}
                </p>
                <Ripple />
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default ListCard;
