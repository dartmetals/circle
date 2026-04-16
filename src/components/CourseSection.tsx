import { useRef, useState } from 'react';
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
      initial={{ opacity: 0, y: 38, x }}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration: 0.75, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  );
};

/* ── Course Card Illustrations ──────────────────────────── */
const ClockIllustration = () => (
  <svg viewBox="0 0 140 120" width="140" height="120" fill="none">
    <circle cx="70" cy="68" r="44" stroke="#b0cccaa" strokeWidth="2" fill="rgba(168,210,205,0.1)" />
    <circle cx="70" cy="68" r="44" stroke="#b0d0cc" strokeWidth="2" fill="none" />
    <circle cx="70" cy="68" r="33" stroke="#c8e0dc" strokeWidth="1.4" fill="none" />
    <line x1="70" y1="28" x2="70" y2="36" stroke="#8ab8b0" strokeWidth="2" strokeLinecap="round" />
    <line x1="70" y1="100" x2="70" y2="108" stroke="#8ab8b0" strokeWidth="2" strokeLinecap="round" />
    <line x1="30" y1="68" x2="38" y2="68" stroke="#8ab8b0" strokeWidth="2" strokeLinecap="round" />
    <line x1="102" y1="68" x2="110" y2="68" stroke="#8ab8b0" strokeWidth="2" strokeLinecap="round" />
    <line x1="70" y1="68" x2="70" y2="44" stroke="#2a7a70" strokeWidth="2.4" strokeLinecap="round" />
    <line x1="70" y1="68" x2="88" y2="58" stroke="#e8a060" strokeWidth="2.4" strokeLinecap="round" />
    <circle cx="70" cy="68" r="3.5" fill="#2a7a70" />
    <circle cx="108" cy="30" r="5.5" fill="#e8c49e" opacity="0.8" />
    <circle cx="122" cy="44" r="3.5" fill="#c8a878" opacity="0.6" />
    <circle cx="20"  cy="50" r="3"   fill="#b0d0cc" opacity="0.5" />
  </svg>
);

const ProgrammingIllustration = () => (
  <svg viewBox="0 0 140 120" width="140" height="120" fill="none">
    <rect x="16" y="14" width="100" height="72" rx="7" fill="#e8f0ee" />
    <rect x="22" y="20" width="88" height="58" rx="4" fill="#d0e8e4" />
    <rect x="28" y="28" width="30" height="4" rx="2" fill="#2a7a70" opacity="0.7" />
    <rect x="28" y="36" width="48" height="3" rx="1" fill="#5aaa98" opacity="0.5" />
    <rect x="28" y="43" width="38" height="3" rx="1" fill="#5aaa98" opacity="0.4" />
    <rect x="28" y="50" width="54" height="3" rx="1" fill="#2a7a70" opacity="0.5" />
    <rect x="28" y="57" width="32" height="3" rx="1" fill="#5aaa98" opacity="0.4" />
    <rect x="28" y="64" width="44" height="3" rx="1" fill="#5aaa98" opacity="0.35" />
    <rect x="58" y="86" width="22" height="5"  rx="2" fill="#d0bfa0" />
    <rect x="44" y="91" width="50" height="4"  rx="2" fill="#c0ae90" />
    <rect x="82" y="22" width="26" height="22" rx="4" fill="#d4b892" opacity="0.7" />
    <rect x="86" y="48" width="20" height="20" rx="4" fill="#c4a870" opacity="0.6" />
    <rect x="90" y="26" width="6" height="14" rx="2" fill="rgba(255,255,255,0.5)" />
    <rect x="98" y="26" width="6" height="10" rx="2" fill="rgba(255,255,255,0.4)" />
    <circle cx="122" cy="14" r="4" fill="#2a9888" opacity="0.5" />
  </svg>
);

const SEOIllustration = () => (
  <svg viewBox="0 0 140 120" width="140" height="120" fill="none">
    <circle cx="80" cy="68" r="40" fill="rgba(200,220,216,0.15)" stroke="#c0d8d0" strokeWidth="1.4" />
    <path d="M80 68 L80 28 A40 40 0 0 1 120 68 Z" fill="#2a8a7a" opacity="0.62" />
    <path d="M80 68 L120 68 A40 40 0 0 1 80 108 Z" fill="#e8c080" opacity="0.68" />
    <path d="M80 68 L80 108 A40 40 0 0 1 40 68 Z" fill="#c4b8e0" opacity="0.58" />
    <path d="M80 68 L40 68 A40 40 0 0 1 80 28 Z" fill="#f0a878" opacity="0.52" />
    <circle cx="80" cy="68" r="14" fill="#fdf8f0" />
    <circle cx="24" cy="28" r="4" fill="#2a8a7a" opacity="0.7" />
    <circle cx="24" cy="42" r="4" fill="#e8c080" opacity="0.7" />
    <circle cx="24" cy="56" r="4" fill="#c4b8e0" opacity="0.7" />
    <circle cx="30" cy="90" r="12" stroke="#4a8a80" strokeWidth="1.8" fill="rgba(168,210,205,0.15)" />
    <line x1="38" y1="98" x2="46" y2="106" stroke="#4a8a80" strokeWidth="2.2" strokeLinecap="round" />
    <circle cx="118" cy="22" r="3.5" fill="#e8c080" opacity="0.6" />
  </svg>
);

