import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from 'gatsby-plugin-wpgraphql-seo';
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import ReactHtmlParser from "react-html-parser"

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

    <Seo title="Paul Tomlinson | Shopify Studio for Wellness Food &amp; Brands" />

     <div className="homepage-section one">

      <div className="intro">

        <h1><span className="hello">Paul Tomlinson</span>Shopify Studio for Wellness Food &amp; Brands</h1>

        <h2>I obsess over food. I ferment my own kombucha. I read ingredient labels. And I build bespoke, high-performing Shopify stores for brands like yours.</h2>

        <div>
          <a href="mailto:hello@paultommo.com?subject=Hello Paul! I'd like a free consultation"><button>Start with a free 10-minute chat</button></a>
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

        <h2>Sound familiar?</h2>
        <ul>
          <li>You've poured everything into your product, but your Shopify store doesn't reflect that quality.</li>
          <li>Your brand looks incredible on Instagram — but inconsistent and slow on your website.</li>
          <li>You're losing customers at checkout and you're not sure why.</li>
          <li>You don't have time to deal with your website — you're busy running a business.</li>
        </ul>

        <h2>Here's what I do about it.</h2>
        <ul>
          <li><strong>Design &amp; brand:</strong> A store that looks as good as your product tastes — on-brand, high-converting, and built for your customer.</li>
          <li><strong>Shopify build:</strong> Custom Shopify development with an intuitive CMS, so you're never reliant on a developer for day-to-day updates.</li>
          <li><strong>Copy &amp; content:</strong> Words that connect with wellness food and drink shoppers — from product descriptions to full landing pages.</li>
          <li><strong>SEO &amp; performance:</strong> Faster load times, cleaner code and search visibility that brings the right people to your store.</li>
        </ul>

      </div>

    </div>

    <div className="homepage-section three">

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

    <div className="homepage-section cta">

      <div className="copy">

        <h2>Ready to build a store your brand deserves?</h2>
        <p>Start with a free 10-minute chat. No pitch, no pressure — just an honest conversation about where your store is now and where it could be.</p>

        <div className="button-holder">
          <a href="mailto:hello@paultommo.com?subject=Hello Paul! I'd like a free consultation"><button>Start with a free 10-minute chat</button></a>
        </div>

      </div>

    </div>

    <div className="portfolio-homepage blog">
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
