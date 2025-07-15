import universityCover from "@/public/asset/universite.jpeg" 
import PortFolioCover from "@/public/asset/Portfolio.jpeg"
import NetFlixCover from "@/public/asset/NetFlix-onek.jpeg"
import NikeCover from "@/public/asset/NikeShoes.jpeg"


export const SidebarLinks = [
    {
        title:"Auteur",
        href:"#auteur"
    },
        {
        title:"Projects",
        href:"#project"
    },
    {
        title:"Formations",
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
        description:"BookWise est une plateforme de library en ligne permettant l'emprunt de livre aux etudiants avec permission de l'administrateur, portant des fonctionnalités industrielle comme: Backend avancé, authentification avec Jwt, l'email d'innactivité et de Bienvenue , RateLimiting ,Permission par Role admins,creation des livres par l'admin, ",
        stack:"Next.js Postgresql auth.js drizzle emailJs upstash",
        url:"https://university-phi-six.vercel.app/",
        github:"https://github.com/jacques-onek/university"
    },
    {
        coverUrl:PortFolioCover,
        title:"Portfolio-Onek",
        description:"Mon Porfolio Personnel, en traivaillant sur ce projet j'ai renforcer mes compétence en design et animations fluides, j ai cree des animation fluide en utilisant motion et magicui ainsi next-intl pour l internationalisation",
        stack:"Next.js Next-intl motion Tailwindcss magicUi",
        url:"",
        github:"https://github.com/jacques-onek/portfoliojacques"
    },
    {
        coverUrl:NetFlixCover,
        title:"NetFlix-Onek",
        description:"clone de Netflix ou les utilisateur peuvents rechercher des films et series et voir les details, ce Projet a renforcer mes compétences en manipulation d ' Api et fetching de données mais en algorithmique de recherche et filtre ",
        stack:"React.js swipper.js  zustand tanstack-query Framer-motion",
        url:"https://onek-netflix-clone-fknp.onrender.com/",
        github:"https://github.com/jacques-onek/Netflix_Clone"
    },
    {
        coverUrl:NikeCover,
        title:"NikeShoes",
        description:"une landing page de presentation d'une plateforme de vente de chaussures. ce projet ma permit de renforcer mes compétence en design et creation de site rapide et performante",
        stack:"React.js Framer-motiion tailwindcss lucide",
        url:"https://nike-shoes-website.onrender.com/",
        github:"https://github.com/jacques-onek/Nike-shoes-website"

    }
]

export const Formations = [
    {
      bootcamp:"Parcours développeur Backend javascript",
      date:"2024",
      centre:"Orange digital Center",
      description:"Formation acceleré sur le développement web backend avec javascript , ce parcour ma permis d'approfondir ma comprehension des concept en développement backend en  utilisant des framework javascript tout  en travaillant sur des projets concret",
      stack:["javascript","DSA","node.js","Express"]
    },
    {
        bootcamp:"Parcours Ui/Ux avec Figma",
        date:"2024",
        centre:"Orange digital Center",
        description:"Lors de cette atélier pratique sur le conception Ui/Ux sur figma , je appris comment maquetter et prototyper mes applications avant le développement . je pus maitriser le logiciel figma  pour la creation des design moderne et intuitive ",
        stack:["UI","Ux","Figma"]
    },
    {
        bootcamp:"Développement web fullstack ",
        date:"2022",
        centre:"Self Taught Déveloper",
        description:"depuis 2022 ou tout à commencé , j ' apprenais le developpement web fullstack en autodidacte sur des plateforme en ligne comme udemy , javascript mastery , et Grafikart, ce qui ma permis d'apprendre en profondeur react et Next.js , stack que que j'adore ",
        stack:["Next.js","react","nodejs","typescript","zustand","imageKit"]

    }
]

export const Experiences = [
    {
        post:"Fullstack web Développeur",
        date:"2025",
        entreprise:"Freelance",
        description:"conception et développement des application et site web Seo optimisé et performant et scalable  pour les particuliers et Entreprise en tant que Freelance utilisant des stack moderne notamment : Next.js , Shadcn ui, Postgresql , Upstash etc... l'animation  fluide du site",
        stack:["Next.js","react","Typescript","Shadcn ui","Upstash","ImageKit","postgresql","react-hook-form/zod","tailwindcss","framer-motion"]
    
    },
    {
        post:"Frontend Développeur ",
        date:"2024",
        entreprise:"Falcong Tachnologie",
        description:"conception et développement du site Seo optimisé et perfomant  pour  l'entreprise falcong technologie en utilisant react.js , tailwindcss pour le style  et framer-motion pour l'animation  fluide du site",
        stack:["react","javascript","tailwindcss","framer-motion"]

    },
{
        post:"Développement web fullstack ",
        date:"2023",
        entreprise:"Freelance",
        description:"conception et développement des application et site web Seo optimisé et performant et scalable  en freelance pour les particuliers et PME en utilisant Php pour le backend , javascript et boopstrap pour des interface  fluide ",
        stack:["Php","javascript","Bootstrap","Html","css"]
    
    },
]