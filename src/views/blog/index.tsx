import React from "react";
import Home from "../../components/home";

const Blog: React.FC = () => {
  return (
    <div className=" h-screen w-full bg-black flex flex-col">
      <Home></Home>
      <div className=" px-[20px] text-white">content Blog</div>
    </div>
  );
};
export default Blog;
