import React from "react";
import styled from "styled-components";
//Import images
import kindel4kids1 from "../img/kindel4kids20231.jpg";
import kidsofdonbass from '../img/kidsofdonb2023.jpg';
import veterans9thmay from '../img/veterans9thmay.jpg';
import veteransforDayofEnergy from '../img/veteransforDayofEnergy.jpg';
import vactionOne from '../img/v-action2023.jpg';

const Volunteer = () => {

    return (
        <ImageDisplay>
            <div className="img-wrapper">
                <h2>1. Акция Доброе электричество в школе Сергиев Посад</h2>
                <img src={kindel4kids1} alt="photo1"/>
                
                <h2>2. Акция Доброе электричество для детей Донбасса</h2>
                <img src={kidsofdonbass} alt="for kids of donb"/>

                <h2>3. Посещение ветеранов к 9 мая</h2>
                <img src={veterans9thmay} alt="movie"/>

                <h2>4. Посещение ветеранов ко ДЭ</h2>
                <img src={veteransforDayofEnergy} alt="movie"/>

                <h2>5. Помощь мобилизованным</h2>
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