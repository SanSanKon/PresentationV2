import React from "react";
import styled from "styled-components";
//Import images
import kindel4kids1 from "../img/kindel4kids20231.jpg";
import kidsofdonbass from '../img/kidsofdonb2023.jpg';
import veterans9thmay from '../img/veterans9thmay.jpg';
import veteransforDayofEnergy from '../img/veteransforDayofEnergy.jpg';
import vactionOne from '../img/v-action2023.jpg';
import questCareOne from "../img/questCare1.jpeg";
import questCareTwo from "../img/questCare2.jpeg";
import questCareThree from "../img/questCare3.jpeg";
import questHope from "../img/questHope1.jpeg";
import workWithVeteransOne from "../img/workWithVeteransOne.jpeg";
import workWithVeteransTwo from "../img/workWithVeteransTwo.jpeg";
import veteransMuseumOne from "../img/veteransMuseumOne.jpeg";
import veteransMuseumTwo from "../img/veteransMuseumTwo.jpeg";
import veteransMuseumThree from "../img/veteransMuseumThree.jpeg";

const Volunteer = () => {

    return (
        <ImageDisplay>
            <div className="img-wrapper">
                <h2>1. Акция Доброе электричество в школе Сергиев Посад</h2>
                <img src={kindel4kids1} alt="photo1"/>
                
                <h2>2. Акция Доброе электричество для детей Донбасса</h2>
                <img src={kidsofdonbass} alt="for kids of donb"/>

                <h2>3. Квест с подарками ко Дню знаний в ГКУ "Социально-реабилитационный центр для несовершеннолетних "Забота"</h2>
                <img src={questCareOne} alt="quest with presents"/>
                <img src={questCareTwo} alt="quest with presents"/>
                <img src={questCareThree} alt="quest with presents"/>

                <h2>4. Квест с подарками ко Дню знаний в ГКУ "Социально-реабилитационный центр для несовершеннолетних "Надежда"</h2>
                <img src={questHope} alt="quest with presents"/>

                <h2>5. Посещение ветеранов к 9 мая</h2>
                <img src={veterans9thmay} alt="veteransVizit"/>

                <h2>6. Посещение ветеранов ко ДЭ</h2>
                <img src={veteransforDayofEnergy} alt="veteransVizit"/>

                <h2>7. Работа с ветеранами</h2>
                <img src={workWithVeteransOne} alt="workWithVeterans"/>
                <img src={workWithVeteransTwo} alt="workWithVeterans"/>

                <h2>8. Посещение ветеранами Музея Северных электрических сетей</h2>
                <img src={veteransMuseumOne} alt="veteransMuseumOne"/>
                <img src={veteransMuseumTwo} alt="veteransMuseumTwo"/>
                <img src={veteransMuseumThree} alt="veteransMuseumThree"/>

                <h2>9. Помощь мобилизованным</h2>
                <img src={vactionOne} alt="military web" />

            </div>
            
        </ImageDisplay>

    );
}

const ImageDisplay = styled.div`
    .img-wrapper {
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .vactionWrapper {
            align-items: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
            .secondParagraph {
                width: 100%;
            }
        }
    }
    h2 {
        background: transparent;
        border: 2px solid white;
        color: #fff;
        margin: 20px 0;
        padding: 10px 10px 10px 20px;
        text-align: center;
        text-decoration: underline;
        width: 70%;
    }

    p {
        margin: 0 0 1rem;
        padding: 0;
        text-align: justify;
        width: 65%;
    }

    img {
        margin: 0 0 1rem 0;
        max-height: 60%;
        max-width: 60%;
    }    
`;

export default Volunteer; 