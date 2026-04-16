import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

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
      initial={{ opacity: 0, y: 32, x: x }}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration: 0.78, delay: delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  );
};

/* ── FOOTER ──────────────────────────────────────────────── */
const FooterSection = () => {
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
          marginTop: 0,
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

export default FooterSection;