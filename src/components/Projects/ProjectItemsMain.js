import React from 'react';

import "./projects.css";
import AngularSVG from "../../assets/stack/angular.svg";
import NodejsSVG from "../../assets/stack/nodejs.svg";
function ProjectItemsMain(props) {
    return (
        <div className={"project-component"}>
            <h2>Gestion de patients</h2>
            <div className={"project-component-container"}>
                <div className={"project-component-left"}>
                    <img src={'/assets/projects/test.png'} className={"project-image"} alt=""/>
                    <h2>Stack</h2>
                    <div className={"project-stack-"}>
                        <img src={AngularSVG} height={50} className={"project-stack"} alt=""/>
                        <img src={NodejsSVG} height={50} className={"project-stack"} alt=""/>
                    </div>
                </div>
                <div className={"project-component-right"}>
                    <h3>Contexte</h3>
                    <p>Le projet efuzyzeyh est un projet de développement d'une application web de gestion de projet. Cette application permet de gérer des projets, des tâches, des utilisateurs, des clients et des équipes. Elle est développée en utilisant les technologies suivantes :</p>
                    <h3>Environnement technique</h3>
                    <p>zdaazdazdazd</p>
                </div>
            </div>

        </div>
    );
}

export default ProjectItemsMain;