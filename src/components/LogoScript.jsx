import React from 'react'

export default function LogoScript({ height = 36, style, strokeColor = 'var(--green-900)' }) {
  return (
    <svg
      viewBox="0 0 230 52"
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'block', overflow: 'visible', ...style }}
      aria-label="Paul Tommo"
    >
      <text
        x="4"
        y="42"
        fontFamily="Pacifico, cursive"
        fontSize="40"
        fill="var(--accent)"
        stroke={strokeColor}
        strokeWidth="8"
        strokeLinejoin="round"
        paintOrder="stroke fill"
      >
        Paul Tommo
      </text>
    </svg>
  )
}
