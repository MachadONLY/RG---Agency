import React from 'react';
import { FaLinkedin, FaMedal, FaRegLightbulb, FaUserFriends } from 'react-icons/fa';

const Valores: React.FC = () => {
  return (
    <div className='w-full h-[500px]'>
      <div className='mx-auto max-w-[1240px] w-full h-full my-[500px] md:my-[800px] lg:my-20'>
        <div className='mx-auto lg:mx-0 w-[85%] lg:w-full h-full'>
          <p className='text-2xl font-semibold text-justify lg:w-1/2'>
            Na RG Agency, ajudamos negócios locais a alcançarem <span className='text-zinc-500'>todo o seu potencial através do poder do marketing digital.</span>  Conheça mais sobre nossos valores
          </p>
          <div className='flex flex-col lg:flex-row gap-12 my-20'>
            {valores.map((valor, index) => (
              <div key={index} className={`flex flex-col gap-7 border-b-2 pb-8 border-zinc-900 lg:border-b-0 ${index === 2 ? '' : 'lg:border-r-2 lg:pr-8'}`}>
                {valor.icon}
                <h1 className='font-bold text-xl'>{valor.title}</h1>
                <p className='w-full'>{valor.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const valores = [
  {
    icon: <FaMedal size={45} />,
    title: 'Excelência',
    description: 'Priorizamos qualidade e eficácia em todas as entregas.',
  },
  {
    icon: <FaUserFriends size={45} />,
    title: 'Foco no Cliente',
    description: 'Colocamos as necessidades dos clientes em primeiro lugar.',
  },
  {
    icon: <FaRegLightbulb size={45} />,
    title: 'Inovação',
    description: 'Valorizamos inovação e criatividade como catalisadores do sucesso.',
  },
];

export default Valores;
