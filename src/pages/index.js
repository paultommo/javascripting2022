import React, { useState } from 'react'
import { graphql, Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import {
  ArrowRight, TrendingUp, Star,
  Store, CreditCard, Clock, Package,
  Palette, Code2, PenTool, Gauge,
} from 'lucide-react'
import { InstagramIcon } from '../components/SocialIcons'
import Layout from '../components/layout'
import Hero from '../components/Hero'
import Button from '../components/ds/Button'
import SectionHeading from '../components/ds/SectionHeading'
import ValueProp from '../components/ds/ValueProp'
import PortfolioCard from '../components/ds/PortfolioCard'
import TestimonialCard from '../components/ds/TestimonialCard'
import MarqueeRow from '../components/ds/MarqueeRow'
import CTABanner from '../components/ds/CTABanner'
import SeoBasic from '../components/seo'

export const query = graphql`
  query {
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
    allWpPortfolio(sort: { order: DESC, fields: date }, limit: 4) {
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
    seoPage: wpPage(slug: { eq: "homepage" }) {
      title
    }
    allInstagramPost(limit: 12) {
      nodes {
        id
        mediaType
        mediaUrl
        permalink
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
  { icon: <Store size={26} />, iconTone: 'brand',  title: "Your store doesn't do it justice",    text: "You've poured everything into your product, but your Shopify store doesn't reflect that quality." },
  { icon: <InstagramIcon size={26} />, iconTone: 'cream', title: 'Great on Instagram, clunky on web', text: 'Your brand looks incredible on Instagram — but inconsistent and slow on your website.' },
  { icon: <CreditCard size={26} />, iconTone: 'brand', title: 'Losing people at checkout',         text: "You're losing customers at checkout and you're not sure why." },
  { icon: <Clock size={26} />, iconTone: 'cream',  title: 'No time for the website',             text: "You don't have time to deal with your website — you're busy running a business." },
  { icon: <Package size={26} />, iconTone: 'brand', title: 'Built for the wrong job',            text: "You're juggling subscriptions, shipping perishables, and managing claims compliance — and your store wasn't built for any of it." },
]

const SERVICES = [
  { icon: <Palette size={26} />, tone: 'brand',  title: 'Design & brand',      text: 'A store that looks as good as your product tastes. Built for founders who care as much about the package as the product inside.' },
  { icon: <Code2 size={26} />,   tone: 'accent', title: 'Shopify build',        text: 'Custom development with what craft food & drink brands actually need — subscriptions, perishable shipping, age verification, claims-safe copy, and a CMS you can use.' },
  { icon: <PenTool size={26} />, tone: 'berry',  title: 'Words that sell',      text: 'Product descriptions, landing pages, and email flows written for people who read labels — not generic ecommerce copy.' },
  { icon: <Gauge size={26} />,   tone: 'sky',    title: 'Performance & search', text: 'Faster load times, cleaner code, and search visibility that brings the right buyers to your store.' },
]


const FEATURED_TESTIMONIAL = {
  quote: 'Paul Tomlinson managed to create a miracle in such a short period of time — he redesigned an existing website into a more dynamic and user-friendly site. I am very appreciative of his professionalism, time and ingenuity.',
  name: 'Prof. Paul Spiegel',
  role: 'Director, Johns Hopkins Center for Humanitarian Health',
}

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
  { quote: "We've made a big impact on the organic performance of the site — a fresh start, and some impressive growth in organic traffic to go with it.", name: 'Sam Robinson', role: 'Whole of the Moon Marketing' },
  { quote: 'Paul was a pleasure to work with and was always happy to find a way of delivering what was required, even in the face of the occasional technical challenge!', name: 'Eddie May', role: 'Overdog Marketing' },
  { quote: 'Knowledgeable about his craft, prompt to respond and thorough throughout — he went over and above to ensure the client was happy.', name: 'Cath Harris', role: 'IPSA Consulting' },
  { quote: "Working with Paul was an absolute pleasure. He was exactly the right man for the job on a highly demanding project!", name: 'Steph Melodia', role: 'MD, Bloom Ltd' },
  { quote: "Reliability, listening to our needs and being able to translate them into functional tools fully characterise Paul's work.", name: 'Prof. Karl Blanchet', role: 'Geneva Centre of Humanitarian Studies' },
]

export default function IndexPage({ data }) {
  const testimonials = data?.allWpTestimonial?.edges ?? []
  const portfolio = data?.allWpPortfolio?.edges ?? []
  const igPosts = data?.allInstagramPost?.nodes ?? []
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
        title="Shopify Studio for Craft Food & Drink Brands"
        description="I build Shopify stores for craft food & drink founders. Custom development, design, and copy — under one roof. Based in London."
      />
      {/* HERO */}
      <Hero
        eyebrow="Shopify Studio · Craft Food & Drink"
        title="Shopify Studio for Craft Food & Drink Brands"
        body="I've run a food business. My chocolate was stocked in Selfridges. I ferment my own kombucha and kefir at home. Now I build Shopify stores for founders like you — people obsessed with what's in the bottle, the bar, or the jar."
        cta="Let's have a chat"
        ctaHref={CTA_HREF}
        onPortfolio={() => {
          document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })
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
          <SectionHeading
            align="center"
            eyebrow="Sound familiar?"
            title="Sound familiar?"
          />
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
            subtitle="Four things craft food & drink founders actually need — under one roof."
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

      {/* PORTFOLIO */}
      <section className="sec sec--cream" id="portfolio">
        <div className="container">
          <div className="sec__head-row">
            <SectionHeading eyebrow="Selected work" title="Projects" />
            <Button
              variant="ghost"
              as={Link}
              to="/portfolio/"
              iconRight={<ArrowRight size={16} />}
            >
              View all projects
            </Button>
          </div>
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

      {/* INSTAGRAM */}
      <section className="pt-ig">
        <a
          className="pt-ig__lbl"
          href="https://www.instagram.com/paultommmo"
          target="_blank"
          rel="noreferrer"
        >
          <InstagramIcon size={18} /> From the feed — @paultommmo
        </a>
        <MarqueeRow
          speed={70}
          reverse
          gap={14}
          items={igPosts.length > 0
            ? [...igPosts, ...igPosts, ...igPosts].map((post, i) => (
                <a
                  key={`${post.id}-${i}`}
                  href={post.permalink}
                  target="_blank"
                  rel="noreferrer"
                  className="pt-ig__post"
                  aria-label="View on Instagram"
                >
                  <img
                    src={post.mediaUrl}
                    alt=""
                    className="pt-ig__img"
                    loading="lazy"
                  />
                </a>
              ))
            : [...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="pt-ig__post"
                  style={{ background: `hsl(${140 + i * 12},40%,${28 + i * 4}%)` }}
                  aria-hidden="true"
                />
              ))
          }
        />
      </section>

      {/* TESTIMONIALS */}
      <section className="sec sec--deep" id="testimonials">
        <div className="container">
          <SectionHeading
            align="center"
            onDark
            eyebrow="Don't just take my word for it"
            title="Trusted by organisations"
          />
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
            title="Ready to build a store your brand deserves?"
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
