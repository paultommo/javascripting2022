import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SeoBasic from '../components/seo'
import SectionHeading from '../components/ds/SectionHeading'

export const query = graphql`
  query InsightsQuery {
    allWpInsights(sort: { date: DESC }) {
      nodes {
        id
        title
        insights {
          url
          image {
            sourceUrl
            altText
          }
        }
      }
    }
  }
`

export default function InsightsPage({ data }) {
  const posts = data?.allWpInsights?.nodes ?? []

  return (
    <Layout>
      <SeoBasic
        title="Insights"
        description="Thoughts on Shopify, food & drink e-commerce, and building brands online."
      />

      <section className="sec sec--cream">
        <div className="container">
          <SectionHeading eyebrow="LinkedIn" title="Insights" />
          <div className="grid-insights">
            {posts.map(post => {
              const img = post.insights?.image?.sourceUrl
              const url = post.insights?.url
              const alt = post.insights?.image?.altText || post.title

              return (
                <a
                  key={post.id}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pt-insight-card"
                >
                  {img && <img src={img} alt={alt} className="pt-insight-card__img" />}
                </a>
              )
            })}
          </div>
        </div>
      </section>
    </Layout>
  )
}
