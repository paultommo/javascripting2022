import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { ArrowRight, MousePointerClick, CalendarCheck, TrendingUp, Scissors, Stethoscope, Leaf, Home } from 'lucide-react'
import Layout from '../components/layout'
import Hero from '../components/Hero'
import Button from '../components/ds/Button'
import SectionHeading from '../components/ds/SectionHeading'
import ValueProp from '../components/ds/ValueProp'
import CTABanner from '../components/ds/CTABanner'
import SeoBasic from '../components/seo'

const CTA_HREF = "mailto:hello@paultommo.com?subject=Hello Paul! I'd like a free audit"

const HOW = [
  {
    icon: <MousePointerClick size={26} />, tone: 'brand',
    title: 'Better ads',
    text: 'The right audience, the right message, and a landing page that follows through. So the people who click are the people most likely to book.',
  },
  {
    icon: <CalendarCheck size={26} />, tone: 'accent',
    title: 'A booking journey that converts',
    text: 'Most people who click an ad don\'t book straight away. A clear booking page, an instant confirmation, and a follow-up email keeps them moving until they do.',
  },
  {
    icon: <TrendingUp size={26} />, tone: 'berry',
    title: 'More booked leads. Same budget.',
    text: 'You\'re already paying for the clicks. The goal is to get more bookings from the same budget - not spend more to get there.',
  },
]

const SECTORS = [
  {
    icon: <Scissors size={22} />,
    title: 'Hair transplant clinics',
    text: 'More booked consultations from Google and Meta - without losing London patients to Turkey.',
    href: '/hair-clinics/',
  },
  {
    icon: <Stethoscope size={22} />,
    title: 'Dental implant clinics',
    text: 'More booked consultations - without losing patients to Eastern Europe on price.',
    href: '/dental-implants/',
  },
  {
    icon: <Leaf size={22} />,
    title: 'Wellness businesses',
    text: 'More booked appointments for saunas, cold plunge studios, med spas and aesthetic clinics.',
    href: '/wellness-businesses/',
  },
  {
    icon: <Home size={22} />,
    title: 'Home services',
    text: 'More booked surveys for loft conversion, heat pump and home improvement businesses.',
    href: '#',
  },
]

const TrafficFunnel = () => (
  <svg width="286" height="247" viewBox="0 0 220 190" fill="none" aria-hidden="true" style={{ display: 'block', maxWidth: '100%' }}>
    <rect x="20" y="20" width="70" height="150" rx="6" fill="rgba(0,0,0,0.08)" stroke="rgba(0,0,0,0.4)" strokeWidth="1.5" />
    <text x="55" y="42" textAnchor="middle" fill="#111" fontSize="11.5" fontWeight="700" fontFamily="inherit">Traffic</text>
    <text x="55" y="58" textAnchor="middle" fill="rgba(0,0,0,0.55)" fontSize="10" fontFamily="inherit">you pay for</text>
    <rect x="130" y="140" width="70" height="30" rx="6" fill="rgba(0,0,0,0.08)" stroke="#111" strokeWidth="1.5" />
    <text x="165" y="160" textAnchor="middle" fill="#111" fontSize="11.5" fontWeight="700" fontFamily="inherit">Bookings</text>
    <line x1="165" y1="22" x2="165" y2="136" stroke="rgba(0,0,0,0.25)" strokeWidth="1" strokeDasharray="3 3" />
    <text x="165" y="78" textAnchor="middle" fill="#111" fontSize="9.5" fontFamily="inherit">this gap</text>
    <text x="165" y="94" textAnchor="middle" fill="#111" fontSize="9.5" fontFamily="inherit">= revenue</text>
    <text x="165" y="110" textAnchor="middle" fill="#111" fontSize="9.5" fontFamily="inherit">left behind</text>
    <line x1="10" y1="175" x2="210" y2="175" stroke="rgba(0,0,0,0.2)" strokeWidth="1" />
  </svg>
)

export default function IndexPage() {
  return (
    <Layout>
      <SeoBasic
        title="More Booked Leads from Paid Traffic | Paul Tomlinson"
        description="I help service businesses get more booked leads from their paid ads - without increasing ad spend. Free audit."
        url="https://paultommo.com/"
      />

      {/* HERO */}
      <Hero
        eyebrow="Paid Traffic · Service Businesses · London"
        title="More booked leads from your paid traffic"
        subtitle="Without increasing your ad spend"
        testimonial={{ quote: "Thank you again for the website...it is already converting visitors into customers.", attribution: "Luka Ivic, Monokl" }}
        body="You're already paying for the clicks. I fix the ads and the booking journey so more of them turn into booked appointments - same budget, more leads."
        cta="Get a free video audit today"
        ctaHref={CTA_HREF}
        ctaSecondary="See how it works"
        ctaSecondaryHref="#how"
        hideChips
        heroImage={
          <StaticImage
            src="../images/paultomlinson.png"
            alt="Paul Tomlinson"
            className="pt-hero__photo"
            width={330}
            quality={90}
            placeholder="none"
          />
        }
      />

      {/* REFRAME */}
      <section className="sec sec--brand">
        <div className="container" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-10)', flexWrap: 'wrap', padding: 'var(--section-y) var(--gutter)' }}>
          <div style={{ flex: '1 1 300px' }}>
            <p style={{ fontSize: 'var(--fs-h2)', fontFamily: 'var(--font-display)', fontWeight: '900', color: '#111', lineHeight: 'var(--lh-snug)', margin: 0 }}>
              You are already paying for traffic to your website.
            </p>
            <p style={{ fontSize: 'var(--fs-lead)', color: '#fff', opacity: 0.85, marginTop: 'var(--space-5)', marginBottom: 0 }}>
              A big chunk of traffic doesn't turn into a booked appointment. I fix both sides - the ads and the journey after the click.
            </p>
          </div>
          <div style={{ flex: '0 0 auto' }}>
            <TrafficFunnel />
          </div>
        </div>
      </section>

      {/* HOW */}
      <section className="sec" id="how">
        <div className="container">
          <SectionHeading
            align="center"
            eyebrow="How it works"
            title="Fix the ads. Fix the journey. More bookings."
            subtitle="Most agencies do one or the other. I do both - so nothing falls between the cracks."
          />
          <div className="grid-svc grid-svc--3" style={{ marginTop: 'var(--space-8)' }}>
            {HOW.map((h, i) => (
              <div className="svc-card svc-card--light" key={i}>
                <ValueProp align="center" icon={h.icon} iconTone={h.tone} title={h.title}>
                  {h.text}
                </ValueProp>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="sec">
        <div className="container">
          <CTABanner
            eyebrow="Free audit"
            title="Find out where your paid traffic is leaking"
            subtitle="I'll look at your ads and your booking process and tell you the first three things I'd change. No sales pitch, no obligation."
            tone="cream"
            actions={
              <Button variant="primary" size="lg" href={CTA_HREF} iconRight={<ArrowRight size={16} />}>
                Get a free video audit today
              </Button>
            }
          />
        </div>
      </section>
    </Layout>
  )
}
