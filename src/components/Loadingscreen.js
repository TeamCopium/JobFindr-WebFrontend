import React from "react";
import home from "../assets/home.svg";
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init()

const Loadingscreen = () => {
  return (
    <div  className="p-4 items-center bg-[#414a4c] h-[100vh] flex">
      <div data-aos="zoom-in" data-aos-offset="500" data-aos-easing="ease-in-sine" className="justify-center w-[50vw]  h-[80vh]">
        <img src={home} className="w-[40vw] h-[40vw] ml-auto" />
      </div>
      <div data-aos="fade-left" data-aos-offset="500" data-aos-easing="ease-in-sine" className="justify-center w-[40vw]">
        <h1
          className="text-4xl text-white text-[#000000]"
        >
          Get The Job
          <br /> That You Dream
        </h1>
        <p className="mt-2 text-sm text-[#838383]">
          By using this application you will be able to find <br />
          out some of the jobs that suits you.
        </p>
        <div className="mt-12">
          <a className="bg-black text-white p-4 px-8 rounded-lg cursor-pointer hover:bg-[#838383] transition-all" href="/login">Start</a>
        </div>
      </div>
    </div>
  );
};

export default Loadingscreen;
