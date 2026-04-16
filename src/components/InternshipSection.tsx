// import React, { useState, useEffect, useRef } from 'react';

// const InternshipSection = () => {
//   const [activeSlide, setActiveSlide] = useState(0);
//   const [scrollY, setScrollY] = useState(0);
//   const [opacity, setOpacity] = useState(0);
//   const [translateY, setTranslateY] = useState(100);
//   const sectionRef = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);

//   const internshipHighlights = [
//     {
//       icon: "🎓",
//       title: "Paid Internships",
//       description: "Earn while you learn with our paid internship programs at top UK companies."
//     },
//     {
//       icon: "📋",
//       title: "Real Projects",
//       description: "Work on live industry projects and build a portfolio that stands out."
//     },
//     {
//       icon: "👨‍🏫",
//       title: "Expert Mentorship",
//       description: "Get guidance from industry professionals throughout your internship journey."
//     },
//     {
//       icon: "🎯",
//       title: "Placement Opportunity",
//       description: "High chances of full-time employment after successful internship completion."
//     }
//   ];

//   const internshipImages = [
//     {
//       url: "/internship-1.jpg",
//       alt: "Students working on projects",
//       caption: "Hands-on Training"
//     },
//     {
//       url: "/internship-2.jpg",
//       alt: "Team collaboration",
//       caption: "Team Collaboration"
//     },
//     {
//       url: "/internship-3.jpg",
//       alt: "Mentorship session",
//       caption: "Expert Mentorship"
//     }
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;
//       setScrollY(currentScrollY);
      
//       if (sectionRef.current) {
//         const sectionTop = sectionRef.current.offsetTop;
//         const windowHeight = window.innerHeight;

//         const trainingSection = document.querySelector('.section');
//         if (trainingSection) {
//           const trainingRect = trainingSection.getBoundingClientRect();
//           const trainingHeight = trainingRect.height;
//           const trainingVisiblePart = (windowHeight - trainingRect.top) / trainingHeight;

//           if (trainingVisiblePart > 0.5) {
//             setIsVisible(true);
//             const progress = Math.min(1, Math.max(0, (trainingVisiblePart - 0.5) / 0.5));
//             setOpacity(progress);
//             setTranslateY(100 - (progress * 100));
//           } else {
//             setIsVisible(false);
//             setOpacity(0);
//             setTranslateY(100);
//           }
//         }
//       }
//     };
    
//     window.addEventListener("scroll", handleScroll);
//     handleScroll();
    
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Auto-rotate images
//   React.useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveSlide((prev) => (prev + 1) % internshipImages.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [internshipImages.length]);

//   const nextSlide = () => {
//     setActiveSlide((prev) => (prev + 1) % internshipImages.length);
//   };

//   const prevSlide = () => {
//     setActiveSlide((prev) => (prev - 1 + internshipImages.length) % internshipImages.length);
//   };

//   return (
//     <div 
//       ref={sectionRef}
//       className="w-full bg-white"
//       style={{
//         opacity: opacity,
//         transform: `translateY(${translateY}px)`,
//         transition: 'opacity 0.3s ease-out, transform 0.3s ease-out',
//         display: opacity === 0 && !isVisible ? 'none' : 'block'
//       }}
//     >
//       <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
//         {/* Main Content Grid - Left Image | Right Content */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
//           {/* Left Side - Image Slider */}
//           <div className="relative">
//             <div className="relative rounded-2xl overflow-hidden shadow-2xl">
//               <div className="relative h-[400px] md:h-[450px]">
//                 {internshipImages.map((image, idx) => (
//                   <div
//                     key={idx}
//                     className={`absolute inset-0 transition-opacity duration-500 ${
//                       activeSlide === idx ? 'opacity-100' : 'opacity-0'
//                     }`}
//                   >
//                     <img
//                       src={image.url}
//                       alt={image.alt}
//                       className="w-full h-full object-cover"
//                     />
//                     <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
//                       <p className="text-white font-semibold">{image.caption}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               <button
//                 onClick={prevSlide}
//                 className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition duration-300"
//               >
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//                 </svg>
//               </button>
//               <button
//                 onClick={nextSlide}
//                 className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition duration-300"
//               >
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                 </svg>
//               </button>

//               <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex gap-2">
//                 {internshipImages.map((_, idx) => (
//                   <button
//                     key={idx}
//                     onClick={() => setActiveSlide(idx)}
//                     className={`w-2 h-2 rounded-full transition-all duration-300 ${
//                       activeSlide === idx ? 'bg-[#00D4FF] w-6' : 'bg-white/60'
//                     }`}
//                   />
//                 ))}
//               </div>
//             </div>

//             <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#00D4FF]/10 rounded-full blur-2xl -z-10"></div>
//             <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#0066FF]/10 rounded-full blur-2xl -z-10"></div>
//           </div>

