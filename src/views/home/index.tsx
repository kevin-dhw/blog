import React, { useState } from "react";
import Title from "./components/title";
import Tab from "./components/tab";

const Home: React.FC = () => {
  const [idx, setIdx] = useState(0);
  const getCurItemIdx = (idx: number) => {
    setIdx(idx);
  };
  return (
    <div className=" flex flex-col">
      <Title></Title>
      <Tab getCurItemIdx={getCurItemIdx}></Tab>
      <div className=" p-[20px] px-[200px]">
        {idx === 0 && <div>000000</div>}
        {idx === 1 && <div>111111</div>}
        {idx === 2 && <div>222222</div>}
        {idx === 3 && <div>333333</div>}
      </div>
    </div>
  );
};

export default Home;
