import React from 'react'
import { BoxReveal } from './magicui/box-reveal'
import { ExperienceProps } from './Experiences'

const CardExperience = ({post,date,entreprise,description,stack}:ExperienceProps) => {
  return (
    <div className='w-full lg:px-2'>
        <div className='flex flex-col lg:flex-row justify-between  mb-5'>
            <div className='flex flex-col gap-5'>
                <BoxReveal>
                   <h1 className='text-2xl font-extrabold'>{post}</h1>
                </BoxReveal>
                <BoxReveal>
                   <p className='text-fuchsia-800 text-xl font-semibold'> {entreprise} </p>
                </BoxReveal>
            </div>
            <BoxReveal>
               <h1> {date} </h1>
            </BoxReveal>
        </div>
        <BoxReveal>
          <p className='text-lg lg:w-4/5'> {description} </p>
        </BoxReveal>
            <div className='flex flex-wrap gap-3 mt-5'>
                {stack.map((stack) =>(
                
                    <p key={stack} className='px-4 py-2 rounded-full text-white bg-neutral-600 w-fit'> {stack} </p>
                
               ))}
          </div>


    </div>
  )
}

export default CardExperience