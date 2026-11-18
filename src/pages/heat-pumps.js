import React, { useState } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { ArrowRight, MessageCircle, CalendarCheck, Clock, TrendingDown, Reply, FileText, RefreshCw, ShieldCheck, ChevronDown } from 'lucide-react'
import Layout from '../components/layout'
import SeoBasic from '../components/seo'
import Hero from '../components/Hero'
import Button from '../components/ds/Button'
import SectionHeading from '../components/ds/SectionHeading'
import ValueProp from '../components/ds/ValueProp'
import CTABanner from '../components/ds/CTABanner'

const AUDIT_HREF = "#audit"

const PAINS = [
  {
    icon: <MessageCircle size={26} />, iconTone: "brand",
    title: "Enquiries come in. Surveys don't.",
    text: "Someone spends an evening researching heat pumps, fills in your contact form, and then gets nothing back until the following afternoon. By then they've booked a survey with someone else."
  },
  {
    icon: <Clock size={26} />, iconTone: "cream",
    title: "They take months to decide - and go cold.",
    text: "A heat pump is a significant investment. Most homeowners research for three to nine months before committing. If you don't stay in touch through that period, the installer that did gets the job."
  },
  {
    icon: <TrendingDown size={26} />, iconTone: "brand",
    title: "Grant confusion loses you leads before they've started.",
    text: "Homeowners don't understand the Boiler Upgrade Scheme. If your site doesn't explain it clearly and show how it reduces their cost, many won't even enquire."
  },
  {
    icon: <CalendarCheck size={26} />, iconTone: "cream",
    title: "Survey no-shows waste your engineers' time.",
    text: "A heat pump survey takes half a day. A no-show costs you that time and usually the customer. A short pre-visit sequence - what to prepare, what to expect - cuts cancellations significantly."
  },
]

const SERVICES = [
  {
    icon: <Reply size={26} />, tone: "brand",
    title: "Every enquiry gets a reply in under a minute",
    text: "Web forms, missed calls and Facebook messages get an instant reply confirming you've received the enquiry and setting expectations on next steps. Your team picks it up from there."
  },
  {
    icon: <FileText size={26} />, tone: "accent",
    title: "A landing page that explains the grant and builds trust",
    text: "BUS grant eligibility, typical costs and savings, how the installation works - answered on the page, before a homeowner has to ask or go elsewhere to find out."
  },
  {
    icon: <Clock size={26} />, tone: "berry",
    title: "Follow-up for the months they spend deciding",
    text: "A sequence that sends what homeowners want to know when they need it: running cost comparisons, case studies from similar properties, finance options and answers to the questions they're too embarrassed to ask."
  },
  {
    icon: <RefreshCw size={26} />, tone: "sky",
    title: "Fewer wasted survey slots",
    text: "Pre-survey reminders and a short what-to-expect message keep appointments in the diary and position you as the professional choice before the engineer has arrived."
  },
]

const COMPLIANCE = [
  "BUS grant information presented accurately and up to date, so homeowners aren't misled about eligibility or amounts.",
  "No guaranteed savings claims. Performance varies by property - your pages say so clearly and comply with ASA guidelines.",
  "MCS certification and installer credentials featured prominently, since homeowners need them to claim the grant.",
]

const FAQS = [
  {
    q: "Do you run our Google and Meta ads too?",
    a: "I focus on what happens after the click - the reply, the follow-up and the booking. I work alongside whoever runs your ads, or can recommend someone if you need them."
  },
  {
    q: "Who owns the website and the ad accounts?",
    a: "You do. Everything is set up in your name and you keep it if we stop working together."
  },
  {
    q: "We already have a website. Does this replace it?",
    a: "Not necessarily. I can work with your existing site or build dedicated landing pages for your paid campaigns - whichever gets more surveys booked fastest."
  },
  {
    q: "How do you handle customer data?",
    a: "All data is stored securely, access is limited to you and your team, and I'll sign a data processing agreement before we start."
  },
  {
    q: "What does it cost?",
    a: "It depends on what needs fixing. The audit is free and gives you a clear picture - we can talk scope and cost from there."
  },
]

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="pt-faq__item">
      <button className="pt-faq__q" onClick={() => setOpen(o => !o)} aria-expanded={open}>
        <span>{q}</span>
        <ChevronDown size={18} className={`pt-faq__chevron${open ? ' pt-faq__chevron--open' : ''}`} />
      </button>
      {open && <p className="pt-faq__a">{a}</p>}
    </div>
  )
}

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

