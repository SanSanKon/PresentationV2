import React from 'react';
import styled from 'styled-components';
import { About } from '../styles';
import Toggle from "../components/Toggle";
import { AnimateSharedLayout } from "framer-motion";
import { useScroll } from "../components/useScroll";
import { scrollReveal } from "../animation";

import QRcode from '../img/qr-code.png';

const QRCode = () => {
    return (
        <>
            <img src={QRcode} alt='qr code' />
        </>
    );
};

export default QRCode;