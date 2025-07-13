import React from 'react'
import TitleItems from './TitleItems'
import { BoxReveal } from './magicui/box-reveal'
import { Terminal,  AnimatedSpan,TypingAnimation, } from './magicui/terminal'
import { TerminalIcon } from 'lucide-react'

const About = () => {
  return (
    <section className='section-wrapper my-10 flex flex-col ' id='auteur'>
       <div>
          <TitleItems title='About' textSize='text-3xl lg:text-6xl font-extrabold' className='w-[60%] lg:w-[80%] h-[2px]' />
       </div>
       <div className='flex w-full gap-8 md:gap-20 justify-between flex-col lg:flex-row'>
         <div className='lg:w-3/4 flex flex-col gap-5'>
           <BoxReveal>
             <p>
                Développeur web full-stack, spécialisé dans la création de sites responsives et modernes pour les particuliers et les petites entreprises.
                Mon objectif est d’offrir des expériences fluides, esthétiques et parfaitement adaptées à tous les appareils.
             </p>
           </BoxReveal>
           <BoxReveal>
             <p>
               Je conçois des interfaces intuitives et optimise les performances pour une navigation rapide et accessible. 
               Je propose également des services de SEO et de rédaction web pour améliorer la visibilité, 
               renforcer le message et toucher efficacement votre audience.
             </p>
           </BoxReveal>
           <BoxReveal>
             <p>
                Ma stack comprend React et Next.js pour le front-end, ainsi que Node.js, PostgreSQL et MongoDB pour le back-end. 
                J’utilise aussi des outils d’IA comme ChatGPT, Claude code et Figma pour fluidifier mon processus et booster la créativité.
             </p>
           </BoxReveal>
         </div>
         <div className='w-full md:w-3/4'>
            <Terminal className='w-auto bg-transparent '>
                <section className='flex flex-row justify-between '>
                    <div>
                        <TypingAnimation className='font-medium text-xl text-white mb-20'>
                            &gt; Frontend
                        </TypingAnimation>
                            <AnimatedSpan delay={1000} className='text-green-600 font-mono text-wrap text-ellipsis'> ✔ React.js/Next.js</AnimatedSpan>
                            <AnimatedSpan delay={1500} className='text-green-600 font-mono'> ✔ Zustand</AnimatedSpan>
                            <AnimatedSpan delay={2000} className='text-green-600 font-mono text-wrap text-ellipsis'> ✔ Tanstack-query</AnimatedSpan>
                            <AnimatedSpan delay={2500} className='text-green-600 font-mono text-wrap'> ✔ Shadcn / Tailwindcss</AnimatedSpan>
                            <AnimatedSpan delay={2500} className='text-green-600 font-mono text-wrap'> ✔ Gsap / Motion</AnimatedSpan>
                            <AnimatedSpan delay={3000} className='text-green-600 font-mono'> ✔ Figma</AnimatedSpan>
                    </div>     
                    <div>
                        <TypingAnimation className='font-medium text-xl text-white mb-20'>
                            &gt; Backend
                        </TypingAnimation>
                            <AnimatedSpan delay={1000} className='text-green-600 font-mono text-wrap'> ✔ Next.js</AnimatedSpan>
                            <AnimatedSpan delay={1500} className='text-green-600 font-mono'> ✔ Node js</AnimatedSpan>
                            <AnimatedSpan delay={2000} className='text-green-600 font-mono'> ✔ Postgresql</AnimatedSpan>
                            <AnimatedSpan delay={2000} className='text-green-600 font-mono text-wrap'> ✔ Auth.js</AnimatedSpan>
                            <AnimatedSpan delay={2500} className='text-green-600 font-mono'> ✔ Upstash</AnimatedSpan>
                            <AnimatedSpan delay={2500} className='text-green-600 font-mono'> ✔ Arcjet</AnimatedSpan>
                            <AnimatedSpan delay={3000} className='text-green-600 font-mono'> ✔ Appwrite</AnimatedSpan>
                    </div>

                </section>
           </Terminal>
         </div>

       </div>
    </section>
  )
}

export default About