import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import ReactHtmlParser from "react-html-parser"
import { StaticImage } from "gatsby-plugin-image"

export const query = graphql`
  query {

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

  }
`

const IndexPage = ({
  data: {
    allWpTestimonial
  },
}) => {

  return (
  <Layout>
    <Seo title="About Paul Tomlinson | Shopify Studio for Food &amp; Wellness Brands" />

    <div className="about-container">

      <div className="copy">

        <h1>I'm Paul — and I've been building websites for over 20 years. These days, I do it for wellness food and drink brands who want a Shopify store that actually sells.</h1>

        <p>I'm based in <a className="mainlink" href="https://maps.app.goo.gl/3q4WSbage9wozrrv6" target="_blank" rel="noopener noreferrer">Hackney</a>, East London, and I run a full-service Shopify studio for wellness food and drink brands. That means I handle everything — design, build, copy, SEO and project management — so you get one person who's responsible for the whole thing, not a chain of contractors pointing at each other.</p>

        <p>I've worked across advertising agencies, startups and global organisations, but smaller, product-led brands are where I do my best work. I like the directness of it — working with founders who care deeply about what they've made, and helping them find customers who'll feel the same way.</p>

        <h2>Why food &amp; wellness</h2>

        <p>The food and wellness niche isn't random. I've always been drawn to the space — I thoroughly enjoyed running my own luxury chocolate business called Cocoa Hernando for a number of years and managed to get my products stocked in department stores nationwide - which taught me more about what it takes to sell a product online than any client brief ever could. I know what it feels like to obsess over packaging, worry about conversions, and wonder why customers aren't coming back.</p>

        <p>That experience shapes how I approach every project. I'm not just building you a website — I'm thinking about your customer's journey, your margins, your repeat purchase rate, and how your store makes someone feel the first time they land on it.</p>

        <p>That founder mindset has never really left me. Right now, alongside the studio, I'm developing my own wellness product — <a href="https://www.instagram.com/the_dopameany/" target="_blank" rel="noopener noreferrer">Dopameany (coming soon)</a>, a physical accessory designed to help people reduce their screentime.</p>

        <p>It means when a wellness brand comes to me for help, I'm not just drawing on twenty years of web experience — I'm also drawing on my retail experience and my passion for food, drink and health living.</p>

        <h2>Experience &amp; credibility</h2>

        <p>My background is deliberately broad. I started out co-founding a web design studio, working with musicians such as Doves, John Cale and Elbow and record labels such as EMI. I spent years in London advertising agencies — McCann, Saatchi &amp; Saatchi — before going independent. Along the way I've built sites for global health organisations, interactive installations for exhibitions, animated the inside of Bill Bailey's head and built multiple ecommerce projects of my own.</p>

      
        <h2>Working with me</h2>

        <p>I love running projects from start to finish and I'm always happy to chat about your project and how I can help you.</p>

        <p>I work from Hackney Bridge in East London. Most of my client work is remote, and I've found that suits founders well. You get fast responses, honest updates, and a store you're proud of.</p>

        <h2>Curious whether we'd be a good fit?</h2>

        <p>Start with a free 10-minute chat. No pitch, no pressure — just an honest conversation about where your store is now and where it could be.</p>

        <div className="button-holder">
          <a href="mailto:hello@paultommo.com?subject=Hello Paul!"><button>Start with a free 10-minute chat</button></a>
        </div>

      </div>

      <div className="image">
        <StaticImage
          src="../images/office.jpeg"
          width={500}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="Paul Tomlinson office"
          style={{ marginTop: `0.5rem` }}
        />
      </div>

    </div>

    <div className="about-testimonials-container">

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
