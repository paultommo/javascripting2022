import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SeoBasic from "../components/seo"
import Seo from 'gatsby-plugin-wpgraphql-seo';
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import ReactHtmlParser from "react-html-parser"
// import Testimonials from "../components/testimonials"

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

  allWpTestimonial {
    edges {
      node {
        id
        title
        featuredImage {
          node {
            mediaItemUrl
          }
        }
        content
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
    seoPage, allWpTestimonial
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
      
        {/* <h1><span className="hello">Hello!</span> I’m freelance web developer<br/>Paul Tomlinson.</h1> */}
        <h1><span className="hello">Paul Tomlinson</span>Building websites that your<br/>customers will love ❤️</h1>
        
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

      {/* Having been a freelance web developer for 20 years, I can offer you: */}
      What I can offer you:


      <ul>

      
      <li><h2>Advice on how to create a successful website</h2>
      I help businesses improve their online presence, website user experience and conversion rates.
      </li>

      <li><h2>Vast technical knowledge</h2>
      Having worked with so many different technologies and worked on so many different projects, I can help select and develop the best solution for you.
      </li>

      <li><h2>Excellent time management and organisation skills</h2>
      I always ensure a project is under control and deadlines are always met.
      </li>

      <li><h2>Great communication</h2>
      I pride myself on my interpersonal skills - whether with clients, developers or designers - and I will always listen to everyone’s needs and offer my thoughts, to ensure we create a product that everyone is delighted with.
      </li>

      <li><h2>A friendly, calm voice and positive attitude</h2>
      I love working and chatting with people and try to make every project as enjoyable as possible.
      </li>

      <li><h2>Confidence and proactivity</h2>
      I have lots of confidence in my abilities and always get the job done!
      </li>

      <li><h2>Attention to detail </h2>
      I’m a perfectionist and understand how to make pixel perfect products and keep going until we create something brilliant!
      </li>

      <li><h2>Guarantees</h2>
      That your product will be fully responsive, secure and optimised for SEO, so it performs to the best of it’s ability.
      </li>

      <li><h2>High quality design, SEO and copywriting skills</h2>
      I work with a range of experts in the fields of design, SEO and copywriting if you require help with more than just the development of your project.
      </li>


      </ul>

      </div>

      <div className="button-holder">

        <Link activeClassName="active" to="/about/"><button>Learn More</button></Link>

        <a href="mailto:paul@javascripting.uk"><button>Hire Me</button></a>

        </div>


    </div>

    <div className="homepage-section three">

        {/* <Testimonials /> */}
        <div className="testimonials-container">

            { allWpTestimonial.edges.map((item, index) => (

              <div key={index} className="testimonial">
            
                <div><img alt={item.node.title} src={item.node.featuredImage.node.mediaItemUrl} /></div>
            
                <div className="content">{ReactHtmlParser(item.node.content)}</div>
                <div className="name">{item.node.title}</div>

              </div>

            ))
            }
          
        </div>

    </div>

  </Layout>
  )
}

export default IndexPage

