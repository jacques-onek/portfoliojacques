import React from 'react'
import { BoxReveal } from './magicui/box-reveal'
import { FlickeringGrid } from './magicui/flickering-grid'
import RoughHighlight from './magicui/RoughNotation'

const Auteur = () => {
  return (
    <section className="flex w-full  flex-col lg:flex-row ">
      <div className="w-auto  flex flex-col gap-5">
        <BoxReveal>
          <h1 className="text-3xl font-black  lg:text-7xl">
            Jack Onek <span className="text-fuchsia-600 text-4xl">.</span>{" "}
          </h1>
        </BoxReveal>
        <BoxReveal>
          <p className="text-2xl text-fuchsia-600 font-medium">
            Développeur web{" "}
          </p>
        </BoxReveal>
        <p className="w-[18rem] md:w-4/5 lg:w-xl lg:text-xl ">
          <RoughHighlight type="underline" color="#a21caf">
            Fullstack{" "}
          </RoughHighlight>{" "}
          spécialisé{" "}
          <RoughHighlight type="box" color="#a21caf">
            Next.js
          </RoughHighlight>
          . Je conçois des{" "}
            applications web
          <RoughHighlight type="underline" color="#a21caf">
            modernes
          </RoughHighlight>{" "}
          , rapides et{" "}
          <RoughHighlight type="underline" color="#a21caf">
            optimisées
          </RoughHighlight>{" "}
          pour la production. Mon objectif est de transformer des idées en
          <RoughHighlight type="underline" color="#a21caf">
            produits digitaux robustes
          </RoughHighlight>
          , en combinant{" "}
          <RoughHighlight type="underline" color="#a21caf">
            design soigné
          </RoughHighlight>
          ,{" "}
            expérience
          utilisateur{" "}
          <RoughHighlight type="underline" color="#a21caf">
            fluide
          </RoughHighlight>{" "}
          et{" "}
          <RoughHighlight type="underline" color="#a21caf">
            architectures performantes
          </RoughHighlight>
          . <br />
        </p>
        <span className="text-fuchsia-600 mt-2">
          Besoin d'une Application ou site-web Attractif ?
        </span>

        <BoxReveal>
          <a href="#contact">
            <button className="bg-fuchsia-800 py-4 transition duration-300 hover:bg-fuchsia-600 px-8 rounded-md">
              Contactez moi
            </button>
          </a>
        </BoxReveal>
      </div>
      <div className="w-full flex-1 max-md:hidden ">
        <FlickeringGrid className=" text-fuchsia-600" />
      </div>
    </section>
  );
}

export default Auteur