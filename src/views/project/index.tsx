import React, { useState, useRef } from "react";
import Home from "../../components/home";
import ProjectItem from "./components/item";
import useProjectStore from "../../store/useProjectStore";
import Detail, { DetailRef } from "./components/detail";

const Project: React.FC = () => {
  const { componyProject, personalProject, demoProject } = useProjectStore();
  const [curItem, setCurItem] = useState({});
  const detailRef = useRef<DetailRef>(null);

  return (
    <div className=" h-screen w-full bg-black flex flex-col">
      <Home></Home>
      <div className=" px-[180px] text-gray-500 h-[calc(100%-100px)] overflow-scroll">
        <div>
          <div className=" text-[24px] pb-[14px]">compony's projects</div>
          <div className=" flex flex-wrap">
            {componyProject.map((item, idx) => {
              return (
                <div
                  onClick={() => {
                    setCurItem(item);
                    detailRef.current?.open();
                  }}
                >
                  <ProjectItem key={idx} item={item} />
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <div className=" text-[24px] pb-[14px]">personal projects</div>
          <div className=" flex flex-wrap">
            {personalProject.map((item, idx) => {
              return (
                <div
                  onClick={() => {
                    setCurItem(item);
                    detailRef.current?.open();
                  }}
                >
                  <ProjectItem key={idx} item={item} />
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <div className=" text-[24px] pb-[14px]">demo</div>
          <div className=" flex flex-wrap">
            {demoProject.map((item, idx) => {
              return (
                <div
                  onClick={() => {
                    setCurItem(item);
                    detailRef.current?.open();
                  }}
                >
                  <ProjectItem key={idx} item={item} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Detail ref={detailRef} curItem={curItem} />
    </div>
  );
};
export default Project;
