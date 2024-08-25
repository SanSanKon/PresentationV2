import React from "react";
import styled from "styled-components";
//Import images
import Badminton from '../img/badminton.jpg';
import Basketball from '../img/basketball.jpeg';
import Running from '../img/running.jpeg';
import diplomOne from '../img/potapov.a.jpeg';
import diplomTwo from "../img/potapov.e.jpeg"

const MassActions = () => {
    return (
        <ImageDisplay>
            <div className="actions-wrapper">
                <h1>Культурно-массовые мероприятия:</h1>

                <h2>1. Бадминтон</h2>
                <img src={Badminton} alt="badminton"/>

                <h2>2. Баскетбол</h2>
                <img src={Basketball} alt="basketball"/>

                <h2>3. Бег</h2>
                <img src={Running} alt="running"/>

                <h2>4. Дипломы</h2>
                <img src={diplomOne} alt="diplomOne"/>
                <img src={diplomTwo} alt="diplomTwo"/>


            </div>
        </ImageDisplay>

    );
};

const ImageDisplay = styled.div`
    //min-height: 50vh;
    .actions-wrapper {
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    
    h1 {
        background: transparent;
        border: 2px solid white;
        color: #fff;
        margin: 20px 0;
        padding: 10px 10px 10px 20px;
        text-align: center;
        text-decoration: underline;
        width: 90%;
    }

    h2, p {
        background: transparent;
        border: 2px solid white;
        color: #fff;
        margin: 20px 0;
        padding: 10px 10px 10px 20px;
        text-align: center;
        text-decoration: underline;
        width: 70%;
    }
    /* h2, p {
        background: #495a78;
        color: #fff;
        margin: 20px 0;
        padding: 10px 0 10px 20px;
        text-decoration: underline;
    } */
    img {
        //height: 100vh;
        /* object-fit: cover;
        width: 100%; */
        margin: 0 0 1rem 0;
        max-height: 60%;
        max-width: 60%;
    }
`;

export default MassActions;