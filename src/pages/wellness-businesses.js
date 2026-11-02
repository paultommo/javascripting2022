import React, { useState } from 'react'
import { graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { ArrowRight, Star, Flame, TrendingUp, Users, Clock, Palette, Code2, Bot, Gauge } from 'lucide-react'
import Layout from '../components/layout'
import SeoBasic from '../components/seo'
import Hero from '../components/Hero'
import Button from '../components/ds/Button'
import SectionHeading from '../components/ds/SectionHeading'
import ValueProp from '../components/ds/ValueProp'
import TestimonialCard from '../components/ds/TestimonialCard'
import MarqueeRow from '../components/ds/MarqueeRow'
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

const CLIENTS = [
  { name: 'Red Bull',   logo: '/logos/redbull.svg' },
  { name: 'Pepsi',      logo: '/logos/pepsi.svg' },
  { name: 'Fever-Tree', logo: '/logos/fever-tree.svg' },
  { name: 'BBC',        logo: '/logos/bbc.svg' },
  { name: 'Barclays',   logo: '/logos/barclays.svg' },
  { name: 'Unilever',   logo: '/logos/unilever.svg' },
  { name: 'Sky',        logo: '/logos/sky.svg' },
]

const PAINS = [
  { icon: <Flame size={26} />, iconTone: "brand", title: "Your experience is world-class. Your website isn’t.", text: "Clients walk into your sauna, spa or studio and love it. But your website is letting you down before they even get there — losing you bookings to competitors who look better online." },
  { icon: <TrendingUp size={26} />, iconTone: "cream", title: "You have quiet slots you can’t fill", text: "Tuesday afternoon. That 8am slot. Every empty appointment is revenue gone. People are already searching for what you offer — they just aren’t finding you, or aren’t booking when they do." },
  { icon: <Users size={26} />, iconTone: "brand", title: "Enquiries come in and then go cold", text: "Someone fills in your contact form or DMs you on Instagram — and then nothing. Wait more than an hour to reply and they’ve already booked elsewhere." },
  { icon: <Clock size={26} />, iconTone: "cream", title: "You’re too busy running the business to fix this", text: "You’re a practitioner, not a marketer. You shouldn’t have to think about any of this — that’s what I’m here for." },
]

const SERVICES = [
  { icon: <Palette size={26} />, tone: "brand", title: "A website that earns its keep", text: "A website that looks as good as your business actually is — and turns visitors into bookings, not just admirers." },
  { icon: <Bot size={26} />, tone: "accent", title: "Every enquiry gets a reply in under a minute", text: "Miss a call or a contact form at 9pm? It gets a text back immediately. No lead goes cold because you were with a client." },
  { icon: <Code2 size={26} />, tone: "berry", title: "Quiet slots filled without lifting a finger", text: "I set up the follow-up so that every person who doesn’t book straight away gets a gentle nudge — automatically, at the right time." },
  { icon: <Gauge size={26} />, tone: "sky", title: "Clients who come back without being chased", text: "Post-visit messages, re-booking reminders, membership prompts. It feels personal. It runs on its own." },
]

const ENTITIES = {
  '&amp;': '&', '&lt;': '<', '&gt;': '>', '&quot;': '"', '&#039;': "'", '&nbsp;': ' ',
  '&ldquo;': '“', '&rdquo;': '”', '&#8220;': '“', '&#8221;': '”',
  '&lsquo;': '‘', '&rsquo;': '’', '&#8216;': '‘', '&#8217;': '’',
  '&ndash;': '–', '&mdash;': '—', '&#8211;': '–', '&#8212;': '—',
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
  { quote: 'We have loved working with Paul — he has been really proactive and sought to get to the bottom of any challenge. His outputs are to the highest standard.', name: 'Gina Artzen', role: 'Gripped' },
  { quote: 'We’ve made a big impact on the organic performance of the site — a fresh start, and some impressive growth in organic traffic to go with it.', name: 'Sam Robinson', role: 'Whole of the Moon Marketing' },
  { quote: 'Paul was a pleasure to work with and was always happy to find a way of delivering what was required, even in the face of the occasional technical challenge!', name: 'Eddie May', role: 'Overdog Marketing' },
  { quote: 'Knowledgeable about his craft, prompt to respond and thorough throughout — he went over and above to ensure the client was happy.', name: 'Cath Harris', role: 'IPSA Consulting' },
  { quote: 'Working with Paul was an absolute pleasure. He was exactly the right man for the job on a highly demanding project!', name: 'Steph Melodia', role: 'MD, Bloom Ltd' },
  { quote: 'Reliability, listening to our needs and being able to translate them into functional tools fully characterise Paul’s work.', name: 'Prof. Karl Blanchet', role: 'Geneva Centre of Humanitarian Studies' },
]

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
        description="I help saunas, cold plunge studios, med spas and aesthetic clinics in London turn their website into a booking machine — without spending more on ads."
      />

      {/* HERO */}
      <Hero
        eyebrow="Web Studio \xb7 Wellness Businesses"
        title="More booked appointments from the traffic you already get"
        body="You’ve built an incredible experience — a sauna, a cold plunge studio, a med spa, a wellness clinic. Now let’s make sure every person who finds you online actually books — and comes back."
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

      {/* CLIENT MARQUEE */}
      <section className="pt-strip">
        <p className="pt-strip__lbl">Trusted by brands</p>
        <MarqueeRow speed={26} gap={48} items={CLIENTS.map(({ name, logo }) => (
          <img
            key={name}
            src={logo}
            alt={name}
            className="pt-strip__logo"
            loading="lazy"
            style={name === 'Red Bull' ? { height: '78px' } : ['Pepsi', 'Sky'].includes(name) ? { height: '39px' } : undefined}
          />
        ))} />
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
            subtitle="More bookings, fewer no-shows, and clients who keep coming back — all under one roof."
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
          <SectionHeading align="center" onDark eyebrow="Don't just take my word for it" title="Trusted by organisations" />
          {(() => {
            const all = [
              ...(testimonials.length > 0
                ? testimonials
                    .filter(({ node }) => !node.title.toLowerCase().includes('spiegel'))
                    .map(({ node }) => ({ quote: stripHtml(node.content), name: node.title, role: '' }))
                : STATIC_TESTIMONIALS
              ),
            ]
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
            subtitle="Free 15-minute call — I’ll tell you exactly what I’d fix first."
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
