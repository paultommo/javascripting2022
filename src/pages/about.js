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

        <h1>About Paul</h1>

        <p>I build Shopify stores for craft food and drink brands — because I've been a craft food founder myself.</p>

        <h2>The short version</h2>

        <p>I ran Cocoa Hernando, a luxury chocolate business that ended up stocked in Selfridges. I learned, the hard way, what it takes to make a small food brand work — from sourcing and packaging to margins and the painful moments when your website doesn't do justice to what's in the box.</p>

        <p>Now I build Shopify stores for founders going through the same thing.</p>

        <h2>Why craft food and drink?</h2>

        <p>Because I'm obsessed with it. I ferment my own kombucha and kefir at home. I read every ingredient label. I'm building my own wellness product right now, which means I'm learning the modern DTC playbook from the founder's side of the table — paid acquisition, retention, subscription, social commerce, AI — and bringing all of it back to the brands I work with.</p>

        <p>When you hire me, you're not hiring someone who learned about your category from a brief. You're hiring someone who lives and breathes the world of food and drink.</p>

        <h2>The longer version</h2>

        <p>I'm originally from Bolton, now based in Hackney, East London. I've been building websites for over twenty years.</p>

        <p>I started out co-founding a web design studio with a friend, working with music industry clients including Doves and John Cale of the Velvet Underground. From there I spent years inside London's big advertising agencies — McCann, Saatchi &amp; Saatchi — building digital work for global brands. Along the way I've done some strange and wonderful things: interactive vending machines, exhibition installations, a pop-up aquarium, an animated website inside Bill Bailey's head.</p>

        <p>All of that adds up to one thing: I know how to build websites that work. Custom development, clean code, real performance — not just a Shopify theme with the colours changed.</p>

        <p>But food has always been a huge passion. I started Cocoa Hernando. I got deep into fermentation. And I've recently decided to push that passion into my work.</p>

        <p>So that's what I do now.</p>

        <h2>What you can expect from me</h2>

        <p>Great communication, hard work and passion. I'll tell you when an idea is great and when it isn't. I work with a small number of brands at a time so the ones I'm working with get my full attention.</p>

        <p>I'm also a chatty northerner, so I'm always up for a chat. Especially about food and drink</p>

        <div className="button-holder">
          <a href="mailto:hello@paultommo.com?subject=Hello Paul!"><button>Start with a free 15-minute chat</button></a>
        </div>

      </div>

      <div className="image">
        <StaticImage
          src="../images/dal-pakwan.JPG"
          width={500}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="Paul Tomlinson eating in India"
          style={{ marginTop: `0.5rem` }}
        />
      </div>

    </div>

    <div className="about-testimonials-container">

        <div className="testimonials-container">

        <h2>Trusted by serious organisations</h2>
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
