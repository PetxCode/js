"use client";

import Reused from "@/app/components/Reused";

const page = () => {
  let mainResult = `james is being lazy`;
  return (
    <Reused
      mainResult={mainResult}
      mainQuestion={`What is the state of James?`}
      question="Question #2"
      path="/level1/stage1/question3"
    />
  );
};

export default page;
