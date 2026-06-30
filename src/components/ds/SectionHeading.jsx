import React from 'react'

export function SectionHeading({
  eyebrow,
  eyebrowIcon,
  title,
  subtitle,
  align = 'left',
  onDark = false,
  as = 'h2',
  className = '',
  children,
  ...rest
}) {
  const Title = as
  const cls = [
    'pt-sh',
    align === 'center' ? 'pt-sh--center' : '',
    onDark ? 'pt-sh--on-dark' : '',
    className,
  ].filter(Boolean).join(' ')

  return (
    <div className={cls} {...rest}>
      {eyebrow && (
        <span className="pt-sh__eyebrow">{eyebrowIcon}{eyebrow}</span>
      )}
      {title && <Title className="pt-sh__title">{title}</Title>}
      {subtitle && <p className="pt-sh__sub">{subtitle}</p>}
      {children}
    </div>
  )
}

export default SectionHeading
