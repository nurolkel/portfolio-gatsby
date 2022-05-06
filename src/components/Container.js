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

export const ProjectsGrid = styled('div')`
    display: grid;
    --gap: 2em;
    gap: var(--gap,2rem);
    align-items: center;
    box-sizing: border-box;
    padding: 1rem;
    a {
        position: relative;
        z-index: 10;
        pointer: cursor;
        width: 100%;
        

        .projects-img {
            width: 100%;
            object-fit: fill;
        }

        .projects-grid {
            position: absolute;
            bottom: 0;
            left: 0;
            background-color: hsl(var(--clr-black) / .45);
            width: 100%;
            height: 45px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    @media ${breakpoints.desktop} {
        grid-template-columns: repeat(2, 1fr);
        
        a {
            

            .projects-img {
                height: 500px;
                width: 100%;
                object-fit: fill;
                object-position: top;
            }
        }
    }
`

export const ContactContainer = styled('main')`
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 1fr;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    form {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        gap: 2rem;
        align-items: center;
        margin-top: 3rem;
        margin-bottom: 3rem;
        label {
            padding: 1rem;
            display: grid;
            grid-template-columns: minmax(0,5rem) minmax(0,50rem);
            align-items: center;
            gap: 1rem;

            input {
                padding: 0.5rem;
                border: 1px solid hsl(var(--clr-purple));

                &:focus,
                &:hover {
                    outline: 2px solid hsl( var(--clr-v-blue) /.50);
                }
            }
        }

        button {
            padding: 1rem 2rem;
            border-radius: 15px;
            background-color: hsl( var(--clr-purple));
            border: 1px solid hsl( var(--clr-purple) /.50);
            color: hsl( var(--clr-white));
            transition: background-color 500ms ease-out;
            pointer: cursor;

            &:hover,
            &:focus {
                background-color: hsl( var(--clr-purple) / .50);
            }
        }
    }

    @media ${breakpoints.desktop} {
        grid-template-columns: minmax(0,35rem) minmax(0,30rem);
        align-items: center;
        justify-content: center;


        form {
            gap: 1rem;
            justify-content: space-evenly;
        }
    }
`


export const PageContainer = styled('main')`
    height: 100vh;
    padding: 2rem 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const FooterContainer = styled("footer")`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
`