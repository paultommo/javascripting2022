
import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SeoBasic from "../components/seo"
import Seo from 'gatsby-plugin-wpgraphql-seo';
import { Link } from "gatsby"

export const query = graphql`
  query {
    allWpPortfolio(sort: {date: DESC}) {
      edges {
        node {
          thumb {
            thumb {
              sourceUrl
            }
          }
          title
          slug
        }
      }
    }
    seoPage: wpPage(slug: {eq: "portfolio"}) {
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
    allWpPortfolio, seoPage
  },
}) => {

  const { title } =  allWpPortfolio

  return(
  <Layout>

     {seoPage ?
        <Seo post={seoPage} />
      :
        <SeoBasic title={title} />
     }

     <div className="portfolio">

     { allWpPortfolio.edges.map((item, index) => (


      <Link key={index} to={`/work/${item.node.slug}`} ><div> <img className="work" alt={item.node.title} src={item.node.thumb.thumb.sourceUrl} /> </div></Link>
      

      ))
    }

    </div>
  
    
  </Layout>
  )
}

export default IndexPage
