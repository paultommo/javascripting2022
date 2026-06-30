import React, { useState } from 'react'
import { graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { ArrowRight, Star, Store, Clock, Search, Users, Palette, Code2, PenTool, Gauge } from 'lucide-react'
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
  query SmallBusinessQuery {
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
  { icon: <Store size={26} />, iconTone: 'brand', title: "Your website doesn't reflect your brand", text: "You've built a brilliant business, but your website doesn't do it justice. Potential clients click away before they even read about you." },
  { icon: <Search size={26} />, iconTone: 'cream', title: 'Missing out on Google traffic', text: "Your competitors are showing up on Google and you're not. Poor SEO means you're invisible to the customers searching for you right now." },
  { icon: <Users size={26} />, iconTone: 'brand', title: "Visitors don't stick around", text: "Slow load times, confusing navigation, and a poor mobile experience are driving potential customers straight to your competitors." },
  { icon: <Clock size={26} />, iconTone: 'cream', title: 'No time for the website', text: "You're running a business. You don't have time to deal with a website that constantly needs fixing — it should just work." },
]

const SERVICES = [
  { icon: <Palette size={26} />, tone: 'brand', title: 'Design & brand', text: 'A website that looks as professional as your business actually is. Clean, consistent, and built to impress the clients you want.' },
  { icon: <Code2 size={26} />, tone: 'accent', title: 'Website build', text: 'Fast, responsive, and built on technology that lasts. I handle everything — from CMS setup to going live.' },
  { icon: <PenTool size={26} />, tone: 'berry', title: 'Copy that converts', text: 'Words written to speak to your customers — not generic filler. Clear, persuasive, and optimised for search.' },
  { icon: <Gauge size={26} />, tone: 'sky', title: 'Performance & SEO', text: 'Speed, mobile optimisation, and search visibility that brings the right people to your site and keeps them there.' },
]

const FEATURED_TESTIMONIAL = {
  quote: 'Paul Tomlinson managed to create a miracle in such a short period of time — he redesigned an existing website into a more dynamic and user-friendly site. I am very appreciative of his professionalism, time and ingenuity.',
  name: 'Prof. Paul Spiegel',
  role: 'Director, Johns Hopkins Center for Humanitarian Health',
}

const ENTITIES = {
  '&amp;': '&', '&lt;': '<', '&gt;': '>', '&quot;': '"', '&#039;': "'", '&nbsp;': ' ',
  '&ldquo;': '“', '&rdquo;': '”', '&#8220;': '“', '&#8221;': '”',
  '&lsquo;': '\u2018', '&rsquo;': '\u2019', '&#8216;': '\u2018', '&#8217;': '\u2019',
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
  { quote: "We\u2019ve made a big impact on the organic performance of the site — a fresh start, and some impressive growth in organic traffic to go with it.", name: 'Sam Robinson', role: 'Whole of the Moon Marketing' },
  { quote: 'Paul was a pleasure to work with and was always happy to find a way of delivering what was required, even in the face of the occasional technical challenge!', name: 'Eddie May', role: 'Overdog Marketing' },
  { quote: 'Knowledgeable about his craft, prompt to respond and thorough throughout — he went over and above to ensure the client was happy.', name: 'Cath Harris', role: 'IPSA Consulting' },
  { quote: "Working with Paul was an absolute pleasure. He was exactly the right man for the job on a highly demanding project!", name: 'Steph Melodia', role: 'MD, Bloom Ltd' },
  { quote: "Reliability, listening to our needs and being able to translate them into functional tools fully characterise Paul\u2019s work.", name: 'Prof. Karl Blanchet', role: 'Geneva Centre of Humanitarian Studies' },
]

export default function SmallBusinessPage({ data }) {
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
        title="Impactful websites for small businesses — Paul Tomlinson"
        description="I build high-converting websites for small businesses that capture attention, build trust, and generate leads."
      />

      {/* HERO */}
      <Hero
        eyebrow="Web Studio · Small Business"
        title="Impactful websites for small businesses"
        body="Your business is brilliant — but does your website reflect that? I build high-converting websites for small businesses that capture attention, build trust, and generate leads."
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
            style={name === 'Red Bull' ? { height: '60px' } : undefined}
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
            subtitle="Everything a small business needs from a website — under one roof."
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
              Let's have a chat
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
              { quote: FEATURED_TESTIMONIAL.quote, name: FEATURED_TESTIMONIAL.name, role: FEATURED_TESTIMONIAL.role },
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
            title="Ready to build a website your business deserves?"
            subtitle="Start with a free 15-minute chat — no pitch, no pressure."
            actions={
              <Button variant="accent" size="lg" href={CONSULT_HREF} iconRight={<ArrowRight size={16} />}>
                Let's have a chat
              </Button>
            }
          />
        </div>
      </section>
    </Layout>
  )
}
