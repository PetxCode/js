"use client";
import React, { FC, ReactNode } from "react";
import Header from "./Header";
import { useSelector } from "react-redux";

interface iEntry {
  children: ReactNode;
}

const MainEntry: FC<iEntry> = ({ children }) => {
  const toggle = useSelector((state: any) => state.toggle);

  return (
    <div
    //   className={`p-2 ${
    //     toggle! ? "bg-neutral-900 text-white" : "bg-white text-black"
    //   }`}
    >
      <Header />
      <div>{children}</div>
    </div>
  );
};

export default MainEntry;
