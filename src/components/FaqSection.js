import React from "react";
import styled from "styled-components";
import { About } from '../styles';
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";
import { useScroll } from "./useScroll";
import { scrollReveal } from "../animation";
// import images
import actionOne from '../img/action20221.jpg';
import actionTwo from '../img/action20222.jpg';
// import actionThree from '../img/actions20223.jpg';
import sportActionList from '../img/sportactionsreport2022.jpg';
import partAndOrg2022 from '../img/partandorg2022.jpg';
import ourTourism from '../img/ourtourism2022.jpg';
// import teamBuilding from '../img/32teambuilding.jpg';
// import ninthOfMayOne from '../img/9ofMay6.jpeg';
// import ninthOfMayTwo from '../img/9ofMay7.jpeg';
// import ninthOfMayThree from '../img/9ofMay3.jpeg';
// import ninthOfMayFour from '../img/9ofMay4.jpeg';
// import ninthOfMayFive from '../img/9ofMay5.jpeg';
// import SokolnikiOne from '../img/sokolniki1.jpeg';
// import SokolnikiThree from '../img/sokolniki3.jpeg';
import ThanksOne from '../img/thank20221.jpg';
import ThanksTwo from '../img/thank20222.jpg';
import ThanksThree from '../img/thank20223.jpg';
import ThanksFour from '../img/thank20224.jpg';
import ThanksFive from '../img/thank20225.jpg';
import ThanksSix from '../img/thank20226.jpg';
import ThanksSeven from '../img/thank20227.jpg';

const FaqSection = () => {
    const [element, controls] = useScroll();
    return (
        <Faq variants={scrollReveal} ref={element} animate={controls} inintial="hidden">
        <AnimateSharedLayout>
            <h2>Участие в конкурсах и мероприятиях</h2>
            <Toggle title='Перечень конкурсов и мероприятий, в которых было принято участие'>
                <div className="answer">
                    <img className="firstImg" src={actionOne} alt='action1' />
                    <img className="secondImg" src={actionTwo} alt='action2' />
                    {/* <img className="secondImg" src={actionThree} alt='action3' /> */}
                </div>
            </Toggle>
            <Toggle title='Отчет о спортивных мероприятиях 2022'>
                <div className="answer">
                    <img className="thirdImg" src={sportActionList} alt='sportactions' />
                </div>
            </Toggle>
            <Toggle title='Мероприятия: участие и проведение'>
                <div className="answer">
                    <img className="fourthImg" src={partAndOrg2022} alt='partandorg' />
                </div>
            </Toggle>
            <Toggle title='Наш туризм'>
                <div className="answer">
                    <img className="fifthImg" src={ourTourism} alt='actionses' />
                </div>
            </Toggle>
            {/* <Toggle title='Тимбилдинг'>
                <div className="answer">
                    <img className="sixthImg" src={teamBuilding} alt='teamBuilding' />
                </div>
            </Toggle>
            <Toggle title='Участие в мероприятиях, посвященных 9 мая 2022 г.'>
                <div className="answer">
                    <img className="seventhImg" src={ninthOfMayOne} alt='9ofMay' />
                    <img className="eighthImg" src={ninthOfMayTwo} alt='9ofMay' />
                    <img className="ninthImg" src={ninthOfMayThree} alt='9ofMay' />
                    <img className="tenthImg" src={ninthOfMayFour} alt='9ofMay' />
                    <img className="eleventhImg" src={ninthOfMayFive} alt='9ofMay' />
                </div>
            </Toggle>
            <Toggle title='Участие в субботнике в парке Сокольники'>
                <div className="answer">
                    <img className="twelvthImg" src={SokolnikiOne} alt='sokolnikiOne' />
                    <img className="fourteenthImg" src={SokolnikiThree} alt='sokolnikiOne' />
                </div>
            </Toggle> */}
            <Toggle title='Благодарности'>
                <div className="answer">
                    <img className="fifteenththImg" src={ThanksOne} alt='thanks-one' />
                    <img className="sixteenthImg" src={ThanksTwo} alt='thanks-two' />
                    <img className="seventeenthImg" src={ThanksThree} alt='thanks-three' />
                    <img className="eighteenthImg" src={ThanksFour} alt='thanks-four' />
                    <img className="nineteenthImg" src={ThanksFive} alt='thanks-five' />
                    <img className="twentythImg" src={ThanksSix} alt='thanks-six' />
                    <img className="twentyfirstImg" src={ThanksSeven} alt='thanks-seven' />
                </div>
            </Toggle>
        </AnimateSharedLayout>
        </Faq>
    );
};

const Faq = styled(About)`
    display: block;
    span {
        display: block;
    }
    h2 {
        background: #004e8f;
        font-weight: bold;
        padding: 10px 0 10px 10px;
        width: 100%;
    }
    .faq-line {
        background: #cccccc;
        height: 0.2rem;
        margin: 2rem 0rem;
        width: 100%;
        @media screen and (max-width: 631px) {
            margin: 1rem 0rem;
        }
    }
    .question {
        cursor: pointer;
        padding: 3rem 0rem;
        @media screen and (max-width: 631px) {
            padding: 1.5rem;
        }
    }
    .answer {
        padding: 2rem 0rem;
        p {
            padding: 1rem 0rem;
        }
        .firstImg, 
        .secondImg, 
        .thirdImg,
        .fourthImg,
        .fifthImg,
        .sixthImg,
        .seventhImg,
        .eighthImg,
        .ninthImg,
        .tenthImg,
        .eleventhImg,
        .twelvthImg,
        .thirteenthImg,
        .fourteenthImg,
        .fifteenththImg,
        .sixteenthImg,
        .seventeenthImg,
        .eighteenthImg,
        .nineteenthImg,
        .twentythImg,
        .twentyfirstImg {
            margin: 10px 0 20px;
            width: 100%;
        }
    }
`;

export default FaqSection;