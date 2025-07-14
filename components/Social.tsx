import { Mail } from 'lucide-react'
import React from 'react'
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillMail, AiFillWechat } from 'react-icons/ai'

const Social = ({isFooter}:{isFooter:boolean}) => {
  return (
    <div className=''>
        <ul className='flex flex-row gap-3'>
            {/* github  */}
            <li>
                <a href=""> <AiFillGithub className='size-6 transition duration-300 hover:fill-fuchsia-600' /> </a>
            </li>
            {/* linkdn */}
            <li>
                <a href=""> <AiFillLinkedin className='size-6 transition duration-300  hover:fill-fuchsia-600' /> </a>
            </li>
            {!isFooter && (
                <li>
                    <a href=""> <Mail className='size-6 duration-300 transition hover:text-fuchsia-600'/> </a>
                </li>                                 
            )}
            <li>
                <a href=""> <AiFillInstagram className='size-6 duration-500 transition hover:fill-fuchsia-600' /> </a>
            </li>
        </ul>
       <a href="">
       </a>
    </div>
  )
}

export default Social