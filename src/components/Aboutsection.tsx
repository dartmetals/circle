import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

interface FadeUpProps {
  children: React.ReactNode;
  delay?: number;
  x?: number;
  style?: React.CSSProperties;
}

const FadeUp = ({ children, delay = 0, x = 0, style = {} }: FadeUpProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      style={style}
      initial={{ opacity: 0, y: 32, x }}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration: 0.78, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  );
};

/* ── Phone Mockup SVG ───────────────────────────────────── */
const PhoneMockup = () => (
  <div style={{ position: 'relative', width: 200 }}>
    {/* peach blob behind phone */}
    <div style={{
      position: 'absolute',
      bottom: -20,
      right: -30,
      width: 160,
      height: 140,
      borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
      background: 'rgba(232,196,158,0.55)',
      zIndex: 0,
    }} />

    {/* phone body */}
    <div style={{
      position: 'relative',
      zIndex: 1,
      width: 160,
      background: '#1a5858',
      borderRadius: 24,
      padding: '16px 14px',
      boxShadow: '0 24px 48px rgba(0,0,0,0.28)',
      border: '1.5px solid rgba(255,255,255,0.12)',
    }}>
      {/* phone notch */}
      <div style={{
        width: 40,
        height: 5,
        background: 'rgba(255,255,255,0.15)',
        borderRadius: 3,
        margin: '0 auto 14px',
      }} />

      {/* WP badge */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        marginBottom: 12,
        padding: '6px 8px',
        background: 'rgba(255,255,255,0.1)',
        borderRadius: 8,
      }}>
        <div style={{
          width: 22,
          height: 22,
          borderRadius: 4,
          background: '#2196a8',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}>
          <span style={{ fontSize: 10, fontWeight: 900, color: '#fff' }}>W</span>
        </div>
        <span style={{
          fontSize: 9,
          fontWeight: 700,
          color: '#fff',
          letterSpacing: '0.05em',
          fontFamily: "'DM Sans', sans-serif",
        }}>
          WordPress
        </span>
      </div>

      {/* mini illustration - person at laptop */}
      <svg viewBox="0 0 130 90" width="130" height="90" fill="none" style={{ margin: '4px 0' }}>
        {/* chair */}
        <ellipse cx="65" cy="82" rx="40" ry="6" fill="rgba(255,255,255,0.08)" />
        <rect x="52" y="62" width="6"  height="22" rx="3" fill="rgba(255,255,255,0.2)" />
        <rect x="72" y="62" width="6"  height="22" rx="3" fill="rgba(255,255,255,0.2)" />
        <rect x="44" y="60" width="42" height="7"  rx="4" fill="rgba(255,255,255,0.18)" />
        <rect x="42" y="45" width="46" height="18" rx="8" fill="rgba(255,255,255,0.12)" />
        {/* desk */}
        <rect x="28" y="58" width="74" height="5" rx="2" fill="rgba(255,255,255,0.15)" />
        {/* laptop */}
        <rect x="38" y="46" width="54" height="14" rx="4" fill="rgba(255,255,255,0.2)" />
        <rect x="40" y="48" width="50" height="10" rx="3" fill="rgba(42,152,136,0.4)" />
        {/* person */}
        <circle cx="65" cy="28" r="10" fill="rgba(242,223,192,0.9)" />
        <ellipse cx="65" cy="20" rx="10" ry="7" fill="rgba(58,48,40,0.85)" />
        <path d="M55 44 Q55 36 65 34 Q75 36 75 44 L77 60 L53 60 Z" fill="rgba(42,100,168,0.7)" />
        <path d="M55 46 Q44 52 36 55" stroke="rgba(242,223,192,0.8)" strokeWidth="5" strokeLinecap="round" fill="none" />
        <path d="M75 46 Q84 50 90 49"  stroke="rgba(242,223,192,0.8)" strokeWidth="5" strokeLinecap="round" fill="none" />
      </svg>

      {/* course text */}
      <div style={{ marginTop: 8 }}>
        <p style={{
          fontSize: 8.5,
          color: 'rgba(255,255,255,0.6)',
          lineHeight: 1.5,
          margin: 0,
          fontFamily: "'DM Sans', sans-serif",
        }}>
          The ideal course to learn how to{' '}
          <span style={{ color: '#fff', fontWeight: 600 }}>manage all aspects</span>
        </p>
      </div>
    </div>
  </div>
);

