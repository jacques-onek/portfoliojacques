import React from 'react'
import TitleItems from './TitleItems'
import CardProject from './CarProject'
import { ProjectsData } from '@/constant';

const Projects = () => {
  return (
    <section className='section-wrapper flex flex-col' id='project'>
        <div>
            <TitleItems title='Projects' textSize='text-xl lg:text-6xl font-extrabold' className='w-[50%] lg:w-[75%] h-[2px]' />
        </div>
        <div className='w-full grid grid-cols-1 grid-rows-2 overflow-hidden lg:grid-cols-2 '>
            { ProjectsData.map((project)=>(
                <CardProject {...project} key={project.title} />
            )) }
        </div>
    </section>
  )
}

export default Projects