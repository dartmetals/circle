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
    <motion.div ref={ref} style={style}
      initial={{ opacity: 0, y: 32, x }}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration: 0.72, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >{children}</motion.div>
  );
};

const AnnaAvatar = () => (
  <svg viewBox="0 0 80 80" width="80" height="80" fill="none">
    <circle cx="40" cy="40" r="40" fill="rgba(240,180,160,0.4)" />
    <circle cx="40" cy="40" r="32" fill="rgba(240,180,160,0.6)" />
    <path d="M18 72 Q18 56 40 56 Q62 56 62 72" fill="#3a6898" />
    <circle cx="40" cy="34" r="16" fill="#f2dfc0" />
    <ellipse cx="40" cy="22" rx="16" ry="10" fill="#3a3028" />
    <ellipse cx="40" cy="15" rx="10" ry="8"  fill="#3a3028" />
    <ellipse cx="28" cy="26" rx="6"  ry="8"  fill="#3a3028" />
    <ellipse cx="52" cy="26" rx="6"  ry="8"  fill="#3a3028" />
    <circle cx="35" cy="36" r="1.8" fill="#d09860" opacity="0.7" />
    <circle cx="45" cy="36" r="1.8" fill="#d09860" opacity="0.7" />
    <path d="M36 41 Q40 44 44 41" stroke="#c08860" strokeWidth="1.4" fill="none" strokeLinecap="round" />
  </svg>
);

const MykolaAvatar = () => (
  <svg viewBox="0 0 80 80" width="80" height="80" fill="none">
    <circle cx="40" cy="40" r="40" fill="rgba(180,200,230,0.4)" />
    <circle cx="40" cy="40" r="32" fill="rgba(180,200,230,0.6)" />
    <path d="M18 72 Q18 56 40 56 Q62 56 62 72" fill="#2a5070" />
    <circle cx="40" cy="34" r="16" fill="#f2dfc0" />
    <ellipse cx="40" cy="22" rx="16" ry="10" fill="#3a3028" />
    <rect x="24" y="20" width="32" height="10" rx="5" fill="#3a3028" />
    <circle cx="35" cy="36" r="1.8" fill="#d09860" opacity="0.7" />
    <circle cx="45" cy="36" r="1.8" fill="#d09860" opacity="0.7" />
    <path d="M36 41 Q40 44 44 41" stroke="#c08860" strokeWidth="1.4" fill="none" strokeLinecap="round" />
    <path d="M33 43 Q40 46 47 43" stroke="#d09860" strokeWidth="0.8" fill="none" opacity="0.4" />
  </svg>
);

const NadiyaAvatar = () => (
  <svg viewBox="0 0 80 80" width="80" height="80" fill="none">
    <circle cx="40" cy="40" r="40" fill="rgba(200,180,220,0.35)" />
    <circle cx="40" cy="40" r="32" fill="rgba(200,180,220,0.5)" />
    <path d="M18 72 Q18 56 40 56 Q62 56 62 72" fill="#4a3060" />
    <circle cx="40" cy="34" r="16" fill="#f2dfc0" />
    <ellipse cx="40" cy="22" rx="16" ry="11" fill="#2a2018" />
    <ellipse cx="25" cy="30" rx="5"  ry="12" fill="#2a2018" />
    <ellipse cx="55" cy="30" rx="5"  ry="12" fill="#2a2018" />
    <circle cx="35" cy="36" r="1.8" fill="#d09860" opacity="0.7" />
    <circle cx="45" cy="36" r="1.8" fill="#d09860" opacity="0.7" />
    <path d="M36 41 Q40 44 44 41" stroke="#c08860" strokeWidth="1.4" fill="none" strokeLinecap="round" />
  </svg>
);

interface DotsProps { top?: number; left?: number; right?: number; bottom?: number; }
const Dots = ({ top, left, right, bottom }: DotsProps) => (
  <div style={{ position: 'absolute', top, left, right, bottom, pointerEvents: 'none' }}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <div style={{ display: 'flex', gap: 6 }}>
        <div style={{ width: 5, height: 5, borderRadius: '50%', border: '1px solid rgba(42,152,136,0.3)' }} />
        <div style={{ width: 5, height: 5, borderRadius: '50%', background: 'rgba(200,160,120,0.35)' }} />
      </div>
      <div style={{ width: 5, height: 5, borderRadius: '50%', border: '1px solid rgba(200,160,120,0.4)', marginLeft: 3 }} />
    </div>
  </div>
);

