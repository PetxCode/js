"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { FC, useEffect, useState } from "react";

interface iProps {
  text?: string;
  path?: string;
  setText?: React.Dispatch<React.SetStateAction<string>> | undefined;

  question?: string;
  mainQuestion?: string | string[];

  mainResult?: string;
}

const Reused: FC<iProps> = ({ mainResult, path, question, mainQuestion }) => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [text, setText] = useState<string>("");

  const handleResult = (a: string, b: string) => {
    if (a === b) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  };

  useEffect(() => {
    handleResult(mainResult!, text!);
  }, [text]);

  console.log(text);

  return (
    <div>
      <section>
        <main className="p-2 border rounded-md">
          <div className={`w-full h-[calc(100vh-30px)]`}>
            <div>
              <main>This is {question}</main>

              <div className=" mt-10 min-h-[400px] w-full border rounded-md mb-10 ">
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
                  >
                    <Link href={path!}>Next</Link>
                  </Button>
                </form>
                <div className="p-10 text-[14px]">
                  <br />
                  <span className="italic font-semibold">
                    {mainQuestion}
                  </span>{" "}
                  <strong></strong>
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
};

export default Reused;
