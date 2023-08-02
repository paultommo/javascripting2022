
import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SeoBasic from "../components/seo"
import Seo from 'gatsby-plugin-wpgraphql-seo';
import { Link } from "gatsby"

export const query = graphql`
  query {
   allWpPost(sort: {fields: date, order: DESC}) {
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

  const { title } =  allWpPost

  return(
  <Layout>

     {seoPage ?
        <Seo post={seoPage} />
      :
        <SeoBasic title={title} />
     }

     <div className="portfolio">

     { allWpPost.edges.map((item, index) => (

      <>
     
      <Link rel="prefetch" key={index} to={`/blog/${item.node.slug}`} ><div className="work">  <div className="title">{ item.node.title }</div> <img alt={item.node.title} src={item.node.featuredImage.node.mediaDetails.sizes[0].sourceUrl} /> </div></Link>

      
     
      </>

      ))
    }

    </div>
  
    
  </Layout>
  )
}

export default IndexPage
