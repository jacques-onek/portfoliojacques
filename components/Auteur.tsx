import React from 'react'
import { BoxReveal } from './magicui/box-reveal'
import { FlickeringGrid } from './magicui/flickering-grid'
import RoughHighlight from './magicui/RoughNotation'

const Auteur = () => {
  return (
    <section className="flex w-full flex-col lg:flex-row ">
      <div className="w-auto max-lg:w-4/5 flex flex-col gap-5">
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
        {/* <BoxReveal></BoxReveal> */}
        <p className="w-[17rem] md:w-4/5 lg:w-xl lg:text-xl leading-8">
          <RoughHighlight type="underline" color="#a21caf">
            Fullstack{" "}
          </RoughHighlight>{" "}
          spécialisé{" "}
          <RoughHighlight type="box" color="#a21caf">
            Next.js
          </RoughHighlight>
          . Je conçois des{" "}
          <RoughHighlight type="underline" color="#a21caf">
            applications web
          </RoughHighlight>{" "}
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
          <RoughHighlight type="underline" color="#a21caf">
            expérience
          </RoughHighlight>{" "}
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
          <button className="bg-fuchsia-800 py-4 px-8 rounded-md">
            Contact me
          </button>
        </BoxReveal>
      </div>
      <div className="w-full flex-1 max-md:hidden ">
        <FlickeringGrid className=" text-fuchsia-600" />
      </div>
    </section>
  );
}

export default Auteur