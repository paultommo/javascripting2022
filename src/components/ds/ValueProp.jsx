import React from 'react'

export function ValueProp({
  icon,
  title,
  iconTone = 'brand',
  layout = 'stack',
  align = 'left',
  onDark = false,
  className = '',
  children,
  ...rest
}) {
  const cls = [
    'pt-vp',
    layout === 'row' ? 'pt-vp--row' : '',
    align === 'center' && layout !== 'row' ? 'pt-vp--center' : '',
    onDark ? 'pt-vp--on-dark' : '',
    className,
  ].filter(Boolean).join(' ')

  return (
    <div className={cls} {...rest}>
      <span className={`pt-vp__icon pt-vp__icon--${iconTone}`}>{icon}</span>
      <div className="pt-vp__body">
        {title && <h3 className="pt-vp__title">{title}</h3>}
        {children && <p className="pt-vp__text">{children}</p>}
      </div>
    </div>
  )
}

export default ValueProp
