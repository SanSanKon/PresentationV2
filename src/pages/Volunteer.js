import React from "react";
import styled from "styled-components";
//import { MovieState } from "../movieState";
//Import images
import VolunteerMain from '../img/volunteercommon2022.jpg';
import kindel4kids1 from "../img/kindel4kids20221.jpg";
import kindel4kids2 from '../img/kindel4kids20222.jpg';
import kidsofdonbass from '../img/kidsofdonb2022.jpg';
import kidspaints from '../img/kidspaints2022.jpg';
import mydistrict from '../img/mydistrictgpw2022.jpg';
// import weRemember from '../img/weRemember.jpg';
// import victoryForest from '../img/victoryForest.jpg';

const Volunteer = () => {

    return (
        <ImageDisplay>
            <div className="img-wrapper">
                <img src={VolunteerMain} alt='volunteer' />
                <h2>1. Доброе электричество - детям</h2>
                <img src={kindel4kids1} alt="photo1"/>
                <img src={kindel4kids2} alt="photo2"/>
                
                <h2>2. Дети Донбасса</h2>
                <img src={kidsofdonbass} alt="for kids of donb"/>

                <h2>3. Конкурс рисунков</h2>
                <img src={kidspaints} alt="movie"/>

                <h2>4. Мой район в годы войны</h2>
                <img src={mydistrict} alt="movie"/>

                <h2>5. Волонтерская акция #СВОИХ НЕ БРОСАЕМ</h2>
                <p>
                    1. В декабре 2022 г. в рамках проведенной волонтерской акции 
                    по сбору денежных средств в связи с оказанием материальной 
                    помощи семье Шатохина Олега Игоревича электромонтера по ремонту 
                    и монтажу кабельных линий бригады по ремонту и эксплуатации 
                    КЛ Можайского РЭС филиала ПАО «Россети Московский регион» - 
                    Западные электрические сети оказали мат. помощь 96 работников
                    на общую сумму 102 700 (сто две тысячи семьсот) рублей 00 коп.
                </p>
                <p>
                    2. В ноябре 2022 г.  в рамках проведенной волонтерской акции по сбору 
                    денежных средств в связи с оказанием материальной помощи семье 
                    Глазунова Алексея Владимировича электромонтера по ремонту и монтажу 
                    кабельных линий  Аварийно – восстановительной службы филиала 
                    ПАО «Россети Московский регион» – «Московские кабельные сети» оказали 
                    мат. помощь 129 работников на общую сумму 144 600 (сто сорок четыре тысячи шестьсот) рублей 00 коп.
                </p>

                {/* <h2>5. Мы помним</h2>
                <img src={weRemember} alt="movie"/>

                <h2>6. Лес победы</h2>
                <img src={victoryForest} alt="movie"/> */}
            </div>
            
        </ImageDisplay>

    );
}

const ImageDisplay = styled.div`
    //min-height: 50vh;
    .img-wrapper {
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
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
        //height: 100vh;
        /* object-fit: scale-down; */
        margin: 0 0 1rem 0;
        max-height: 60%;
        max-width: 60%;
    }
`;

export default Volunteer; 