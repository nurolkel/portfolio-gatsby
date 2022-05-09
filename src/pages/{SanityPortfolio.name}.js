import React from "react";
import { graphql } from "gatsby";
import PortfolioComponent from "../components/Portfolio";
import { getImage } from "gatsby-plugin-image";
import Seo from '../components/Seo'

const PortfolioItems = ({ data }) => {
    const imageSrc = getImage(data.sanityPortfolio.image.asset.gatsbyImageData)


    return (
        <>
        <Seo title={data.sanityPortfolio.name} />
        <PortfolioComponent title={data.sanityPortfolio.name} slug={data.sanityPortfolio.slug.current} skill={data.sanityPortfolio.skill} text={data.sanityPortfolio.text} description={data.sanityPortfolio.description} github={data.sanityPortfolio.github} url={data.sanityPortfolio.url} image={imageSrc}/>
        </>
    )
}

export const data = graphql`
    query ProjectsQuery($name: String) {
        sanityPortfolio(name: {eq: $name}) {
            name
            url
            description
            github
            text
            skill {
                name
            }
            slug {
                current
            }
            image {
                asset {
                    gatsbyImageData(placeholder: BLURRED, fit: FILL, layout: CONSTRAINED)
                }
            }
        }
    }
`

export default PortfolioItems;