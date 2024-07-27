"use client";

import Reused from "@/app/components/Reused";
import myData from "../../../components/data.json";
import { useEffect, useState } from "react";
const page = () => {
  let value = 0;
  const data = myData;

  let mainResult = data[value].ans;
  let mainQuestion = data[value].question;

  const [count, setCount] = useState<number>(1);

  useEffect(() => {
    let timer: NodeJS.Timer | null = null;

    if (count > 0) {
      timer = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
    }

    // Clean up the interval when count changes or component unmounts
    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [count]);

  return (
    <main>
      <div className="my-5 font-bold">{count % 10}</div>
      <Reused
        question={`Question #${value + 1}`}
        mainResult={mainResult}
        mainQuestion={mainQuestion}
        path="/level1/stage1/question2"
      />
    </main>
  );
};

export default page;
