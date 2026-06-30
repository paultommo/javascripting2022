import React from 'react'

export function TestimonialCard({
  quote,
  name,
  role,
  logo,
  logoAlt = '',
  stars,
  variant = 'default',
  bordered = false,
  onBrand = false,
  className = '',
  children,
  ...rest
}) {
  const cls = [
    'pt-tc',
    variant === 'feature' ? 'pt-tc--feature' : '',
    bordered ? 'pt-tc--bordered' : '',
    onBrand ? 'pt-tc--on-brand' : '',
    className,
  ].filter(Boolean).join(' ')

  return (
    <figure className={cls} {...rest}>
      {stars ? (
        <span className="pt-tc__stars">{stars}</span>
      ) : (
        <span className="pt-tc__quoteMark" aria-hidden="true">&ldquo;</span>
      )}
      <blockquote className="pt-tc__quote">{quote || children}</blockquote>
      <figcaption className="pt-tc__foot">
        {logo && <img className="pt-tc__logo" src={logo} alt={logoAlt} />}
        {(name || role) && (
          <span className="pt-tc__who">
            {name && <span className="pt-tc__name">{name}</span>}
            {role && <span className="pt-tc__role">{role}</span>}
          </span>
        )}
      </figcaption>
    </figure>
  )
}

export default TestimonialCard
