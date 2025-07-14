import React from 'react'
import Social from './Social'
import { Download } from 'lucide-react'

const Navbar = () => {
  return (
    <header className='max-w-full flex z-20 flex-row justify-around pl-5 lg:justify-between lg:px-36   backdrop-blur-[1000px] !important w-full border border-transparent h-16 bg-[#111111b0] overflow-hidden fixed ' >
       <div className='place-content-center'>
        <Social isFooter={false}/>
       </div>
       <div className='place-content-center '>
        <button className='w-fit bg-fuchsia-800 text-white py-2 px-6 transition duration-400 cursor-pointer hover:bg-fuchsia-600 rounded-md'>
            <a href="http://" className='flex gap-2'> <span>CV </span> <Download className='size-5'/> </a>
        </button>
       </div>
    </header>
  )
}

export default Navbar