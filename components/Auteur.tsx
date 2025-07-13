import React from 'react'
import { BoxReveal } from './magicui/box-reveal'
import { FlickeringGrid } from './magicui/flickering-grid'

const Auteur = () => {
  return (
    <section  className='flex w-full flex-col lg:flex-row '>
      
     <div className='w-auto max-lg:w-4/5 flex flex-col gap-5'>
        <BoxReveal>
          <h1 className='text-3xl font-black  lg:text-7xl'>Jacques Onek <span className='text-fuchsia-600 text-4xl'>.</span> </h1>
        </BoxReveal>
        <BoxReveal>
          <p className='text-2xl text-fuchsia-600 font-medium'>Développeur web Fullstack</p>
        </BoxReveal>
        <BoxReveal>
         <p className='w-[17rem] md:w-4/5 lg:w-xl lg:text-xl'> Bonjour, je suis Jacques Onek, développeur Fullstack spécialisé Next.js.
          Je conçois des applications web modernes, rapides et optimisées pour la production.
          Mon objectif est de transformer des idées en
          produits digitaux robustes, en combinant design soigné, expérience utilisateur fluide et architectures performantes. <br/>
         <span className='text-fuchsia-600 mt-2'>Besoin d'une Application ou site-web Attractif ?</span>
        </p>
        </BoxReveal>
        <BoxReveal>
            <button className='bg-fuchsia-800 py-4 px-8 rounded-md'>Contact me</button>
        </BoxReveal>
    </div>
    <div className='w-full flex-1 max-md:hidden '>
      <FlickeringGrid  className=' text-fuchsia-600'/>
    </div>
    </section>
  )
}

export default Auteur