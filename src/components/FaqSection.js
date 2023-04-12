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
import sportActionList from '../img/sportactionsreport2022.jpg';
import partAndOrg2022 from '../img/partandorg2022.jpg';
import ourTourism from '../img/ourtourism2022.jpg';
import ThanksOne from '../img/thank20221.jpg';
import ThanksTwo from '../img/thank20222.jpg';
import ThanksThree from '../img/thank20223.jpg';
import ThanksFour from '../img/thank20224.jpg';
import ThanksFive from '../img/thank20225.jpg';
import ThanksSix from '../img/thank20226.jpg';
import ThanksSeven from '../img/thank20227.jpg';
import SoutInfoOne from '../img/soutinfo-20221.jpg';
import SoutInfoTwo from '../img/soutinfo-20222.jpg';
import SoutOrder from '../img/sout2022-order.jpg';
import SoutRegOne from '../img/sout-reg20221.jpg';
import SoutRegTwo from '../img/sout-reg20222.jpg';
import SoutRegThree from '../img/sout-reg20223.jpg';
import SoutRegFour from '../img/sout-reg20224.jpg';
import SoutRegFive from '../img/sout-reg20225.jpg';
import SoutRegSix from '../img/sout-reg20226.jpg';
import SoutRegSeven from '../img/sout-reg20227.jpg';
import SoutRegEight from '../img/sout-reg20228.jpg';
import SoutRegNine from '../img/sout-reg20229.jpg';
import SoutRegTen from '../img/sout-reg202210.jpg';
import SoutRegEleven from '../img/sout-reg202211.jpg';
import SoutRegTwelve from '../img/sout-reg202212.jpg';
import SoutRegThirteen from '../img/sout-reg202213.jpg';
import SoutRegFourteen from '../img/sout-reg202214.jpg';
import SoutRegFivteen from '../img/sout-reg202215.jpg';
import SoutRegSixteen from '../img/sout-reg202216.jpg';
import SoutRegSeventeen from '../img/sout-reg202217.jpg';
import SoutImgOne from '../img/sout20221.jpeg';
import SoutImgTwo from '../img/sout20222.jpeg';
import SoutImgThree from '../img/sout20223.jpeg';
import SoutImgFour from '../img/sout20224.jpeg';
import SoutImgFive from '../img/sout20225.jpeg';
 

const FaqSection = () => {
    const [element, controls] = useScroll();
    return (
        <Faq> {/*variants={scrollReveal} ref={element} animate={controls} inintial="hidden"*/}
        <AnimateSharedLayout>
            <h2>Участие в конкурсах и мероприятиях</h2>
            <Toggle title='Перечень конкурсов и мероприятий, в которых было принято участие'>
                <div className="answer">
                    <img className="firstImg" src={actionOne} alt='action1' />
                    <img className="secondImg" src={actionTwo} alt='action2' />
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
            <Toggle title='Специальная оценка условий труда'>
                <div className="answer">
                    <p>
                        Дата проведения аттестации рабочих мест (СОУТ) - 18.11.2022 г.<br></br>
                        Число работников, занятых на работах с вредными условиями труда (чел.) - 227. <br></br>
                        В том числе женщин (чел.) - 8.
                    </p>
                    <img className="fifteenththImg" src={SoutInfoOne} alt='thanks-one' />
                    <img className="sixteenthImg" src={SoutInfoTwo} alt='thanks-two' />
                    <img className="seventeenthImg" src={SoutOrder} alt='thanks-three' />
                    <img className="eighteenthImg" src={SoutRegOne} alt='thanks-four' />
                    <img className="nineteenthImg" src={SoutRegTwo} alt='thanks-five' />
                    <img className="twentythImg" src={SoutRegThree} alt='thanks-six' />
                    <img className="twentyfirstImg" src={SoutRegFour} alt='thanks-seven' />
                    <img className="twentyfirstImg" src={SoutRegFive} alt='thanks-seven' />
                    <img className="twentyfirstImg" src={SoutRegSix} alt='thanks-seven' />
                    <img className="twentyfirstImg" src={SoutRegSeven} alt='thanks-seven' />
                    <img className="twentyfirstImg" src={SoutRegEight} alt='thanks-seven' />
                    <img className="twentyfirstImg" src={SoutRegNine} alt='thanks-seven' />
                    <img className="twentyfirstImg" src={SoutRegTen} alt='thanks-seven' />
                    <img className="twentyfirstImg" src={SoutRegEleven} alt='thanks-seven' />
                    <img className="twentyfirstImg" src={SoutRegTwelve} alt='thanks-seven' />
                    <img className="twentyfirstImg" src={SoutRegThirteen} alt='thanks-seven' />
                    <img className="twentyfirstImg" src={SoutRegFourteen} alt='thanks-seven' />
                    <img className="twentyfirstImg" src={SoutRegFivteen} alt='thanks-seven' />
                    <img className="twentyfirstImg" src={SoutRegSixteen} alt='thanks-seven' />
                    <img className="twentyfirstImg" src={SoutRegSeventeen} alt='thanks-seven' />
                    <img className="twentyfirstImg" src={SoutImgOne} alt='thanks-seven' />
                    <img className="twentyfirstImg" src={SoutImgTwo} alt='thanks-seven' />
                    <img className="twentyfirstImg" src={SoutImgThree} alt='thanks-seven' />
                    <img className="twentyfirstImg" src={SoutImgFour} alt='thanks-seven' />
                    <img className="twentyfirstImg" src={SoutImgFive} alt='thanks-seven' />
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