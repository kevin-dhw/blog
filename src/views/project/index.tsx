import React from "react";
import Home from "../../components/home";
import avatarImg from "../../assets/img/avatar.jpg";
import classNames from "classnames";
import ProjectItem from "./item";
import useProjectStore from "../../store/useProjectStore";

const Project: React.FC = () => {
  const { componyProject } = useProjectStore();
  return (
    <div className=" h-screen w-full bg-black flex flex-col">
      <Home></Home>
      <div className=" px-[180px] text-gray-500 h-[calc(100%-100px)] overflow-scroll">
        <div>
          <div className=" text-[24px] pb-[14px]">compony's projects</div>
          <div className=" flex flex-wrap">
            {componyProject.map((item, idx) => {
              return <ProjectItem key={idx} item={item} />;
            })}
            <div
              className={classNames(
                "w-[250px] h-[450px] bg-[#171717] rounded-md overflow-hidden cursor-pointer mb-[20px]",
                "hover:scale-105 transition-transform duration-300 ease-in-out "
              )}
            >
              <img src={avatarImg} className=" h-[250px] w-[300px]"></img>
              <div className=" p-[12px] text-[20px]">
                <div>name: Project</div>
                <div>address: Project</div>
                <div>repo: Project</div>
                <div>tech stack: Project</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Project;
