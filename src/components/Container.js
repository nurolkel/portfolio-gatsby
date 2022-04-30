import styled from "@emotion/styled";
import { breakpoints } from "../utils/breakpoints";



export const GridWrapper = styled("main")`
    --gap: 1rem;
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;

    box-sizing: border-box;
    justify-content: center;
    padding-top: 2rem;
    gap:var(--gap, 1rem);

    .gatsby-image-wrapper {
        object-position:center;
    }

    
   
    @media ${breakpoints.desktop} {
        grid-template-columns:  minmax(1rem, 1fr) repeat(2, minmax(0, 30rem)) minmax(1rem, 1fr);
        --gap: 4rem;
        .grid-item {
            grid-column: 2;
            position: relative;
            z-index: 1;
            background-color: hsl( var(--clr-black) /.50);
            backdrop-filter: blur(2rem);
            border-radius: 15px;
        }

       .gatsby-image-wrapper {
           grid-column: 3 / span 2;
           justify-self: end;
          
       }

   }
   
`

export const IconGrid = styled("div")`
    display: grid;
    --gap: 1rem;
    grid-template-columns: 1fr;
    align-items: center;

    box-sizing: border-box;
    justify-items: center;
    gap:var(--gap, 1rem);

    @media ${breakpoints.tablet} {
        grid-template-columns: repeat(2, minmax(0,25rem));
    }

    @media ${breakpoints.desktop} {
        grid-template-columns:  repeat(4, minmax(0, 16rem)) ;
        --gap: 3rem;

    }
`

export const ImgGallery = styled("div")`
    display: grid;
    --gap: 1rem;
    gap: var(--gap, 1rem);

    @media ${breakpoints.tablet} {
        align-items: center;
        justify-content: center;
        --gap:1.5rem;
    }

    @media ${breakpoints.desktop} {
        grid-template-columns:  minmax(1rem, 1fr) repeat(2, minmax(0, 30rem)) minmax(1rem, 1fr);
        gap: 2rem;
        justify-items: center;
        .gatsby-image-wrapper:nth-of-type(odd) {
            grid-column: 2;
        }
        .gatsby-image-wrapper:nth-of-type(even) {
            grid-column: 3;
        }
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

export const FooterContainer = styled("footer")`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
`