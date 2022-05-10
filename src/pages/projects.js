import React from "react";
import { Link, graphql } from 'gatsby'
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { ProjectsGrid } from "../components/Container";
import Seo from '../components/Seo'


const ProjectPage = ({ data }) => {

    return (
        <>
            <Seo title="Projects" />
            <h1 className="text-blue text-center uppercase letter-spacing-2 padding-top-bottom fs-650">Projects Page</h1>
            <ProjectsGrid>
                {data.allSanityPortfolio.nodes.map(element => {
                    const imageSrc = getImage(element.image.asset.gatsbyImageData);
                    return (
                        <Link to={`/${element.slug.current}`} key={element.name}>
                            <GatsbyImage image={imageSrc} alt={element.name} className="projects-img" />
                            <div className="projects-grid">
                                <span className="text-blue fs-600 text-bold uppercase">{element.name}</span>
                            </div>
                        </Link>
                    )
                })}
            </ProjectsGrid>
        </>
    )
}

export const data = graphql`
    {
        allSanityPortfolio {
            nodes {
                name
                slug {
                    current
                }
                image {
                    asset {
                        gatsbyImageData(layout: CONSTRAINED, fit: FILL, placeholder: BLURRED)
                    }
                }
            }
        }
  }
`

export default ProjectPage;