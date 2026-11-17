import React from 'react'
import { BadgeCheck, Sprout, Award, ArrowRight } from 'lucide-react'
import Button from './ds/Button'

function Hero({ eyebrow, title, subtitle, body, ctaHref, cta, heroImage, onPortfolio, hideChips, proof, ctaSecondary, ctaSecondaryHref, testimonial }) {
  return (
    <header className="pt-hero">
      <div className="pt-hero__copy">
        <span className="pt-hero__eyebrow">{eyebrow}</span>
        <h1 className="pt-hero__title">{title}</h1>
        {subtitle && <h2 className="pt-hero__subtitle">{subtitle}</h2>}
        {testimonial && (
          <figure className="pt-hero__testimonial">
            <blockquote className="pt-hero__testimonial-quote">"{testimonial.quote}"</blockquote>
            <figcaption className="pt-hero__testimonial-cite">- {testimonial.attribution}</figcaption>
          </figure>
        )}
        <p className="pt-hero__body">{body}</p>
        <div className="pt-hero__actions">
          <Button variant="accent" size="lg" href={ctaHref} iconRight={<ArrowRight size={18} />}>
            {cta}
          </Button>
          {ctaSecondary && (
            <Button variant="secondary" size="lg" href={ctaSecondaryHref} onClick={onPortfolio}>{ctaSecondary}</Button>
          )}
          {!ctaSecondary && (
            <Button variant="secondary" size="lg" onClick={onPortfolio}>See the work</Button>
          )}
        </div>
        <div className="pt-hero__proof">
          <BadgeCheck size={18} style={{ color: 'var(--brand)', flexShrink: 0 }} />
          <span>{proof || 'Founder-led \xb7 Shopify Plus partner \xb7 Based in London'}</span>
        </div>
      </div>

      <div className="pt-hero__art">
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
        {heroImage}
        {!hideChips && (
          <>
            <div className="pt-hero__chip pt-hero__chip--1">
              <Sprout size={16} style={{ color: 'var(--brand)' }} /> makes own Kombucha &amp; kefir
            </div>
            <div className="pt-hero__chip pt-hero__chip--2">
              <Award size={16} style={{ color: 'var(--accent-strong)' }} /> Stocked in Selfridges
            </div>
          </>
        )}
      </div>
    </header>
  )
}

export default Hero
