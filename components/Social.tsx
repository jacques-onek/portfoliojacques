import { Mail } from 'lucide-react'
import React from 'react'
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillMail, AiFillWechat } from 'react-icons/ai'
import { FaWhatsapp } from 'react-icons/fa';

const Social = ({isFooter}:{isFooter:boolean}) => {
  return (
    <div className=''>
        <ul className='flex flex-row gap-3'>
            {/* github  */}
            <li>
                <a href="https://github.com/jacques-onek" target="_blank"> <AiFillGithub className='size-6 transition duration-300 hover:fill-fuchsia-600' /> </a>
            </li>
            {/* linkdn */}
            <li>
                <a href="https://www.linkedin.com/in/jack-onek-9a77a932b/" target="_blank"> <AiFillLinkedin className='size-6 transition duration-300  hover:fill-fuchsia-600' /> </a>
            </li>
            {/* whatsapp */}
            <li>
              <a href="https://wa.me/243812345678?text=Bonjour%20je%20veux%20plus%20d'informations%20de%20tes%20services%20web" target="_blank">
                 <FaWhatsapp className='size-6 transition duration-300  hover:fill-fuchsia-600'/>
              </a>
            </li>
            {!isFooter && (
                <li>
                    <a href="mailto:onekongajaque@gmail.com" target="_blank"><Mail className='size-6 duration-300 transition hover:text-fuchsia-600'/></a>
                     
                </li>                                 
            )}
        </ul>
    </div>
  )
}

export default Social