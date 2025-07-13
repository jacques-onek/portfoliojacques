import React from 'react'
import { Formations } from '@/constant'
import CardFormation from './CardFormation'
import TitleItems from './TitleItems'
import { div } from 'motion/react-client'


export interface FormationProps {
    bootcamp:string
    date:string 
    centre:string
    description:string 
    stack:string[]


}

const Formation = () => {
  return (
    <section className='section-wrapper flex flex-col' id='formation'>
        <div>
            <TitleItems title='Formations' textSize='text-xl lg:text-6xl font-extrabold' className='w-[50%] lg:w-[66%] h-[2px]' />
        </div>
        <div className='flex flex-col gap-y-20'>
            { Formations.map((formation:FormationProps) =>(
                  <CardFormation {...formation} key={formation.bootcamp} />
            ))
            }
        </div>
    </section>
  )
}

export default Formation