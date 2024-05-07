import Image from 'next/image'
import React from 'react'
import Hero from "../../../../public/assets/Hero.svg";
import Link from 'next/link';

const Home = () => {
  return (
    <div className='w-full h-screen'>
        <div className='mx-auto max-w-[1240px] w-full h-full p-2'>
            <div className='flex my-32 flex-col justify-center items-center lg:flex-row gap-12'>
                <div className='flex flex-col gap-6 lg:w-[50%] w-[85%]'>
                    <h6 className='bg-gradient-to-r from-[#6265eb] to-[#f15454] w-full lg:w-max p-2 px-4 rounded-3xl tracking-widest uppercase text-zinc-50 font-semibold'>Introduzindo a RG-Agency</h6>
                    <h1 className='my-4 lg:text-8xl text-7xl uppercase font-bold '>Pensar & <br />Criar</h1>
                    <p className='text-xl font-bold text-justify my-2'>Nós ajudamos você a conectar sua marca ao sucesso, pare de <span className='text-zinc-400'>desperdiçar tempo e dinheiro em campanhas publicitárias falhas e ineficazes</span></p>
                    <Link href="/">
                        <p className='p-4 text-sm border-zinc-800 border-2 rounded-3xl w-max font-bold uppercase my-4 hover:bg-zinc-950 hover:text-zinc-50 ease-in duration-300'>Vamos Conectar</p>
                    </Link>

                </div>

                <div className='lg:w-[50%] w-full'>
                    <Image src={Hero} alt='Flying Rocket' className='w-full'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home;