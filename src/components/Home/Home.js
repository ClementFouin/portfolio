import "./home.css";
import anime from 'animejs/lib/anime.es.js';
import ArrowSVG from "../../assets/arrow-right.svg";

import React, { useState, useEffect, useRef  } from 'react';
import {t} from "i18next";

export default function Home() {
    const texts = [t("Junior full stack developer"), t("Python NodeJS Angular React")];
    const textContainerRef = useRef(null);
    const [textIndex, setTextIndex] = useState(0);



    const createLetterElements = (text) => {
        return text.split('').map((letter, index) => {
            const span = document.createElement('span');
            span.innerText = letter;
            return span;
        });
    };



    const animateLetters = (letters) => {
        anime.timeline({ loop: false })
            .add({
                targets: letters,
                opacity: [0, 1],
                easing: "easeInOutQuad",
                duration: 200,
                delay: (el, i) => 50 * i
            })
            .add({
                targets: ".subtitle",
                opacity: [1, 0],
                easing: "easeInOutQuad",
                duration: 1500,
                complete: () => {
                    textContainerRef.current.innerHTML = "";
                    setTextIndex((textIndex + 1) % texts.length);
                }
            });
    };




    const animateText = () => {
        const currentText = texts[textIndex];
        const letters = createLetterElements(currentText);
        letters.forEach(letter => textContainerRef.current.appendChild(letter));
        animateLetters(letters);
    };

    useEffect(() => {
        animateText();
    }, [textIndex]);

    return (
        <div className="home-container">
            <div className="title-container">
                <div>
                    <h3 className="hello">{t('Hi, I\'m')}</h3>
                    <h1 className="title">Clément Fouin</h1>
                    <h2 className={"subtitle"} ref={textContainerRef}> </h2>
                </div>

                <a href="/assets/CV_Fouin_Clément.pdf" className="btn-cv-container"  download="CV_Clément_Fouin"><p className="btn-cv">{t('DOWNLOAD RESUME')}<img src={ArrowSVG} className={"image"} height={45} alt="donwload icon"/></p></a>

            </div>
            <img
                className="container-img"
                src={'/assets/clément_fouin.png'}
                alt="Clément Fouin"
            />
        </div>
    );
}