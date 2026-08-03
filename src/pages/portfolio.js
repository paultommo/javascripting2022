import React from 'react'
import { graphql } from 'gatsby'
import { ArrowRight } from 'lucide-react'
import Layout from '../components/layout'
import SeoBasic from '../components/seo'
import SectionHeading from '../components/ds/SectionHeading'
import PortfolioCard from '../components/ds/PortfolioCard'

export const query = graphql`
  query {
    allWpPortfolio(sort: { order: DESC, fields: date }) {
      edges {
        node {
          title
          slug
          thumb {
            thumb {
              sourceUrl
            }
          }
        }
      }
    }
  }
`

export default function PortfolioPage({ data }) {
  const portfolio = data?.allWpPortfolio?.edges ?? []

  return (
    <Layout>
      <SeoBasic title="Portfolio" />

      <section className="sec sec--cream portfolio-list">
        <div className="container">
          <SectionHeading eyebrow="Selected work" title="Projects" />
          <div className="grid-folio">
            {portfolio.map(({ node }, i) => (
              <PortfolioCard
                key={node.slug}
                title={node.title}
                categoryTone={i % 2 ? 'ink' : 'accent'}
                ctaIcon={<ArrowRight size={14} />}
                href={`/work/${node.slug}`}
                image={node.thumb?.thumb?.sourceUrl}
                imageAlt={node.title}
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}
