import React from 'react'
import { graphql } from 'gatsby'
import { ArrowRight } from 'lucide-react'
import Layout from '../components/layout'
import SeoBasic from '../components/seo'
import SectionHeading from '../components/ds/SectionHeading'
import PortfolioCard from '../components/ds/PortfolioCard'

const FUNNEL_AUDITS = [
  {
    slug: 'msc',
    title: 'Marylebone Smile Clinic',
    category: 'Dental · Harley Street',
    meta: 'Broken booking journey. 4 leaks found.',
    gapClosed: 'Paid traffic with no self-serve booking path.',
  },
  {
    slug: 'be-cool',
    title: 'Be Cool Refrigeration',
    category: 'Refrigeration · London',
    meta: 'High-ticket half had no online quote path.',
    gapClosed: 'AC got an instant quote. Refrigeration got a form.',
  },
  {
    slug: 'heatgeek',
    title: 'HeatGeek',
    category: 'Heat Pumps · UK',
    meta: 'Login wall before £250 changed hands.',
    gapClosed: 'Best configurator in the sector. Stopped at the last click.',
  },
]

function AuditPlaceholder({ label }) {
  return (
    <div style={{
      width: '100%', height: '100%', background: 'var(--near-black)',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
      padding: 'var(--space-5)',
    }}>
      <span style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '0.7rem', color: 'var(--magenta)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Funnel Audit</span>
      <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', textAlign: 'center', lineHeight: 1.3 }}>{label}</span>
    </div>
  )
}

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

      <section className="sec portfolio-audits">
        <div className="container">
          <SectionHeading eyebrow="Funnel analysis" title="Paid traffic audits" subtitle="Real funnels audited, problems found, concept fixes proposed." />
          <div className="grid-folio">
            {FUNNEL_AUDITS.map((audit, i) => (
              <PortfolioCard
                key={audit.slug}
                title={audit.title}
                meta={audit.meta}
                cta="Read the audit"
                ctaIcon={<ArrowRight size={14} />}
                href={`/work/${audit.slug}/`}
                imagePlaceholder={<AuditPlaceholder label={audit.gapClosed} />}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="sec portfolio-list">
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
