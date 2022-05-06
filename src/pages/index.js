import React from "react"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { graphql, Link  } from "gatsby"
// Import Components
import { GridWrapper, ImgGallery, IconGrid } from "../components/Container"
import PortfolioComponent from "../components/Portfolio"
import ReachMe from "../components/ReachMe"
// Import Icons
import { BsGithub , BsFacebook } from 'react-icons/bs';
import { FaGitAlt, FaHtml5, FaCss3Alt, FaWordpress, FaWix, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss, SiStyledcomponents, SiGatsby, SiNextdotjs, SiNetlify, SiVercel, SiFirebase, SiContentful, SiWebpack, SiMongodb, SiPostgresql, SiGraphql } from 'react-icons/si';
import { BsBootstrapFill } from 'react-icons/bs'






const IndexPage = ( { data }) => {
  
    const image = data.myPicture.childImageSharp
    const imgSrc = getImage(image);
    const sanityData = [...data.allSanityHobbies.nodes];
    
    return (
      <>
        <GridWrapper className="padding-main flow flow--space-medium">
          <div className="grid-item flow">
            <h1 className="text-center letter-spacing-3 text-blue fs-700 uppercase">Hi, I'm Kelvin<span className="d-block text-white fs-500 margin-top-bottom">Frontend Web Developer</span></h1>
            <p className="fs-400 letter-spacing-3 text-white padding-inline">I enjoy building applications that make people lives easier. I like writing code that is easy to understand, performant, and maintainable.</p>
            <ReachMe />
            <div className="icon-container flex flex--gap padding-inline">
              <a href="https://github.com/nurolkel" target="_blank"><span className="sr-only">Github</span><BsGithub className="fs-400 icons text-dark-blue" /></a>
              <a href="https://www.facebook.com/kelvin.nunez.16" target="_blank"><span className="sr-only">Facebook</span><BsFacebook className="fs-400 icons text-dark-blue" /></a>
            </div>
          </div>
          <GatsbyImage image={imgSrc} alt="Kelvin Nunez" className="img" />
        </GridWrapper>

        <article className="bg-black--filter flow flow--space-large padding-top-bottom--big  margin-top-bottom">
          <header className="flow flow--space-large padding-top-bottom">
            <h2 className="text-blue fs-600 letter-spacing-3 margin-top-bottom padding-top-bottom padding-inline--2 uppercase">About Me</h2>
          </header>
          <p className="text-white fs-400 letter-spacing-3 padding-inline--2">I was born and raised in New York. I was in sales for most of my professional work experience. I have always wanted to build something software related so during the pandemic, I decided to start my programming journey. It has been a journey and I am grateful for every resource I have used to get me to the point where I am at now.</p>   
        </article>

        <article className="flow margin-top-bottom padding-top-bottom--big">
          <header>
            <h2 className="text-blue text-center fs-600 letter-spacing-3 padding-top-bottom padding-inline uppercase">Some of my interest</h2>
          </header>
          <ImgGallery>
            {sanityData.map(element => {
              const image = getImage(element.image.asset.gatsbyImage);
              return <GatsbyImage image={image} key={element.name} alt={element.name} className="img" />
            })}
          </ImgGallery>
        </article>

        <article className="flow margin-top-bottom padding-top-bottom--big">
          <header className="flow flow--space-large padding-top-bottom">
            <h2 className="text-blue fs-600 letter-spacing-3 padding-top-bottom padding-inline uppercase text-center">My Skills</h2>
          </header>
            <IconGrid className="padding-inline">
              <div className="card padding-top-bottom padding-inline">
                <FaGitAlt className="icons text-purple" />
                <span className="d-block text-light-grey fs-400 letter-spacing-2">Git</span>
              </div>
              <div className="card padding-top-bottom ">
                <FaHtml5 className="icons-1 text-purple" />
                <span className="d-block text-light-grey fs-400 letter-spacing-2 uppercase">HTML5</span>
              </div>
              <div className="card padding-top-bottom padding-inline">
                <FaCss3Alt className="icons-1 text-purple" />
                <span className="d-block  text-light-grey fs-400 letter-spacing-2 uppercase">CSS3</span>
              </div>
              <div className="card padding-top-bottom ">
                <SiJavascript className="icons-1 text-purple" />
                <span className="d-block text-light-grey fs-400 letter-spacing-2 uppercase">Javascript</span>
              </div>
              <div className="card padding-top-bottom ">
                <FaReact className="icons-1 text-purple" />
                <span className="d-block text-light-grey fs-400 letter-spacing-2 uppercase">React</span>
              </div>
              <div className="card padding-top-bottom ">
                <SiGatsby className="icons-1 text-purple" />
                <span className="d-block text-light-grey fs-400 letter-spacing-2 uppercase">Gatsby.js</span>
              </div>
              <div className="card padding-top-bottom ">
                <SiNextdotjs className="icons-1 text-purple" />
                <span className="d-block text-light-grey fs-400 letter-spacing-2 uppercase">Next.js</span>
              </div>
              <div className="card padding-top-bottom ">
                <FaNodeJs className="icons-1 text-purple" />
                <span className="d-block text-light-grey fs-400 letter-spacing-2 uppercase">Node.js</span>
              </div>
              <div className="card padding-top-bottom ">
                <SiTailwindcss className="icons-1  text-purple" />
                <span className="d-block text-light-grey fs-400 letter-spacing-2 uppercase">Tailwind CSS</span>
              </div>
              <div className="card padding-top-bottom ">
                <SiStyledcomponents className="icons-1 text-purple" />
                <span className="d-block text-light-grey fs-400 letter-spacing-2 uppercase">CSS-IN-JS</span>
              </div>
              <div className="card padding-top-bottom ">
                <BsBootstrapFill className="icons-1 text-purple" />
                <span className="d-block text-light-grey fs-400 letter-spacing-2 uppercase">Bootstrap 5</span>
              </div>
              <div className="card padding-top-bottom ">
                <SiWebpack className="icons-1 text-purple" />
                <span className="d-block text-light-grey fs-400 letter-spacing-2 uppercase">Webpack</span>
              </div>
              <div className="card padding-top-bottom ">
                <SiNetlify className="icons-1  text-purple" />
                <span className="d-block text-light-grey fs-400 letter-spacing-2 uppercase">Netlify</span>
              </div>
              <div className="card padding-top-bottom ">
                <SiVercel className="icons-1  text-purple" />
                <span className="d-block text-light-grey fs-400 letter-spacing-2 uppercase">Vercel</span>
              </div>
              <div className="card padding-top-bottom ">
                <SiMongodb className="icons-1  text-purple" />
                <span className="d-block text-light-grey fs-400 letter-spacing-2 uppercase">MongoDb</span>
              </div>
              <div className="card padding-top-bottom ">
                <SiPostgresql className="icons-1  text-purple" />
                <span className="d-block text-light-grey fs-400 letter-spacing-2 uppercase">Postgresql</span>
              </div>
              <div className="card padding-top-bottom ">
                <SiGraphql className="icons-1  text-purple" />
                <span className="d-block text-light-grey fs-400 letter-spacing-2 uppercase">Graphql</span>
              </div>
              <div className="card padding-top-bottom ">
                <SiFirebase className="icons-1  text-purple" />
                <span className="d-block text-light-grey fs-400 letter-spacing-2 uppercase">Firebase</span>
              </div>
              <div className="card padding-top-bottom ">
                <SiContentful className="icons-1  text-purple" />
                <span className="d-block text-light-grey fs-400 letter-spacing-2 uppercase">Contentful CMS</span>
              </div>
              <div className="card padding-top-bottom ">
                <FaWordpress className="icons-1  text-purple" />
                <span className="d-block text-light-grey fs-400 letter-spacing-2 uppercase">Wordpress</span>
              </div>
              <div className="card padding-top-bottom ">
                <FaWix className="icons-1 text-purple" />
                <span className="d-block text-light-grey fs-400 letter-spacing-2 uppercase">Wix</span>
              </div>
            </IconGrid>
            <div className="grid-container padding-inline padding-top-bottom">
              <div className="card bg-dark-blue">
                <p className="letter-spacing-2 uppercase text-light-grey padding-inline--small padding-top-bottom fs-400">I build scalable application and use an approach where the best tool for the job gets used.</p>
              </div>
              <div className="card bg-dark-blue">
                <p className="letter-spacing-2 uppercase text-light-grey padding-inline--small padding-top-bottom fs-400">I manage data by using a Headless CMS and API and query data with Graphql or REST</p>
              </div>
              <div className="card bg-dark-blue">
                <p className="letter-spacing-2 uppercase text-light-grey padding-inline--small padding-top-bottom fs-400">Design responsive mobile-first designs using SCSS and CSS Frameworks</p>
              </div>
              <div className="card bg-dark-blue">
                <p className="letter-spacing-2 uppercase text-light-grey padding-inline--small padding-top-bottom fs-400">Create pages that follows W3C semantics and accessible for everyone</p>
              </div>
            </div>
        </article>

        <article className="flow margin-top-bottom padding-top-bottom--big">
          <header className="flow flow--space-large padding-top-bottom">
              <h2 className="text-blue fs-600 letter-spacing-3 padding-top-bottom padding-inline uppercase text-center">Projects</h2>
          </header>
          
            {data.allSanityPortfolio.nodes.map((element, index) => {
              const { name, url, github, text, description, skill, slug} = element;
              const image = getImage(element.image.asset.gatsbyImageData);
              return (index < 3 &&
                <PortfolioComponent title={name} url={url} github={github} description={description} skill={skill} text={text} image={image} slug={slug.current} />
              )
            })}
            <div className="flex">
              <Link to="/projects" aria-label="projects link" className="link-btn uppercase text-white fs-400 padding-inline">More Projects</Link>
            </div>
        </article>
      </>
    )
}

export const data = graphql`
  {
    myPicture: file(name: {eq: "myPicture"}) {
      childImageSharp {
        gatsbyImageData(
          placeholder: TRACED_SVG 
          layout: CONSTRAINED
          quality: 100
          breakpoints: [360,768,1024,1280]
          width: 800
          
        )
      }
    }
    allSanityHobbies {
    nodes {
      name
      image {
        asset {
          gatsbyImage(aspectRatio: 1.5, placeholder: TRACED_SVG, quality: 60, width: 800)
        }
      }
    }
  }
  allSanityPortfolio {
      nodes {
          name
          url
          github
          description
          text
          skill {
            name
          }
          slug {
            current
          }
          image {
            asset {
              gatsbyImageData(
                placeholder: BLURRED
                fit: FILL
                layout: CONSTRAINED
              )
            }
          }
      }
  }
    
  }
`


export default IndexPage
