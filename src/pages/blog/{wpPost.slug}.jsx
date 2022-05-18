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
    wpPost(slug: {eq: $slug}) {
      title
      content
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


const wpPost = ({
  data: {
    wpPost, seoPage
  },
}) => {

  const {title, content} = wpPost

  const refinedContent = content.replace("data-src", "src");

  return (
    <Layout>
      {seoPage ?
        <Seo post={seoPage} />
      :
        <SeoBasic title={title} />
      }

       <div className="work-container">
         
         <div>

         {/*<motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration:0.5, delay:0 }}>*/}

          <div className='work' >
          {/*<h1 className='h1WorkItem' >{title}</h1>*/}

          <div className='copyLarge workCopy'>{  ReactHtmlParser(refinedContent) }</div>

        </div>

        {/*</motion.div>*/}


         </div>

      </div>

    </Layout>
  )
}


export default wpPost