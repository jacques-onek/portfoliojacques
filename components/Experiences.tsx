import React from 'react'
import { Experiences } from '@/constant'
import TitleItems from './TitleItems'
import CardExperience from './CardExperience'

export interface ExperienceProps {
    post:string
    date:string 
    entreprise:string
    description:string 
    stack:string[]


}
const Experience = () => {

  return (
    <section className='section-wrapper flex flex-col' id='experience'>
       <TitleItems title='Experiences' textSize='text-xl lg:text-6xl font-extrabold' className='w-[50%] lg:w-[66%] h-[2px]' />
        <div className='flex flex-col gap-y-20'>
            { Experiences.map((formation:ExperienceProps) =>(
                  <CardExperience {...formation} key={formation.date} />
            ))
            }
        </div>
    </section>
  )
}

export default Experience