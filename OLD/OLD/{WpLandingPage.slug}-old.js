import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import SeoBasic from "../components/seo"
import Seo from 'gatsby-plugin-wpgraphql-seo';
import BannerWide from '../components/banners/bannerWide'
import FooterStandard from '../components/footers/footerStandard'
import { graphql } from "gatsby"
import ReactHtmlParser from "react-html-parser"
import SEARCH_LP_QUERY from "../hooks/search-landing-pages"
import { useQuery } from "react-apollo"
import { useLocation } from '@reach/router';
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

import IconGithub from '../components/symbols/icon-github'
import IconLinkedin from '../components/symbols/icon-linkedin'
import IconYoutube from '../components/symbols/icon-youtube'
import IconTwitter from '../components/symbols/icon-twitter'
import IconFacebook from '../components/symbols/icon-facebook'
import IconReddit from '../components/symbols/icon-reddit'
import IconDiscord from '../components/symbols/icon-discord'

/* This page uses both a static query to generate the page & dynamic query to load in the rendered content */

export const query = graphql`
  query($slug: String) {
    wpLandingPage(slug: {eq: $slug}) {
      id
      content
    }
    seoPage:wpLandingPage(slug: {eq: $slug}) {
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
    wpLandingPage, seoPage
  },
}) => {

  const [blogSlug, setBlogSlug] = useState(null)

  const location = useLocation()
  const array = location.pathname.split('/');

  
   useEffect(() => {

      if(array[1]){

        setBlogSlug(array[1])
      }

  }, [array])


  const SearchResults = ({ slug }) => {
 
    const { data: queriedData } = useQuery(SEARCH_LP_QUERY, {
      variables: { slug: slug},
      
    })

    if(queriedData) {

      return  <>{ReactHtmlParser(queriedData.landingPageBy.content)}</>
    }
    else{

      return null
    }

  }

  // console.clear()
  // console.log(seoPage)

return(
  <>
    {seoPage ?
      <Seo post={seoPage} />
    :
      <SeoBasic title="Landing Page" />
    }
    
    <div className="landing-page-header">

        <Link to="/">
        <StaticImage
          src="../images/logo.png"
          width={149}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="NetData"
          style={{ marginBottom: `0` }}
        />
        </Link>
      
    </div>

    <div className="copy-component landing-page">
    
    {blogSlug &&
     <SearchResults
      slug={blogSlug}
    />
    }

   </div>

   <footer>
   <div className="footerBottom-desktop"> 
    <div className="nav-left">
        <div className="logo">
          <StaticImage
            src="../images/logo.png"
            width={149}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="NetData"
            style={{ marginBottom: `0` }}
          />
        </div>
        <ul>
          <li>©2022 Netdata Inc.</li>
          <li><Link to="/privacy/">Privacy policy</Link></li>
          <li><Link to="/terms/">Terms of use</Link></li>
        </ul>
      </div>

      <div className="nav-right">
        <ul>
        <li><a role="button" aria-label="Github" target="_blank" rel="noreferrer" href="https://github.com/netdata/netdata"><IconGithub /></a></li>
        <li><a role="button" aria-label="Linkedin" target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/netdata-cloud/"><IconLinkedin /></a></li>
        <li><a role="button" aria-label="YouTube" target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UC61IDHAysha3o3QI-LTno7A"><IconYoutube /></a></li>
        <li><a role="button" aria-label="Twitter" target="_blank" rel="noreferrer" href="https://twitter.com/linuxnetdata"><IconTwitter /></a></li>
        <li><a role="button" aria-label="Facebook" target="_blank" rel="noreferrer" href="https://www.facebook.com/linuxnetdata/"><IconFacebook /></a></li>
        <li><a role="button" aria-label="Reddit" target="_blank" rel="noreferrer" href="https://www.reddit.com/r/netdata/"><IconReddit /></a></li>
        <li><a role="button" aria-label="Discord" target="_blank" rel="noreferrer" href="https://discord.com/invite/mPZ6WZKKG2"><IconDiscord /></a></li>
        </ul>
      </div>

   </div>
   </footer>
    
  </>
)
}

export default IndexPage
