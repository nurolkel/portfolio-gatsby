import { Global, css } from "@emotion/react";
import React from "react";
import "normalize.css";
import { breakpoints } from "../utils/breakpoints";

const GlobalStyle = () => (
    <Global
        styles = {css`
            :root {
                --clr-cyan: 176 60% 90%;
                --clr-black: 228 31% 6%;
                --clr-metal-grey: 213 39% 20%;
                --gunmetalGreyRGB: rgba(31,40,51,1);
                --clr-light-grey: 210 1% 78%;
                --clr-dark-grey: 208 11% 48%;
                --clr-dark-cyan: 177 57% 64%;

                --fs-900: clamp(5rem, 8vw + 1rem, 9.375rem);
                --fs-800: 3.5rem;
                --fs-700: 1.5rem;
                --fs-650: 1.3rem;
                --fs-600: 1rem;
                --fs-500: 1rem;
                --fs-400: 0.9375rem;
                --fs-300: 1rem;
                --fs-200: 0.875rem;
                
                @media ${breakpoints.md} {
                    --fs-900: 9.375rem;
                    --fs-800: 5rem;
                    --fs-700: 2.5rem;
                    --fs-650: 2.25rem;
                    --fs-600: 1.5rem;
                    --fs-500: 1.25rem;
                    --fs-400: 1rem;
                }

                @media ${breakpoints.xl} {
                    --fs-800: 6.25rem;
                    --fs-700: 3.5rem;
                    --fs-650: 2.75rem;
                    --fs-600: 2rem;
                    --fs-500: 1.75rem;
                    --fs-400: 1.125rem;
                }
            }

            *,
            *::before,
            *::after {
                box-sizing: border-box;
            }

            body,
            h1,
            h2,
            h3,
            h4,
            h5,
            h6,
            p,
            figure,
            picture {
                margin: 0;
            }

            h1,
            h2,
            h3,
            h4,
            h5,
            h6,
            p {
                font-weight: 400;
            }

            #___gatsby,
            #gatsby-focus-wrapper {
                    min-height: 100vh;
            }

            body {
                font-size: 15px;
                font-family: 'Montserrat', sans-serif;
                margin: 0;
                padding:0;
                line-height: 1.5;
                background-color: hsl( var(--clr-black));
                min-height: 100vh;
            }

            img,
            picture {
                max-width: 100%;
                display: block;
            }

            input,
            button,
            textarea,
            select {
                font: inherit;
            }

            a {
                text-decoration: none;
            }
            
            @media (prefers-reduced-motion: reduce) {
                *,
                *::before,
                *::after {
                    animation-duration: 0.01ms !important;
                    animation-iteration-count: 1 !important;
                    transition-duration: 0.01ms !important;
                    scroll-behavior: auto !important;
                }
            }
           
            .flex {
                display: flex;
                gap: var(--gap, 1rem); 
            }

            .grid {
                display: grid;
                gap: var(--gap, 1rem); 
            }

            .d-block {
                display: block;
            }

            .sr-only {
                position: absolute;
                width: 1px;
                height: 1px;
                padding: 0;
                margin: -1px;
                overflow: hidden;
                clip: rect(0,0,0,0);
                white-space: nowrap;
                border: 0;
            }
          
            .bg-black {
                background-color: hsl( var(--clr-black));
            }

            .bg-metal-grey {
                background-color: hsl( var(--clr-metal-grey));
            }

            .text-light-grey {
                color: hsl( var(--clr-light-grey));
            }

            .text-cyan {
                color: hsl( var(--clr-cyan));
            }

            .letter-spacing-1 { 
                letter-spacing: 4.75px; 
            } 
            .letter-spacing-2 { 
                letter-spacing: 2.7px; 
            } 
            .letter-spacing-3 { 
                letter-spacing: 2.35px; 
            } 

            .uppercase { 
                text-transform: uppercase; 
            }

            .fs-900 { 
                font-size: var(--fs-900); 
            }
            .fs-800 { 
                font-size: var(--fs-800); 
            }
            .fs-700 { 
                font-size: var(--fs-700); 
            }
            .fs-650 { 
                font-size: var(--fs-650); 
            }
            .fs-600 { 
                font-size: var(--fs-600); 
            }
            .fs-500 { 
                font-size: var(--fs-500); 
            }
            .fs-400 { 
                font-size: var(--fs-400); 
            }
            .fs-300 { 
                font-size: var(--fs-300); 
            }
            .fs-200 { 
                font-size: var(--fs-200); 
            }

            .fs-900,
            .fs-800,
            .fs-700,
            .fs-600 {
                line-height: 1.1;
            }

            .logo {
                margin: 1.5rem clamp(1.5rem, 5vw, 3.5rem);
            }

            .toggle {
                cursor: pointer;

                @media ${breakpoints.xl} {
                    display: none;
                }
            }
        `}
    />
);

export default GlobalStyle;