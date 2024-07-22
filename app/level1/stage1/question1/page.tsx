"use client";

import Reused from "@/app/components/Reused";
import myData from "../../../components/data.json";
import { useEffect, useState } from "react";
const page = () => {
  let value = 0;
  const data = myData;

  let mainResult = data[value].ans;
  let mainQuestion = data[value].question;

  const [count, setCount] = useState<number>(0);

  //   useEffect(() => {
  //     const time: NodeJS.Timer;
  //     if (count > 0) {
  //       let time = setInterval(() => {
  //         setCount((el) => el + 1);
  //         clearInterval(time);
  //       }, 1000);
  //     }
  //   }, [count]);

  return (
    <main>
      {/* <div className="my-5 font-bold">{count}</div> */}
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
