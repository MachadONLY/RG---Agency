import React from 'react'
import { FaLinkedin, FaMedal, FaRegLightbulb, FaUserFriends } from 'react-icons/fa'

const Valores = () => {
  return (
    <div className='w-full h-[500px]'>
        <div className='mx-auto max-w-[1240px] w-full h-full my-[500px] md:my-[800px] lg:my-20'>
            <div className='mx-auto lg:mx-0 w-[85%] lg:w-full h-full'>
                <p className='text-2xl font-semibold text-justify lg:w-[50%]'>Na RG Agency, somos apaixonados por ajudar negócios locais a alcançarem <span className='text-zinc-500'>todo o seu potencial através do poder do marketing digital.</span> Conheça mais sobre nossos valores</p>
                <div className='flex flex-col lg:flex-row gap-12 my-20'>
                    <div className='flex flex-col gap-7 border-b-2 pb-8 border-zinc-900 lg:border-b-0 lg:border-r-2 lg:pr-8'>
                        <FaMedal size={45} />
                        <h1 className='font-bold text-xl'>Excelência</h1>
                        <p className='w-full'>Priorizamos qualidade e a eficácia em todas as nossas entregas</p>
                    </div>

                    <div className='flex flex-col gap-7 border-b-2 pb-8 border-zinc-900 lg:border-b-0 lg:border-r-2 lg:pr-8'>
                        <FaUserFriends size={45} />
                        <h1 className='font-bold text-xl'>Foco no Cliente</h1>
                        <p className='w-full'>Colocamos as necessidades dos nossos clientes em primeiro lugar</p>
                    </div>

                    <div className='flex flex-col gap-7 border-b-2 pb-8 border-zinc-900 lg:border-b-0'>
                        <FaRegLightbulb size={45} />
                        <h1 className='font-bold text-xl'>Inovação</h1>
                        <p className='w-full'>Valorizando inovação e a criatividade como catalisadores do sucesso</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Valores