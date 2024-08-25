import React, {useState} from "react";
import styled from "styled-components";

const ScrollButton = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop; 
            if (scrolled > 300){ 
            setVisible(true) 
            }  
            else if (scrolled <= 300){ 
            setVisible(false) 
            } 
    }

    const scrollToTop = () =>{ 
        window.scrollTo({ 
          top: 0,  
          behavior: 'smooth'
        }); 
    }; 

    window.addEventListener('scroll', toggleVisible); 

    return(
        <ButtonItself 
            onClick={scrollToTop}
            style={{display: visible ? 'inline' : 'none'}}
        >
            Наверх
        </ButtonItself>
    )
}

const ButtonItself = styled.button`
    background-color: transparent; //#0f67b1;
    border: 2px solid #34cbba;
    //border-radius: 10px;
    bottom: 20px;
    color: #28d3a0;
    cursor: pointer;
    display: none;
    font-size: 18px;
    outline: none;
    padding: 15px;
    position: fixed;
    right: 30px;
    z-index: 2;
`

export default ScrollButton;