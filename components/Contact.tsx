import React from 'react'
import Social from './Social'
import { AiFillMail } from 'react-icons/ai'

const Contact = () => {
  return (
    <footer className='flex flex-col px-2 gap-2.5 items-center mt-10' id='contact'>
        <h1 className='text-3xl font-extrabold text-center'>Contact <span className='text-4xl text-fuchsia-600'>.</span></h1>
        <div className="text-center" >
           <p> Vous avez une idée en téte ? envoyez moi un Email ! ou vous pouvez aussi me contactez sur </p>
            <a href="http://" className="text-fuchsia-600">linkdn</a> ou <a href="http://" className='text-fuchsia-600'>Whatsap</a> selon vos préferences
        </div>
        <a href="mailto:" className='flex gap-x-2 place-content-center text-center duration-300 transition hover:text-fuchsia-600'><AiFillMail className='size-5'/> <span>onekongajaque@gmail.com</span> </a>
        <Social isFooter={true}/>
    </footer>
  )
}

export default Contact