interface Review { name: string; text: string; Avatar: React.ComponentType; accentColor: string; }

const reviews: Review[] = [
  { name: 'Anna Tyuneva',    text: 'The course is great! Teachers talks very interesting and accessible. Thank you very much!',          Avatar: AnnaAvatar,   accentColor: 'rgba(240,180,160,0.55)' },
  { name: 'Mykola Dunayev',  text: 'The course is clear enough. Well explained a lot of practice. I recommend to everyone!',             Avatar: MykolaAvatar,  accentColor: 'rgba(180,200,230,0.55)' },
  { name: 'Naditya Kozarchuk', text: 'The training was in one breath. Very accessible courses, everything is very clear and good.',      Avatar: NadiyaAvatar, accentColor: 'rgba(200,180,220,0.45)' },
];

const ReviewsSection = () => (
  <>
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=DM+Serif+Display:ital@0;1&display=swap');
      .reviews-root * { box-sizing: border-box; }
      .rcard:hover { transform: translateY(-5px); box-shadow: 0 12px 32px rgba(0,0,0,0.08); }
      .rcard { transition: transform 0.3s, box-shadow 0.3s; }

      /* ✅ Mobile/tablet: full natural height */
      @media (max-width: 860px) {
        .reviews-section-el {
          height: auto !important;
          min-height: 100vh !important;
          overflow: visible !important;
          padding: 60px 24px !important;
          align-items: flex-start !important;
        }
        .reviews-grid { grid-template-columns: 1fr !important; gap: 30px !important; }
      }
    `}</style>

    <section
      className="reviews-root reviews-section-el"
      style={{
        background: 'linear-gradient(180deg, #f5ede0 0%, #fdf8f2 100%)',
        padding: '60px 56px',
        fontFamily: "'DM Sans', sans-serif",
        overflow: 'hidden',          /* ✅ clip to exact viewport on desktop */
        position: 'relative',
        /* ✅ CHANGED: height: 100vh — exact one screen on every laptop/desktop */
        height: '100vh',
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Dots top={40}  left={40} />
      <Dots top={80}  right={60} />
      <Dots bottom={60} left={160} />
      <Dots bottom={40} right={80} />

      <div style={{ maxWidth: 1140, margin: '0 auto', width: '100%' }}>
        <FadeUp>
          <h2 style={{
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontSize: 'clamp(28px, 3.2vw, 42px)',
            fontWeight: 400, color: '#1a3535',
            textAlign: 'center', marginBottom: 60, lineHeight: 1.2,
          }}>Students reviews</h2>
        </FadeUp>

        <div className="reviews-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 40 }}>
          {reviews.map((r, i) => (
            <FadeUp key={r.name} delay={0.12 + i * 0.15}>
              <div className="rcard" style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                textAlign: 'center', padding: '20px 16px 28px', borderRadius: 16,
              }}>
                <div style={{ position: 'relative', marginBottom: 16 }}>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                    style={{ position: 'absolute', inset: -6, borderRadius: '50%', border: `2px dashed ${r.accentColor}` }}
                  />
                  <div style={{ position: 'absolute', top: -10, left: '50%', transform: 'translateX(-50%)', width: 8, height: 8, borderRadius: '50%', border: '1.5px solid rgba(42,152,136,0.4)', background: '#f5ede0' }} />
                  <div style={{ width: 80, height: 80, borderRadius: '50%', overflow: 'hidden', position: 'relative', zIndex: 1 }}>
                    <r.Avatar />
                  </div>
                  <div style={{ position: 'absolute', bottom: 0, right: -4, width: 7, height: 7, borderRadius: '50%', background: r.accentColor, zIndex: 2 }} />
                </div>
                <h3 style={{ fontSize: 15, fontWeight: 600, color: '#1a3535', marginBottom: 10, lineHeight: 1.3 }}>{r.name}</h3>
                <p style={{ fontSize: 13, color: '#7a9090', lineHeight: 1.72, maxWidth: 260, margin: 0 }}>{r.text}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default ReviewsSection;