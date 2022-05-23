import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SeoBasic from "../components/seo"
import Seo from 'gatsby-plugin-wpgraphql-seo';
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Testimonials from "../components/testimonials"

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
    seoPage:wpPage(slug: {eq: "homepage"}) {
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
    seoPage
  },
}) => {

  return(
  <Layout>

     {seoPage ?
        <Seo post={seoPage} />
      :
        <SeoBasic title='Homepage' />
     }

     <div className="homepage-section one">

      <div className="intro">
      
        <h1>Hello! I’m web developer Paul Tomlinson.</h1>

        <h2>I specialise in Headless Wordpress web development and all things Javascript.</h2>

        <div className="button-holder">

          <Link activeClassName="active" to="/about/"><button>Learn More</button></Link>

          <a href="mailto:paul@javascripting.uk"><button>Hire Me</button></a>

        </div>

      </div>

      <div className="image">
      <StaticImage
      src="../images/paultomlinson.png"
      width={500}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="Paul Tomlinson"
      style={{ marginTop: `3rem` }}
    />
      </div>

    </div>


    <div className="homepage-section two">

      <div className="copy">
      <h2>What can I do for you?</h2>

        <ul className="listings">
          
          <li>Build high-performing & super-secure websites</li>   
          {/*<li>Develop a wide range of Javascript applications namely with ReactJS</li>*/}
          {/*<li>Increase your conversions by creating high-performing websites</li>*/}
          <li>Maximise your website's SEO potential</li>
          <li>Ensure your site is super-secure</li>
          <li>Provide you with 15+ years of web development experience</li>      
          <li>Offer you excellent communication and management skills throughout any project</li>

        </ul>


      </div>

      <div className="copy">
      <h2>What does Headless Wordpress mean?</h2>

        <ul className="listings">
          
          {/*<li>A modern and superior approach to creating a Wordpress website</li>   */}
          <li>Headless combines the simplicity of a traditional Wordpress CMS alongside a bespoke front-end</li>
          <li>Really high performance and therefore great SEO</li>
          <li>Very few plugins, making site maintenance much easier and cheaper!</li>      
          <li>Using a very modern stack of tools, namely GatsbyJS, WPGraphQL and Netlify</li>

        </ul>

      </div>

    </div>

    <div className="homepage-section three">

        <Testimonials />

    </div>

  {/*  <div className="homepage-section four">

    Contact

    </div>*/}
  
    
  </Layout>
  )
}

export default IndexPage

