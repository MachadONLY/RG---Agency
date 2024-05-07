import Image from 'next/image'
import React from 'react'
import Hero from "../../../../public/assets/Hero.svg";
import Link from 'next/link';

const Home = () => {
  return (
    <div className='w-full h-screen'>
        <div className='mx-auto max-w-[1240px] h-full'>
            <div className='flex flex-col justify-center items-center lg:flex-row gap-12 my-40'>
                <div className='flex flex-col gap-6 lg:w-[50%] w-[85%]'>
                    <h6 className='bg-gradient-to-r from-purple-500 to-pink-400 w-max p-2 px-4 rounded-3xl tracking-widest uppercase text-zinc-50 font-semibold'>Introduzindo a RG-Agency</h6>
                    <h1 className='my-4 lg:text-8xl text-7xl uppercase font-bold'>Pensar & <br />Criar</h1>
                    <p className='text-xl font-bold text-justify my-4'>Nós ajudamos você a conectar sua marca ao sucesso, pare de <span className='text-pink-500'>desperdiçar tempo e dinheiro em campanhas publicitárias falhas e ineficazes</span></p>
                    <Link href="/">
                        <p className='p-4 text-sm border-zinc-800 border-2 rounded-3xl w-max font-semibold uppercase my-4'>Vamos Conectar</p>
                    </Link>

                </div>

                <div className='w-[50%] hidden lg:block'>
                    <Image src={Hero} alt='Flying Rocket' className='w-full'/>

                </div>

            </div>

        </div>

    </div>
  )
}

export default Home