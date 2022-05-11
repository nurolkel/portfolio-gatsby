import React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "@emotion/styled";
import { breakpoints } from "../utils/breakpoints";
import { BsGithub } from "react-icons/bs";
import { SiNetlify } from "react-icons/si";


const WrapperContainer = styled('div')`
    --margin: 2rem;
    margin-top: var(--margin);
    margin-bottom: var(--margin);

    .flex-item--portfolio {
        display: flex;
        flex-direction: column;

        .img--portfolio {
            width: 100%;
            height: auto;
            object-fit: scale-down;
            
        }
        
        
        
        @media ${breakpoints.desktop} {
            flex-direction: row;

            .img--portfolio {
                width: 850px;
            }
        }
    }

    .skill-container {
        display: grid;
        gap: 2rem;
        grid-template-columns: repeat(auto-fit, 8rem);
        align-items: center;
        justify-content: center;
        box-sizing: border-box;

        span {
            padding: 15px;
            border-radius: 15px;

        }
    }

    @media ${breakpoints.desktop} {
        --margin: 4rem;
        
    }
    



`




const PortfolioComponent = ({ title, text, image, github, url, description, skill, slug }) => {

    
    return (
        <WrapperContainer key={title} className="padding-top-bottom">
            <div className="flex-item--portfolio">
                <Link to={`/${slug}`}><GatsbyImage image={image} alt={title} className="img--portfolio"/></Link>
                <div className="padding-inline">
                    <h3 className="letter-spacing-3 text-blue fs-700 uppercase padding-top-bottom">{title}<span className="d-block text-white letter-spacing-2 padding-top-bottom fs-400">{description}</span></h3>
                    <div className="padding-inline flex padding-top-bottom">
                        <a href={github} target="_blank" rel="noopener"><span className="sr-only">Github Link</span><BsGithub className="icons text-purple"/></a>
                        <a href={url} target="_blank" rel="noopener"><span className="sr-only">Netlify Link</span><SiNetlify className="icons text-purple" /></a>
                    </div>
                </div>
            </div>
            <div className="skill-container padding-top-bottom margin-top-bottom ">
                {skill.map(element => (
                    <span className="text-light-grey fs-300 bg-dark-blue letter-spacing-3">{element.name}</span>
                ))}
            </div>
            <p className="letter-spacing-2 fs-400 text-light-grey padding-top-bottom padding-inline">{text}</p>
           
        </WrapperContainer>
    )
}

export default PortfolioComponent;