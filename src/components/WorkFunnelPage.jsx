import React from 'react'
import { ArrowRight } from 'lucide-react'
import Layout from './layout'
import SeoBasic from './seo'
import Button from './ds/Button'
import SectionHeading from './ds/SectionHeading'
import CTABanner from './ds/CTABanner'

const AUDIT_HREF = "mailto:hello@paultommo.com?subject=Hello Paul! I'd like a free audit"

export default function WorkFunnelPage({ meta, hero, problems, fixes, gapClosed }) {
  return (
    <Layout>
      <SeoBasic title={meta.title} description={meta.description} url={meta.url} />

      {/* HERO */}
      <section className="sec wf-hero">
        <div className="container container--narrow">
          <span className="pt-hero__eyebrow">{hero.eyebrow}</span>
          <h1 className="wf-hero__title">{hero.title}</h1>
          <p className="wf-hero__sub">{hero.subtitle}</p>
          {hero.context && <p className="wf-hero__context">{hero.context}</p>}
        </div>
      </section>

      {/* PROBLEM */}
      <section className="sec">
        <div className="container">
          <SectionHeading eyebrow="What we found" title="The problem" subtitle="Where the funnel was losing leads." />
          <ol className="wf-problems">
            {problems.map((p, i) => (
              <li key={i} className="wf-problem">
                <span className="wf-problem__num">0{i + 1}</span>
                <h3 className="wf-problem__title">{p.title}</h3>
                <p className="wf-problem__text">{p.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FIX */}
      <section className="sec sec--brand">
        <div className="container">
          <SectionHeading eyebrow="The concept" title="What the funnel should look like" onDark />
          <ol className="wf-fixes">
            {fixes.map((f, i) => (
              <li key={i} className="wf-fix">
                <span className="wf-fix__num">0{i + 1}</span>
                <h3 className="wf-fix__title">{f.title}</h3>
                <p className="wf-fix__text">{f.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* GAP CLOSED */}
      <section className="sec sec--pt-tight">
        <div className="container container--narrow">
          <figure className="pt-quote pt-quote--feature">
            <span className="pt-hero__eyebrow">Gap closed</span>
            <blockquote className="pt-hero__testimonial-quote">"{gapClosed}"</blockquote>
          </figure>
        </div>
      </section>

      {/* CTA */}
      <section className="sec sec--brand">
        <div className="container">
          <CTABanner
            eyebrow="Free · No obligation"
            title="Let me show you in a video where your paid traffic is leaking"
            subtitle="I'll go through your enquiry process the way a real customer would and send you a 5-minute video showing the first three things I'd fix. No pitch, no obligation."
            actions={
              <Button variant="accent" size="lg" href={AUDIT_HREF} iconRight={<ArrowRight size={16} />}>
                Get a free video audit today
              </Button>
            }
          />
        </div>
      </section>
    </Layout>
  )
}
