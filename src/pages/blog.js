
import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SeoBasic from "../components/seo"
import Seo from 'gatsby-plugin-wpgraphql-seo';
import ReactHtmlParser from "react-html-parser"
import getImage from "../functions/getImage"
import { useQuery } from "react-apollo"
import FadeIn from "react-lazyload-fadein";
import { Link } from "gatsby"

export const query = graphql`
  query {
   allWpPost {
    edges {
      node {
        slug
        title
        featuredImage {
          node {
            mediaDetails {
              sizes {
                sourceUrl
                width
              }
            }
          }
        }
      }
    }
  }
    seoPage:wpPage(slug: {eq: "posts"}) {
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
    allWpPost, seoPage
  },
}) => {

  const {title, slug, featuredImage } =  allWpPost

  return(
  <Layout>

     {seoPage ?
        <Seo post={seoPage} />
      :
        <SeoBasic title={title} />
     }

     <div className="portfolio">

     { allWpPost.edges.map((item, index) => (

     <Link rel="prefetch" key={index} to={`/blog/${item.node.slug}`} ><div className="work">  <FadeIn height={300}>{onload => (<img alt={item.node.title} onLoad={onload} src={item.node.featuredImage.node.mediaDetails.sizes[0].sourceUrl} />)}</FadeIn></div></Link>

      ))
    }

    </div>
  
    
  </Layout>
  )
}

export default IndexPage
