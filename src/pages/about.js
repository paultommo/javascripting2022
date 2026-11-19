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
      <section className="sec about-hero" id="about">
        <div className="container about-hero__grid">
          <div className="about-hero__copy">
            <h1 className="about-hero__title">More about Paul</h1>
            <h2 className="about-hero__subtitle">The person behind the work</h2>
            <p className="about-hero__lead">
              I've been building websites for over 15 years. I now spend most of that time fixing one specific problem: service businesses paying for clicks that don't turn into bookings.
            </p>
            <p className="about-hero__lead">
              And yes - the 90s vibe is deliberate. I grew up in the decade and love it.
            </p>
            <div className="about-hero__actions">
              <Button variant="primary" size="lg" href={CTA_HREF} iconRight={<ArrowRight size={16} />}>
                Get a free video audit today
              </Button>
            </div>
          </div>

          <div className="about-hero__art">
            <svg className="pt-hero__disc" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <circle cx="250" cy="250" r="232" fill="var(--magenta)" stroke="var(--green-800)" strokeWidth="6" />
              <ellipse cx="140" cy="130" rx="6" ry="17" fill="var(--ink-900)" transform="rotate(-38 140 130)" />
              <ellipse cx="200" cy="98" rx="5" ry="15" fill="var(--ink-900)" transform="rotate(22 200 98)" />
              <ellipse cx="285" cy="88" rx="6" ry="16" fill="var(--ink-900)" transform="rotate(-14 285 88)" />
              <ellipse cx="355" cy="118" rx="5" ry="15" fill="var(--ink-900)" transform="rotate(38 355 118)" />
              <ellipse cx="385" cy="185" rx="6" ry="17" fill="var(--ink-900)" transform="rotate(52 385 185)" />
              <ellipse cx="392" cy="265" rx="5" ry="16" fill="var(--ink-900)" transform="rotate(-28 392 265)" />
              <ellipse cx="368" cy="348" rx="6" ry="15" fill="var(--ink-900)" transform="rotate(26 368 348)" />
              <ellipse cx="308" cy="395" rx="5" ry="16" fill="var(--ink-900)" transform="rotate(-10 308 395)" />
              <ellipse cx="225" cy="412" rx="6" ry="17" fill="var(--ink-900)" transform="rotate(42 225 412)" />
              <ellipse cx="148" cy="382" rx="5" ry="15" fill="var(--ink-900)" transform="rotate(-48 148 382)" />
              <ellipse cx="108" cy="302" rx="6" ry="16" fill="var(--ink-900)" transform="rotate(16 108 302)" />
              <ellipse cx="102" cy="218" rx="5" ry="17" fill="var(--ink-900)" transform="rotate(-24 102 218)" />
              <ellipse cx="122" cy="162" rx="6" ry="15" fill="var(--ink-900)" transform="rotate(44 122 162)" />
              <ellipse cx="175" cy="195" rx="5" ry="16" fill="var(--ink-900)" transform="rotate(-58 175 195)" />
              <ellipse cx="242" cy="158" rx="6" ry="15" fill="var(--ink-900)" transform="rotate(30 242 158)" />
              <ellipse cx="322" cy="168" rx="5" ry="17" fill="var(--ink-900)" transform="rotate(-18 322 168)" />
              <ellipse cx="345" cy="242" rx="6" ry="16" fill="var(--ink-900)" transform="rotate(55 345 242)" />
              <ellipse cx="302" cy="318" rx="5" ry="15" fill="var(--ink-900)" transform="rotate(-33 302 318)" />
              <ellipse cx="198" cy="325" rx="6" ry="16" fill="var(--ink-900)" transform="rotate(20 198 325)" />
              <ellipse cx="162" cy="268" rx="5" ry="17" fill="var(--ink-900)" transform="rotate(-44 162 268)" />
              <ellipse cx="230" cy="230" rx="5" ry="14" fill="var(--ink-900)" transform="rotate(10 230 230)" />
              <ellipse cx="290" cy="210" rx="6" ry="15" fill="var(--ink-900)" transform="rotate(-62 290 210)" />
              <ellipse cx="260" cy="310" rx="5" ry="16" fill="var(--ink-900)" transform="rotate(35 260 310)" />
            </svg>
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
      <section className="sec sec--pt-tight">
        <div className="container story">
          <p className="story__p">
            <strong>I have been building websites for over 15 years.</strong> In that time I have worked with businesses of every size - from solo founders to well-known brands - and learned what actually makes the difference between a website that brings in customers and one that just looks good.
          </p>
          <p className="story__p">
            I now focus on one thing: helping service businesses get more bookings from the ads they are already running. Most businesses on Google or Meta are paying for clicks that often don't turn into booked appointments. The problem is rarely the ads themselves. It is usually what happens after the click - how quickly someone gets a response, how easy it is to book, and whether there is any follow-up for people who weren't ready straight away. That is the part I fix.
          </p>
          <p className="story__p">
            I also once owned a luxury chocolate business stocked in Selfridges. I sold online, ran a subscription service, and learned what makes someone buy - and what makes them leave without saying why. That experience is what I bring to every project: not just making websites look good, but making them turn visitors into booked leads.
          </p>
          <p className="story__p">
            Same ad budget. More bookings.
          </p>
          <StaticImage
            src="../images/cocoahernando-markets.jpeg"
            alt="Paul at a market"
            layout="fullWidth"
            quality={90}
            placeholder="blurred"
            style={{ marginTop: '2rem', border: '3px solid #111', boxShadow: '6px 6px 0 #111' }}
          />
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="sec sec--pt-tight">
        <div className="container container--narrow">
          <figure className="pt-quote pt-quote--feature">
            <blockquote className="pt-hero__testimonial-quote">
              "Thank you again for the website. We're very pleased with the final result, and more importantly, it is already converting visitors into customers."
            </blockquote>
            <figcaption className="pt-hero__testimonial-cite">
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
                Get a free video audit today
              </Button>
            }
          />
        </div>
      </section>
    </Layout>
  )
}
