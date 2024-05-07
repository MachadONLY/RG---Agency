import React from 'react'
import { FaLinkedin } from 'react-icons/fa'

const Valores = () => {
  return (
    <div className='w-full h-[500px]'>
        <div className='mx-auto max-w-[1240px] w-full h-full my-[500px] lg:my-24'>
            <div className='mx-auto lg:mx-0 w-[85%] lg:w-full h-full'>
                <p className='text-xl font-semibold text-justify lg:w-[40%]'>Our product boasts an effortless three-step onboarding, ensuring you can quickly elevate your daily tasks and boost productivity.</p>
                <div className='flex flex-col lg:flex-row gap-12 my-20'>
                    <div className='flex flex-col gap-8 border-r-2 border-zinc-900 pr-8'>
                        <FaLinkedin size={45} />
                        <h1 className='font-bold text-xl'>Marketing</h1>
                        <p className='w-[60%]'>lorem ipsum dolor site amet, consecetur adispcing elit.</p>
                    </div>

                    <div className='flex flex-col gap-8 border-r-2 border-zinc-900 pr-8'>
                        <FaLinkedin size={45} />
                        <h1 className='font-bold text-xl'>Marketing</h1>
                        <p className='w-[60%]'>lorem ipsum dolor site amet, consecetur adispcing elit.</p>
                    </div>

                    <div className='flex flex-col gap-8'>
                        <FaLinkedin size={45} />
                        <h1 className='font-bold text-xl'>Marketing</h1>
                        <p className='w-[60%]'>lorem ipsum dolor site amet, consecetur adispcing elit.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Valores