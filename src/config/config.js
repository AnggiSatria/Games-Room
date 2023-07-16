"use client";

const token = sessionStorage.getItem("token");
const token2 = localStorage.getItem("token");

export const Config = {
  headers: {
    Authorization: `Bearer ${token2}`,
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
};

export const Config2 = {
  headers: {
    Authorization: `Bearer ${token2}`,
    "content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
};

export const Config3 = {
  headers: {
    Authorization: `Bearer ${token}`,
    "content-type": "multipart/form-data",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
};

export const Config4 = {
  headers: {
    "X-RapidAPI-Key": "78fa3defe3msh26265bfec6503ccp142bafjsn94a355181ec4",
    "X-RapidAPI-Host": "rawg-video-games-database.p.rapidapi.com",
  },
};

export const apiKey = "7f2d052ea0fc4fc394e463de3f6903b0";
