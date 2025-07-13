import React from "react";
import classNames from "classnames";
import avatarImg from "./img/avatar.jpg";
import linkedIn from "./img/linkedIn.jpeg";
import github from "./img/github.jpeg";
import gmail from "./img/gmail.jpg";
import useTabStore from "../../store/useTabStore";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const { tabs, changeTabs } = useTabStore();
  const navigate = useNavigate();

  return (
    <div>
      <div className=" flex justify-between p-[20px] items-center">
        <div className=" flex">
          {tabs.map((item, index) => {
            return (
              <div
                onClick={() => {
                  changeTabs(index);
                  setTimeout(() => {
                    navigate(`/${item.url}`);
                  }, 200);
                }}
                key={index}
                className={classNames(
                  " mr-[14px] text-gray-400 cursor-pointer text-[18px]",
                  " hover:text-gray-600 duration-300 ease-in-out delay-100",
                  item.isSelected && " text-[#000] font-bold"
                )}
              >
                {item.label}
              </div>
            );
          })}
        </div>
        <div>
          <div className=" flex items-center">
            <img
              className=" w-[26px] h-[26px] rounded-lg ml-[20px] cursor-pointer"
              src={gmail}
            ></img>
            <img
              className=" w-[26px] h-[26px] rounded-lg ml-[20px] cursor-pointer"
              src={github}
            ></img>
            <img
              className=" w-[26px] h-[26px] rounded-lg ml-[20px] cursor-pointer"
              src={linkedIn}
            ></img>
            <img
              className=" w-[40px] h-[40px] rounded-full ml-[20px]"
              src={avatarImg}
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
