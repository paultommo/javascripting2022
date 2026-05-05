import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SeoBasic from "../components/seo"
import Seo from 'gatsby-plugin-wpgraphql-seo';
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import ReactHtmlParser from "react-html-parser"
// import Testimonials from "../components/testimonials"

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
const axios = require('axios');

const IndexPage = ({
  data: {
    seoPage, allWpTestimonial, allWpPost
  },
}) => {


  
  const [emailValue, setEmailValue] = useState('');
  const [emailMessage, setEmailMessage] = useState('');

  const handleMailSubmit = () => {

    if(validateEmail(emailValue)){

      console.log(emailValue)

      axios.post('https://story-spinner-vjrm.temp-dns.com/paultommo-php/addcontact.php', {
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        data:{
          email: emailValue,
        }
      
      })
      .then(response => {
        
        switch(true){

          case response.data.id!==undefined:

            setEmailMessage('Thanks for signing up!')

            setEmailValue('') 

          break;

          case response.data.code=="duplicate_parameter":
           
              setEmailMessage('Email is already on the list!')

          break


        }

        // console.log(response.data)
         
       })
      .catch(error => {
        console.log(error);
      });

      }
      else{

        setEmailMessage('Invalid email. Please try again!')
      }

  }

  function validateEmail(email) {
    const res = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return res.test(String(email).toLowerCase());
  }

  return(
  <Layout>

    <SeoBasic title="Paul Tomlinson: Building impactful Hubspot websites" image="https://paultommo.com/images/static-pt.png" description="Paul Tomlinson: Building impactful Hubspot websites" />
    


     <div className="homepage-section one">

      <div className="intro">
      
        <h1 class="hubspot"><span className="hello">Paul Tomlinson</span>Building impactful Hubspot websites</h1>
        
        {/* <h2>"Working with Paul was an absolute pleasure and I’d happily recommend him to anyone..."</h2> */}

        
       

        <div>

      


<a href="mailto:hello@paultommo.com?subject=Hello Paul!I'd like a free consultation"><button>Let's discuss your Hubspot project now!</button></a>

<div className="hubspot-clients-section">

    <h2>Hubspot clients have included:</h2>
    <ul className="hubspot-clients">
        <li>
            <a href="https://skillcorner.com" target="_blank">
            <StaticImage
            src="../images/skillcorner.png"
            width={150}
            quality={53}
            formats={["auto", "webp", "avif"]}
            alt="Skillcorner"
            style={{ marginTop: `0rem` }}
        /></a>
        </li>
        <li>
            <a href="https://www.bain.com/" target="_blank">
            <StaticImage
            src="../images/bain.png"
            width={150}
            quality={53}
            formats={["auto", "webp", "avif"]}
            alt="Bain & Company"
            style={{ marginTop: `0rem` }}
        /></a>


        </li>
        <li>
            <a href="https://www.duettocloud.com/en-us/" target="_blank">
            <StaticImage
            src="../images/duetto.png"
            width={150}
            quality={53}
            formats={["auto", "webp", "avif"]}
            alt="Duetto"
            style={{ marginTop: `0rem` }}
        /></a>
        </li>
        <li>
            <a href="https://www.vev.com/" target="_blank">
            <StaticImage
            src="../images/vev.png"
            width={150}
            quality={53}
            formats={["auto", "webp", "avif"]}
            alt="Vev"
            style={{ marginTop: `0` }}
        /></a>
        </li>
        <li>
            <a href="https://www.scoutbee.com/" target="_blank">
            <StaticImage
            src="../images/scoutbee.png"
            width={150}
            quality={53}
            formats={["auto", "webp", "avif"]}
            alt="Scoutbee"
            style={{ marginTop: `0` }}
        /></a>
        </li>

    </ul>
</div>



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

    <h2>Your pain points:</h2>
   
    <ul>
    <li>You're struggling to create a stylish, bespoke Hubspot website</li>
    <li>Your Hubspot website is super slow</li>
    <li>There's a poor user-experience on your Hubspot website</li>
    </ul>
      

      <h2>My solutions:</h2>
      <ul>
      <li>I create high-converting, custom Hubspot websites that capture attention, build trust, and generate leads</li>
      <li>I will ensure you have a high-performing Hubspot website</li>
      <li>I will also ensure that your Hubspot website will provide a great user-experience</li>
      <li>I will save you time and money. I’ll build you an intuitive, module-based Hubspot website - making website maintenance a breeze</li>
      <li>I can also look after all your design, copy, technology, SEO and project management needs and create you something great!</li>
      </ul>

      {/* <h2>Let's talk:</h2>
      <ul>
        <li>If your website needs a premium upgrade, let’s chat.</li>
        <li>Message me for a free 10-minute consultation 👋</li>
      </ul> */}

    </div>

      {/* <div className="button-holder">

        <a href="mailto:paul@javascripting.uk?subject=Hello Paul!"><button>Say Hello!</button></a>

        </div> */}


    </div>

    <div className="homepage-section three">

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

    <div className="homepage-section four">

    
        <div className="copy">
       
        <h3>My Prices</h3>


            <div className="prices">

 
          <div className="work"><h3>Fixed Projects: Start from £4000</h3>Dependent on the scope of the project</div>
          <div className="work"><h3>One-off Tasks: £400 / day</h3>For any updates or maintenance to your site</div>

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

