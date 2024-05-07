"use client";

import Image from 'next/image'
import React, { useState } from 'react'
import Hero from "../../../../public/assets/Hero.svg"
import Link from 'next/link'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from 'react-icons/fa'

const Navbar = () => {

    const[nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(true)   
    }

  return (
    <div className='fixed w-full h-20 z-[100] bg-white/90'>
        <div className='flex justify-between items-center max-w-[1240px] mx-auto w-full h-full my-2 2xl:px-16'>
            <Image src={Hero} alt='RG Agency logo' width={70}/>
            <div>
                <ul className='hidden md:flex'>
                    <Link href="/">
                        <li className='ml-10 text-sm font-bold uppercase hover:border-b py-2'>Home</li>
                    </Link>
                    <Link href="/">
                        <li className='ml-10 text-sm font-bold uppercase hover:border-b py-2'>About</li>
                    </Link>
                    <Link href="/">
                        <li className='ml-10 text-sm font-bold uppercase hover:border-b py-2'>Projects</li>
                    </Link>
                    <Link href="/">
                        <li className='ml-10 text-sm font-bold uppercase hover:border-b py-2'>News</li>
                    </Link>
                    <Link href="/">
                        <li className='ml-10 text-sm font-bold uppercase hover:border-b py-2 p-3 border border-zinc-950 rounded-3xl hover:bg-zinc-900 hover:text-zinc-50 ease-in duration-300'>Contact</li>
                    </Link>
                </ul>
                <div onClick={handleNav} className='md:hidden'>
                    <AiOutlineMenu size={25}/>
                </div>
            </div>
        </div>

        <div className={nav ? 'fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
            <div className={nav ? "fixed left-0 top-0 w[65%] lg:w-[30%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500" : 'fixed left-[100%] top-0 p-10 ease-in duration-500'}>
                <div>
                    <div className='flex w-full items-center justify-between'>
                        <Image src={Hero} alt='' width={70}/>
                        <div onClick={handleNav}  className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                            <AiOutlineClose />
                        </div>
                    </div>
                    
                    <div className='border-b border-gray-400 my-4'>
                        <p className='w-[85%] md:w-[90%] py-4'>Lets build something legendary together</p>
                    </div>
                </div>
                <div className='py-4 flex flex-col'>
                    <ul className='uppercase'>
                        <Link href="/">
                            <li className='py-4 text-sm'>Home</li>
                        </Link>
                        <Link href="/">
                            <li className='py-4 text-sm'>About</li>
                        </Link>
                        <Link href="/">
                            <li className='py-4 text-sm'>Projects</li>
                        </Link>
                        <Link href="/">
                            <li className='py-4 text-sm'>News</li>
                        </Link>
                        <Link href="/">
                            <li className='py-4 text-sm'>Contact</li>
                        </Link>
                    </ul>
                    <div className='pt-40 '>
                        <p className='uppercase tracking-widest text-[#5651e5]'>Lets Connect</p>
                        <div className='flex items-center justify-between my-6 w-[80%] lg:w-[60%]'>
                            <div className='rounded-full shadow-xl shadow-gray-400 p-3 cursor-pointer hover:scale-125 ease-in duration-300 hover:bg-[#5651e5] hover:text-zinc-50'>
                                <FaInstagram/>
                            </div>
                            <div className='rounded-full shadow-xl shadow-gray-400 p-3 cursor-pointer hover:scale-125 ease-in duration-300 hover:bg-[#5651e5] hover:text-zinc-50'>
                                <FaTwitter/>
                            </div>
                            <div className='rounded-full shadow-xl shadow-gray-400 p-3 cursor-pointer hover:scale-125 ease-in duration-300 hover:bg-[#5651e5] hover:text-zinc-50'>
                                <FaFacebook/>
                            </div>
                            <div className='rounded-full shadow-xl shadow-gray-400 p-3 cursor-pointer hover:scale-125 ease-in duration-300 hover:bg-[#5651e5] hover:text-zinc-50'>
                                <FaTiktok/>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>

        </div>

    </div>
  )
}

export default Navbar