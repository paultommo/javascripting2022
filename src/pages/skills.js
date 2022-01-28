import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Skills" />

    <div className="skills-container">

      Over my 15 years+ as a freelance developer, I've built a whole range of <Link to='/workItem?id=good-growth-hub'>websites</Link>, <Link to='/workItem?id=wdmp'>banners</Link>, <Link to='/workItem?id=victorian-olympics'>games</Link> and even a facial recognition system. However, here's a list of my favourite tools:
      
      <div className="skills-table" style={{margin:'20px 0 0 0'}}>

          <div className="skills-item" style={{display:'flex', alignItems:'center'}}>

          <div className="skills-img" style={{margin:"0 10px 10px 0"}}><img alt="Gatsby" width="100" src='https://javascripting.uk/jsgraphql/wp-content/uploads/2021/02/gatsby_thumb.png' /></div>

          <div className="skills-copy">GatsbyJS enables developers to create modern, secure, fast & SEO-approved websites. Great for Headless Wordpress projects!</div>

          </div>

          <div className="skills-item" style={{display:'flex', alignItems:'center'}}>

          <div className="skills-img" style={{margin:"0 10px 10px 0"}}><img alt="React" width="100" src='https://javascripting.uk/jsgraphql/wp-content/uploads/2021/02/react_thumb.png' /></div>

          <div className="skills-copy">ReactJS is a great JavaScript library which I've used on a range of applications.</div>

          </div>


          <div className="skills-item" style={{display:'flex', alignItems:'center'}}>

          <div className="skills-img" style={{margin:"0 10px 10px 0"}}><img alt="Wordpress" width="100" src='https://javascripting.uk/jsgraphql/wp-content/uploads/2021/02/wordpress_thumb.png' /></div>

          <div className="skills-copy">Wordpress is still my favourite CMS tool for websites. It's simple and clients love it.</div>

          </div>

          <div className="skills-item" style={{display:'flex', alignItems:'center'}}>

          <div className="skills-img" style={{margin:"0 10px 10px 0"}}><img alt="GraphQL" width="100" src='https://javascripting.uk/jsgraphql/wp-content/uploads/2021/02/graphql_thumb.png' /></div>

          <div className="skills-copy">GraphQL is a modern and very fast method for loading data into a website. Much better and quicker than using REST in my experience!</div>

          </div>

          <div className="skills-item" style={{display:'flex', alignItems:'center'}}>

          <div className="skills-img" style={{margin:"0 10px 10px 0"}}><img alt="GSAP" width="100" src='https://javascripting.uk/jsgraphql/wp-content/uploads/2021/02/gsap_thumb.png' /></div>

          <div className="skills-copy">GSAP is a brilliant JavaScript library for creating high-performance animations on the web.</div>

          </div>


      </div>


    </div>
    
  </Layout>
)

export default IndexPage
