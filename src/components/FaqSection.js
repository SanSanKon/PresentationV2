import React from "react";
import styled from "styled-components";
import { About } from '../styles';
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";
// import images
import actionOne from '../img/action20231.jpg';
import actionTwo from '../img/action20232.jpg';
import actionThree from '../img/action20233.jpg';
import sportActionList from '../img/sportactionsreport2023.jpg';
import partAndOrg2023 from '../img/partandorg2023.jpg';
import VolunteerActionOne from '../img/volunteerActionOne.jpg';
import VolunteerActionTwo from '../img/volunteerActionTwo.jpg';
import VolunteerActionThree from '../img/volunteerActionThree.jpg';
import VolunteerActionFour from '../img/volunteerActionFour.jpg';
import ThanksOne from '../img/thank20231.jpg';
import ThanksTwo from '../img/thank20232.jpg';
import ThanksThree from '../img/thank20233.jpg';
import ThanksFour from '../img/thank20234.jpg';
import ThanksFive from '../img/thank20235.jpg';
import ThanksSix from '../img/thank20236.jpg';
import SoutInfoOne from '../img/diplomSkvorcov1.jpeg';
import SoutInfoTwo from '../img/diplomSkvorcov2.jpeg';
import SoutTeaching from '../img/soutTeach.jpeg';
 

const FaqSection = () => {
    return (
        <Faq> {/*variants={scrollReveal} ref={element} animate={controls} inintial="hidden"*/}
        <AnimateSharedLayout>
            <h2>Участие в конкурсах и мероприятиях</h2>
            <Toggle title='Перечень конкурсов и мероприятий, в которых было принято участие'>
                <div className="answer">
                    <img className="firstImg" src={actionOne} alt='action1' />
                    <img className="secondImg" src={actionTwo} alt='action2' />
                    <img className="secondImg" src={actionThree} alt='action2' />
                </div>
            </Toggle>
            <Toggle title='Отчет о спортивных мероприятиях 2023'>
                <div className="answer">
                    <img className="thirdImg" src={sportActionList} alt='sportactions' />
                </div>
            </Toggle>
            <Toggle title='Мероприятия: участие и проведение'>
                <div className="answer">
                    <img className="fourthImg" src={partAndOrg2023} alt='partandorg' />
                </div>
            </Toggle>
            <Toggle title='Волонтерские акции'>
                <div className="answer">
                    <img className="fifthImg" src={VolunteerActionOne} alt='actionses' />
                    <img className="fifthImg" src={VolunteerActionTwo} alt='actionses' />
                    <img className="fifthImg" src={VolunteerActionThree} alt='actionses' />
                    <img className="fifthImg" src={VolunteerActionFour} alt='actionses' />
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
                </div>
            </Toggle>
            <Toggle title='Лучший уполномоченный по охране труда ВЭП'>
                <div className="answer">
                    <img className="fifteenththImg" src={SoutInfoOne} alt='diplomOne' />
                    <img className="sixteenthImg" src={SoutInfoTwo} alt='diplomTwo' />
                </div>
            </Toggle>
            <Toggle title='Обучение молодых специалистов по охране труда'>
                <div className="answer">
                    <img className="seventeenthImg" src={SoutTeaching} alt='lecture' />
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