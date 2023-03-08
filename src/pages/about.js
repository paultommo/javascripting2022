import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Testimonials from "../components/testimonials"

const IndexPage = () => (
  <Layout>
    <Seo title="About" />

    <div className="about-container">
      
     <p>Hello there, thanks for stopping by! My name is Paul and I've been a freelance web developer for the past 20 years. I live and work in Hackney, East London although I'm originally from Bolton in Northern England.</p>

     <p>In my 20 years of web development, I've done so many things. I originally started a web design company with a friend, which we used to create some really fun creative projects, especially in the music industry. Since then, I've worked extensively inside advertising agencies in London, but I now focus on finding, developing and managing web projects myself. From best-selling musicians and big campaigns for tech companies to vending machines for drinks brands, I've worked on so many varied and interesting projects. I also once animated the inside of Bill Bailey's head!</p>

     <p>I've also used my technical and creative skills to collaborate on installations for exhibitions and to develop a pop-up interactive aquarium. While outside of web development, I also once had a chocolate business, attempted to launch a wooden board game and now I'm excited about a new ecommerce venture!</p>

     <a className="red" href="mailto:paul@javascripting.uk">Hire me here</a>. I always aim to respond within 24 hours.

    </div>

    <div className="about-testimonials-container">

        <Testimonials />

    </div>

  </Layout>
)

export default IndexPage
