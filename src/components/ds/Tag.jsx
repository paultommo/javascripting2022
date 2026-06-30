import React from 'react'

export function Tag({ tone = 'brand', icon, className = '', children, ...rest }) {
  return (
    <span
      className={['pt-tag', `pt-tag--${tone}`, className].filter(Boolean).join(' ')}
      {...rest}
    >
      {icon}
      {children}
    </span>
  )
}

export default Tag
