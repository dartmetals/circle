import { useState, useEffect, useRef } from 'react';
 
/* ─── Animated Counter ─────────────────────────────────────── */
const Counter = ({ target, suffix = '' }: { target: number; suffix?: string }) => {
  const [count, setCount] = useState<number>(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef<boolean>(false);
 
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const startTime = Date.now();
          const tick = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) {
              requestAnimationFrame(tick);
            } else {
              setCount(target);
            }
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);
 
  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
};
 
/* ─── Person Illustration SVG ──────────────────────────────── */
const PersonIllustration = () => (
  <svg
    viewBox="0 0 420 370"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ width: '100%', maxWidth: 400 }}
  >
    {/* shadow */}
    <ellipse cx="210" cy="358" rx="88" ry="10" fill="rgba(0,0,0,0.12)" />
    {/* chair legs */}
    <rect x="172" y="264" width="11" height="80" rx="5" fill="#c4a070" />
    <rect x="224" y="264" width="11" height="80" rx="5" fill="#c4a070" />
    <rect x="155" y="334" width="100" height="8" rx="4" fill="#b09060" />
    {/* chair back + seat */}
    <rect x="148" y="216" width="102" height="56" rx="14" fill="#e8d0b0" />
    <rect x="144" y="207" width="110" height="17" rx="9" fill="#d4bc9a" />
    {/* desk */}
    <rect x="88" y="258" width="234" height="11" rx="5" fill="#c8b090" />
    <rect x="96" y="269" width="9" height="72" rx="4" fill="#b8a080" />
    <rect x="303" y="269" width="9" height="72" rx="4" fill="#b8a080" />
    {/* laptop */}
    <rect x="122" y="228" width="148" height="32" rx="7" fill="#e0ceb0" />
    <rect x="126" y="232" width="140" height="24" rx="5" fill="rgba(168,210,205,0.62)" />
    <rect x="131" y="235" width="56" height="4" rx="2" fill="rgba(255,255,255,0.7)" />
    <rect x="131" y="242" width="42" height="3" rx="1" fill="rgba(255,255,255,0.45)" />
    <rect x="131" y="248" width="50" height="3" rx="1" fill="rgba(255,255,255,0.45)" />
    {/* coffee cup */}
    <rect x="291" y="238" width="22" height="21" rx="5" fill="#ead8b8" />
    <path d="M313 244 Q326 244 326 251 Q326 258 313 258" stroke="#d0b888" strokeWidth="2.2" fill="none" strokeLinecap="round" />
    <rect x="291" y="238" width="22" height="5" rx="3" fill="#c8b090" />
    {/* head */}
    <ellipse cx="210" cy="175" rx="25" ry="27" fill="#f2dfc0" />
    {/* hair */}
    <ellipse cx="210" cy="160" rx="25" ry="16" fill="#3a3028" />
    <ellipse cx="197" cy="154" rx="9" ry="14" fill="#3a3028" />
    <ellipse cx="223" cy="156" rx="7" ry="11" fill="#3a3028" />
    {/* ear */}
    <ellipse cx="185" cy="175" rx="4.5" ry="7" fill="#f2dfc0" />
    {/* face features */}
    <circle cx="202" cy="177" r="2.2" fill="#d09860" opacity="0.7" />
    <circle cx="218" cy="177" r="2.2" fill="#d09860" opacity="0.7" />
    <path d="M204 185 Q210 190 216 185" stroke="#c08860" strokeWidth="1.7" fill="none" strokeLinecap="round" />
    {/* shirt */}
    <path d="M185 212 Q185 200 210 197 Q235 200 235 212 L240 258 L180 258 Z" fill="#c46040" />
    <path d="M192 205 Q200 218 210 218 Q220 218 228 205" stroke="#a84830" strokeWidth="1.8" fill="none" />
    {/* arms */}
    <path d="M185 214 Q164 232 142 244" stroke="#f2dfc0" strokeWidth="15" strokeLinecap="round" fill="none" />
    <path d="M235 214 Q257 228 271 220" stroke="#f2dfc0" strokeWidth="15" strokeLinecap="round" fill="none" />
    {/* globe */}
    <circle cx="279" cy="210" r="21" fill="rgba(168,210,205,0.24)" stroke="rgba(168,210,205,0.52)" strokeWidth="1.5" />
    <circle cx="279" cy="210" r="13" fill="rgba(100,178,168,0.5)" />
    <path d="M267 210 Q279 198 291 210 Q279 222 267 210" fill="rgba(50,148,138,0.55)" />
    <ellipse cx="279" cy="210" rx="21" ry="7" stroke="rgba(255,255,255,0.22)" strokeWidth="1" fill="none" strokeDasharray="3 3" />
    {/* paper plane */}
    <path d="M328 132 L354 114 L348 144 Z" fill="#f0c870" opacity="0.9" />
    <path d="M328 132 L348 144 L338 136 Z" fill="#d4a840" />
    {/* plants left */}
    <rect x="88" y="276" width="17" height="34" rx="4" fill="#a08060" />
    <ellipse cx="96" cy="268" rx="15" ry="19" fill="#5aaa60" />
    <ellipse cx="82" cy="274" rx="11" ry="15" fill="#4a9a50" />
    <ellipse cx="110" cy="272" rx="11" ry="17" fill="#6aba70" />
    <ellipse cx="96" cy="256" rx="7" ry="10" fill="#7aca80" />
    {/* plants right */}
    <rect x="307" y="280" width="14" height="28" rx="4" fill="#a08060" />
    <ellipse cx="313" cy="272" rx="12" ry="16" fill="#5aaa60" />
    <ellipse cx="300" cy="278" rx="9" ry="13" fill="#4a9a50" />
    <ellipse cx="326" cy="276" rx="9" ry="14" fill="#6aba70" />
    {/* floating dots */}
    <circle cx="358" cy="76" r="5" fill="rgba(255,255,255,0.3)" />
    <circle cx="338" cy="56" r="3" fill="rgba(255,255,255,0.2)" />
    <circle cx="68" cy="126" r="4" fill="rgba(255,255,255,0.2)" />
  </svg>
);
 
