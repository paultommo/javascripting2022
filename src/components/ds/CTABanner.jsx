import React from 'react'

export function CTABanner({
  eyebrow,
  title,
  subtitle,
  actions,
  tone = 'brand',
  decorate = true,
  className = '',
  children,
  ...rest
}) {
  return (
    <section
      className={['pt-cta', `pt-cta--${tone}`, className].filter(Boolean).join(' ')}
      {...rest}
    >
      {decorate && (
        <>
          <span className="pt-cta__blob" style={{ width: 280, height: 280, background: 'var(--accent)', top: -90, right: -60 }} />
          <span className="pt-cta__blob" style={{ width: 200, height: 200, background: 'var(--cream-50)', bottom: -80, left: -40 }} />
        </>
      )}
      {eyebrow && <span className="pt-cta__eyebrow">{eyebrow}</span>}
      {title && <h2 className="pt-cta__title">{title}</h2>}
      {subtitle && <p className="pt-cta__sub">{subtitle}</p>}
      {(actions || children) && <div className="pt-cta__actions">{actions}{children}</div>}
    </section>
  )
}

export default CTABanner
