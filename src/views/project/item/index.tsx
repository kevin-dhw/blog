import React from "react";
import classNames from "classnames";
import avatarImg from "../../../assets/img/avatar.jpg";
import { ComponyProjectItem } from "../../../store/useProjectStore";

export interface ProjectItemProps {
  item: ComponyProjectItem;
}

const ProjectItem: React.FC<ProjectItemProps> = (props) => {
  const { item } = props;
  return (
    <div>
      <div
        className={classNames(
          "w-[250px] h-[450px] bg-[#171717] rounded-md overflow-hidden cursor-pointer mb-[20px] mr-[20px]",
          "hover:scale-105 transition-transform duration-300 ease-in-out "
        )}
      >
        <img src={avatarImg} className=" h-[250px] w-[300px]"></img>
        <div className=" p-[12px] text-[20px]">
          <div>name: {item.name}</div>
          {item.address && <div>address: {item.address}</div>}
          {item.repo && <div>repo: {item.repo}</div>}
          <div>tech stack: {item.repo}</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
