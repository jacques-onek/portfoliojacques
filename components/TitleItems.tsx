import React from 'react'
import { BoxReveal } from './magicui/box-reveal'

const TitleItems = ({title,textSize,className}:{title:string,textSize:string,className:string}) => {
  return (
    <div className='flex justify-between w-full h-fit flex-row-reverse float-left place-items-center py-10 lg:20 '>
        <div className={` ${className} bg-[#ffffff52]`}/>
        <div>
          <BoxReveal>
            <h1 className={`${textSize}`}>{title} <span className='text-2xl text-fuchsia-600'>.</span> </h1>
          </BoxReveal>
        </div>
    </div>
  )
}

export default TitleItems