/* ─── Brand logos ───────────────────────────────────────────── */
const brands = [
  {
    symbol: '₸7',
    name: 'TransferWise',
    symbolStyle: { fontFamily: "'DM Serif Display', Georgia, serif", fontStyle: 'italic' },
  },
  {
    symbol: 'woo',
    name: 'COMMERCE',
    symbolStyle: { fontSize: 12, letterSpacing: '-0.03em' },
    nameStyle: { fontWeight: 700, letterSpacing: '0.04em' },
    prefix: true,
  },
  {
    symbol: 'P',
    name: 'ayPal',
    symbolStyle: { fontFamily: "'DM Serif Display', Georgia, serif", fontStyle: 'italic' },
  },
  {
    symbol: 'Pay',
    name: 'oneer',
    symbolStyle: { fontFamily: "'DM Serif Display', Georgia, serif", fontStyle: 'italic' },
    nameStyle: { fontStyle: 'italic' },
  },
];
 
/* ─── HERO SECTION ─────────────────────────────────────────── */
const HeroSection = () => {
  const [floatY, setFloatY] = useState<number>(0);
 
  // Floating animation
  useEffect(() => {
    let frameId: number;
    const start = Date.now();
    const animate = () => {
      const t = (Date.now() - start) / 1000;
      setFloatY(Math.sin(t * (2 * Math.PI / 4.5)) * 14);
      frameId = requestAnimationFrame(animate);
    };
    frameId = requestAnimationFrame(animate);
    return () => {
      if (frameId) {
        cancelAnimationFrame(frameId);
      }
    };
  }, []);
 
  const stats = [
    { target: 200, suffix: '+', label: 'Expert Mentors' },
    { target: 150, suffix: '+', label: 'Quality Courses' },
    { target: 10,  suffix: 'k+', label: 'Happy Students' },
  ];
 
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600&family=DM+Serif+Display:ital@0;1&display=swap');
 
        .hero-root {
          font-family: 'DM Sans', sans-serif;
        }
 
        /* ── Word fade-up ── */
        @keyframes wordUp {
          from { opacity: 0; transform: translateY(56px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .word-anim {
          display: inline-block;
          opacity: 0;
          animation: wordUp 0.8s cubic-bezier(0.25,0.46,0.45,0.94) forwards;
        }
 
        /* ── Generic fade-up ── */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeRight {
          from { opacity: 0; transform: translateX(56px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        .fade-up   { opacity: 0; animation: fadeUp   0.75s cubic-bezier(0.25,0.46,0.45,0.94) forwards; }
        .fade-right{ opacity: 0; animation: fadeRight 1s   cubic-bezier(0.25,0.46,0.45,0.94) forwards; }
 
        /* ── Button shine ── */
        .btn-hero {
          position: relative; overflow: hidden;
          display: inline-block;
          background: #e8c49e; color: #5a3718;
          border-radius: 30px; padding: 14px 32px;
          font-size: 12.5px; font-weight: 700;
          letter-spacing: 0.09em; text-transform: uppercase;
          cursor: pointer; border: none;
          font-family: 'DM Sans', sans-serif;
          transition: background 0.25s, transform 0.2s, box-shadow 0.25s;
        }
        .btn-hero::after {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.32), transparent);
          transform: translateX(-100%);
          transition: transform 0.5s;
        }
        .btn-hero:hover::after { transform: translateX(100%); }
        .btn-hero:hover {
          background: #d4a87a;
          transform: scale(1.05);
          box-shadow: 0 8px 24px rgba(90,55,24,0.28);
        }
 
        /* ── Brand item ── */
        .brand-item {
          display: flex; align-items: center; gap: 6px;
          opacity: 0.52; transition: opacity 0.25s, transform 0.25s; cursor: default;
        }
        .brand-item:hover { opacity: 0.88; transform: translateY(-2px); }
 
        /* ── Stat ring dot ── */
        .stat-ring {
          width: 8px; height: 8px; border-radius: 50%;
          border: 1.5px solid #b09070;
          margin-top: 9px; margin-left: 2px; flex-shrink: 0;
        }
 
        /* ── Hero section bottom rounded corners ── */
        .hero-root {
          border-radius: 0 0 60px 60px;
        }
 
        /* ── Responsive ── */
        @media (max-width: 860px) {
          .hero-body      { flex-direction: column !important; padding-top: 100px !important; }
          .hero-right     { justify-content: center !important; }
          .hero-left      { text-align: center; }
          .hero-sub       { max-width: 100% !important; }
          .brands-row     { justify-content: center !important; }
          .stats-bar      { 
            border-radius: 18px !important; 
            margin: 0 16px 24px 16px !important; 
            width: auto !important; 
            display: flex !important;
            flex-direction: column !important;
            gap: 24px !important;
            padding: 24px 32px !important;
            text-align: center !important;
          }
          
          .stats-bar > div {
            border-right: none !important;
            border-bottom: 1px solid rgba(165,125,90,0.2);
            padding: 0 0 20px 0 !important;
            margin-bottom: 4px;
          }
          
          .stats-bar > div:last-child {
            border-bottom: none !important;
            padding-bottom: 0 !important;
            margin-bottom: 0;
          }
        }
      `}</style>
 
      <section
        className="hero-root"
        style={{
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #197272 0%, #24989a 26%, #b8a07a 68%, #d4bc98 100%)',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* ── HERO BODY ───────────────────────────────────────── */}
        <div
          className="hero-body"
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            padding: '80px 56px 40px',
            maxWidth: 1160,
            margin: '0 auto',
            width: '100%',
            gap: 0,
          }}
        >
          {/* ── LEFT ── */}
          <div
            className="hero-left"
            style={{ flex: 1 }}
          >
            {/* Headline — word by word */}
            <h1
              style={{
                fontFamily: "'DM Serif Display', Georgia, serif",
                fontSize: 'clamp(40px, 5.5vw, 66px)',
                fontWeight: 400,
                color: '#fff',
                lineHeight: 1.1,
                letterSpacing: '-0.015em',
                margin: '0 0 18px',
                overflow: 'hidden',
              }}
            >
              {/* line 1 */}
              <span style={{ display: 'block', overflow: 'hidden' }}>
                {['Your', 'next', 'big'].map((w, i) => (
                  <span
                    key={w}
                    className="word-anim"
                    style={{
                      animationDelay: `${0.3 + i * 0.1}s`,
                      marginRight: '0.25em',
                    }}
                  >
                    {w}
                  </span>
                ))}
              </span>
              {/* line 2 */}
              <span style={{ display: 'block', overflow: 'hidden' }}>
                {['idea', 'starts', 'here'].map((w, i) => (
                  <span
                    key={w}
                    className="word-anim"
                    style={{
                      animationDelay: `${0.6 + i * 0.1}s`,
                      marginRight: '0.25em',
                    }}
                  >
                    {w}
                  </span>
                ))}
              </span>
            </h1>
 
            {/* Subtitle */}
            <p
              className="hero-sub fade-up"
              style={{
                fontSize: 14,
                color: 'rgba(255,255,255,0.72)',
                lineHeight: 1.78,
                maxWidth: 280,
                margin: '0 0 32px',
                animationDelay: '0.95s',
              }}
            >
              The ideal framework to learn how to manage all aspects of startup.
            </p>
 
            {/* CTA */}
            <div
              className="fade-up"
              style={{ animationDelay: '1.1s' }}
            >
              <button className="btn-hero">START FOR FREE</button>
            </div>
          </div>
 
          {/* ── RIGHT — floating illustration ── */}
          <div
            className="hero-right fade-right"
            style={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-end',
              paddingTop: 40,
              animationDelay: '0.5s',
            }}
          >
            <div style={{ transform: `translateY(${floatY}px)`, transition: 'transform 0.05s linear' }}>
              <PersonIllustration />
            </div>
          </div>
        </div>
 
        {/* ── BRAND LOGOS ROW ─────────────────────────────────── */}
        <div
          className="brands-row fade-up"
          style={{
            padding: '0 56px 20px',
            maxWidth: 1160,
            margin: '0 auto',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            gap: 44,
            flexWrap: 'wrap',
            animationDelay: '1.3s',
          }}
        >
          {brands.map((b) => (
            <div key={b.name} className="brand-item">
              <span
                style={{
                  fontSize: 17,
                  fontWeight: 700,
                  color: '#fff',
                  ...(b.symbolStyle || {}),
                }}
              >
                {b.symbol}
              </span>
              <span
                style={{
                  fontSize: 13,
                  color: '#fff',
                  fontWeight: 300,
                  ...(b.nameStyle || {}),
                }}
              >
                {b.name}
              </span>
            </div>
          ))}
        </div>
 
        {/* ── STATS BAR - Inside hero section at bottom ── */}
        <div
          className="fade-up stats-bar"
          style={{
            background: 'rgba(249,241,228,0.93)',
            backdropFilter: 'blur(14px)',
            WebkitBackdropFilter: 'blur(14px)',
            borderRadius: '20px',
            padding: '28px 56px',
            maxWidth: 1160,
            margin: '0 auto 40px auto',
            width: '100%',
            display: 'flex',
            animationDelay: '1.45s',
          }}
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
              style={{
                flex: 1,
                padding: '0 24px',
                borderRight: i < stats.length - 1 ? '1px solid rgba(165,125,90,0.2)' : 'none',
                paddingLeft: i === 0 ? 0 : 24,
              }}
            >
              {/* Number */}
              <div
                style={{
                  fontFamily: "'DM Serif Display', Georgia, serif",
                  fontSize: 'clamp(28px, 3.5vw,  46px)',
                  color: '#3a2a16',
                  lineHeight: 1,
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 2,
                }}
              >
                <Counter target={s.target} suffix={s.suffix} />
                <span className="stat-ring" />
              </div>
              {/* Label */}
              <div
                style={{
                  fontSize: 11.5,
                  color: '#9a8068',
                  marginTop: 7,
                  letterSpacing: '0.03em',
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
 
export default HeroSection;