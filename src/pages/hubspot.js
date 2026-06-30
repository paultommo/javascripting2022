import React, { useState } from 'react'
import { graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { ArrowRight, Star, Layers, Clock, Users, Gauge, Code2, Palette } from 'lucide-react'
import Layout from '../components/layout'
import SeoBasic from '../components/seo'
import Hero from '../components/Hero'
import Button from '../components/ds/Button'
import SectionHeading from '../components/ds/SectionHeading'
import ValueProp from '../components/ds/ValueProp'
import TestimonialCard from '../components/ds/TestimonialCard'
import CTABanner from '../components/ds/CTABanner'

export const query = graphql`
  query HubSpotQuery {
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

const CTA_HREF = "mailto:hello@paultommo.com?subject=Hello Paul! Let's discuss my HubSpot project"
const CONSULT_HREF = "mailto:hello@paultommo.com?subject=Hello Paul! I'd like a free HubSpot consultation"

const PAINS = [
  { icon: <Layers size={26} />, iconTone: 'brand', title: "Can't get a bespoke HubSpot look", text: "You want a website that reflects your brand, not a generic HubSpot template. Getting something truly custom feels out of reach." },
  { icon: <Gauge size={26} />, iconTone: 'cream', title: 'Your HubSpot site is too slow', text: "Slow load times hurt SEO and drive visitors away. A poorly optimised HubSpot site can cost you leads before the page even loads." },
  { icon: <Users size={26} />, iconTone: 'brand', title: 'Poor user experience', text: "Navigation that confuses, layouts that break on mobile, and forms that frustrate. Your HubSpot site should convert, not repel." },
  { icon: <Clock size={26} />, iconTone: 'cream', title: 'Maintenance takes too long', text: "Updating pages, adding modules, making changes — it all takes longer than it should. You need a site built for easy maintenance." },
]

const SERVICES = [
  { icon: <Code2 size={26} />, tone: 'brand', title: 'Custom HubSpot development', text: 'Bespoke themes, custom modules, and pixel-perfect implementations. Built to your brand, not a template.' },
  { icon: <Gauge size={26} />, tone: 'accent', title: 'Performance optimisation', text: 'Fast load times, clean code, and a HubSpot site that scores well on Core Web Vitals — and ranks accordingly.' },
  { icon: <Layers size={26} />, tone: 'berry', title: 'Module-based CMS', text: 'Drag-and-drop modules that let your team update pages without touching code. Built for real-world marketing teams.' },
  { icon: <Palette size={26} />, tone: 'sky', title: 'Design & UX', text: 'A HubSpot site that looks as good as your brand deserves — clean, consistent, and built to convert visitors into leads.' },
]

const FEATURED_TESTIMONIAL = {
  quote: 'Paul Tomlinson managed to create a miracle in such a short period of time — he redesigned an existing website into a more dynamic and user-friendly site. I am very appreciative of his professionalism, time and ingenuity.',
  name: 'Prof. Paul Spiegel',
  role: 'Director, Johns Hopkins Center for Humanitarian Health',
}

const ENTITIES = {
  '&amp;': '&', '&lt;': '<', '&gt;': '>', '&quot;': '"', '&#039;': "'", '&nbsp;': ' ',
  '&ldquo;': '"', '&rdquo;': '"', '&#8220;': '"', '&#8221;': '"',
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
  { quote: "We've made a big impact on the organic performance of the site — a fresh start, and some impressive growth in organic traffic to go with it.", name: 'Sam Robinson', role: 'Whole of the Moon Marketing' },
  { quote: 'Paul was a pleasure to work with and was always happy to find a way of delivering what was required, even in the face of the occasional technical challenge!', name: 'Eddie May', role: 'Overdog Marketing' },
  { quote: 'Knowledgeable about his craft, prompt to respond and thorough throughout — he went over and above to ensure the client was happy.', name: 'Cath Harris', role: 'IPSA Consulting' },
  { quote: "Working with Paul was an absolute pleasure. He was exactly the right man for the job on a highly demanding project!", name: 'Steph Melodia', role: 'MD, Bloom Ltd' },
  { quote: "Reliability, listening to our needs and being able to translate them into functional tools fully characterise Paul's work.", name: 'Prof. Karl Blanchet', role: 'Geneva Centre of Humanitarian Studies' },
]

export default function HubSpotPage({ data }) {
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
        title="Building impactful HubSpot websites — Paul Tomlinson"
        description="I build fast, bespoke, module-based HubSpot websites for global brands that look great and perform under pressure."
      />

      {/* HERO */}
      <Hero
        eyebrow="HubSpot Developer · London"
        title="Building impactful HubSpot websites"
        body="I've built HubSpot websites for global brands including Bain & Company, SkillCorner, and Duetto. Fast, bespoke, module-based — websites that look great and perform under pressure."
        cta="Discuss your project"
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

      {/* HUBSPOT CLIENT LOGOS */}
      <section className="pt-strip">
        <p className="pt-strip__lbl">HubSpot clients have included</p>
        <div className="pt-strip__hs-clients">
          <StaticImage src="../images/skillcorner.png" alt="SkillCorner" height={30} quality={90} placeholder="none" className="pt-strip__logo" />
          <StaticImage src="../images/bain.png" alt="Bain & Company" height={30} quality={90} placeholder="none" className="pt-strip__logo" />
          <StaticImage src="../images/duetto.png" alt="Duetto" height={30} quality={90} placeholder="none" className="pt-strip__logo" />
          <StaticImage src="../images/vev.png" alt="Vev" height={30} quality={90} placeholder="none" className="pt-strip__logo" />
          <StaticImage src="../images/scoutbee.png" alt="Scoutbee" height={30} quality={90} placeholder="none" className="pt-strip__logo" />
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
            subtitle="Everything you need from a HubSpot developer — under one roof."
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
              Discuss your project
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
            title="Ready to build a HubSpot site that performs?"
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
