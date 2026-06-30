import React from 'react'

export function MarqueeRow({
  items = [],
  speed = 32,
  reverse = false,
  gap = 64,
  pauseOnHover = true,
  className = '',
  children,
  ...rest
}) {
  const content = items.length
    ? items.map((it, i) => <div className="pt-marquee__item" key={i}>{it}</div>)
    : React.Children.map(children, (c, i) => <div className="pt-marquee__item" key={i}>{c}</div>)

  const cls = [
    'pt-marquee',
    reverse ? 'pt-marquee--rev' : '',
    pauseOnHover ? 'pt-marquee--pause' : '',
    className,
  ].filter(Boolean).join(' ')

  const groupStyle = { gap: `${gap}px`, paddingRight: `${gap}px` }

  return (
    <div className={cls} {...rest}>
      <div className="pt-marquee__track" style={{ animationDuration: `${speed}s` }}>
        <div className="pt-marquee__group" style={groupStyle} aria-hidden={false}>{content}</div>
        <div className="pt-marquee__group" style={groupStyle} aria-hidden={true}>{content}</div>
      </div>
    </div>
  )
}

export default MarqueeRow
