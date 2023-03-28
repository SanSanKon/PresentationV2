import React from "react";
import styled from "styled-components";
//Import images
import Dynasty from '../img/labourdynasty2022.jpg';
import FleetCollection from '../img/fleetcollection2022.jpg';
// import DynastyTwo from '../img/36dynasty2.jpg';
// import SafetyWinner from '../img/37safetywinner.jpg';

const Winners = () => {
    return(
        <ImageDisplay>
            <div className="winners-wrapper">
                <h1>Прочие достижения:</h1>

                <h2>1. Трудовая династия</h2>
                <img src={Dynasty} alt='dynasty'/>

                <h2>2. Флотилия Дмитрия Синицына</h2>
                <img src={FleetCollection} alt='fleet collection' />
            </div>
        </ImageDisplay>
    );
};

const ImageDisplay = styled.div`
    //min-height: 50vh;
    .winners-wrapper {
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
    /* h1 {
        color: #fff;
        padding: 10px 0 0 20px;
        margin: 0 0 20px;
        @media screen and (max-width: 450px) {
            font-size: 1.25rem;
        }
    }
    h2, p {
        background: #495a78;
        color: #fff;
        margin: 20px 0;
        padding: 10px 0 10px 20px;
        text-decoration: underline;
    }
    a {
        background: #508ac0;
        font-size: 1.25rem;
        padding: 10px 0 10px 20px;
        text-decoration: underline;
        width: 100%;
        &:hover {
            cursor: pointer;
        }
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


export default Winners;