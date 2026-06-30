import React from 'react'

export function PortfolioCard({
  image,
  imageAlt = '',
  imagePlaceholder,
  category,
  categoryTone = 'accent',
  title,
  meta,
  result,
  resultIcon,
  cta = 'View project',
  ctaIcon,
  href,
  className = '',
  children,
  ...rest
}) {
  const Tag = href ? 'a' : 'div'
  return (
    <Tag className={['pt-pc', className].filter(Boolean).join(' ')} href={href} {...rest}>
      <div className="pt-pc__media">
        {image
          ? <img src={image} alt={imageAlt} />
          : imagePlaceholder}
        {category && (
          <span
            className="pt-pc__tag"
            style={{
              position: 'absolute', top: 12, left: 12,
              fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '.72rem',
              letterSpacing: '.06em', textTransform: 'uppercase', padding: '.4em .8em',
              borderRadius: 'var(--radius-pill)', lineHeight: 1,
              background: categoryTone === 'accent' ? 'var(--accent)' : 'var(--ink-900)',
              color: categoryTone === 'accent' ? 'var(--ink-900)' : 'var(--cream-50)',
            }}
          >
            {category}
          </span>
        )}
      </div>
      <div className="pt-pc__body">
        {title && <h3 className="pt-pc__title">{title}</h3>}
        {meta && <p className="pt-pc__meta">{meta}</p>}
        {result && <span className="pt-pc__result">{resultIcon}{result}</span>}
        {children}
        <div className="pt-pc__foot">
          <span className="pt-pc__cta">{cta}{ctaIcon}</span>
        </div>
      </div>
    </Tag>
  )
}

export default PortfolioCard
