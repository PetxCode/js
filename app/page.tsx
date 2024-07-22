"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { changeUser } from "./global/slice";

const page = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState<string>("");
  const [toggle, setToggle] = useState<boolean>(false);

  const onChangeToggle = () => {
    if (text !== "") {
      setToggle(true);
    } else {
      setToggle(false);
    }
  };

  useEffect(() => {
    onChangeToggle();
  }, [text]);
  return (
    <div>
      <form className="w-[500px] p-4 ">
        <div>
          <label className="font-semibold mb-2 text-[12px] ">
            Enter the right code
          </label>
          <textarea
            className="w-full p-2 h-[150px] resize-none border rounded-md"
            name="text"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
        </div>

        <Button
          type="submit"
          variant={"destructive"}
          disabled={!toggle}
          className="px-8 mt-5"
          onClick={() => {
            dispatch(changeUser(text!));
          }}
        >
          <Link href={"/level1/stage1/question1"}>Let Go!</Link>
        </Button>
      </form>
    </div>
  );
};

export default page;
