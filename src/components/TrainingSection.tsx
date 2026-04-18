import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface FadeUpProps {
  children: React.ReactNode;
  delay?: number;
  x?: number;
}

const FadeUp = ({ children, delay = 0, x = 0 }: FadeUpProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36, x }}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration: 0.75, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  );
};

const SyllabusIllustration = () => (
  <svg viewBox="0 0 340 320" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', maxWidth: 320 }}>
    <ellipse cx="165" cy="310" rx="80" ry="9" fill="rgba(0,0,0,0.07)" />
    <ellipse cx="155" cy="235" rx="88" ry="70" fill="#e8d8c4" />
    <ellipse cx="155" cy="215" rx="78" ry="58" fill="#f0e4d0" />
    <ellipse cx="105" cy="272" rx="28" ry="16" fill="#2a2a28" opacity="0.85" />
    <ellipse cx="96"  cy="262" rx="12" ry="10" fill="#2a2a28" opacity="0.85" />
    <ellipse cx="114" cy="260" rx="10" ry="9"  fill="#2a2a28" opacity="0.85" />
    <polygon points="88,255 93,244 98,255" fill="#2a2a28" opacity="0.85" />
    <polygon points="110,253 114,243 119,253" fill="#2a2a28" opacity="0.85" />
    <circle cx="95"  cy="258" r="1.5" fill="#8ab8b0" />
    <circle cx="112" cy="257" r="1.5" fill="#8ab8b0" />
    <rect x="128" y="218" width="150" height="10" rx="5" fill="#c8b090" />
    <rect x="138" y="228" width="8"   height="60" rx="4" fill="#b8a080" />
    <rect x="262" y="228" width="8"   height="60" rx="4" fill="#b8a080" />
    <rect x="148" y="196" width="120" height="26" rx="6" fill="#ddd0b8" />
    <rect x="153" y="200" width="110" height="20" rx="4" fill="rgba(42,140,130,0.55)" />
    <rect x="158" y="204" width="48" height="3" rx="1" fill="rgba(255,255,255,0.65)" />
    <rect x="158" y="210" width="36" height="2" rx="1" fill="rgba(255,255,255,0.4)" />
    <rect x="200" y="208" width="6"  height="8"  rx="1" fill="rgba(255,255,255,0.5)" />
    <rect x="208" y="205" width="6"  height="11" rx="1" fill="rgba(255,255,255,0.5)" />
    <rect x="216" y="207" width="6"  height="9"  rx="1" fill="rgba(255,255,255,0.5)" />
    <polyline points="200,212 210,208 220,210" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" fill="none" />
    <ellipse cx="178" cy="158" rx="22" ry="24" fill="#f2dfc0" />
    <ellipse cx="178" cy="143" rx="22" ry="14" fill="#3a3028" />
    <ellipse cx="178" cy="132" rx="12" ry="10" fill="#3a3028" />
    <circle  cx="178" cy="128" r="8"           fill="#3a3028" />
    <circle cx="170" cy="160" r="2" fill="#d09860" opacity="0.7" />
    <circle cx="184" cy="160" r="2" fill="#d09860" opacity="0.7" />
    <path d="M172 167 Q178 171 184 167" stroke="#c08860" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    <path d="M156 183 Q156 172 178 169 Q200 172 200 183 L204 220 L152 220 Z" fill="#3a6898" />
    <path d="M163 176 Q170 188 178 188 Q186 188 193 176" stroke="#2a5888" strokeWidth="1.5" fill="none" />
    <path d="M156 185 Q138 200 128 210" stroke="#f2dfc0" strokeWidth="13" strokeLinecap="round" fill="none" />
    <path d="M200 185 Q215 196 225 195" stroke="#f2dfc0" strokeWidth="13" strokeLinecap="round" fill="none" />
    <rect x="112" y="198" width="28" height="22" rx="3" fill="#e8d0b0" />
    <rect x="115" y="201" width="22" height="16" rx="2" fill="#c0d8d0" opacity="0.7" />
    <rect x="278" y="208" width="16" height="14" rx="3" fill="#e8d8b8" />
    <path d="M294 211 Q302 211 302 215 Q302 219 294 219" stroke="#d0b888" strokeWidth="1.8" fill="none" strokeLinecap="round" />
    <path d="M295 290 L318 278 L312 300 Z" fill="#2a9888" opacity="0.55" />
  </svg>
);

interface NumIconProps {
  num: string;
  icon: React.ReactNode;
}

const NumIcon = ({ num, icon }: NumIconProps) => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',
    width: 36, height: 36, borderRadius: '50%',
    background: 'rgba(42,152,136,0.12)', border: '1.5px solid rgba(42,152,136,0.3)',
    flexShrink: 0, position: 'relative' }}>
    {icon}
    <span style={{ position: 'absolute', top: -8, left: -8, fontSize: 9, fontWeight: 700,
      color: '#2a9888', letterSpacing: '0.05em',
      background: '#f5ede0', padding: '1px 3px', borderRadius: 4 }}>
      {num}
    </span>
  </div>
);

const syllabusItems = [
  {
    num: '01',
    title: 'Videos from professionals',
    text: 'Our specialists will help you create any website. With our help, you can handle any task, also you get a personalized consultation. Learn from industry experts through high-quality video tutorials',
    icon: (
      <svg width="18" height="18" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="8" stroke="#2a9888" strokeWidth="1.7" fill="none" />
        <polygon points="9,8 16,11 9,14" fill="#2a9888" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Practical independent work',
    text: 'Learn how to organize your website, create engaging content, protect your site, and achieve search engine rankings. Work on hands-on projects that simulate real-world scenarios.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 22 22" fill="none">
        <rect x="3" y="3" width="16" height="16" rx="3" stroke="#2a9888" strokeWidth="1.7" fill="none" />
        <path d="M7 11 L10 14 L15 8" stroke="#2a9888" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Feedback from specialists',
    text: 'Structure and visualize new knowledge. You send the practical work to the reviewing specialists and receive individual feedback.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="8" r="4" stroke="#2a9888" strokeWidth="1.7" fill="none" />
        <path d="M4 19 Q4 14 11 14 Q18 14 18 19" stroke="#2a9888" strokeWidth="1.7" strokeLinecap="round" fill="none" />
      </svg>
    ),
  },
];

