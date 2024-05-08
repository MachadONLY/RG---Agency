import Image from "next/image";
import React from "react";
import Profile from "../../../../public/assets/Profile.svg";
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";

const Team = () => {
  return (
    <div className="w-full h-auto">
      <div className="w-full my-[800px] md:my-[400px] gap-20 lg:my-20 mx-auto max-w-[1240px] h-full flex flex-col md:flex-row justify-center items-center">
        <div className="w-[275px] h-[60%] bg-zinc-100 shadow-2xl rounded-2xl flex flex-col items-center">
          <div className="w-[85%] flex flex-col items-center">
            <Image
              src={Profile}
              alt="Profile CEO"
              width={150}
              className="shadow-xl rounded-full mb-6 shadow-gray-500 my-4 border-4 border-zinc-200"
            />
            <h1 className="text-xl uppercase font-semibold">Ruan Gabriel</h1>
            <span className="text-[#6265eb] my-1">CEO</span>
            <p className="text-justify my-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Dignissimos adipisci a laborum voluptatum, soluta non nam maxime
              qui dolore nulla!
            </p>

            <div className="flex gap-3 my-8">
              <div className="rounded-full shadow-xl shadow-gray-400 p-3 cursor-pointer hover:scale-125 ease-in duration-300 hover:bg-[#5651e5] hover:text-zinc-50">
                <FaInstagram />
              </div>
              <div className="rounded-full shadow-xl shadow-gray-400 p-3 cursor-pointer hover:scale-125 ease-in duration-300 hover:bg-[#5651e5] hover:text-zinc-50">
                <FaTwitter />
              </div>
              <div className="rounded-full shadow-xl shadow-gray-400 p-3 cursor-pointer hover:scale-125 ease-in duration-300 hover:bg-[#5651e5] hover:text-zinc-50">
                <FaFacebook />
              </div>
              <div className="rounded-full shadow-xl shadow-gray-400 p-3 cursor-pointer hover:scale-125 ease-in duration-300 hover:bg-[#5651e5] hover:text-zinc-50">
                <FaTiktok />
              </div>
            </div>
          </div>
        </div>

        <div className="w-[275px] h-[60%] bg-zinc-100 shadow-2xl rounded-2xl flex flex-col items-center">
          <div className="w-[85%] flex flex-col items-center">
            <Image
              src={Profile}
              alt="Profile CEO"
              width={150}
              className="shadow-xl rounded-full mb-6 shadow-gray-500 my-4 border-4 border-zinc-200"
            />
            <h1 className="text-xl uppercase font-semibold">Gabriel Machado</h1>
            <span className="text-[#6265eb] my-1 uppercase">CO-Founder</span>
            <p className="text-justify my-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Dignissimos adipisci a laborum voluptatum, soluta non nam maxime
              qui dolore nulla!
            </p>

            <div className="flex gap-3 my-8">
              <div className="rounded-full shadow-xl shadow-gray-400 p-3 cursor-pointer hover:scale-125 ease-in duration-300 hover:bg-[#5651e5] hover:text-zinc-50">
                <FaInstagram />
              </div>
              <div className="rounded-full shadow-xl shadow-gray-400 p-3 cursor-pointer hover:scale-125 ease-in duration-300 hover:bg-[#5651e5] hover:text-zinc-50">
                <FaTwitter />
              </div>
              <div className="rounded-full shadow-xl shadow-gray-400 p-3 cursor-pointer hover:scale-125 ease-in duration-300 hover:bg-[#5651e5] hover:text-zinc-50">
                <FaFacebook />
              </div>
              <div className="rounded-full shadow-xl shadow-gray-400 p-3 cursor-pointer hover:scale-125 ease-in duration-300 hover:bg-[#5651e5] hover:text-zinc-50">
                <FaTiktok />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
