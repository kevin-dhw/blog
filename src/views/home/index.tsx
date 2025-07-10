import React, { useState } from "react";
import classNames from "classnames";
import avatarImg from "./img/avatar.jpg";

const Home: React.FC = () => {
  const [tabs, setTabs] = useState([
    {
      isSelected: true,
      label: "Blog",
    },
    {
      isSelected: false,
      label: "Projects",
    },
    {
      isSelected: false,
      label: "Learn",
    },
    {
      isSelected: false,
      label: "Me",
    },
  ]);

  return (
    <div className=" flex justify-between p-[20px] items-center">
      <div className=" flex">
        {tabs.map((item, index) => {
          return (
            <div
              onClick={() => {
                console.log(12344, index);
                setTabs((data) => {
                  data.forEach((item, idx) => {
                    if (idx === index) {
                      item.isSelected = true;
                    } else {
                      item.isSelected = false;
                    }
                  });
                  return [...data];
                });
              }}
              key={index}
              className={classNames(
                " mr-[14px] text-gray-400 cursor-pointer text-[18px]",
                " hover:text-gray-600 duration-300 ease-in-out delay-100",
                item.isSelected && " text-black"
              )}
            >
              {item.label}
            </div>
          );
        })}
      </div>
      <div>
        <div className=" flex items-center">
          <span>Kevin Du </span>
          <img
            className=" w-[40px] h-[40px] rounded-full ml-[20px]"
            src={avatarImg}
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Home;
