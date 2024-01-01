import React, {useEffect, useState} from 'react';
// Import Swiper React components
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Presentation from "./components/Presentation/Presentation";
import Contact from "./components/Contact/Contact";

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Mousewheel, EffectCreative } from 'swiper';

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";

import "./styles.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/footer";
import {I18nextProvider} from "react-i18next";
import i18n from './i18n';

SwiperCore.use([Mousewheel]);
export default function App() {
    const [swiperRef, setSwiperRef] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const slideTo = (index) => {
        swiperRef.slideTo(index - 1, 1500);
    };
    return (
        <I18nextProvider i18n={i18n}>
            <div className="App">
                <Header slideTo={slideTo} currentIndex={currentIndex}/>
                <Swiper
                    className="mySwiper"
                    spaceBetween={30}
                    onSwiper={setSwiperRef}
                    onActiveIndexChange={() => setCurrentIndex(swiperRef.activeIndex)}
                    effect={"creative"}
                    creativeEffect={{
                        prev: {
                            shadow: true,
                            translate: ["-125%", 0, -800],
                            rotate: [0, 0, -90],
                        },
                        next: {
                            shadow: true,
                            translate: ["125%", 0, -800],
                            rotate: [0, 0, 90],
                        },
                    }}
                    modules={[EffectCreative, Mousewheel]}
                    mousewheel={{ invert: false, sensitivity: 1 }}
                >
                    <SwiperSlide><Home/></SwiperSlide>
                    <SwiperSlide><Presentation/></SwiperSlide>
                    <SwiperSlide><Projects/></SwiperSlide>
                    <SwiperSlide><Contact/></SwiperSlide>
                </Swiper>
                <Footer></Footer>
            </div>
        </I18nextProvider>
    );
}
