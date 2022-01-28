import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Testimonials from "../components/testimonials"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />

    <div className="homepage-section one">

      <div className="intro">
      
        <h1>Hello! I’m web developer Paul Tomlinson.</h1>

        <h2>I specialise in Headless Wordpress web development and all things Javascript.</h2>

        <div className="button-holder">

          <Link activeClassName="active" to="/about/"><button>Learn More</button></Link>

          <a href="mailto:paul@javascripting.uk"><button>Hire Me</button></a>

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
      <h2>What can I do for you?</h2>

        <ul className="listings">
          
          <li>Build high-performing & super-secure Wordpress websites</li>   
          <li>Develop a wide range of Javascript applications namely with ReactJS</li>
          <li>Promise to use the latest skills and technologies available on the web</li>
          <li>Provide 15+ years of web development experience</li>      
          <li>Offer excellent communication and management skills throughout any project</li>

        </ul>


      </div>

      <div className="copy">
      <h2>What does Headless Wordpress mean?</h2>

        <ul className="listings">
          
          <li>A modern and superior approach to creating a Wordpress website</li>   
          <li>Headless combines the simplicity of a traditional Wordpress CMS alongside a bespoke front-end</li>
          <li>High performance and therefore great SEO</li>
          <li>Very few plugins, making site maintenance much easier</li>      
          <li>Using a super-modern stack of tools, namely GatsbyJS, WPGraphQL and Netlify</li>

        </ul>

      </div>

    </div>

    <div className="homepage-section three">

        <Testimonials />

    </div>

  {/*  <div className="homepage-section four">

    Contact

    </div>*/}
    
  </Layout>
)

export default IndexPage
