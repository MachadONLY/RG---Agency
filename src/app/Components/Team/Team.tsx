"use client";

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { BsEmojiAngry } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { FaLinkedin } from "react-icons/fa";
import { LiaAdSolid } from "react-icons/lia";
import { LuMousePointerClick } from "react-icons/lu";
import { MdOutlineWeb } from "react-icons/md";
import { SiGoogleanalytics } from "react-icons/si";
import { useInView } from "react-intersection-observer";

const Team = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <div className="w-full h-[700px]">
      <div className="lg:w-full max-w-[1240px] mx-auto h-full mt-[650px] lg:mt-0 ">
        <h1 className="font-extrabold uppercase text-3xl my-12 ml-5">Nossos Serviços</h1>
        <div className="lg:grid grid-cols-3 gap-8 lg:gap-0 flex flex-col justify-center items-center mx-auto">

          <motion.div
            ref={ref}
            className="w-[365px] hover:bg-black/10 hover:border hover:border-zinc-400 cursor-pointer p-6 flex flex-col h-[211px] border-2 rounded-xl shadow-xl gap-2"
            initial="hidden"
            animate={controls}
            variants={cardVariants}
          >
            <div className="rounded-full p-2 w-16 h-16 bg-zinc-950 flex justify-center items-center">
              <LiaAdSolid className="text-zinc-50 w-full h-full" />
            </div>
            <h1 className="uppercase font-semibold mt-2">Social Media Ads</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, dicta.</p>
          </motion.div>

          <motion.div
            ref={ref}
            className="w-[365px] hover:bg-black/10 hover:border hover:border-zinc-400 cursor-pointer p-6 flex flex-col h-[211px] border-2 rounded-xl shadow-xl gap-2"
            initial="hidden"
            animate={controls}
            variants={cardVariants}
          >
            <div className="rounded-full p-2 w-16 h-16 bg-zinc-950 flex justify-center items-center">
              <CgWebsite className="text-zinc-50 w-full h-full" />
            </div>
            <h1 className="uppercase font-semibold mt-2">SEO Otimizado</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, dicta.</p>
          </motion.div>

          <motion.div
            ref={ref}
            className="w-[365px] hover:bg-black/10 hover:border hover:border-zinc-400 cursor-pointer p-6 flex flex-col h-[211px] border-2 rounded-xl shadow-xl gap-2"
            initial="hidden"
            animate={controls}
            variants={cardVariants}
          >
            <div className="rounded-full p-3 w-16 h-16 bg-zinc-950 flex justify-center items-center">
              <LuMousePointerClick className="text-zinc-50 w-full h-full" />
            </div>
            <h1 className="uppercase font-semibold mt-2">Design Gráfico</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, dicta.</p>
          </motion.div>

          <motion.div
            ref={ref}
            className="w-[365px] hover:bg-black/10 hover:border hover:border-zinc-400 cursor-pointer mt-0 lg:mt-12 p-6 flex flex-col h-[211px] border-2 rounded-xl shadow-xl gap-2"
            initial="hidden"
            animate={controls}
            variants={cardVariants}
          >
            <div className="rounded-full p-2 w-16 h-16 bg-zinc-950 flex justify-center items-center">
              <MdOutlineWeb className="text-zinc-50 w-full h-full" />
            </div>
            <h1 className="uppercase font-semibold mt-2">Criação de Website</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, dicta.</p>
          </motion.div>

          <motion.div
            ref={ref}
            className="w-[365px] hover:bg-black/10 hover:border hover:border-zinc-400 cursor-pointer mt-0 lg:mt-12 p-6 flex flex-col h-[211px] border-2 rounded-xl shadow-xl gap-2"
            initial="hidden"
            animate={controls}
            variants={cardVariants}
          >
            <div className="rounded-full p-4 w-16 h-16 bg-zinc-950 flex justify-center items-center">
              <SiGoogleanalytics className="text-zinc-50 w-full h-full" />
            </div>
            <h1 className="uppercase font-semibold mt-2">Análise de dados e relatórios</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, dicta.</p>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Team;
