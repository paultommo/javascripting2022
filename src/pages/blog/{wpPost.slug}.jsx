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

  return (
    <Layout>
      {seoPage ?
        <Seo post={seoPage} />
      :
        <SeoBasic title={title} />
      }

       <div className="work-container">
         
         <div>

         <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration:0.5, delay:0 }}>

          <div className='work' >
          {/*<h1 className='h1WorkItem' >{title}</h1>*/}

          <div className='copyLarge workCopy'>{  ReactHtmlParser(content) }</div>

          {/*<img src="/_gatsby/image/041c27c4e0a2697039e59f62eb57d332/194f1a3bebbc1f7996398153ae126cdf/4.png?u=https%3A%2F%2Fjavascripting.uk%2Fjsgraphql%2Fwp-content%2Fuploads%2F2022%2F03%2F4.png&a=w%3D256%26h%3D192%26fm%3Dpng%26q%3D70" />*/}

         
        </div></motion.div>


         </div>

      </div>

    </Layout>
  )
}


export default wpPost