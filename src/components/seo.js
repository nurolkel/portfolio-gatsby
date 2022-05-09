/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function Seo({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            keywords
            github
          }
        }
      }
    `
  )

  const metaDescription = site.siteMetadata.description || description 
  const defaultTitle = site.siteMetadata.title
  const image = site.siteMetadata.image;
  const keywords = site.siteMetadata.keywords;
// <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
//<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
//<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
//<link rel="manifest" href="/site.webmanifest"></link>
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          name: `keywords`,
          content: keywords,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: image,
        },
      ].concat(meta)}
    />
  )
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: `This is my portfolio website where you can see my github and projects I've worked on`,
}

export default Seo;