//           {/* Right Side - Content */}
//           <div>
//             {/* Badge */}
//             <div className="inline-flex items-center gap-2 bg-[#00D4FF]/10 px-4 py-2 rounded-full mb-6">
//               <span className="text-[#00D4FF] font-semibold text-sm">🚀 Limited Seats Available</span>
//             </div>

//             {/* Title */}
//             <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
//               Start Your Professional Journey With Us
//             </h3>

//             {/* Description */}
//             <p className="text-sm text-gray-600 leading-relaxed mb-6">
//               Our internship program bridges the gap between academic learning and industry requirements. 
//               We partner with top UK companies to provide you with hands-on experience in your chosen field.
//             </p>

//             {/* Highlights Grid */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
//               {internshipHighlights.map((item, idx) => (
//                 <div key={idx} className="flex items-start gap-3 group">
//                   <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-[#00D4FF]/10 to-[#0066FF]/10 rounded-lg flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300">
//                     {item.icon}
//                   </div>
//                   <div>
//                     <h4 className="text-gray-900 font-semibold text-base mb-1">
//                       {item.title}
//                     </h4>
//                     <p className="text-gray-500 text-sm leading-relaxed">
//                       {item.description}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InternshipSection;



import { useState, useEffect } from "react";

const InternshipSection = ({ progress = 0 }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [contentOpacity, setContentOpacity] = useState(0);
  const [contentTranslate, setContentTranslate] = useState(100);

  const internshipHighlights = [
    {
      icon: "🎓",
      title: "Paid Internships",
      description:
        "Earn while you learn with our paid internship programs at top UK companies.",
    },
    {
      icon: "📋",
      title: "Real Projects",
      description:
        "Work on live industry projects and build a portfolio that stands out.",
    },
    {
      icon: "👨‍🏫",
      title: "Expert Mentorship",
      description:
        "Get guidance from industry professionals throughout your internship journey.",
    },
    {
      icon: "🎯",
      title: "Placement Opportunity",
      description:
        "High chances of full-time employment after successful internship completion.",
    },
  ];

  const internshipImages = [
    {
      url: "/internship-1.jpg",
      alt: "Students working on projects",
      caption: "Hands-on Training",
    },
    {
      url: "/internship-2.jpg",
      alt: "Team collaboration",
      caption: "Team Collaboration",
    },
    {
      url: "/internship-3.jpg",
      alt: "Mentorship session",
      caption: "Expert Mentorship",
    },
  ];

  // Update animations based on progress
  useEffect(() => {
    if (progress >= 0.7) {
      // When previous section is scrolled to 70%, content starts appearing
      const moveProgress = Math.min(1, (progress - 0.5) / 0.3);
      setContentOpacity(moveProgress);
      setContentTranslate(100 - (moveProgress * 100));
    } else {
      setContentOpacity(0);
      setContentTranslate(100);
    }
  }, [progress]);

  // AUTO SLIDER
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % internshipImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % internshipImages.length);
  };

  const prevSlide = () => {
    setActiveSlide(
      (prev) => (prev - 1 + internshipImages.length) % internshipImages.length
    );
  };

  return (
    <div className="w-full bg-white min-h-screen">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* Mobile: Content first, Image below */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* RIGHT: CONTENT - Shown first on mobile (order-1), second on desktop */}
          <div
            className="order-1 lg:order-2"
            style={{
              opacity: contentOpacity,
              transform: `translateY(${contentTranslate}px)`,
              transition: "opacity 0.3s ease-out, transform 0.3s ease-out",
            }}
          >
            <div className="inline-flex items-center gap-2 bg-cyan-100 px-4 py-2 rounded-full mb-6">
              <span className="text-cyan-600 font-semibold text-sm">
                🚀 Limited Seats Available
              </span>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Start Your Professional Journey With Us
            </h3>

            <p className="text-sm text-gray-600 mb-6">
              Our internship program bridges the gap between academic learning
              and industry requirements. We partner with top UK companies to
              provide you with hands-on experience in your chosen field.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {internshipHighlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 group">
                  <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* LEFT: IMAGE - Shown second on mobile (order-2), first on desktop */}
          <div className="relative sticky top-24 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="relative h-[400px] md:h-[450px]">
                {internshipImages.map((image, idx) => (
                  <div
                    key={idx}
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      activeSlide === idx ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <img
                      src={image.url}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <p className="text-white font-semibold">
                        {image.caption}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* ARROWS */}
              <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
              >
                ‹
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
              >
                ›
              </button>

              {/* DOTS */}
              <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-2">
                {internshipImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveSlide(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      activeSlide === idx ? "bg-cyan-400 w-6" : "bg-white/60"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternshipSection;