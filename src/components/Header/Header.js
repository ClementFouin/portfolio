import React, {useEffect, useState} from 'react';
import './Header.css';
import {useTranslation} from "react-i18next";

function Header({slideTo, currentIndex}) {
    const { t } = useTranslation();
    const pages_title = [t('Home'),t('About'), t('Work'), t('Contact')];

    useEffect(() => {
        console.log(currentIndex);
    }, [currentIndex]);

    return (
        <div className="nav-bar-container">
            <label className='page-title'>Clément Fouin</label>
            <div className="nav-btn-container">
                {pages_title.map((title, index) => (
                    <label
                        key={index}
                        onClick={() => slideTo(index + 1)}
                        className={`nav-btn ${currentIndex === index ? "nav-btn-active" : ""}`}
                    >
                        {title}
                    </label>
                ))}
            </div>
        </div>
    );
}

export default Header;