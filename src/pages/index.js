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
   allWpPost (limit:4) {
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
    seoPage, allWpTestimonial, allWpPost
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

          <a href="mailto:paul@javascripting.uk?subject=Please give me a free website audit"><button>Get a free website audit now!</button></a>

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

      And I can bring in the love by:

      <ul>
      
      <li><h2>Helping you select the best solution for your project</h2>
      With extensive experience across various technologies and a diverse range of projects, I am well-equipped to assist you in selecting the ideal approach with confidence.
      </li>

      <li><h2>Designing a website that captivates and delights visitors</h2>
      From selecting colors to crafting compelling CTAs, I've gained valuable insights into user experience and what can effectively engage visitors on your website.
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

      <li><h2>Addressing all the foundational aspects of web development</h2>
      I assure you that I will check off all the essential web development tasks, ranging from crafting a fully responsive website and SEO optimisation to implementing all the appropriate HTML tags.
      </li>

      {/* <li><h2>Creating a website that is finely tuned for SEO optimization</h2>
      I will provide you with all the key ingredients to ensure Google loves your website!
      </li> */}

      {/* <li><h2>Attentively hearing and understanding your requirements</h2>
      I also take pride in my strong interpersonal skills, whether interacting with clients, developers, or designers. I am committed to actively listening to your requirements to ensure that we collaboratively build a website that truly delights you and your customers!
      </li> */}

      <li><h2>Assisting you to the fullest extent possible</h2>
      I collaborate with a diverse team of experts in design, SEO, and copywriting, ready to assist you with various aspects beyond just project development if needed.
      </li>


      </ul>

      </div>

      {/* <div className="button-holder">

        <a href="mailto:paul@javascripting.uk?subject=Hello Paul!"><button>Say Hello!</button></a>

        </div> */}


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

    <div className="portfolio-homepage">
    <h3>From the Blog</h3>
    <div className="portfolio">


      { allWpPost.edges.map((item, index) => (

      <>

      <Link rel="prefetch" key={index} to={`/blog/${item.node.slug}`} ><div className="work">  <div className="title">{ item.node.title }</div> <img alt={item.node.title} src={item.node.featuredImage.node.mediaDetails.sizes[0].sourceUrl} /> </div></Link>

      </>

      ))
      }

      </div>
      </div>

  </Layout>
  )
}

export default IndexPage

