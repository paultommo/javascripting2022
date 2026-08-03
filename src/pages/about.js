import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { ArrowRight, Utensils, FlaskConical, Rocket, ChefHat } from 'lucide-react'
import Layout from '../components/layout'
import SeoBasic from '../components/seo'
import Button from '../components/ds/Button'
import SectionHeading from '../components/ds/SectionHeading'
import ValueProp from '../components/ds/ValueProp'
import CTABanner from '../components/ds/CTABanner'

const CTA_HREF = "mailto:hello@paultommo.com?subject=Hello Paul! I'd like a free consultation"

const BRINGS = [
  {
    icon: <Utensils size={26} />,
    tone: 'brand',
    title: 'A founder who gets it',
    text: "I ran a chocolate business stocked in Selfridges and sold online. I know what works and what doesn't in this industry.",
  },
  {
    icon: <FlaskConical size={26} />,
    tone: 'berry',
    title: 'Lives the category',
    text: 'I ferment my own kombucha and kefir, read every ingredient label, and own far too many recipe books.',
  },
  {
    icon: <Rocket size={26} />,
    tone: 'accent',
    title: 'Building my own brand',
    text: "I'm also building another brand of my own right now, so I'm constantly keeping on top of online trends.",
  },
]

export default function AboutPage() {
  return (
    <Layout>
      <SeoBasic
        title="Why food, drink and wellness brands?"
        description="I ran a chocolate business stocked in Selfridges. Now I build Shopify stores for craft food & drink founders who care as much about their website as their product."
      />
      {/* HERO */}
      <section className="sec sec--cream about-hero" id="about">
        <div className="container about-hero__grid">
          <div className="about-hero__copy">
            <h1 className="about-hero__title">Why food, drink &amp; wellness?</h1>
            <p className="about-hero__lead">
              Firstly, because I am so passionate about food, drink and wellness products (I also
              make my own kombucha, kefir and kimchi). Secondly, I once owned a luxury chocolate
              business, so I understand what people want to see on these kind of websites.
            </p>
            <div className="about-hero__actions">
              <Button variant="accent" size="lg" href={CTA_HREF} iconRight={<ArrowRight size={16} />}>
                Start with a free chat
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
              src="../images/dal-pakwan.png"
              alt="Paul Tomlinson"
              layout="fixed"
              width={300}
              height={380}
              objectFit="cover"
              objectPosition="center top"
              quality={90}
              placeholder="none"
            />
            <div className="pt-hero__chip pt-hero__chip--1">
              <Utensils size={16} style={{ color: 'var(--brand)' }} /> food and drink obsessive
            </div>
            <div className="pt-hero__chip pt-hero__chip--2">
              <ChefHat size={16} style={{ color: 'var(--accent-strong)' }} /> eating dal pakwan
            </div>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="sec--paper">
        <div className="container story">
          <p className="story__p">
            <strong>I ran a chocolate business stocked in Selfridges and sold online.</strong> I know what works and what doesn't in this industry.
          </p>
          <p className="story__p">
            What does work? Faster stores. Engaging experiences. Copy written for people who read labels.
            Subscriptions and perishable shipping that don't fall over. The unglamorous compliance
            bits that food, drink and wellness brands can't ignore.
          </p>
          <p className="story__p">
            So I recently stopped building websites for everyone, and started building them for the
            founders I understand best, so if you want someone experienced, passionate and
            knowledgable then please get in touch!
          </p>
        </div>
      </section>

      {/* WHAT I BRING */}
      <section className="sec sec--cream">
        <div className="container">
          <SectionHeading align="center" eyebrow="What I bring" title="More than a developer" />
          <div className="grid-svc grid-svc--3">
            {BRINGS.map((b, i) => (
              <ValueProp key={i} align="center" icon={b.icon} iconTone={b.tone} title={b.title}>
                {b.text}
              </ValueProp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="sec sec--cream">
        <div className="container">
          <CTABanner
            tone="brand"
            eyebrow="Let's build"
            title="Let's build something worth the shelf"
            subtitle="Start with a free 15-minute chat — no pitch, no pressure."
            actions={
              <Button variant="accent" size="lg" href={CTA_HREF} iconRight={<ArrowRight size={16} />}>
                Let's have a chat
              </Button>
            }
          />
        </div>
      </section>
    </Layout>
  )
}
