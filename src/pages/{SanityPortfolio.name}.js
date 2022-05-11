
import { graphql } from "gatsby";
import PortfolioComponent from "../components/Portfolio";
import { getImage } from "gatsby-plugin-image";
import Seo from '../components/Seo'
import BreadCrumb from "../components/Breadcrumbs";


const PortfolioItems = ({ data }) => {
    const imageSrc = getImage(data.sanityPortfolio.image.asset.gatsbyImageData)


    return (
        <React.Fragment>
            <Seo title={data.sanityPortfolio.name} />
            <BreadCrumb page={data.sanityPortfolio.name} />
            <PortfolioComponent title={data.sanityPortfolio.name} slug={data.sanityPortfolio.slug.current} skill={data.sanityPortfolio.skill} text={data.sanityPortfolio.text} description={data.sanityPortfolio.description} github={data.sanityPortfolio.github} url={data.sanityPortfolio.url} image={imageSrc}/>
        </React.Fragment>
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