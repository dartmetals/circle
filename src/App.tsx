import { useEffect, useState, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import HeroSection from "./components/Herosection";
import InternshipSection from "./components/InternshipSection";
import StudyAbroadSection from "./components/StudyAbroadSection";
import About from "./components/Aboutsection";
import CTASection from "./components/ContactSection";
import SuccessStories from "./components/SuccessStories";
import FooterSection from "./components/FooterSection";
import SyllabusSection from "./components/TrainingSection";
import CoursesSection from "./components/CourseSection";
import ReviewsSection from "./components/StudyAbroadSection";
import ContactAndFooter from "./components/Aboutsection";

// Define types for section objects
interface Section {
  id: number;
  component: string;
  color: string;
}

// ================= HOME PAGE =================
const HomePage = () => {
  const [scrollY, setScrollY] = useState<number>(0);
  const [heroCompleted, setHeroCompleted] = useState<boolean>(false);
  const [sectionHeights, setSectionHeights] = useState<number[]>([]);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const sections: Section[] = [
    { id: 1, component: "training", color: "#4ecdc4" },
    { id: 2, component: "internship", color: "#1a535c" },
    { id: 3, component: "abroad", color: "#ffe66d" },
    { id: 4, component: "about", color: "#ff6b6b" },
  ];

  // Measure section heights after they render
  useEffect(() => {
    const heights = sectionRefs.current.map(ref => ref?.offsetHeight || window.innerHeight);
    setSectionHeights(heights);
  }, []);

  // SCROLL LISTENER
  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrollY(y);

      const heroHeight = window.innerHeight;
      if (y >= heroHeight) {
        setHeroCompleted(true);
      } else {
        setHeroCompleted(false);
      }
    };

    const handleResize = () => {
      setSectionHeights(sectionRefs.current.map(ref => ref?.offsetHeight || window.innerHeight));
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // STACKING TRANSLATE - using actual section heights
  const getTranslate = (index: number): number => {
    if (!heroCompleted) return 0;

    // Calculate total height of all previous sections
    let totalPreviousHeight = 0;
    for (let i = 0; i < index; i++) {
      totalPreviousHeight += sectionHeights[i] || window.innerHeight;
    }
    
    const adjustedScrollY = Math.max(0, scrollY - window.innerHeight);
    const progress = adjustedScrollY - totalPreviousHeight;
    const currentHeight = sectionHeights[index] || window.innerHeight;

    return -Math.max(0, Math.min(progress, currentHeight));
  };

  // Calculate border radius based on scroll progress
  const getBorderRadius = (index: number): string => {
    // Calculate total height of all previous sections
    let totalPreviousHeight = 0;
    for (let i = 0; i < index; i++) {
      totalPreviousHeight += sectionHeights[i] || window.innerHeight;
    }
    
    const adjustedScrollY = Math.max(0, scrollY - window.innerHeight);
    const progress = adjustedScrollY - totalPreviousHeight;
    const currentHeight = sectionHeights[index] || window.innerHeight;
    const scrollPercent = Math.min(1, Math.max(0, progress / currentHeight));
    
    const radius = Math.floor(scrollPercent * 80);
    return `0 0 ${radius}px ${radius}px`;
  };

  // RENDER SECTIONS WITH PROGRESS
  const renderSectionContent = (sec: Section, index: number) => {
    // Calculate total height of all previous sections
    let totalPreviousHeight = 0;
    for (let i = 0; i < index; i++) {
      totalPreviousHeight += sectionHeights[i] || window.innerHeight;
    }
    
    // const adjustedScrollY = Math.max(0, scrollY - window.innerHeight);
    // const progress = (adjustedScrollY - totalPreviousHeight) / (sectionHeights[index] || window.innerHeight);

    switch (sec.component) {
      case "training":
        return <SyllabusSection />;

      case "internship":
        return <CoursesSection />;

      case "abroad":
        return <ReviewsSection />;

      case "about":
        return <ContactAndFooter/>;

      default:
        return null;
    }
  };

  // Calculate total height for container
  const totalHeight = sectionHeights.reduce((sum, height) => sum + height, 0);

  return (
    <>
      {/* HEADER + HERO */}
      <div style={{ position: "relative", zIndex: 1000 }}>
        <Header />
        <HeroSection />
      </div>

      {/* STACKING SECTIONS */}
      <div
        style={{
          height: `${totalHeight}px`,
          position: "relative",
        }}
      >
        <style>{`
          body {
            margin: 0;
            font-family: Arial, sans-serif;
            background: #111;
            height: 100%; 
          }

          body::-webkit-scrollbar {
            display: none;
          }

          .section {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: auto;
            overflow-y: visible;
            overflow-x: hidden;
            transition: border-radius 0.15s linear, transform 0.25s linear;
          }
          
          .section-content {
            width: 100%;
            height: auto;
          }
        `}</style>

        {sections.map((sec: Section, index: number) => (
          <div
            key={sec.id}
            ref={(el) => { sectionRefs.current[index] = el; }}
            className="section"
            style={{
              background: sec.color,
              zIndex: sections.length - index,
              transform: `translateY(${getTranslate(index)}px)`,
              borderRadius: getBorderRadius(index),
            }}
          >
            <div className="section-content">
              {renderSectionContent(sec, index)}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

// ================= ROUTES =================
const AboutPage = () => (
  <>
    <Header />
    <div className="pt-20">
      <About />
    </div>
    <FooterSection />
  </>
);

const ContactPage = () => (
  <>
    <Header />
    <div className="pt-20">
      <CTASection />
    </div>
    <FooterSection />
  </>
);

const StoriesPage = () => (
  <>
    <Header />
    <div className="pt-20">
      <SuccessStories />
    </div>
    <FooterSection />
  </>
);

// const TrainingPage = () => (
//   <>
//     <Header />
//     <div className="pt-20">
//       <SyllabusSection/>
//     </div>
//     <FooterSection />
//   </>
// );

const InternshipPage = () => {
  return (
    <>
      <Header />
      <div className="pt-20">
        <InternshipSection progress={1} />
      </div>
      <FooterSection />
    </>
  );
};

const StudyAbroadPage = () => (
  <>
    <Header />
    <div className="pt-20">
      <StudyAbroadSection />
    </div>
    <FooterSection />
  </>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/stories" element={<StoriesPage />} />
        <Route path="/training" element={<SyllabusSection />} />
        <Route path="/internship" element={<InternshipPage />} />
        <Route path="/study-abroad" element={<StudyAbroadPage />} />
      </Routes>
    </Router>
  );
}

export default App;