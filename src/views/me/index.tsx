import React from "react";
import Home from "../../components/home";
import avatar from "../../assets/img/avatar.jpg";

const Me: React.FC = () => {
  return (
    <div className=" h-screen w-full bg-black flex flex-col">
      <Home></Home>
      <div className="h-[calc(100%-80px)] px-[180px] pb-[20px] flex-1">
        <div className=" flex gap-5 text-white h-full">
          <div className=" w-[300px] h-[100%] bg-[#171717] rounded-xl">
            <div className=" flex flex-col items-center pt-[80px]">
              <div className=" rounded-full border border-white">
                <img
                  src={avatar}
                  className=" w-[80px] h-[80px] rounded-full"
                ></img>
              </div>
              <div className=" text-[20px] pt-[10px]">Kevin Du</div>
              <div className=" text-gray-500">do something I like</div>
              <div className=" w-[calc(100%-30px)] border border-dotted border-gray-400 my-[20px]"></div>
              <div className=" text-gray-500 px-[15px]">
                &nbsp; &nbsp; &nbsp;Hi! Nice to meet you. I'm a web developer
                from China 🇨🇳.
              </div>
              <div className=" w-[calc(100%-30px)] border border-dotted border-gray-400 my-[20px]"></div>
              <div className=" text-gray-500 px-[15px]">
                React | React Native | NextJs | Prisma | TypeScript | JavaScript
                | HTML | CSS | SaSS | Tailwind | ExpressJS | NodeJS | MoggDB
              </div>
              <div className=" w-[calc(100%-30px)] border border-dotted border-gray-400 my-[20px]"></div>
            </div>
            <div className=" px-[20px] text-gray-500">
              <div>地址</div>
              <div>邮箱</div>
              <div>链接</div>
              <div>linkedin</div>
            </div>
          </div>
          <div className=" flex-1 overflow-y-scroll h-full mb-5">
            <div>Work Experience</div>
            {Array.from({ length: 200 }).map((_, i) => (
              <div key={i} className="py-2 border-b">
                Item {i + 1}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Me;
