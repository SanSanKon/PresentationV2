import React from "react";
//Import images
import QRCode from '../img/qr-code.png';
import OsnPokaz from '../img/osnpokaz2023.jpg';
import PlanOne from '../img/workplan20231.jpg';
import PlanTwo from '../img/workplan20232.jpg';
import PlanThree from '../img/workplan20233.jpg';
import PlanFour from '../img/workplan20234.jpg';
import PlanFive from "../img/workplan20235.jpg";
import PlanSix from "../img/workplan20236.jpg";
import YouthActPlanOne from '../img/youthActionPlan1.jpg';
import YouthActPlanTwo from '../img/youthActionPlan2.jpg';
import YouthActPlanThree from '../img/youthActionPlan3.jpg';
import YouthActPlanFour from '../img/youthActionPlan4.jpg';
import PlanUpolnomochOne from '../img/planupolnomoch20231.jpg';
import PlanUpolnomochTwo from '../img/planupolnomoch20232.jpg';
import PlanUpolnomochThree from '../img/planupolnomoch20233.jpg';

//Styles
import {About, ImageTwo} from '../styles';
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
                    <h2>План мероприятий на 2023 год</h2>
                    <img src ={PlanOne} alt='planOne' />
                    <img src = {PlanTwo} alt='planTwo' />
                    <img src = {PlanThree} alt='planThree' />
                    <img src = {PlanFour} alt='planFour' />
                    <img src = {PlanFive} alt='planFive' />
                    <img src = {PlanSix} alt='planSix' />
                </ImageTwo>
            </Services>
            <Services>
                <ImageTwo>
                    <h2>План совета молодых работников</h2>
                    <img src={YouthActPlanOne} alt='youthActOne'/>
                    <img src={YouthActPlanTwo} alt='youthActTwo' />
                    <img src={YouthActPlanThree} alt='youthActThree' />
                    <img src={YouthActPlanFour} alt='youthActFour' />
                </ImageTwo>
            </Services>
            <Services>
                <ImageTwo>
                    <h2>План работы уполномоченных (доверенных) лиц по охране труда на 2023 год</h2>
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