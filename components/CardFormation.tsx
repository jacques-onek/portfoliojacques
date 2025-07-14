import React from 'react'
import { FormationProps } from './Formation'
import { BoxReveal } from './magicui/box-reveal'
import {  AnimatedSpan} from './magicui/terminal'


const CardFormation = ({bootcamp,date,centre,description,stack}:FormationProps) => {
  return (
    <div className='w-full lg:px-2'>
        <div className='flex flex-col lg:flex-row justify-between  mb-5'>
            <div className='flex flex-col gap-5'>
                <BoxReveal>
                   <h1 className='text-2xl font-extrabold'>{bootcamp}</h1>
                </BoxReveal>
                <BoxReveal>
                   <p className='text-fuchsia-800 text-xl font-semibold'> {centre} </p>
                </BoxReveal>
            </div>
            <BoxReveal>
               <h1> {date} </h1>
            </BoxReveal>
        </div>
        <BoxReveal>
          <p className='text-lg lg:w-4/5'> {description} </p>
        </BoxReveal>
            <div className=' flex flex-wrap lg:flex gap-3 mt-5'>
                {stack.map((stack) =>(
                
                    <p key={stack} className='px-4 py-2 text-center max-md:text-sm rounded-full text-white bg-neutral-600 w-fit'> {stack} </p>
                
               ))}
          </div>


    </div>
  )
}

export default CardFormation