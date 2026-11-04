import React from 'react'
import { Link } from 'gatsby'
import { ArrowLeft } from 'lucide-react'
import Layout from '../components/layout'
import SeoBasic from '../components/seo'

export default function ThankYouPage() {
  return (
    <Layout>
      <SeoBasic
        title="Thanks - we'll be in touch"
        description="Your audit request has been received."
      />
      <section className="sec sec--paper" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
        <div className="container container--narrow" style={{ textAlign: 'center' }}>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-h2)', marginBottom: 'var(--space-4)' }}>
            Thanks - I'll be in touch.
          </h1>
          <p style={{ fontSize: 'var(--fs-body)', color: 'var(--text-body)', marginBottom: 'var(--space-8)', lineHeight: 'var(--lh-relaxed)' }}>
            I'll review your enquiry and send you a short video within 5 working days showing exactly where I'd focus first.
          </p>
          <Link to="/hair-clinics/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--brand)', fontWeight: 'var(--fw-semi)', textDecoration: 'none' }}>
            <ArrowLeft size={16} /> Back to the page
          </Link>
        </div>
      </section>
    </Layout>
  )
}
