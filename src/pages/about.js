import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { ArrowRight, MousePointerClick, CalendarCheck, BadgeCheck } from 'lucide-react'
import Layout from '../components/layout'
import SeoBasic from '../components/seo'
import Button from '../components/ds/Button'
import SectionHeading from '../components/ds/SectionHeading'
import ValueProp from '../components/ds/ValueProp'
import CTABanner from '../components/ds/CTABanner'

const CTA_HREF = "mailto:hello@paultommo.com?subject=Hello Paul! I'd like a free audit"

const BRINGS = [
  {
    icon: <MousePointerClick size={26} />,
    tone: 'brand',
    title: 'I fix both sides',
    text: 'Most agencies handle the ads or the website. I handle both - the campaign and what happens after the click - so nothing falls through the gap.',
  },
  {
    icon: <CalendarCheck size={26} />,
    tone: 'accent',
    title: 'I have been the patient',
    text: "I have had a hair transplant in London, spent months deciding which clinic to trust, and experienced every part of the journey that clinics never see. That shapes how I build.",
  },
  {
    icon: <BadgeCheck size={26} />,
    tone: 'berry',
    title: 'You deal with me directly',
    text: 'No account managers, no handoffs to a junior. I write the copy, build the pages and set up the follow-up sequences myself.',
  },
]

export default function AboutPage() {
  return (
    <Layout>
      <SeoBasic
        title="About Paul Tomlinson"
        description="I help service businesses get more booked leads from paid traffic without increasing ad spend. Free audit for hair clinics, dental clinics and wellness businesses."
        url="https://paultommo.com/about/"
      />

      {/* HERO */}
      <section className="sec sec--cream about-hero" id="about">
        <div className="container about-hero__grid">
          <div className="about-hero__copy">
            <h1 className="about-hero__title">More about Paul and why paid traffic conversion</h1>
            <p className="about-hero__lead">
              Because the problem isn't that service businesses can't get clicks.
              It's that the clicks don't turn into booked appointments - and nobody is fixing both sides.
            </p>
            <div className="about-hero__actions">
              <Button variant="accent" size="lg" href={CTA_HREF} iconRight={<ArrowRight size={16} />}>
                Get a free audit
              </Button>
            </div>
          </div>

          <div className="about-hero__art">
            <svg className="pt-hero__disc" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <circle cx="250" cy="250" r="240" fill="var(--brand)" stroke="var(--ink-900)" strokeWidth="10" />
              <circle cx="250" cy="250" r="220" fill="none" stroke="var(--ink-900)" strokeWidth="4" />
            </svg>
            <span className="pt-hero__blob pt-hero__blob--y"></span>
            <span className="pt-hero__blob pt-hero__blob--c"></span>
            <StaticImage
              src="../images/paultomlinson.png"
              alt="Paul Tomlinson"
              width={330}
              quality={90}
              placeholder="none"
            />
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="sec--paper">
        <div className="container story">
          <p className="story__p">
            <strong>I have been building high-performing websites for over 15 years.</strong> In that time I have worked with brands of every size - from independent founders to household names - and learned what actually makes the difference between a website that earns its keep and one that just looks good.
          </p>
          <p className="story__p">
            I now specialise in one thing: making websites maximise their paid traffic. Most service businesses running Google or Meta ads are paying for clicks that never turn into booked appointments. The problem is rarely the ads. It is everything that happens after the click - the speed of the reply, the booking journey, the follow-up for people who aren't ready yet. That is the gap I fix.
          </p>
          <p className="story__p">
            I also once owned a luxury chocolate business stocked in Selfridges. I sold online, ran subscriptions, and learned what makes someone buy - and what makes them disappear without saying why. That commercial instinct is what I bring to every project: not just making things look good, but making them work.
          </p>
          <p className="story__p">
            Same ad budget. More leads.
          </p>
          <StaticImage
            src="../images/cocoahernando-markets.jpeg"
            alt="Paul at a market"
            layout="fullWidth"
            quality={90}
            placeholder="blurred"
            style={{ borderRadius: '14px', marginTop: '2rem' }}
          />
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="sec sec--paper">
        <div className="container container--narrow">
          <figure style={{ margin: 0, padding: 'var(--space-8) var(--space-6)', borderLeft: '4px solid var(--brand)', background: 'var(--surface-sunken)', borderRadius: '0 10px 10px 0' }}>
            <blockquote style={{ margin: 0, fontSize: 'var(--fs-lead)', fontStyle: 'italic', lineHeight: 1.6, color: 'var(--text-strong)' }}>
              "Thank you again for the website. We're very pleased with the final result, and more importantly, it is already converting visitors into customers."
            </blockquote>
            <figcaption style={{ marginTop: 'var(--space-4)', fontSize: 'var(--fs-sm)', color: 'var(--text-muted)', fontStyle: 'normal' }}>
              - Luka Ivic, Monokl
            </figcaption>
          </figure>
        </div>
      </section>

      {/* CTA */}
      <section className="sec sec--brand">
        <div className="container">
          <CTABanner
            eyebrow="Free audit"
            title="Find out where your paid traffic is leaking"
            subtitle="I'll review your ads and booking journey and show you the first three things I'd fix. No pitch, no obligation."
            onDark
            actions={
              <Button variant="accent" size="lg" href={CTA_HREF} iconRight={<ArrowRight size={16} />}>
                Get a free audit
              </Button>
            }
          />
        </div>
      </section>
    </Layout>
  )
}