export default function HeatPumpsPage() {
  return (
    <Layout>
      <SeoBasic
        title="More Booked Surveys for Heat Pump Installers"
        description="More booked surveys from paid traffic for heat pump installers. Fast replies, long-cycle follow-up and grant information that converts. Free enquiry audit."
        url="https://paultommo.com/heat-pumps/"
      />

      <Hero
        eyebrow="Web Studio - Heat Pump Installers"
        title="Your ads are working. Your follow-up isn't."
        body="Your installers do the hard part. I fix everything that happens before the survey: the reply, the grant explanation, and the months a homeowner spends deciding whether a heat pump is right for them."
        testimonial={{ quote: "Thank you again for the website...it is already converting visitors into customers.", attribution: "Luka Ivic, Monokl" }}
        cta="Get a free enquiry audit"
        ctaHref={AUDIT_HREF}
        ctaSecondary="See how it works"
        proof="Founder-led - London-based"
        hideChips
        onPortfolio={() => {
          if (typeof document !== 'undefined') document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })
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

      <section className="sec sec--brand">
        <div className="container" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-10)', flexWrap: 'wrap', padding: 'var(--section-y) var(--gutter)' }}>
          <div style={{ flex: '1 1 300px' }}>
            <p style={{ fontSize: 'var(--fs-h2)', fontFamily: 'var(--font-display)', fontWeight: '900', color: '#fff', lineHeight: 'var(--lh-snug)', margin: 0 }}>
              You are already paying for traffic to your website.
            </p>
            <p style={{ fontSize: 'var(--fs-lead)', color: '#fff', opacity: 0.85, marginTop: 'var(--space-5)', marginBottom: 0 }}>
              I turn that traffic into more booked surveys - without increasing your ad spend.
            </p>
          </div>
          <div style={{ flex: '0 0 auto' }}>
            <TrafficFunnel />
          </div>
        </div>
      </section>

      <section className="sec" id="problem">
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

      <section className="sec sec--brand" id="how-it-works">
        <div className="container">
          <SectionHeading
            align="center"
            onDark
            eyebrow="Here's what I do about it"
            title="Here's what I do about it"
            subtitle="More booked surveys, fewer no-shows, and leads that stay warm through a long decision cycle."
          />
          <div className="grid-svc grid-svc--3">
            {SERVICES.map((s, i) => (
              <div className="svc-card" key={i}>
                <ValueProp onDark align="center" icon={s.icon} iconTone={s.tone} title={s.title}>
                  {s.text}
                </ValueProp>
              </div>
            ))}
          </div>
          <div className="sec__cta">
            <Button variant="accent" size="lg" href={AUDIT_HREF} iconRight={<ArrowRight size={16} />}>
              Get a free enquiry audit
            </Button>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="container">
          <SectionHeading
            eyebrow="Built for a regulated industry"
            title="Heat pump marketing has rules. I build around them."
            subtitle="MCS certification, BUS grant accuracy and no guaranteed savings claims."
          />
          <ul className="pt-compliance-list">
            {COMPLIANCE.map((item, i) => (
              <li key={i} className="pt-compliance-list__item">
                <ShieldCheck size={20} style={{ color: 'var(--brand)', flexShrink: 0, marginTop: 2 }} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="sec" id="faq">
        <div className="container container--narrow">
          <SectionHeading align="center" eyebrow="Questions installers ask" title="Questions installers ask" />
          <div className="pt-faq">
            {FAQS.map((faq, i) => <FaqItem key={i} q={faq.q} a={faq.a} />)}
          </div>
        </div>
      </section>

      <section className="sec sec--brand" id="audit">
        <div className="container container--narrow">
          <SectionHeading
            align="center"
            onDark
            eyebrow="Free enquiry audit"
            title="Find out where your leads are slipping away"
            subtitle="Request a free enquiry audit. You'll get a short video within 5 working days showing the first three things I'd fix."
          />
          <form
            name="heat-pump-audit"
            method="POST"
            action="/thank-you/"
            data-netlify="true"
            className="pt-audit-form"
          >
            <input type="hidden" name="form-name" value="heat-pump-audit" />
            <label className="pt-audit-form__field">
              <span>Name</span>
              <input type="text" name="name" required placeholder="Your name" />
            </label>
            <label className="pt-audit-form__field">
              <span>Company name</span>
              <input type="text" name="company" required placeholder="Your company" />
            </label>
            <label className="pt-audit-form__field">
              <span>Website</span>
              <input type="url" name="website" required placeholder="https://yourcompany.co.uk" />
            </label>
            <label className="pt-audit-form__field">
              <span>Email</span>
              <input type="email" name="email" required placeholder="you@yourcompany.co.uk" />
            </label>
            <label className="pt-audit-form__field">
              <span>Phone <em>(optional)</em></span>
              <input type="tel" name="phone" placeholder="+44..." />
            </label>
            <button type="submit" className="pt-btn pt-btn--accent pt-btn--lg pt-audit-form__submit">
              Request your free audit <ArrowRight size={16} />
            </button>
          </form>
        </div>
      </section>
    </Layout>
  )
}
