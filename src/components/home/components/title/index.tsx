import React, { useState } from "react";
import imgAvatar from "../../img/avatar.jpg";

const Title: React.FC = () => {
  const [imgArr] = useState([
    {
      src: imgAvatar,
    },
    {
      src: imgAvatar,
    },
  ]);
  return (
    <div className=" h-[280px]">
      <div className=" h-[150px] w-full flex pt-[50px]">
        <div className=" pl-[200px]">
          <img
            className=" w-[150px] h-[150px] rounded-full"
            src={imgAvatar}
          ></img>
        </div>
        <div className=" pl-[50px]">
          <div className=" text-[48px] mt-[-5px]">Kevin Du</div>
          <div className=" text-gray-400">React ｜ Typescript</div>
          <div className=" pt-[16px] flex">
            {imgArr.map((item, index) => {
              return (
                <img
                  key={index}
                  className=" w-[36px] h-[36px] rounded-full mr-[20px] cursor-pointer"
                  src={item.src}
                ></img>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Title;
