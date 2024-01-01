import anime from 'animejs/lib/anime.es.js';

import "./presentation.css";

import React, { useState, useEffect, useRef  } from 'react';

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
          <label>stack</label>
          <img width="48" height="48" src="https://img.icons8.com/color/48/javascript--v1.png" alt="javascript--v1"/>
          <img width="48" height="48" src="https://img.icons8.com/color/48/nodejs.png" alt="nodejs"/>
          <img width="48" height="48" src="https://img.icons8.com/fluency/48/node-js.png" alt="node-js"/>
          <img width="48" height="48" src="https://img.icons8.com/office/48/react.png" alt="react"/>
          <img width="48" height="48" src="https://img.icons8.com/color/48/angularjs.png" alt="angularjs"/>
          <img width="48" height="48" src="https://img.icons8.com/color/48/python--v1.png" alt="python--v1"/>
          <img width="48" height="48" src="https://img.icons8.com/color/48/html-5--v1.png" alt="html-5--v1"/>
          <img width="48" height="48" src="https://img.icons8.com/color/48/css3.png" alt="css3"/>
        </div>        
      </div>
      
    );
  }