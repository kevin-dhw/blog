import React from "react";
import Home from "../../components/home";

const Me: React.FC = () => {
  return (
    <div>
      <Home></Home>
      <div className=" px-[200px]">
        <div>
          <div className=" text-[40px]">Hi, I'm Kevin Du!</div>
        </div>
        <div className="">
          <div>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>Nice to meet you.
            I'm a web developer from China 🇨🇳. I switched to tech after many
            years in sales. I have a strong passion for creating user-friendly
            and ♿ accessible websites and web applications. My first tech job
            was working as a remote front-end developer for an Augmented Reality
            Studio in Australia 🇦🇺, where we develop our web app with HTML, CSS
            and vanilla Web Components. My second and current role is a remote
            WordPress Developer for an web agency located in Israel 🇮🇱.
          </div>
        </div>
      </div>
    </div>
  );
};
export default Me;
