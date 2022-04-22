import React from "react";
import styled from "@emotion/styled";
import { breakpoints } from "../utils/breakpoints";
import { keyframes } from "@emotion/react";


export const GridWrapper = styled("div")`
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    justify-items: center;
    box-sizing: border-box;
    justify-content: center;
    padding-top: 2rem;
    
    h2 {
        color: var(--lightGrey);
        font-size: 2rem;
        text-align: center;
        padding: 1rem;
    }

    p {
        padding: 0.5rem;
        font-size: 1.2rem;
    }

`

export const GridItem = styled("div")`
    padding: 1rem 1.5rem;
`

const spinCircle = keyframes`
    0% {
        transform: scale(0);
    }

    ${'' /* 35% {
        transform: rotate(-180deg);
    }

    64% {
        transform: rotate(-90deg);
    }

    80& {
        transform: rotate(0deg);
    } */}

    100% {
        transform: scale(10px);
    }
`

export const ImgBackground = styled("div")`
    border-radius: 50%;
    height: 300px;
    width: 300px;
    background-color: var(--gunmetalGrey);
    display: flex;
    justify-content: center;
    margin: 0 auto;
    align-items: center;
`