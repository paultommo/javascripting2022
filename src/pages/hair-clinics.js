import React, { useState } from 'react'
import { graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { ArrowRight, Users, Clock, MessageCircle, TrendingDown, Reply, FileText, CalendarCheck, RefreshCw, ShieldCheck, ChevronDown } from 'lucide-react'
import Layout from '../components/layout'
import SeoBasic from '../components/seo'
import Hero from '../components/Hero'
import Button from '../components/ds/Button'
import SectionHeading from '../components/ds/SectionHeading'
import ValueProp from '../components/ds/ValueProp'
import CTABanner from '../components/ds/CTABanner'

export const query = graphql`
  query HairClinicsQuery {
    allWpTestimonial {
      edges {
        node { id title }
      }
    }
  }
`

const AUDIT_HREF = "#audit"
const CTA_HREF = "#audit"

const PAINS = [
  {
    icon: <MessageCircle size={26} />, iconTone: "brand",
    title: "Enquiries come in. Consultations don’t.",
    text: "Someone fills in your form at 11pm. By the time your team calls back the next afternoon, they’ve had three replies from clinics in Istanbul."
  },
  {
    icon: <CalendarCheck size={26} />, iconTone: "cream",
    title: "They book, then they don’t turn up.",
    text: "A no-show costs you a consultation slot and often the patient. Most clinics have no reminders beyond a single text."
  },
  {
    icon: <Clock size={26} />, iconTone: "brand",
    title: "They take months to decide, and you go quiet.",
    text: "Patients often spend months thinking about a transplant. If you send one follow-up and stop, the clinic that kept in touch gets the booking."
  },
  {
    icon: <TrendingDown size={26} />, iconTone: "cream",
    title: "You lose on price before you’ve explained the value.",
    text: "Patients see a Turkey package price before they ever speak to you. If your site doesn’t answer “why London?” early, they never ask."
  },
]

const SERVICES = [
  {
    icon: <Reply size={26} />, tone: "brand",
    title: "Every enquiry gets a reply in under a minute",
    text: "Missed calls, web forms and Instagram messages get an instant, personal-sounding reply with a link to book. Your team picks it up from there."
  },
  {
    icon: <FileText size={26} />, tone: "accent",
    title: "A consultation page that answers “why London?”",
    text: "Surgeon-led procedures, UK aftercare and who actually does the work are answered on the page, before the price question comes up."
  },
  {
    icon: <Clock size={26} />, tone: "berry",
    title: "Follow-up for the months they spend deciding",
    text: "A sequence that sends what patients want to know when they need it: the results timeline, what surgery day is like, finance options and real patient stories (where the rules allow)."
  },
  {
    icon: <CalendarCheck size={26} />, tone: "sky",
    title: "Fewer no-shows",
    text: "Reminders and a short what-to-expect message before every consultation, with an easy way to reschedule instead of disappearing."
  },
  {
    icon: <RefreshCw size={26} />, tone: "brand",
    title: "The second sale, handled",
    text: "Aftercare check-ins and rebooking prompts for PRP and ongoing treatment plans, so patients come back without being chased."
  },
]

const COMPLIANCE = [
  "No prescription medicines advertised to the public. Your funnels sell consultations, not finasteride.",
  "Before-and-after images and patient stories used within the advertising rules for cosmetic procedures.",
  "Patient data handled as health data. Scalp photos and medical questions sent through forms are protected accordingly.",
]

const FAQS = [
  {
    q: "Do you run our Google and Meta ads too?",
    a: "I focus on what happens after the click - the reply, the follow-up and the booking. I work alongside whoever runs your ads, or can recommend someone if you need them."
  },
  {
    q: "Who owns the ad accounts and the website?",
    a: "You do. Everything is set up in your name, and you keep it if we stop working together."
  },
  {
    q: "We already have an agency. Does this replace them?",
    a: "Not necessarily. Many clinics get the clicks but lose patients after the enquiry. I can fix that part and work alongside whoever runs your ads."
  },
  {
    q: "How do you handle patient data?",
    a: "All data is stored securely, access is limited to you and your team, and I’ll sign a data processing agreement before we start."
  },
  {
    q: "Will my front desk know about the audit?",
    a: "Only if you tell them. For an honest picture, don’t."
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

export default function HairClinicsPage() {
  return (
    <Layout>
      <SeoBasic
        title="Patient Acquisition for Hair Transplant Clinics in London"
        description="More booked consultations for London hair loss and hair transplant clinics. Fast replies, long-cycle follow-up and fewer no-shows. Free enquiry audit."
        url="https://paultommo.com/hair-clinics/"
      />

      {/* HERO */}
      <Hero
        eyebrow="Web Studio \xb7 Hair Loss & Hair Transplant Clinics"
        title="Stop losing London patients to Turkey before they’ve even booked a consultation"
        body="Your surgeons do the hard part. I fix everything that happens before the consultation: the reply, the follow-up and the months someone spends deciding. I’ve had a hair transplant in London myself. I know what it took to find the right clinic - and I know what it felt like to get my confidence back afterwards."
        cta="Get a free enquiry audit"
        ctaHref={AUDIT_HREF}
        ctaSecondary="See how it works"
        proof="Founder-led \xb7 London-based \xb7 A hair transplant patient myself"
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

      {/* TRAFFIC REFRAME */}
      <section className="sec sec--brand">
        <div className="container" style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto', padding: 'var(--section-y) var(--gutter)' }}>
          <p style={{ fontSize: 'var(--fs-h2)', fontFamily: 'var(--font-display)', fontWeight: 'var(--fw-bold)', color: 'var(--text-on-brand)', lineHeight: 'var(--lh-snug)', margin: 0 }}>
            You are already paying for traffic to your website.
          </p>
          <p style={{ fontSize: 'var(--fs-lead)', color: 'var(--text-on-brand)', opacity: 0.85, marginTop: 'var(--space-5)', marginBottom: 0 }}>
            I turn that traffic into more booked consultations - without increasing your ad spend.
          </p>
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

      {/* PERSONAL STORY */}
      <section className="sec--paper">
        <div className="container story">
          <p className="story__p">
            <strong>I had my hair transplant in London.</strong> Before I chose, I seriously considered Turkey and read so many forum threads. I enquired at a good number of clinics. However, what actually made the decision for me wasn’t a clinic’s website - it was a blogger who documented his entire journey and his life afterwards in honest detail: the consultation, the surgery day, the shedding, the results at twelve months. I trusted him more than any clinic’s before-and-after gallery.
          </p>
          <p className="story__p">
            Once I started enquiring, some clinics replied within the hour. Some never replied at all. The one I chose felt like they already understood what I was worried about, before I had the nerve to ask. That mattered more than the price.
          </p>
          <p className="story__p">
            I won’t pretend the outcome was just about hair. It was about not thinking about it anymore. Photographs. Walking into a room. Obsessively looking at my hair in the mirror. The kind of quiet confidence you don’t notice until it’s back. That’s what patients are really deciding when they spend six months on forums before enquiring anywhere.
          </p>
          <p className="story__p">
            That’s what I build for clinics now: the patient journey I wish every clinic had.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="sec sec--brand" id="how-it-works">
        <div className="container">
          <SectionHeading
            align="center"
            onDark
            eyebrow="Here’s what I do about it"
            title="Here’s what I do about it"
            subtitle="More booked consultations, fewer no-shows, and patients who come back for aftercare."
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
            <Button variant="accent" size="lg" href={CTA_HREF} iconRight={<ArrowRight size={16} />}>
              Get a free enquiry audit
            </Button>
          </div>
        </div>
      </section>

      {/* COMPLIANCE */}
      <section className="sec sec--cream">
        <div className="container">
          <SectionHeading
            eyebrow="Built for a regulated industry"
            title="Hair restoration marketing has rules most agencies ignore."
            subtitle="Everything I build is designed around them."
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

      {/* AUDIT OFFER */}
      <section className="sec sec--paper" id="audit-offer">
        <div className="container container--narrow">
          <SectionHeading
            align="center"
            eyebrow="The free enquiry audit"
            title="I’ll enquire at your clinic the way a real patient does"
            subtitle="Then send you a video showing exactly where you’d have lost me."
          />
          <ol className="pt-audit-steps">
            <li className="pt-audit-steps__item">
              <span className="pt-audit-steps__num">1</span>
              <p><strong>I enquire through your website, phone and Instagram.</strong> I stop before booking, so no surgeon’s time is wasted.</p>
            </li>
            <li className="pt-audit-steps__item">
              <span className="pt-audit-steps__num">2</span>
              <p><strong>I time everything:</strong> how long the first reply took, whether anyone followed up, and whether your price and process were clear.</p>
            </li>
            <li className="pt-audit-steps__item">
              <span className="pt-audit-steps__num">3</span>
              <p><strong>You get a 5-minute video</strong> walking through what worked, what didn’t and the first three things I’d fix.</p>
            </li>
          </ol>
          <p className="pt-audit-steps__note">No pitch deck and no obligation. If the fixes are obvious, make them yourself.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="sec sec--cream">
        <div className="container container--narrow">
          <SectionHeading align="center" eyebrow="Questions clinics ask" title="Questions clinics ask" />
          <div className="pt-faq">
            {FAQS.map((faq, i) => <FaqItem key={i} q={faq.q} a={faq.a} />)}
          </div>
        </div>
      </section>

      {/* CLOSING CTA + FORM */}
      <section className="sec sec--brand" id="audit">
        <div className="container container--narrow">
          <SectionHeading
            align="center"
            onDark
            eyebrow="Free enquiry audit"
            title="Find out where your patients are slipping away"
            subtitle="Request a free enquiry audit. You’ll get a short video within 5 working days showing the first three things I’d fix."
          />
          <form
            name="hair-clinic-audit"
            method="POST"
            action="/thank-you/"
            data-netlify="true"
            className="pt-audit-form"
          >
            <input type="hidden" name="form-name" value="hair-clinic-audit" />
            <label className="pt-audit-form__field">
              <span>Name</span>
              <input type="text" name="name" required placeholder="Your name" />
            </label>
            <label className="pt-audit-form__field">
              <span>Clinic name</span>
              <input type="text" name="clinic" required placeholder="Your clinic" />
            </label>
            <label className="pt-audit-form__field">
              <span>Website</span>
              <input type="url" name="website" required placeholder="https://yourclinic.co.uk" />
            </label>
            <label className="pt-audit-form__field">
              <span>Email</span>
              <input type="email" name="email" required placeholder="you@yourclinic.co.uk" />
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
