import universityCover from "@/public/asset/universite.jpeg"
import PortFolioCover from "@/public/asset/Portfolio.jpeg"
import NetFlixCover from "@/public/asset/NetFlix-onek.jpeg"
import NikeCover from "@/public/asset/NikeShoes.jpeg"
import { useTranslations } from "next-intl";


 const tSidebarLinks = useTranslations("SidebarLinks");
  const tProjetcs = useTranslations("ProjectsData");
  const  tFormations= useTranslations("Formations");
  const tExper = useTranslations("Experiences");



export const SidebarLinks = [
    {
        title:tSidebarLinks("title1"),
        href:"#auteur"
    },
        {
        title:tSidebarLinks("title2"),
        href:"#project"
    },
    {
        title:tSidebarLinks("title3"),
        href:"#formation"
    },
   {
        title:"Experiences",
        href:"#experience"
    },
   {
        title:"Contact",
        href:"#contact"
    },


]


export const ProjectsData = [
    {
        coverUrl:universityCover,
        title:"Bookwise",
        description:tProjetcs("description1"),
        stack:"Next.js Postgresql auth.js drizzle emailJs upstash"
    },
    {
        coverUrl:PortFolioCover,
        title:"Portfolio-Onek",
        description:tProjetcs("description2"),
        stack:"Next.js Next-intl motion Tailwindcss magicUi"
    },
    {
        coverUrl:NetFlixCover,
        title:"NetFlix-Onek",
        description:tProjetcs("description3"),
        stack:"React.js swipper.js  zustand tanstack-query Framer-motion"
    },
    {
        coverUrl:NikeCover,
        title:"NikeShoes",
        description:tProjetcs("description4"),
        stack:"React.js Framer-motiion tailwindcss lucide"

    }
]

export const Formations = [
    {
      bootcamp:tFormations("bootcamp1"),
      date:"2024",
      centre:"Orange digital Center",
      description:tFormations("description1"),
      stack:["javascript","DSA","node.js","Express"]
    },
    {
        bootcamp:tFormations("bootcamp2"),
        date:"2024",
        centre:"Orange digital Center",
        description:tFormations("description2"),
        stack:["UI","Ux","Figma"]
    },
    {
        bootcamp:tFormations("bootcamp3"),
        date:"2022",
        centre:tFormations("centre3"),
        description:tFormations("description3"),
        stack:["Next.js","react","nodejs","typescript","zustand","imageKit"]

    }
]

export const Experiences = [
    {
        post:tExper("post1"),
        date:"2025",
        entreprise:"Freelance",
        description:tExper("description1"),
        stack:["Next.js","react","Typescript","Shadcn ui","Upstash","ImageKit","postgresql","react-hook-form/zod","tailwindcss","framer-motion"]
    
    },
    {
        post:tExper("post2"),
        date:"2024",
        entreprise:"Falcong Tachnologie",
        description:tExper("description2"),
        stack:["react","javascript","tailwindcss","framer-motion"]

    },
{
        post:tExper("post3"),
        date:"2023",
        entreprise:"Freelance",
        description:tExper("description3"),
        stack:["Php","javascript","Bootstrap","Html","css"]
    
    },
]