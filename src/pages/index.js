import React from "react"
import styled from "@emotion/styled"
import { breakpoints } from "../utils/breakpoints"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import { GridWrapper, GridItem, ImgBackground } from "../components/Container"
import { css } from "@emotion/react"

const IndexPage = ( { data }) => {
  const image = data.file.childImageSharp
  const imgSrc = getImage(image);

  return (
    <GridWrapper>
      <GridItem>
        <h2>Hi, I'm Kelvin</h2>
        <p>Frontend Web Developer</p>
        <p>I enjoy building applications that make people lives easier. I like writing code that is easy to understand, performant, and maintanble.</p>
        <ImgBackground>
          <GatsbyImage image={imgSrc} alt="Kelvin Nunez" css={css`
            height: 250px;
            width: 250px;
            border-radius: 50%;
          `}/>
        </ImgBackground>
      </GridItem>
    </GridWrapper>
  )
}

export const data = graphql`
  {
    file(name: {eq: "myPicture"}) {
      childImageSharp {
        gatsbyImageData(
          placeholder: TRACED_SVG 
          layout: CONSTRAINED
          quality: 100
          breakpoints: [360,768,1024,1280]
        )
      }
    }
  }
`


export default IndexPage
