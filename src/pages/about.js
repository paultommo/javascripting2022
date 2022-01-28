import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Testimonials from "../components/testimonials"

const IndexPage = () => (
  <Layout>
    <Seo title="About" />

    <div className="about-container">
      
      <p>Hello there! I'm Paul, a London-based web developer and I've been freelancing for the past 15 years.</p>

      <p>I specialise in Headless Wordpress websites and Javascript applications (hence the domain name!). I've worked with a wide range of clients from large brands, such as Unilever, RedBull and the BBC to many smaller and medium sized companies. I also once worked with Bill Bailey and animated the inside of his head!</p>

      <p>I'm also very interested in developing other opportunities for myself. I once had a luxury chocolate business - where my products were stocked in Selfridges and Harvey Nichols amongst others - and I'm now currently working on an exciting board game.</p>

      <a className="red" href="mailto:paul@javascripting.uk">Hire me here</a>. I always aim to respond within 24 hours.

    </div>

    <div className="about-testimonials-container">

        <Testimonials />

    </div>

  </Layout>
)

export default IndexPage
