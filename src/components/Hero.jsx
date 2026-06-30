import React from 'react'
import { BadgeCheck, Sprout, Award, ArrowRight } from 'lucide-react'
import Button from './ds/Button'

function Hero({ eyebrow, title, body, ctaHref, cta, heroImage, onPortfolio, hideChips }) {
  return (
    <header className="pt-hero">
      <div className="pt-hero__copy">
        <span className="pt-hero__eyebrow">{eyebrow}</span>
        <h1 className="pt-hero__title">{title}</h1>
        <p className="pt-hero__body">{body}</p>
        <div className="pt-hero__actions">
          <Button variant="accent" size="lg" href={ctaHref} iconRight={<ArrowRight size={18} />}>
            {cta}
          </Button>
          <Button variant="secondary" size="lg" onClick={onPortfolio}>See the work</Button>
        </div>
        <div className="pt-hero__proof">
          <BadgeCheck size={18} style={{ color: 'var(--brand)', flexShrink: 0 }} />
          <span>Founder-led · Shopify Plus partner · Based in London</span>
        </div>
      </div>

      <div className="pt-hero__art">
        <svg className="pt-hero__disc" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <circle cx="250" cy="250" r="240" fill="var(--brand)" stroke="var(--ink-900)" strokeWidth="10" />
          <circle cx="250" cy="250" r="220" fill="none" stroke="var(--ink-900)" strokeWidth="4" />
        </svg>
        <span className="pt-hero__blob pt-hero__blob--y"></span>
        <span className="pt-hero__blob pt-hero__blob--c"></span>
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
