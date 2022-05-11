import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const Seo = ({ description, lang, meta, title })  => {
  const { site } = useStaticQuery(graphql`
     {
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
  const defaultTitle = site.siteMetadata.title;
  const keywords = site.siteMetadata.keywords;

  return (
    <Helmet
      htmlAttributes={{
        lang: `en`,
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
      ].concat(meta)}
    />
  )
}



export default Seo;
