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

        <h1><span className="hello">Paul Tomlinson</span>Shopify Studio for Craft Food & Drink Brands</h1>

        <h2>I've run a food business. My chocolate was stocked in Selfridges. I ferment my own kombucha and kefir at home. And I'm building a wellness brand of my own.
        Now I build Shopify stores for founders like you — people obsessed with what's in the bottle, the bar, or the jar.</h2>

        <div>
          <a href="mailto:hello@paultommo.com?subject=Hello Paul! Let's have a chat"><button>Let's have a chat!</button></a>
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
          <li>You're juggling subscriptions, shipping perishables, and managing claims compliance — and your current store wasn't built for any of it.</li>
        </ul>

        <h2>Here's what I do about it.</h2>
        <ul class="services-list">
          <li>
            <strong>Design & brand:</strong> A store that looks as good as your product tastes. Built for founders who care as much about the package as the product inside.
          </li>
          <li>
            <strong>Shopify build:</strong> Custom development with the things craft food and drink brands actually need — subscriptions, perishable shipping, age verification, claims-safe copy, and a CMS you can actually use.
          </li>
          <li>
            <strong>Words that sell:</strong> Product descriptions, landing pages, and email flows written for people who read labels — not generic ecommerce copy.
          </li>
          <li>
            <strong>Performance & search:</strong> Faster load times, cleaner code, and search visibility that brings the right buyers to your store.
          </li>
        </ul>

      </div>

    </div>

    <div className="homepage-section why">
      <div className="copy">
        <h2 style={{fontWeight: 'bold', fontSize: '25px'}}>Why craft food and drink?</h2>
        <p>I ran a chocolate business. I was stocked in Selfridges. I know what it's like to watch an ecommerce store fail to convert.</p>
        <p>I also know what works. I ferment my own kombucha and kefir. I'm building a wellness brand of my own right now. I read every ingredient label and have too many recipe books. When you work with me, you're not hiring a developer who learned about your category from a brief — you're working with someone who lives and breathes the world of food and drink.</p>
      </div>
    </div>

    <div className="homepage-section three">
      

        <div className="testimonials-container">

        <h2 style={{fontWeight: 'bold', fontSize: '25px'}}>Trusted by serious organisations</h2>
        <p>Before I focused on craft food and drink, I built websites for academics, agencies, and global organisations. Here's what they said.</p>

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
