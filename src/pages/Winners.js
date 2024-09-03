import React from "react";
import styled from "styled-components";
//Import images
import Dynasty from '../img/labourdinasty.jpeg';
import DynastyInner from "../img/labourdynastyinner2023.jpeg"

const Winners = () => {
    return(
        <ImageDisplay>
            <div className="winners-wrapper">
                <h1>Прочие достижения:</h1>

                <h2>1. Трудовая династия</h2>
                <img src={DynastyInner} alt='dynastyPhoto' />
                <img src={Dynasty} alt='dynasty'/>
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

    img {
        margin: 0 0 1rem 0;
        max-height: 60%;
        max-width: 60%;
    }
`;


export default Winners;