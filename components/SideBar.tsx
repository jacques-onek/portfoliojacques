"use client"
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { ScrollProgress } from './magicui/scroll-progress'
import { BlurFade } from './magicui/blur-fade'
import { useTranslations } from 'next-intl'
import { SidebarLinks } from '@/constant'

const SideBar = () => {
 
  const [selected, setSelected] = useState("");

  


  useEffect(() => {
    const sections = document.querySelectorAll(".section-wrapper");
    const options = {
      threshold: 0.3,
    };
    const callback = (entries: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          setSelected(`#${entry.target.id}`);
        }
      });
    };
    const observer = new IntersectionObserver(callback, options);
    sections.forEach((section) => observer.observe(section));
  }, []);
  return (
    <nav className=' min-h-screen w-16 bg-sideBar py-5 fixed overflow-x-hidden z-30 '>
      <div className='flex flex-col h-[80vh] justify-around  items-center gap-5 '>
        {SidebarLinks.map((links) => (
          <div key={links.title} className={cn('rotate-90 w-fit ',selected === links.href ? "bg-[#21202048] border-t-4 scroll-smooth py-2 px-3 lg:px-5  border-t-fuchsia-600":"")}>
              <BlurFade>
              <Link href={ `${links.href}`}  className={cn("text-slate-300 duration-500 w-fit  font-light text-xl transition  hover:text-fuchsia-700", )}>{links.title}</Link>
              </BlurFade>
          </div>
        ))}
      </div>
      <ScrollProgress/>
    </nav>
  )
}

export default SideBar