import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
//Images
import volunteering from '../img/volunteer2023.jpg';
import MassActions from '../img/massactions2023.jpeg';
import Dynasty from '../img/labourdynasty2023.jpeg';
//import lake from '../img/LakeOne.jpg';
//Animations
import { motion } from "framer-motion";
import {slider, pageAnimation, fade, photoAnimation, lineAnimation} from '../animation';
import { useScroll } from '../components/useScroll';
import ScrollTop from '../components/ScrollTop';

const OurWork = () => {
    const [element, controls] = useScroll();
    const [element2, controls2] = useScroll();
    return (
        <Work
            style={{ background: '#FFF' }}
            exit="exit" 
            variants={pageAnimation} 
            initial="hidden" 
            animate="show"
        >
            <Frame1 variants={slider}></Frame1>
            <Frame2 variants={slider}></Frame2>
            <Frame3 variants={slider}></Frame3>
            <Frame4 variants={slider}></Frame4>
            <Movie>
                <motion.h2 variants={fade}>Волонтерство</motion.h2>
                <motion.div variants={lineAnimation} className='line'></motion.div>
                <Link to='/work/volunteer'>
                    <Hide>
                        <motion.img variants={photoAnimation} src={volunteering} alt='volunteering' />
                    </Hide>
                </Link>
            </Movie>
            <Movie ref={element} variants={fade} animate={controls} initial='hidden'>
            <motion.h2 variants={fade}>Культутно-массовые мероприятия</motion.h2>
                <motion.div variants={lineAnimation} className='line'></motion.div>
                <Link to='/work/massactions'>
                    <img src={MassActions} alt='mass actions' />
                </Link>
            </Movie>
            <Movie  ref={element2} variants={fade} animate={controls2} initial='hidden'>
            <motion.h2 variants={fade}>Прочие достижения</motion.h2>
                <motion.div variants={lineAnimation} className='line'></motion.div>
                <Link to='/work/winners'>
                    <img src={Dynasty} alt='winners' />
                </Link>
            </Movie>
            <ScrollTop />
        </Work>
    )
};

const Work = styled(motion.div)`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;
    @media screen and (max-width: 1300px) {
        padding: 2rem 2rem;
    }
    h2 {
        color: black;
        padding: 1rem 0rem;
    }
`;

const Movie = styled(motion.div)`
    padding-bottom: 10rem;
    .line {
        background: #23d997;
        height: 0.5rem;
        margin-bottom: 3rem;
    }
    img {
        height: 100vh;
        object-fit: cover;
        width: 100%;
    }
    @media screen and (max-width: 768px) {
        padding-bottom: 3rem;
        img {
            height: 100%;
            width: 100%;
        }
    }

    @media screen and (max-width: 450px) {
        padding-bottom: 1rem;
    }
`;

const Hide = styled.div`
    overflow: hidden;
`;

//Frame Animation
const Frame1 = styled(motion.div)`
    background: #fffebf;
    height: 100vh;
    left: 0;
    position: fixed;
    top: 10%;
    width: 100%;
    z-index: 2;
`;

const Frame2 = styled(Frame1)`
    background: #ff8efb;
`;

const Frame3 = styled(Frame1)`
    background: #8ed2ff;
`;

const Frame4 = styled(Frame1)`
    background: #8effa0;
`;

export default OurWork;