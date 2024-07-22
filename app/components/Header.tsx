"use client";

import React, { useState } from "react";
import { IoMdMoon } from "react-icons/io";
import { MdOutlineWbSunny } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { toggleMode } from "../global/slice";
import { ModeToggle } from "./Mode";

const Header = () => {
  const dispatch = useDispatch();

  const toggle = useSelector((state: any) => state.toggle);

  return (
    <div className="w-full flex items-center gap-2 justify-end p-4">
      <ModeToggle />
      <div>{toggle ? "Dark" : "Light"}</div>
      <button
        onClick={() => {
          dispatch(toggleMode());
        }}
        className={`w-10 h-10 text-[20px] font-bold rounded-full hover:bg-slate-100 duration-300 transition-all  flex justify-center items-center cursor-pointer   ${
          toggle ? "text-white hover:text-neutral-900 " : " text-neutral-900 "
        }`}
      >
        {toggle ? <IoMdMoon /> : <MdOutlineWbSunny />}
      </button>
    </div>
  );
};

export default Header;
