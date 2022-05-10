import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import SeoBasic from "../../components/seo"
import Seo from 'gatsby-plugin-wpgraphql-seo';
import ReactHtmlParser from "react-html-parser"
import getImage from "../../functions/getImage"
import { useQuery } from "react-apollo"
import { motion } from "framer-motion";
import { Link } from "gatsby"

export const query = graphql`
  query($slug: String) {
    wpPortfolio(slug: {eq: $slug}) {
      title
      content
      slug
      url{
        url
      }
      image1 {
        image1 {
          mediaDetails {
            sizes {
              sourceUrl
              width
              name
            }
          }
        }
      }
      image2 {
        image2 {
          mediaDetails {
            sizes {
              sourceUrl
              width
              name
            }
          }
        }
      }
      image3 {
        image3 {
          mediaDetails {
            sizes {
              sourceUrl
              width
              name
            }
          }
        }
      }
      image4 {
        image4 {
          mediaDetails {
            sizes {
              sourceUrl
              width
              name
            }
          }
        }
      }
      image5 {
        image5 {
          mediaDetails {
            sizes {
              sourceUrl
              width
              name
            }
          }
        }
      }
    }
    seoPage:wpPortfolio(slug: {eq: $slug}) {
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


const wpPortfolio = ({
  data: {
    wpPortfolio, seoPage
  },
}) => {

  const {title, content, slug, url, image1, image2, image3, image4, image5 } = wpPortfolio

  return (
    <Layout>
      {seoPage ?
        <Seo post={seoPage} />
      :
        <SeoBasic title={title} />
      }

       <div className="work-container">
         
         <div>

         <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration:0.5, delay:0 }}><div className='work' ><h1 className='h1WorkItem' >{title}</h1>

          <div className='copyLarge workCopy'>{  ReactHtmlParser(content) }</div>

          <p><a className='viewLink' target="_blank" rel="noopener noreferrer" href={url.url}>VIEW &#62;&#62;</a></p>

          {image1 && image1.image1 && image1.image1.mediaDetails && <div className='workImage'><img className='imageWork' alt={title} src={getImage(image1.image1.mediaDetails.sizes)} /></div>}

          {image2 && image2.image2 && image2.image2.mediaDetails && <div className='workImage'><img className='imageWork' alt={title} src={getImage(image2.image2.mediaDetails.sizes)} /></div>}

          {image3 && image3.image3 && image3.image3.mediaDetails && <div className='workImage'><img className='imageWork' alt={title} src={getImage(image3.image3.mediaDetails.sizes)} /></div>}

          {image4 && image4.image4 && image4.image4.mediaDetails && <div className='workImage'><img className='imageWork' alt={title} src={getImage(image4.image4.mediaDetails.sizes)} /></div>}

          {image5 && image5.image5 && image5.image5.mediaDetails && <div className='workImage'><img className='imageWork' alt={title} src={getImage(image5.image5.mediaDetails.sizes)} /></div>}

        </div></motion.div>


         </div>

      </div>

    </Layout>
  )
}


export default wpPortfolio