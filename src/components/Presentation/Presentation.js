import anime from 'animejs/lib/anime.es.js';

import "./presentation.css";

import React, { useState, useEffect, useRef  } from 'react';
import JavascriptSVG from "../../assets/stack/javascript.svg";
import AngularSVG from "../../assets/stack/angular.svg";
import ReactSVG from "../../assets/stack/react.svg";
import CssSVG from "../../assets/stack/css.svg";
import HtmlSVG from "../../assets/stack/html.svg";
import PythonSVG from "../../assets/stack/python.svg";
import NodejsSVG from "../../assets/stack/nodejs.svg";
import tailwindSVG from "../../assets/stack/tailwind.svg";


export default function Presentation() {
  
    return (
      <div className="presentation-container">
        <p className='presentation-text'>
          Je m'appelle Clément Fouin. Je suis Ingénieur informatique spécialisé dans le développement d'application web.
          Passionné de musique, de sport, d'automobile, de nouvelles technologie, et surtout d' informatique je passe une grande partie de mon temps libre à développer
          de nouvelles applications et solutions numériques.  <br/> <br/>
            Durant ces dernières années j'ai fortement développé mes compétences professionnelles jusqu'à créer plusieurs applications complètes, serveur, client,
          base de données et opérationnelles 24h/24h dans le domaine de la santé et de la gestion de plans d'actions.
          Si vous êtes interressé n'hésitez pas à me contacter.
        </p>
  <div className='stack-container'>
      <h2>Stack</h2>
      <div className='stack-icons-container'>
          <img src={JavascriptSVG} height={50} alt="Javascript icon"/>
          <img src={AngularSVG} height={50} alt="Javascript icon"/>
          <img src={ReactSVG} height={50} alt="Javascript icon"/>
          <img src={CssSVG} height={50} alt="Javascript icon"/>
          <img src={HtmlSVG} height={50} alt="Javascript icon"/>
          <img src={PythonSVG} height={50} alt="Javascript icon"/>
          <img src={NodejsSVG} height={50} alt="Javascript icon"/>
          <img src={tailwindSVG} height={50} alt="Javascript icon"/>
      </div>
  </div>

      </div>
      
    );
  }