interface Course {
  tag: string;
  title: string;
  illustration: React.ReactNode;
}

interface CourseCardProps {
  tag: string;
  title: string;
  illustration: React.ReactNode;
  delay: number;
}

const courses: Course[] = [
  {
    tag: 'DESIGN',
    title: 'How to make a quality site in WordPress in 40 hours without experience',
    illustration: <ClockIllustration />,
  },
  {
    tag: 'PROGRAMMING',
    title: 'WordPress: How to start in a developer without any basic knowledge',
    illustration: <ProgrammingIllustration />,
  },
  {
    tag: 'SEO',
    title: 'Creating dynamic sites with CMS WordPress + SEO for WordPress websites',
    illustration: <SEOIllustration />,
  },
];

/* ── Course Card ────────────────────────────────────────── */
const CourseCard = ({ tag, title, illustration, delay }: CourseCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, scale: 0.96 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.72, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -8, boxShadow: '0 22px 48px rgba(0,0,0,0.2)' }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      style={{
        background: isHovered ? '#ffffff' : '#f1e5d0',
        borderRadius: 18,
        padding: '22px 20px 18px',
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden',
        transition: 'box-shadow 0.3s, background 0.3s',
      }}
    >
      {/* Oval shape hover effect - bottom to top */}
      <motion.div
        animate={{ scaleY: isHovered ? 1 : 0 }}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '100%',
          background: '#ffffff',
          borderRadius: '50% 50% 0 0',
          transformOrigin: 'bottom',
          zIndex: 0,
        }}
      />
      
      {/* Content with relative z-index */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Tag */}
        <span style={{
          fontSize: 9.5,
          fontWeight: 700,
          letterSpacing: '0.16em',
          color: '#6a9898',
          textTransform: 'uppercase',
          fontFamily: "'DM Sans', sans-serif",
        }}>
          {tag}
        </span>

        {/* Title */}
        <h3 style={{
          fontSize: 13.5,
          fontWeight: 500,
          color: '#1a3535',
          lineHeight: 1.6,
          flex: 1,
          margin: 0,
          fontFamily: "'DM Sans', sans-serif",
        }}>
          {title}
        </h3>

        {/* Illustration */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', paddingTop: 4 }}>
          {illustration}
        </div>

        {/* Read more */}
        <div style={{
          borderTop: '1px solid rgba(0,0,0,0.07)',
          paddingTop: 12,
          display: 'flex',
          alignItems: 'center',
        }}>
          <motion.span
            style={{
              fontSize: 11,
              fontWeight: 700,
              color: '#2a8a78',
              letterSpacing: '0.06em',
              display: 'flex',
              alignItems: 'center',
              gap: 5,
              fontFamily: "'DM Sans', sans-serif",
              cursor: 'pointer',
            }}
            whileHover={{ gap: 10 }}
          >
            READ MORE →
          </motion.span>
        </div>
      </div>
    </motion.div>
  );
};

const CoursesSection = () => (
  <>
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=DM+Serif+Display:ital@0;1&display=swap');
      .courses-root * { box-sizing: border-box; }
    `}</style>

    <section
      className="courses-root"
      style={{
        background: 'linear-gradient(150deg, #1a7272 0%, #258f8f 32%, #c0a882 72%, #d8c09a 100%)',
        padding: '90px 56px',
        fontFamily: "'DM Sans', sans-serif",
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: 1140, margin: '0 auto' }}>

        {/* ── Header row ── */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginBottom: 48,
          gap: 40,
          flexWrap: 'wrap',
        }}>
          <FadeUp>
            <h2 style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: 'clamp(28px, 3.5vw, 44px)',
              fontWeight: 400,
              color: '#fff',
              lineHeight: 1.18,
              margin: 0,
              maxWidth: 420,
            }}>
              Professional courses<br />on creating websites
            </h2>
          </FadeUp>

          <FadeUp delay={0.18}>
            <p style={{
              fontSize: 13,
              color: 'rgba(255,255,255,0.65)',
              lineHeight: 1.75,
              maxWidth: 290,
              margin: 0,
              paddingTop: 6,
            }}>
              Our courses are complete professional courses of high quality that include a set of video lessons, practical and training materials.
            </p>
          </FadeUp>
        </div>

        {/* ── Cards grid ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 16,
        }}>
          {courses.map((c, i) => (
            <CourseCard key={c.tag} {...c} delay={0.1 + i * 0.15} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .courses-root section > div > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  </>
);

export default CoursesSection;