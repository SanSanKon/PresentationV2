import React from "react";
import Mosseti from '../img/ses6.jpg';
//Import framer motion
import {motion} from 'framer-motion';
import { titleAnimation, fade, photoAnimation } from "../animation";
import Wave from "./Wave";
import qrcode from '../img/qr-code.png';

//Styles

import {About, Description, Image, Hide } from '../styles';
import styled from "styled-components";

const AboutSection = () => {

    return (
            <About>
                <Description>
                    <motion.div>
                        <Hide>
                            <motion.h2 variants={titleAnimation}> 
                            Характеристика Северных электрических сетей – 
                            филиала ПАО «Россети Московский регион»</motion.h2>
                        </Hide>
                    </motion.div>
                    <motion.p variants={fade}>Общая площадь, занимаемая объектами Северных электрических сетей, составляет 270 га.<br/>
                                                Численность обслуживаемого населения - 1,255 млн.человек.<br/>
                                                Территория  обслуживания    -  10 142 км².<br/>
                                                Штатная численность персонала 1855 человек.<br/>
                                                Средний возраст работников 43 года.<br/>
                                                Молодые сотрудники составляют 32% численности.<br/>
                    </motion.p>
                    <motion.button variants={fade}><a href="https://rossetimr.ru/#">Россети</a></motion.button>
                </Description>
                <Image>
                    <motion.img variants={photoAnimation} src={Mosseti} alt="stuff for exploration" />
                </Image>
                <Wave />
            </About>
    );
};

//Styled component

export default AboutSection;