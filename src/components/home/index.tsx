import React from "react";
import classNames from "classnames";
import avatarImg from "../../assets/img/avatar.jpg";
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
                  " mr-[14px] text-gray-400 cursor-pointer text-[24px]",
                  " hover:text-gray-600 duration-300 ease-in-out delay-100",
                  item.isSelected && " text-[#000] font-bold border-b "
                )}
              >
                {item.label}
              </div>
            );
          })}
        </div>
        <div>
          <div className=" flex items-center">
            <div className=" text-gray-500 text-[22px]">Kevin Du</div>
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
