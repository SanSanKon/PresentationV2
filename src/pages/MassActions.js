import React from "react";
import styled from "styled-components";
//Import images
import FamilySport from '../img/familysport2022.jpg';
import FamilySpartak from '../img/familyspartakiada2022.jpg';
import OurSportsMensOne from '../img/oursportsmens20221.jpg';
import OurSportsMensTwo from '../img/oursportsmens20222.jpg';
import OurSportsMensThree from '../img/oursportsmens20223.jpg';
import OurSportsMensFour from '../img/oursportsmens20224.jpg';

const MassActions = () => {
    return (
        <ImageDisplay>
            <div className="actions-wrapper">
                <h1>Культурно-массовые мероприятия:</h1>

                <h2>1. Семейный спорт</h2>
                <img src={FamilySport} alt="fishing"/>

                <h2>2. Семейная спартакиада</h2>
                <img src={FamilySpartak} alt="skiing"/>

                <h2>3. Наши спортсмены</h2>
                <img src={OurSportsMensOne} alt="skiing"/>
                <img src={OurSportsMensTwo} alt="skiing"/>
                <img src={OurSportsMensThree} alt="skiing"/>
                <img src={OurSportsMensFour} alt="skiing"/>

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