/* ── Mobile/Tablet Version ── */
const SyllabusSectionMobile = () => (
  <section style={{
    background: 'linear-gradient(180deg, #f5ede0 0%, #fdf8f0 50%, #eef4f0 100%)',
    padding: '60px 24px',
    fontFamily: "'DM Sans', sans-serif",
    minHeight: '100vh',
    height: 'auto',
    width: '100%',
  }}>
    <div style={{ maxWidth: 1140, margin: '0 auto', width: '100%' }}>
      <h2 style={{
        fontFamily: "'DM Serif Display', Georgia, serif",
        fontSize: 'clamp(28px, 3.2vw, 42px)',
        fontWeight: 400, color: '#1a3535', lineHeight: 1.2,
        marginBottom: 44, textAlign: 'center',
      }}>Syllabus of courses</h2>

      <div style={{ position: 'relative' }}>
        <div style={{
          position: 'absolute', left: 18, top: 36, bottom: 36,
          width: 1, borderLeft: '1.5px dashed rgba(42,152,136,0.25)', zIndex: 0,
        }} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 36, position: 'relative', zIndex: 1 }}>
          {syllabusItems.map((item) => (
            <div key={item.num} style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>
              <NumIcon num={item.num} icon={item.icon} />
              <div>
                <h3 style={{ fontSize: 15, fontWeight: 600, color: '#1a3535', marginBottom: 7, lineHeight: 1.3 }}>{item.title}</h3>
                <p style={{ fontSize: 13, color: '#7a9090', lineHeight: 1.72, maxWidth: 340, margin: 0 }}>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginTop: 50 }}><SyllabusIllustration /></div>
    </div>
  </section>
);

/* ── Desktop Version ── */
const SyllabusSectionDesktop = () => {
  const [contentOpacity, setContentOpacity] = useState<number>(0);
  const [contentTranslate, setContentTranslate] = useState<number>(200);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight;
      const heroProgress = Math.min(1, Math.max(0, scrollY / heroHeight));
      if (heroProgress > 0.3) {
        const p = Math.min(1, (heroProgress - 0.3) / 0.7);
        setContentOpacity(p);
        setContentTranslate(200 - p * 200);
      } else {
        setContentOpacity(0);
        setContentTranslate(200);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=DM+Serif+Display:ital@0;1&display=swap');
        .syllabus-root-desktop * { box-sizing: border-box; }
        .syllabus-item-desktop { transition: transform 0.3s ease; }
        .syllabus-item-desktop:hover { transform: translateX(6px); }
      `}</style>

      <section
        ref={sectionRef}
        className="syllabus-root-desktop"
        style={{
          background: 'linear-gradient(180deg, #f5ede0 0%, #fdf8f0 50%, #eef4f0 100%)',
          padding: '90px 56px',
          fontFamily: "'DM Sans', sans-serif",
          overflow: 'hidden',
          position: 'relative',
          height: '100vh',
          boxSizing: 'border-box',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div style={{ position: 'absolute', top: 40, left: 20, width: 8, height: 8,
          borderRadius: '50%', border: '1.5px solid rgba(42,152,136,0.25)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: 80, right: 60, width: 6, height: 6,
          borderRadius: '50%', background: 'rgba(200,160,120,0.3)', pointerEvents: 'none' }} />

        <div style={{
          maxWidth: 1140, margin: '0 auto',
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: 80, alignItems: 'center', width: '100%',
        }}>
          <div>
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <SyllabusIllustration />
            </motion.div>
          </div>

          <div style={{
            opacity: contentOpacity,
            transform: `translateY(${contentTranslate}px)`,
            transition: 'opacity 0.3s ease-out, transform 0.3s ease-out',
          }}>
            <h2 style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: 'clamp(28px, 3.2vw, 42px)',
              fontWeight: 400, color: '#1a3535', lineHeight: 1.2,
              marginBottom: 44, textAlign: 'center',
            }}>Syllabus of courses</h2>

            <div style={{ position: 'relative' }}>
              <div style={{
                position: 'absolute', left: 18, top: 36, bottom: 36, width: 1,
                borderLeft: '1.5px dashed rgba(42,152,136,0.25)', zIndex: 0,
              }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 36, position: 'relative', zIndex: 1 }}>
                {syllabusItems.map((item, i) => (
                  <FadeUp key={item.num} delay={0.2 + i * 0.15} x={30}>
                    <div className="syllabus-item-desktop" style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>
                      <NumIcon num={item.num} icon={item.icon} />
                      <div>
                        <h3 style={{ fontSize: 15, fontWeight: 600, color: '#1a3535', marginBottom: 7, lineHeight: 1.3 }}>{item.title}</h3>
                        <p style={{ fontSize: 13, color: '#7a9090', lineHeight: 1.72, maxWidth: 340, margin: 0 }}>{item.text}</p>
                      </div>
                    </div>
                  </FadeUp>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

/* ── Main Component with Router ── */
const SyllabusSection = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 860);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);
  return isMobile ? <SyllabusSectionMobile /> : <SyllabusSectionDesktop />;
};

export default SyllabusSection;