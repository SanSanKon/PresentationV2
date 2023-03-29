import React from "react";
//Import images
import QRCode from '../img/qr-code.png';
import OsnPokaz from '../img/osnpokaz2022.jpg';
import PlanOne from '../img/workplan20221.jpg';
import PlanTwo from '../img/workplan20222.jpg';
import PlanThree from '../img/workplan20223.jpg';
import PlanFour from '../img/workplan20224.jpg';
import YouthActOne from '../img/planyouth20221.jpg';
import YouthActTwo from '../img/planyouth20222.jpg';
import YouthActThree from '../img/planyouth20223.jpg';
import YouthActFour from '../img/planyouth20224.jpg';
import PlanUpolnomochOne from '../img/planupolnomoch20221.jpg';
import PlanUpolnomochTwo from '../img/planupolnomoch20222.jpg';
import PlanUpolnomochThree from '../img/planupolnomoch20223.jpg';

//Styles
import {About, Description, ImageTwo} from '../styles';
import styled from "styled-components";
import { fade } from "../animation";
import { useScroll } from "./useScroll";


const ServicesSection = () => {
    const [element, controls] = useScroll();
    return (
        <>  
            <QRCodeWrapper>
                <h2>QR-code для перехода на страницу презентации</h2>
                <img className="qrcode" src={QRCode} alt="qr-code" />
            </QRCodeWrapper>

            <Services variants={fade} ref={element} animate={controls} initial="hidden">
                <ImageTwo>
                    <h2>Основные показатели деятельности первичной профсоюзной организации</h2>
                    <img src={OsnPokaz} alt="common-info" />
                </ImageTwo>
            </Services>
            <Services>
                <ImageTwo>
                    <h2>План мероприятий на 2022 год</h2>
                    <img src ={PlanOne} alt='planOne' />
                    <img src = {PlanTwo} alt='planTwo' />
                    <img src = {PlanThree} alt='planThree' />
                    <img src = {PlanFour} alt='planFour' />
                </ImageTwo>
            </Services>
            <Services>
                <ImageTwo>
                    <h2>План совета молодых работников</h2>
                    <img src={YouthActOne} alt='youthActOne'/>
                    <img src={YouthActTwo} alt='youthActTwo' />
                    <img src={YouthActThree} alt='youthActThree' />
                    <img src={YouthActFour} alt='youthActFour' />
                </ImageTwo>
            </Services>
            <Services>
                <ImageTwo>
                    <h2>План работы уполномоченных (доверенных) лиц по охране труда на 2022 год</h2>
                    <img src={PlanUpolnomochOne} alt='Plan page one' />
                    <img src={PlanUpolnomochTwo} alt='Plan page two' />
                    <img src={PlanUpolnomochThree} alt='Plan page three' />
                </ImageTwo>
            </Services>
        </>
    );
};

const QRCodeWrapper = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h2 {
        color: white;
        margin: 0 0 2rem;
        text-align: center;
    }
`;

const Services = styled(About)`
    h2 {
        padding-bottom: 2rem;
        text-align: center;
        @media screen and (max-width: 631px) {
            padding-bottom: 2.5rem;
        }
    }
    p {
        padding: 2rem 0rem 4rem 0rem;
        width: 70%;
    }
    .qrcode {

    }
`;

const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
    @media screen and (max-width: 1300px) {
        justify-content: center;
    }
`;

const Card = styled.div`
    flex-basis: 20rem;
    .icon {
        align-items: center;
        display: flex;
        h3 {
            background: white;
            color: black;
            margin-left: 1rem;
            padding: 1rem;
        }
    }
`;

export default ServicesSection;