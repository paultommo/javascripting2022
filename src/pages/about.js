import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import ReactHtmlParser from "react-html-parser"
// import Testimonials from "../components/testimonials"

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
    <Seo title="About" />

    <div className="about-container">
      
     {/* <p>Hello there, thanks for stopping by! My name is Paul and I've been a freelance web developer for the past 20 years. I live and work in Hackney, East London although I'm originally from Bolton in Northern England.</p> */}

     {/* <p>In my 20 years of web development, I've done so many things. I originally started a web design company with a friend, which we used to create some really fun creative projects, especially in the music industry. Since then, I've worked extensively inside advertising agencies in London, but I now focus on finding, developing and managing web projects myself. From best-selling musicians and big campaigns for tech companies to vending machines for drinks brands, I've worked on so many varied and interesting projects. I also once animated the inside of Bill Bailey's head!</p> */}

     {/* <p>I've also used my technical and creative skills to collaborate on installations for exhibitions and to develop a pop-up interactive aquarium. While outside of web development, I also once had a chocolate business, attempted to launch a wooden board game and now I'm excited about a new ecommerce venture!</p> */}

     <p>Greetings and welcome! I'm Paul, a seasoned freelance web developer with two decades of experience under my belt. While I call Hackney, East London, my current home and workplace, my roots trace back to Bolton in Northern England.</p>

    <p>Over the span of my 20-year journey in web development, my path has been filled with diverse experiences and exciting ventures. It all began with co-founding a web design company alongside a friend, where we embarked on thrilling creative projects, especially within the vibrant music industry with clients including Doves and John Cale of the Velvet Underground. As time went on, my career led me to collaborate extensively within the dynamic landscape of London's advertising agencies such as McCann and Saatchi & Saatchi. However, my current focus revolves around discovering, crafting, and overseeing web projects independently which I really enjoy.</p>

    <p>From crafting digital experiences for global economists to spearheading major campaigns for tech giants, and even designing interactive vending machines for beverage brands, my portfolio boasts a rich tapestry of projects, each more unique and captivating than the last. Fun fact: I once brought the inner workings of Bill Bailey's mind to life through an animated website!</p>

    <p>Beyond web development, I've applied my technical prowess and creative flair to collaborate on captivating installations for exhibitions and even breathed life into a pop-up interactive aquarium. My interests extend beyond the digital realm; I once had a luxury chocolate business, ventured into creating wooden board games, and now, I'm working on both an exciting Youtube channel and a niche clothing business.</p>

    <p>Ready to embark on a web development journey that transcends the ordinary? <a className="red" href="mailto:paul@javascripting.uk">Connect with me right here</a>, and rest assured, I'm committed to responding promptly within 24 hours. Let's turn your digital dreams into reality!</p>

    <div className="button-holder">

      <a href="mailto:paul@javascripting.uk?subject=Hello Paul!"><button>Get in touch now</button></a>

    </div>

    </div>

    <div className="about-testimonials-container">

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
