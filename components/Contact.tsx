import React from 'react'
import Social from './Social'
import { AiFillMail } from 'react-icons/ai'

const Contact = () => {
  return (
    <footer className='section-wrapper flex flex-col px-2 gap-y-5 items-center mt-28' id='contact'>
        <h1 className='text-3xl lg:text-8xl font-extrabold text-center'>Contact <span className='text-4xl text-fuchsia-600'>.</span></h1>
        <div className="text-center lg:text-2xl" >
           <p> Vous avez une idée en téte ? envoyez moi un Email ! ou vous pouvez aussi me contactez sur </p>
            <a href="https://www.linkedin.com/in/jack-onek-9a77a932b/" target="_blank" className="text-fuchsia-600">linkdn</a> ou <a href="https://wa.me/243812345678?text=Bonjour%20je%20veux%20plus%20d'informations%20de%20tes%20services%20web" target="_blank" className='text-fuchsia-600'>Whatsap</a> selon vos préferences
        </div>
        <a href="mailto:" className='flex gap-x-2 place-content-center text-center lg:text-xl duration-300 transition hover:text-fuchsia-600'><AiFillMail className='size-5'/> <span>onekongajaque@gmail.com</span> </a>
        <Social isFooter={true}/>
    </footer>
  )
}

export default Contact