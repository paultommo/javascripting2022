import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Testimonials from "../components/testimonials"

const IndexPage = () => (
  <Layout>
    <Seo title="About" />

    <div className="about-container">
      
      <p>Hello there! I'm Paul, a London-based web developer and I've been freelancing for the past 20 years.</p>

      <p>I specialise in Wordpress websites and Javascript applications (hence the domain name!). I've worked with a wide range of clients from large brands, such as Unilever, RedBull and the BBC to many smaller and medium sized companies. I also once worked with Bill Bailey and animated the inside of his head!</p>

      <p>I pride myself on being a great communicator and a hard worker who creates pixel-perfect websites and always gets things done.</p>

      <p>I'm also very interested in developing other opportunities for myself. I've had a luxury chocolate business, launched a board game and I'm now also pushing a new ecommerce brand.</p>

      <a className="red" href="mailto:paul@javascripting.uk">Hire me here</a>. I always aim to respond within 24 hours.

    </div>

    <div className="about-testimonials-container">

        <Testimonials />

    </div>

  </Layout>
)

export default IndexPage
