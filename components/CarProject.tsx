import Image, { StaticImageData } from 'next/image'
import React from 'react'
import TitleItems from './TitleItems'
import { motion } from "motion/react";
import { BoxReveal } from './magicui/box-reveal';
import { AiFillGithub } from 'react-icons/ai';
import { Link } from 'lucide-react';

export interface CardProjecProps {
    coverUrl:StaticImageData
    title:string
    description:string
    stack:string
}

const CardProject = ({coverUrl,title,description,stack}:CardProjecProps) => {
  return (
    <div className='w-full flex flex-col gap-2 mb-20'>
        <div className='w-full lg:w-3/4 bg-[#352f2f5a] h-48 lg:h-68 rounded-md flex justify-center items-end overflow-hidden'>
            <Image src={coverUrl} alt={title} width={450} className='transition duration-200 rounded-md  hover:rotate-2' height={400}/>
        </div>
        <div className='w-full lg:w-3/4 '>
            <TitleItems title={title} textSize="text-xl lg:text-xl font-extrabold" className='w-[45%] lg:w-[55%] h-[2px]'/>
             <BoxReveal>
                <div className='w-full mb-5 text-wrap'>
                    <p className='text-fuchsia-600 font-medium'>{stack}</p>
                </div>
             </BoxReveal>
             <BoxReveal>
               <p className='mb-10'>
                  {description}
                </p>
             </BoxReveal>
             <div className='flex justify-between w-full px-2 lg:p-0'>
                <button className='py-2 px-4 flex items-center rounded-md gap-2 bg-fuchsia-600 text-white'>
                    <a href="http://"> Visitez  </a> 
                    <Link className='size-5'/>
                </button>
                 <span>
                    <a href="http://"><AiFillGithub className='size-6 lg:size-8'/></a>
                 </span>
             </div>
        </div>
    </div>
  )
}

export default CardProject