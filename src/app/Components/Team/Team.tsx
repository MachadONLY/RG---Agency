"use client";

import React from "react";
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";
import Profile from "../../../../public/assets/Profile.svg";
import Image from "next/image";

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, bio }) => {
  return (
    <div className="w-[275px] h-[60%] bg-zinc-100 shadow-2xl rounded-2xl flex flex-col items-center">
      <div className="w-[85%] flex flex-col items-center">
        <Image
          src={Profile}
          alt={`Profile of ${name}`}
          width={150}
          className="shadow-xl rounded-full mb-6 shadow-gray-500 my-4 border-4 border-zinc-200"
        />
        <h1 className="text-xl uppercase font-semibold">{name}</h1>
        <span className="text-[#6265eb] my-1 uppercase">{role}</span>
        <p className="text-justify my-2">{bio}</p>

        <div className="flex gap-3 my-8">
          <SocialIcon icon={<FaInstagram />} />
          <SocialIcon icon={<FaTwitter />} />
          <SocialIcon icon={<FaFacebook />} />
          <SocialIcon icon={<FaTiktok />} />
        </div>
      </div>
    </div>
  );
};

interface SocialIconProps {
  icon: React.ReactNode;
}

const SocialIcon: React.FC<SocialIconProps> = ({ icon }) => {
  return (
    <div className="rounded-full shadow-xl shadow-gray-400 p-3 cursor-pointer hover:scale-125 ease-in duration-300 hover:bg-[#5651e5] hover:text-zinc-50">
      {icon}
    </div>
  );
};

const Team: React.FC = () => {
  return (
    <div className="w-full h-screen">
      <div className="w-full gap-20 my-[800px] lg:my-0 md:my-[400px] mx-auto max-w-[1240px] h-full flex flex-col md:flex-row justify-center items-center">
        <TeamMember
          name="Ruan Gabriel"
          role="CEO"
          bio="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos adipisci a laborum voluptatum, soluta non nam maxime qui dolore nulla!"
        />
        <TeamMember
          name="Gabriel Machado"
          role="Co-founder"
          bio="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos adipisci a laborum voluptatum, soluta non nam maxime qui dolore nulla!"
        />
      </div>
    </div>
  );
};

export default Team;
