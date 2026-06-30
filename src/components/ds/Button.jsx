import React from 'react'

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  as,
  iconLeft,
  iconRight,
  fullWidth = false,
  disabled = false,
  className = '',
  children,
  ...rest
}) {
  const cls = [
    'pt-btn',
    `pt-btn--${variant}`,
    `pt-btn--${size}`,
    fullWidth ? 'pt-btn--block' : '',
    className,
  ].filter(Boolean).join(' ')

  const Tag = as || (href ? 'a' : 'button')
  const props = {
    className: cls,
    'aria-disabled': disabled || undefined,
    ...(Tag === 'a' ? { href: disabled ? undefined : href } : { disabled }),
    ...rest,
  }

  return (
    <Tag {...props}>
      {iconLeft}
      {children && <span>{children}</span>}
      {iconRight}
    </Tag>
  )
}

export default Button
