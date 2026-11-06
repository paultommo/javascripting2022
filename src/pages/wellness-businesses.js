import React, { useState } from 'react'
import { graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { ArrowRight, Star, Flame, TrendingUp, Users, Clock, Palette, Code2, Bot, Gauge, ShoppingBag } from 'lucide-react'
import Layout from '../components/layout'
import SeoBasic from '../components/seo'
import Hero from '../components/Hero'
import Button from '../components/ds/Button'
import SectionHeading from '../components/ds/SectionHeading'
import ValueProp from '../components/ds/ValueProp'
import TestimonialCard from '../components/ds/TestimonialCard'
import CTABanner from '../components/ds/CTABanner'

export const query = graphql`
  query WellnessBusinessQuery {
    allWpTestimonial {
      edges {
        node {
          id
          title
          content
          featuredImage {
            node { mediaItemUrl }
          }
        }
      }
    }
  }
`

const CTA_HREF = "mailto:hello@paultommo.com?subject=Hello Paul! Let's have a chat"
const CONSULT_HREF = "mailto:hello@paultommo.com?subject=Hello Paul! I'd like a free consultation"

const PAINS = [
  { icon: <Flame size={26} />, iconTone: "brand", title: "Your experience is world-class. Your website isn’t.", text: "Clients walk into your sauna, spa or studio and love it. But your website is letting you down before they even get there - losing you bookings to competitors who look better online." },
  { icon: <TrendingUp size={26} />, iconTone: "cream", title: "You have quiet slots you can’t fill", text: "Tuesday afternoon. That 8am slot. Every empty appointment is revenue gone. People are already searching for what you offer - they just aren’t finding you, or aren’t booking when they do." },
  { icon: <Users size={26} />, iconTone: "brand", title: "Enquiries come in and then go cold", text: "Someone fills in your contact form or DMs you on Instagram - and then nothing. Wait more than an hour to reply and they’ve already booked elsewhere." },
  { icon: <Clock size={26} />, iconTone: "cream", title: "You’re too busy running the business to fix this", text: "You’re a practitioner, not a marketer. You shouldn’t have to think about any of this - that’s what I’m here for." },
]

const SERVICES = [
  { icon: <Palette size={26} />, tone: "brand", title: "A website that earns its keep", text: "A website that looks as good as your business actually is - and turns visitors into bookings, not just admirers." },
  { icon: <Bot size={26} />, tone: "accent", title: "Every enquiry gets a reply in under a minute", text: "Miss a call or a contact form at 9pm? It gets a text back immediately. No lead goes cold because you were with a client." },
  { icon: <Code2 size={26} />, tone: "berry", title: "Quiet slots filled without lifting a finger", text: "I set up the follow-up so that every person who doesn’t book straight away gets a gentle nudge - automatically, at the right time." },
  { icon: <Gauge size={26} />, tone: "sky", title: "Clients who come back without being chased", text: "Post-visit messages, re-booking reminders, membership prompts. It feels personal. It runs on its own." },
]

const ENTITIES = {
  '&amp;': '&', '&lt;': '<', '&gt;': '>', '&quot;': '"', '&#039;': "'", '&nbsp;': ' ',
  '&ldquo;': '“', '&rdquo;': '”', '&#8220;': '“', '&#8221;': '”',
  '&lsquo;': '‘', '&rsquo;': '’', '&#8216;': '‘', '&#8217;': '’',
  '&ndash;': '–', '&mdash;': '-', '&#8211;': '–', '&#8212;': '-',
}
const stripHtml = html => html.replace(/<[^>]*>/g, '').replace(/&[#\w]+;/g, e => ENTITIES[e] ?? e).trim()

const Stars = () => (
  <>
    {[...Array(5)].map((_, i) => (
      <Star key={i} size={16} fill="currentColor" stroke="none" />
    ))}
  </>
)

const STATIC_TESTIMONIALS = [
  { quote: "Thank you again for the website. We’re very pleased with the final result, and more importantly, it is already converting visitors into customers.", name: 'Luka Ivic', role: 'Monokl' },
  { quote: "A fresh start and some impressive growth in organic traffic to go with it - exactly what we needed.", name: 'Sam Robinson', role: 'London Clinic of Nutrition' },
]

const TrafficFunnel = () => (
  <svg width="220" height="190" viewBox="0 0 220 190" fill="none" aria-hidden="true" style={{ display: 'block', maxWidth: '100%' }}>
    <rect x="20" y="20" width="70" height="150" rx="6" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" />
    <text x="55" y="42" textAnchor="middle" fill="white" fontSize="11.5" fontWeight="700" fontFamily="inherit">Traffic</text>
    <text x="55" y="58" textAnchor="middle" fill="rgba(255,255,255,0.65)" fontSize="10" fontFamily="inherit">you pay for</text>
    <rect x="130" y="140" width="70" height="30" rx="6" fill="rgba(255,255,255,0.28)" stroke="white" strokeWidth="1.5" />
    <text x="165" y="160" textAnchor="middle" fill="white" fontSize="11.5" fontWeight="700" fontFamily="inherit">Bookings</text>
    <line x1="165" y1="22" x2="165" y2="136" stroke="rgba(255,255,255,0.25)" strokeWidth="1" strokeDasharray="3 3" />
    <text x="165" y="78" textAnchor="middle" fill="rgba(255,255,255,0.45)" fontSize="9.5" fontFamily="inherit">this gap</text>
    <text x="165" y="94" textAnchor="middle" fill="rgba(255,255,255,0.45)" fontSize="9.5" fontFamily="inherit">= revenue</text>
    <text x="165" y="110" textAnchor="middle" fill="rgba(255,255,255,0.45)" fontSize="9.5" fontFamily="inherit">left behind</text>
    <line x1="10" y1="175" x2="210" y2="175" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
  </svg>
)

export default function WellnessBusinessPage({ data }) {
  const testimonials = data?.allWpTestimonial?.edges ?? []
  const [tstIdx, setTstIdx] = useState(0)
  const dragStart = React.useRef(null)
  const onDragStart = e => { dragStart.current = e.clientX ?? e.touches?.[0]?.clientX }
  const onDragEnd = (all, e) => {
    if (dragStart.current === null) return
    const dx = (e.clientX ?? e.changedTouches?.[0]?.clientX) - dragStart.current
    dragStart.current = null
    if (Math.abs(dx) < 40) return
    setTstIdx(i => dx < 0 ? (i + 1) % all.length : (i - 1 + all.length) % all.length)
  }

  return (
    <Layout>
      <SeoBasic
        title="More bookings for your wellness business"
        description="I help saunas, cold plunge studios, med spas and aesthetic clinics in London turn their website into a booking machine - without spending more on ads."
      />

      {/* HERO */}
      <Hero
        eyebrow="Web Studio \xb7 Wellness Businesses"
        title="More booked appointments from the traffic you already get"
        body="You’ve built an incredible experience - a sauna, a cold plunge studio, a med spa, a wellness clinic. Now let’s make sure every person who finds you online actually books - and comes back."
        cta="Let's have a chat"
        ctaHref={CTA_HREF}
        hideChips
        onPortfolio={() => {
          if (typeof document !== 'undefined') document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
        }}
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

      {/* TRAFFIC REFRAME */}
      <section className="sec sec--brand">
        <div className="container" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-10)', flexWrap: 'wrap', padding: 'var(--section-y) var(--gutter)' }}>
          <div style={{ flex: '1 1 300px' }}>
            <p style={{ fontSize: 'var(--fs-h2)', fontFamily: 'var(--font-display)', fontWeight: '900', color: '#fff', lineHeight: 'var(--lh-snug)', margin: 0 }}>
              You are already paying for traffic to your website.
            </p>
            <p style={{ fontSize: 'var(--fs-lead)', color: '#fff', opacity: 0.85, marginTop: 'var(--space-5)', marginBottom: 0 }}>
              I turn that traffic into more calls and booked appointments - without increasing your ad spend.
            </p>
          </div>
          <div style={{ flex: '0 0 auto' }}>
            <TrafficFunnel />
          </div>
        </div>
      </section>

      {/* CREDIBILITY */}
      <section className="sec sec--paper">
        <div className="container story">
          <p className="story__p">
            <strong>I previously owned a luxury chocolate business stocked in Selfridges and Harvey Nichols.</strong> I sold online and through wholesale, ran subscriptions, and handled everything from packaging and product development to the website and email marketing.
          </p>
          <p className="story__p">
            That experience taught me what high-end service and product businesses actually need online - not just technically, but commercially. I know what makes a customer book, what makes them come back, and what makes them leave without saying why.
          </p>
          <p className="story__p">
            I now build websites and booking systems for wellness businesses across London. I’m a solo operator, so you deal directly with me from the first call to launch - and beyond.
          </p>
          <StaticImage
            src="../images/cocoahernando-markets.jpeg"
            alt="Paul at a market stall"
            layout="fullWidth"
            quality={85}
            style={{ marginTop: "var(--space-8)", borderRadius: "var(--radius-md)" }}
          />
        </div>
      </section>

      {/* PAINS */}
      <section className="sec sec--cream" id="problem">
        <div className="container">
          <SectionHeading align="center" eyebrow="Sound familiar?" title="Sound familiar?" />
          <div className="grid-pains">
            {PAINS.map((p, i) => (
              <div className="pain" key={i}>
                <ValueProp icon={p.icon} iconTone={p.iconTone} title={p.title}>{p.text}</ValueProp>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="sec sec--brand" id="services">
        <div className="container">
          <SectionHeading
            align="center"
            onDark
            eyebrow="Here's what I do about it"
            title="Here's what I do about it"
            subtitle="More bookings, fewer no-shows, and clients who keep coming back - all under one roof."
          />
          <div className="grid-svc">
            {SERVICES.map((s, i) => (
              <div className="svc-card" key={i}>
                <ValueProp onDark align="center" icon={s.icon} iconTone={s.tone} title={s.title}>
                  {s.text}
                </ValueProp>
              </div>
            ))}
          </div>
          <div className="sec__cta">
            <Button variant="accent" size="lg" href={CTA_HREF} iconRight={<ArrowRight size={16} />}>
              Let’s have a chat
            </Button>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="sec sec--deep" id="testimonials">
        <div className="container">
          <SectionHeading align="center" onDark eyebrow="Don't just take my word for it" title="Real results from real businesses" />
          {(() => {
            const all = STATIC_TESTIMONIALS
            const t = all[tstIdx]
            return (
              <div
                className="pt-tst-slider"
                onMouseDown={onDragStart}
                onMouseUp={e => onDragEnd(all, e)}
                onTouchStart={onDragStart}
                onTouchEnd={e => onDragEnd(all, e)}
              >
                <TestimonialCard onBrand quote={t.quote} name={t.name} role={t.role} stars={<Stars />} />
                <div className="pt-tst-slider__dots">
                  {all.map((_, i) => (
                    <button
                      key={i}
                      className={`pt-tst-slider__dot${i === tstIdx ? ' pt-tst-slider__dot--active' : ''}`}
                      onClick={() => setTstIdx(i)}
                      aria-label={`Go to testimonial ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            )
          })()}
        </div>
      </section>

      {/* CTA */}
      <section className="sec sec--cream">
        <div className="container">
          <CTABanner
            eyebrow="Let's build"
            title="Let’s turn your website into your best booking tool"
            subtitle="Free 15-minute call - I’ll tell you exactly what I’d fix first."
            actions={
              <Button variant="accent" size="lg" href={CONSULT_HREF} iconRight={<ArrowRight size={16} />}>
                Let’s have a chat
              </Button>
            }
          />
        </div>
      </section>
    </Layout>
  )
}
