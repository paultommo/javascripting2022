import React, { useEffect } from "react"
import Layout from "../components/layout"
import SeoBasic from "../components/seo"
import Seo from 'gatsby-plugin-wpgraphql-seo';
import { graphql } from "gatsby"
import ReactHtmlParser from "react-html-parser"

export const query = graphql`
  query {
  wpPage(slug: {eq: "skills"}) {
    title
    content
  }

  
  seoPage:wpPage(slug: {eq: "skills"}) {
    nodeType
    title
    uri
    seo {
        title
        metaDesc
        focuskw
        metaKeywords
        metaRobotsNoindex
        metaRobotsNofollow
        opengraphTitle
        opengraphDescription
        opengraphImage {
            altText
            sourceUrl
            srcSet
        }
        twitterTitle
        twitterDescription
        twitterImage {
            altText
            sourceUrl
            srcSet
        }
        canonical
        cornerstone
        schema {
            articleType
            pageType
            raw
        }
    }
    }
  }
`

const IndexPage = ({
  data: {
      wpPage, seoPage
    },
  }) => {

  const { title, content } = wpPage

  function hydrateImages(){

    const gatsbyImages = document.querySelectorAll('img[data-main-image]');

      for (let mainImage of gatsbyImages) {
        if (mainImage.dataset.src) {
          mainImage.setAttribute('src', mainImage.dataset.src)
          mainImage.removeAttribute('data-src')
        }
        if (mainImage.dataset.srcset) {
          mainImage.setAttribute('srcset', mainImage.dataset.srcset)
          mainImage.removeAttribute('data-srcset')
        }
        const sources = mainImage.parentNode.querySelectorAll('source[data-srcset]');
        for (let source of sources) {
          source.setAttribute('srcset', source.dataset.srcset)
          source.removeAttribute('data-srcset')
        }

        mainImage.style.opacity = 1;
        
      }

  }
  
  // useEffect(() => {

  //   hydrateImages()


  // }, [])

  return(
  <Layout>
      {seoPage ?
        <Seo post={seoPage} />
      :
        <SeoBasic title={title} />
      }

    <div className="skills-container">

    {/*{ReactHtmlParser(content)}*/}


    </div>
    
  </Layout>
)
}

export default IndexPage