/* ── CONTACT SECTION ─────────────────────────────────────── */
const ContactSection = () => {
  const [email, setEmail] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [shake, setShake] = useState<boolean>(false);

  const handleSubmit = () => {
    if (!email.includes('@')) {
      setShake(true);
      setTimeout(() => setShake(false), 500);
      return;
    }
    setEmail('');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=DM+Serif+Display:ital@0;1&display=swap');
        .contact-root * { box-sizing: border-box; }
        .email-input-contact {
          flex: 1;
          min-width: 180px;
          background: rgba(255,255,255,0.14);
          border: 1px solid rgba(255,255,255,0.3);
          border-radius: 28px;
          padding: 12px 20px;
          font-size: 13.5px;
          color: #fff;
          font-family: 'DM Sans', sans-serif;
          outline: none;
          transition: border-color 0.25s, background 0.25s, box-shadow 0.25s;
        }
        .email-input-contact::placeholder { color: rgba(255,255,255,0.45); }
        .email-input-contact:focus {
          border-color: rgba(255,255,255,0.7);
          background: rgba(255,255,255,0.2);
          box-shadow: 0 0 0 3px rgba(255,255,255,0.1);
        }
        .btn-submit-contact {
          background: #e8c49e;
          color: #5a3718;
          border: none;
          border-radius: 28px;
          padding: 12px 28px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.09em;
          text-transform: uppercase;
          cursor: pointer;
          font-family: 'DM Sans', sans-serif;
          transition: background 0.25s, transform 0.2s, box-shadow 0.25s;
          white-space: nowrap;
        }
        .btn-submit-contact:hover {
          background: #d4a87a;
          transform: scale(1.05);
          box-shadow: 0 6px 20px rgba(90,55,24,0.25);
        }
        @keyframes contactShake {
          0%,100%{transform:translateX(0)}
          20%{transform:translateX(-7px)}
          40%{transform:translateX(7px)}
          60%{transform:translateX(-5px)}
          80%{transform:translateX(5px)}
        }
        .shake { animation: contactShake 0.4s ease; }
      `}</style>

      <section
        className="contact-root"
        style={{
          background: 'linear-gradient(150deg, #1a7272 0%, #258f8f 38%, #c0a882 78%, #d8c09a 100%)',
          padding: '90px 56px 80px',
          fontFamily: "'DM Sans', sans-serif",
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        {/* decorative dots */}
        {[
          { top: '30%',  left: '42%',  size: 7  },
          { top: '60%',  left: '38%',  size: 5  },
          { top: '45%',  right: '38%', size: 6  },
          { bottom: '25%', right: '42%', size: 4 },
        ].map((d, i) => (
          <div key={i} style={{
            position: 'absolute', ...d,
            width: d.size, height: d.size,
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.25)',
            pointerEvents: 'none',
          }} />
        ))}

        {/* paper plane */}
        <div style={{ position: 'absolute', top: '28%', left: '44%', pointerEvents: 'none', opacity: 0.7 }}>
          <svg width="40" height="30" viewBox="0 0 44 32" fill="none">
            <path d="M2 16 L42 2 L36 30 Z" fill="#f0c870" />
            <path d="M2 16 L36 30 L22 20 Z" fill="#d4a840" />
          </svg>
        </div>

        <div style={{ maxWidth: 1140, margin: '0 auto', display: 'grid',
          gridTemplateColumns: '1fr auto', gap: 60, alignItems: 'center' }}>

          {/* ── LEFT ── */}
          <FadeUp>
            <h2 style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: 'clamp(28px, 3.8vw, 50px)',
              fontWeight: 400,
              color: '#fff',
              lineHeight: 1.15,
              marginBottom: 18,
            }}>
              Still have questions?
            </h2>
            <p style={{
              fontSize: 14,
              color: 'rgba(255,255,255,0.7)',
              lineHeight: 1.75,
              maxWidth: 360,
              marginBottom: 34,
            }}>
              Leave a request and we will contact you to help you choose the best training format.
            </p>

            {/* form */}
            <div
              className={shake ? 'shake' : ''}
              style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap', maxWidth: 440 }}
            >
              <input
                type="email"
                className="email-input-contact"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
              />
              <button className="btn-submit-contact" onClick={handleSubmit}>
                SUBMIT
              </button>
            </div>

            <AnimatePresence>
              {submitted && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  style={{ fontSize: 13, color: 'rgba(255,255,255,0.8)', marginTop: 14 }}
                >
                  ✓ Thanks! We'll be in touch soon.
                </motion.p>
              )}
            </AnimatePresence>
          </FadeUp>

          {/* ── RIGHT – phone mockup ── */}
          <FadeUp delay={0.2} x={40}>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <PhoneMockup />
            </motion.div>
          </FadeUp>
        </div>
      </section>
    </>
  );
};

/* ── FOOTER ──────────────────────────────────────────────── */
const Footer = () => {
  const navCols = [
    { links: ['ABOUT', 'PROGRAM', 'TRAINING'] },
    { links: ['COURSES', 'REVIEWS', 'CONTACT'] },
  ];

  const socialIcons = [
    // Facebook
    <svg key="fb" width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M9 2H7.5C6.7 2 6 2.7 6 3.5V5H4V7H6V12H8V7H9.5L10 5H8V3.5C8 3.2 8.2 3 8.5 3H9V2Z" fill="currentColor"/>
    </svg>,
    // YouTube / play
    <svg key="yt" width="14" height="14" viewBox="0 0 14 14" fill="none">
      <rect x="1" y="3" width="12" height="8" rx="2" stroke="currentColor" strokeWidth="1.3" fill="none"/>
      <polygon points="5.5,5.5 9.5,7 5.5,8.5" fill="currentColor"/>
    </svg>,
    // LinkedIn
    <svg key="li" width="14" height="14" viewBox="0 0 14 14" fill="none">
      <rect x="1" y="1" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.3" fill="none"/>
      <rect x="3" y="5.5" width="1.8" height="5.5" fill="currentColor"/>
      <circle cx="3.9" cy="3.5" r="1" fill="currentColor"/>
      <path d="M6.5 5.5 V11 H8.3 V8 C8.3 7 9.5 7 9.5 8 V11 H11.2 V7.5 C11.2 5.5 8.8 5.5 8.3 6.5 V5.5 Z" fill="currentColor"/>
    </svg>,
    // Instagram
    <svg key="ig" width="14" height="14" viewBox="0 0 14 14" fill="none">
      <rect x="2" y="2" width="10" height="10" rx="3" stroke="currentColor" strokeWidth="1.3" fill="none"/>
      <circle cx="7" cy="7" r="2.5" stroke="currentColor" strokeWidth="1.2" fill="none"/>
      <circle cx="10.2" cy="3.8" r="0.8" fill="currentColor"/>
    </svg>,
    // Telegram / paper plane
    <svg key="tg" width="14" height="14" viewBox="0 0 14 14" fill="none">
      <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.3" fill="none"/>
      <path d="M3 7 L10.5 4 L8.5 11 L6.5 8.5 Z" stroke="currentColor" strokeWidth="1" fill="none" strokeLinejoin="round"/>
    </svg>,
  ];

  return (
    <>
      <style>{`
        .footer-root * { box-sizing: border-box; }
        .footer-link {
          font-size: 11px; color: #6a8a8a; cursor: pointer;
          letter-spacing: 0.08em; transition: color 0.2s, transform 0.2s;
          display: inline-block; font-family: 'DM Sans', sans-serif;
        }
        .footer-link:hover { color: #0d4a4a; transform: translateX(3px); }
        .social-btn-f {
          width: 32px; height: 32px; border-radius: 50%;
          border: 1px solid rgba(0,0,0,0.14); background: #fff;
          display: flex; align-items: center; justify-content: center;
          color: #6a8a8a; cursor: pointer;
          transition: background 0.2s, color 0.2s, transform 0.2s;
        }
        .social-btn-f:hover { background: #0d4a4a; color: #fff; transform: translateY(-3px); }
      `}</style>

      <footer
        className="footer-root"
        style={{
          background: '#ece8df',
          padding: '40px 56px 20px',
          borderTop: '1px solid rgba(0,0,0,0.07)',
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        <div style={{ maxWidth: 1140, margin: '0 auto' }}>

          {/* ── Top row ── */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'auto 1fr auto auto',
            gap: 48,
            alignItems: 'flex-start',
            marginBottom: 28,
            flexWrap: 'wrap',
          }}>

            {/* Logo */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{
                width: 28, height: 28, borderRadius: 7,
                background: '#0d4a4a',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <circle cx="4.5" cy="4.5" r="2.5" fill="white" opacity="0.95" />
                  <circle cx="11.5" cy="4.5" r="2.5" fill="white" opacity="0.65" />
                  <circle cx="4.5" cy="11.5" r="2.5" fill="white" opacity="0.65" />
                  <circle cx="11.5" cy="11.5" r="2.5" fill="white" opacity="0.38" />
                </svg>
              </div>
              <span style={{ fontSize: 17, fontWeight: 700, color: '#1a3535' }}>Circle</span>
            </div>

            {/* Nav columns */}
            <div style={{ display: 'flex', gap: 48, justifyContent: 'center', flexWrap: 'wrap' }}>
              {navCols.map((col, ci) => (
                <div key={ci} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {col.links.map((l) => (
                    <span key={l} className="footer-link">{l}</span>
                  ))}
                </div>
              ))}
            </div>

            {/* Contact info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {[
                'WWW.HALO-LAB.COM',
                'MAIL@HALO-LAB.COM',
              ].map((c) => (
                <span key={c} style={{
                  fontSize: 11,
                  color: '#6a8a8a',
                  letterSpacing: '0.05em',
                  fontFamily: "'DM Sans', sans-serif",
                }}>
                  {c}
                </span>
              ))}
            </div>

            {/* Phone + location */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {[
                '+38 066 543 8812',
                'UKRAINE, ODESSA',
              ].map((c) => (
                <span key={c} style={{
                  fontSize: 11,
                  color: '#6a8a8a',
                  letterSpacing: '0.05em',
                  fontFamily: "'DM Sans', sans-serif",
                }}>
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* ── Divider ── */}
          <div style={{ height: 1, background: 'rgba(0,0,0,0.08)', marginBottom: 18 }} />

          {/* ── Bottom row ── */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 12,
          }}>
            <span style={{ fontSize: 11, color: '#aabfbe', letterSpacing: '0.04em' }}>
              © 2021 HALO-LAB. ALL RIGHTS RESERVED.
            </span>

            {/* Social icons */}
            <div style={{ display: 'flex', gap: 8 }}>
              {socialIcons.map((icon, i) => (
                <div key={i} className="social-btn-f">
                  {icon}
                </div>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

/* ── Combined export ─────────────────────────────────────── */
const ContactAndFooter = () => (
  <>
    <ContactSection />
    <Footer />
  </>
);

export default ContactAndFooter;
export { ContactSection, Footer };