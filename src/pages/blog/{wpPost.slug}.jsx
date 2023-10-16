import React, { useEffect } from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import SeoBasic from "../../components/seo"
import Seo from 'gatsby-plugin-wpgraphql-seo';
import ReactHtmlParser from "react-html-parser"
import formatDate from '../../functions/formatDate'

export const query = graphql`
  query($slug: String) {
    wpPost(slug: {eq: $slug}) {
      title
      content
      dateGmt
    }
    seoPage:wpPost(slug: {eq: $slug}) {
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


const WpPost = ({
  data: {
    wpPost, seoPage
  },
}) => {

  const {title, content, dateGmt } = wpPost

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
  
  useEffect(() => {

    hydrateImages()


  }, [])

  return (
    <Layout>
      {seoPage ?
        <Seo post={seoPage} />
      :
        <SeoBasic title={title} />
      }

       <div className="work-container">
         
         <div>


          <div className='work blog' >
          
          <h1>{ title }</h1>
          <h2> {formatDate(dateGmt)}</h2>
          <div className='copyLarge workCopy'>{  ReactHtmlParser(content) }</div>

          </div>

          <div className="button-holder">

          <a href="mailto:hello@paultommo.com?subject=Hello Paul!"><button>Get in touch to work with me!</button></a>

          </div>


         </div>

      </div>

    </Layout>
  )
}


export default WpPost