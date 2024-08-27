import React from 'react';
import styled from 'styled-components';
//Animations


import { About } from '../styles';
import Toggle from "../components/Toggle";
import { AnimateSharedLayout } from "framer-motion";
import { useScroll } from "../components/useScroll";
import { scrollReveal } from "../animation";

//Import images
import ParticipantPhoto from '../img/participant.jpeg';

const Participant = () => {
  const [element, controls] = useScroll();
  return (
      <Faq variants={scrollReveal} ref={element} animate={controls} inintial="hidden">
        <AnimateSharedLayout>
            <h2>Участник конкурса</h2>
            <Toggle title='Биография участника конкурса'>
                <div className="answerQuestionnaire">
                    <div className='anketa'>
                      <p><span>Фамилия, имя, отчество:</span> Шайхутдинова Лариса Руслановна;</p><br />
                      <p><span>Место работы, должность:</span>Инженер Красногорского РЭС филиала ПАО «Россети Московский регион» 
                      - Северные электрические сети;</p><br />
                      <p><span>Название первичной профсоюзной организации:</span> ППО Северных электрических сетей МОМ и МО ВЭП;</p><br />
                      <p><span>Название отраслевого профсоюза:</span> МОМ и МО ВЭП;</p><br />
                      <p><span>Стаж профосоюзной деятельности, должность:</span>5 лет, председатель совета молодых работников;</p><br />
                      <p><span>Краткая характеристика себя как молодого профсоюзного лидера:</span> инициативность, активность, вовлеченность, 
                      работа с молодежью, агитация молодежи на вступление в профсоюз;</p><br />
                      <p><span>Прочее:</span> - активист МОМ и МО ВЭП;</p>
                    </div>
                    <img className='participantImg' src={ParticipantPhoto} alt='participant' />
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
  }
  .question {
      cursor: pointer;
      padding: 3rem 0rem;
      @media screen and (max-width: 450px) {
        padding: 0.5rem 0rem;
      }
  }
  .answerQuestionnaire {
    display: flex;
    flex-direction: row;
    padding: 2rem 0rem;
    width: 100%;
    .anketa {
      width: 50%;
      p {
        font-size: 1.25rem;
        margin: 0 10px 0 0;
        padding: 0;
        span {
          color: #fff;
          font-weight: lighter;
          text-decoration: underline;
        }
        @media screen and (max-width: 450px) {
        font-size: 0.7rem;
    }
      }
    }
      
      .participantImg {
          //margin: 10px 0 20px;
          width: 50%;
      }
      @media screen and (max-width: 450px) {
        flex-direction: column;
        padding: 0.25rem 0rem;
        .anketa {
            margin-bottom: 10px;
            width: 100%;
        p {
            font-size: 0.825rem;
            margin: 0 10px 0 0;
            padding: 0;
            span {
            color: #fff;
            font-weight: lighter;
            text-decoration: underline;
            }
        }
    }
    .participantImg {
        width: 100%;
    }
    }
  }
  .answer {
      padding: 2rem 0rem;
      p {
          padding: 1rem 0rem;
      }
      .someImg {
          margin: 10px 0 20px;
          width: 100%;
      }
  }
`;

export default Participant;