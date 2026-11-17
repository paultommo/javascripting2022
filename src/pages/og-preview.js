import React from 'react'

export default function OgPreview() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@700;800;900&family=Questrial&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { background: #ccc; display: flex; align-items: center; justify-content: center; min-height: 100vh; }
      `}</style>
      <div style={{
        width: 1200, height: 630, position: 'relative', overflow: 'hidden', flexShrink: 0,
        background: 'linear-gradient(175deg, #F4BF2E 0%, #E87A99 100%)',
      }}>
        {/* Dot overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.11) 1.5px, transparent 1.5px)',
          backgroundSize: '22px 22px',
        }} />

        {/* Testimonial background panel — full height, separate from content */}
        <div style={{
          position: 'absolute', right: 0, top: 0, bottom: 0, width: 360,
          background: '#111111', borderLeft: '3px solid #F4BF2E', zIndex: 1,
        }} />

        {/* Logo — top-left */}
        <img src="/images/logo-neon.png" alt="paultommo.com" style={{
          position: 'absolute', top: 32, left: 24, height: 80, width: 'auto', zIndex: 3,
        }} />

        {/* Photo — melon disc, vertically centred */}
        <div style={{
          position: 'absolute', left: 24, top: '50%', transform: 'translateY(-50%)',
          width: 240, height: 240, zIndex: 2,
        }}>
          <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
            viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <circle cx="250" cy="250" r="232" fill="#FF1A8C" stroke="#114227" strokeWidth="6" />
            <ellipse cx="140" cy="130" rx="6" ry="17" fill="#111111" transform="rotate(-38 140 130)" />
            <ellipse cx="200" cy="98" rx="5" ry="15" fill="#111111" transform="rotate(22 200 98)" />
            <ellipse cx="285" cy="88" rx="6" ry="16" fill="#111111" transform="rotate(-14 285 88)" />
            <ellipse cx="355" cy="118" rx="5" ry="15" fill="#111111" transform="rotate(38 355 118)" />
            <ellipse cx="385" cy="185" rx="6" ry="17" fill="#111111" transform="rotate(52 385 185)" />
            <ellipse cx="392" cy="265" rx="5" ry="16" fill="#111111" transform="rotate(-28 392 265)" />
            <ellipse cx="368" cy="348" rx="6" ry="15" fill="#111111" transform="rotate(26 368 348)" />
            <ellipse cx="308" cy="395" rx="5" ry="16" fill="#111111" transform="rotate(-10 308 395)" />
            <ellipse cx="225" cy="412" rx="6" ry="17" fill="#111111" transform="rotate(42 225 412)" />
            <ellipse cx="148" cy="382" rx="5" ry="15" fill="#111111" transform="rotate(-48 148 382)" />
            <ellipse cx="108" cy="302" rx="6" ry="16" fill="#111111" transform="rotate(16 108 302)" />
            <ellipse cx="102" cy="218" rx="5" ry="17" fill="#111111" transform="rotate(-24 102 218)" />
            <ellipse cx="122" cy="162" rx="6" ry="15" fill="#111111" transform="rotate(44 122 162)" />
            <ellipse cx="175" cy="195" rx="5" ry="16" fill="#111111" transform="rotate(-58 175 195)" />
            <ellipse cx="242" cy="158" rx="6" ry="15" fill="#111111" transform="rotate(30 242 158)" />
            <ellipse cx="322" cy="168" rx="5" ry="17" fill="#111111" transform="rotate(-18 322 168)" />
            <ellipse cx="345" cy="242" rx="6" ry="16" fill="#111111" transform="rotate(55 345 242)" />
            <ellipse cx="302" cy="318" rx="5" ry="15" fill="#111111" transform="rotate(-33 302 318)" />
            <ellipse cx="198" cy="325" rx="6" ry="16" fill="#111111" transform="rotate(20 198 325)" />
            <ellipse cx="162" cy="268" rx="5" ry="17" fill="#111111" transform="rotate(-44 162 268)" />
            <ellipse cx="230" cy="230" rx="5" ry="14" fill="#111111" transform="rotate(10 230 230)" />
            <ellipse cx="290" cy="210" rx="6" ry="15" fill="#111111" transform="rotate(-62 290 210)" />
            <ellipse cx="260" cy="310" rx="5" ry="16" fill="#111111" transform="rotate(35 260 310)" />
          </svg>
          <img src="/images/paultomlinson.png" alt="Paul Tomlinson" style={{
            position: 'absolute', inset: 0, width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: 'center top',
            borderRadius: '50%', border: '4px solid #114227',
          }} />
        </div>

        {/* Content group — tops aligned, whole group vertically centred */}
        <div style={{
          position: 'absolute', zIndex: 2,
          left: 288, right: 0,
          top: '50%', transform: 'translateY(-50%)',
          display: 'flex', alignItems: 'flex-start',
        }}>
          {/* Copy */}
          <div style={{
            flex: 1, minWidth: 0,
            padding: '0 40px 0 48px',
          }}>
            <p style={{
              fontFamily: "'Questrial', system-ui, sans-serif", fontSize: 28, fontWeight: 400,
              color: 'rgba(17,17,17,0.72)', letterSpacing: '0.01em', lineHeight: 1.3, marginBottom: 14,
            }}>You're already paying for the clicks.</p>
            <h1 style={{
              fontFamily: "'League Spartan', system-ui, sans-serif", fontSize: 90, fontWeight: 900,
              color: '#111111', textTransform: 'uppercase', letterSpacing: '-0.025em',
              lineHeight: 0.88, textWrap: 'balance', margin: 0,
            }}>Let's turn them into bookings</h1>
            <p style={{
              fontFamily: "'League Spartan', system-ui, sans-serif", fontSize: 20, fontWeight: 700,
              color: 'rgba(17,17,17,0.55)', letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: 22,
            }}>paultommo.com</p>
          </div>

          {/* Testimonial content — no background (panel is behind) */}
          <div style={{
            width: 360, flexShrink: 0,
            padding: '0 32px',
          }}>
            <p style={{
              fontFamily: "'League Spartan', system-ui, sans-serif", fontSize: 19, fontWeight: 700,
              color: '#FF1A8C', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 14,
            }}>Client result</p>
            <blockquote style={{
              fontFamily: "'Questrial', system-ui, sans-serif", fontSize: 29, lineHeight: 1.45,
              color: '#FDFAF3', fontStyle: 'italic', marginBottom: 18,
            }}>"Thank you again for the website. It is already converting visitors into customers."</blockquote>
            <cite style={{
              fontFamily: "'League Spartan', system-ui, sans-serif", fontSize: 19, fontWeight: 700,
              color: 'rgba(253,250,243,0.6)', textTransform: 'uppercase', letterSpacing: '0.07em', fontStyle: 'normal',
            }}>— Luka Ivic, Monokl</cite>
          </div>
        </div>
      </div>
    </>
  )
}
