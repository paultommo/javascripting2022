import React, { useEffect, useState } from "react"
import { graphql } from "gatsby"
import { ArrowRight } from "lucide-react"
import Layout from "../../components/layout"
import SeoBasic from "../../components/seo"
import Seo from 'gatsby-plugin-wpgraphql-seo';
import ReactHtmlParser from "react-html-parser"
import getImage from "../../functions/getImage"
import Button from "../../components/ds/Button"
import CTABanner from "../../components/ds/CTABanner"

const CONSULT_HREF = "mailto:hello@paultommo.com?subject=Hello Paul! I'd like a free consultation"

export const query = graphql`
  query($slug: String) {
    wpPortfolio(slug: {eq: $slug}) {
      title
      content
      slug
      url{
        url
      }
      image1 {
        image1 {
          mediaDetails {
            sizes {
              sourceUrl
              width
              name
            }
          }
        }
      }
      image2 {
        image2 {
          mediaDetails {
            sizes {
              sourceUrl
              width
              name
            }
          }
        }
      }
      image3 {
        image3 {
          mediaDetails {
            sizes {
              sourceUrl
              width
              name
            }
          }
        }
      }
      image4 {
        image4 {
          mediaDetails {
            sizes {
              sourceUrl
              width
              name
            }
          }
        }
      }
      image5 {
        image5 {
          mediaDetails {
            sizes {
              sourceUrl
              width
              name
            }
          }
        }
      }
    }
    seoPage:wpPortfolio(slug: {eq: $slug}) {
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


const WpPortfolio = ({
  data: {
    wpPortfolio, seoPage
  },
}) => {

  const {title, content, url, image1, image2, image3, image4, image5 } = wpPortfolio

  console.log(image1)

  const [imagesCanLoad, setImagesCanLoad] = useState(false)

  useEffect(() => {

      if (typeof window !== "undefined") {
        
        setImagesCanLoad(true)
      }
  }, [])


  return (
    <Layout>
      {seoPage ?
        <Seo post={seoPage} />
      :
        <SeoBasic title={title} />
      }

      {/* HEADER */}
      <section className="sec sec--cream work-single__sec">
        <div className="container">
          <div className="work-single__header">
            <h1 className="work-single__title">{title}</h1>
            <div className="work-single__copy copyLarge">
              {ReactHtmlParser(content)}
            </div>
            {url?.url && (
              <Button variant="accent" size="lg" href={url.url} target="_blank" rel="noopener noreferrer" iconRight={<ArrowRight size={16} />}>
                View website
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* IMAGES */}
      {imagesCanLoad && (
        <section className="sec sec--ink">
          <div className="container">
            <div className="work-single__images">
              {image1?.image1?.mediaDetails && <img className="work-single__img" alt={title} src={getImage(image1.image1.mediaDetails.sizes)} />}
              {image2?.image2?.mediaDetails && <img className="work-single__img" alt={title} src={getImage(image2.image2.mediaDetails.sizes)} />}
              {image3?.image3?.mediaDetails && <img className="work-single__img" alt={title} src={getImage(image3.image3.mediaDetails.sizes)} />}
              {image4?.image4?.mediaDetails && <img className="work-single__img" alt={title} src={getImage(image4.image4.mediaDetails.sizes)} />}
              {image5?.image5?.mediaDetails && <img className="work-single__img" alt={title} src={getImage(image5.image5.mediaDetails.sizes)} />}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="sec sec--cream">
        <div className="container">
          <CTABanner
            eyebrow="Let's build"
            title="Ready to build a store your brand deserves?"
            subtitle="Start with a free 15-minute chat — no pitch, no pressure."
            actions={
              <Button variant="accent" size="lg" href={CONSULT_HREF} iconRight={<ArrowRight size={16} />}>
                Let's have a chat
              </Button>
            }
          />
        </div>
      </section>

    </Layout>
  )
}


export default WpPortfolio