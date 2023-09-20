import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
// import SeoBasic from "../components/seo"
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

    <Seo title="Paul Tomlinson: Building websites that your customers will love ❤️" />

     <div className="homepage-section one">

      <div className="intro">
      
        <h1><span className="hello">Paul Tomlinson</span>Building websites that your<br/>customers will love ❤️</h1>
        
        <h2>"Our client is thrilled with the end result. Thank you, Paul!"</h2>

        <div className="button-holder">

          <a href="mailto:paul@javascripting.uk?subject=Hello Paul!"><button>Request a Quote</button></a>

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

      And I can achieve this by:

      <ul>
      
      <li><h2>Helping you select the best solution for your project</h2>
      With extensive experience across various technologies and a diverse range of projects, I am well-equipped to assist you in selecting the ideal approach with confidence.
      </li>

      {/* <li><h2>Creating a website that delivers high conversion rates</h2>
      I grasp website user experience, online visibility, and the factors that will effectively convert your customers.
      </li> */}

      <li><h2>Designing a visually appealing website</h2>
      I take pride in my keen sense of design, along with my ability to understand what your customers will appreciate and what may not resonate with them.
      </li>

      <li><h2>Developing a website that is fully responsive on all devices</h2>
      I guarantee comprehensive testing of your website across various screen sizes and operating systems.
      </li>

      <li><h2>Crafting a website that operates at peak performance</h2>
      I will consistently analyse your site during the design and development phases to ensure it achieves optimal speed and performance.
      </li>

      <li><h2>Providing you with seasoned expertise and guidance</h2>
      With more than two decades of experience in website development, I can provide you with a wealth of knowledge and guidance at every stage of the development process.
      </li>

      <li><h2>Delivering meticulous attention to detail</h2>
      To establish trust with your customers, it's crucial to eliminate any errors, and I fully grasp the importance of this.
      </li>

      <li><h2>Creating a website that is finely tuned for SEO optimization</h2>
      I will provide you with all the key ingredients to ensure Google loves your website!
      </li>

      <li><h2>Attentively hearing and understanding your requirements</h2>
      I also take pride in my strong interpersonal skills, whether interacting with clients, developers, or designers. I am committed to actively listening to your requirements to ensure that we collaboratively build a website that truly delights you.
      </li>

      <li><h2>Assisting you to the fullest extent possible</h2>
      I collaborate with a diverse team of experts in design, SEO, and copywriting, ready to assist you with various aspects beyond just project development if needed.
      </li>


      </ul>

      </div>

      <div className="button-holder">

        <a href="mailto:paul@javascripting.uk?subject=Hello Paul!"><button>Request a Quote</button></a>

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

