const ServicesMarquee = () => {
  const services = [
    { name: "IT Trainings", icon: "💻" },
    { name: "CV Marketing", icon: "📊" },
    { name: "Placement Support", icon: "🎯" },
    { name: "On Job Support", icon: "🛠️" },
    { name: "Internship Placement", icon: "🎓" },
    { name: "CV Preparation", icon: "📝" },
    { name: "Career Counseling", icon: "🎯" },
    { name: "Mock Interviews", icon: "🎤" },
  ];

  // Duplicate the services array for seamless scrolling
  const scrollingServices = [...services, ...services, ...services];

  return (
    <section className="w-full bg-[#0A0F2E]  py-2 overflow-hidden">
      <div className="relative">
        {/* Left Gradient Fade */}
        {/* <div className="absolute left-0 top-0 bottom-0 w-20 md:w-12 bg-gradient-to-r from-[#0A0F2E] to-transparent z-10"></div> */}
        
        {/* Right Gradient Fade */}
        {/* <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-[#0A0F2E] to-transparent z-10"></div> */}
        
        {/* Scrolling Container */}
        <div className="flex animate-scroll">
          {scrollingServices.map((service, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-8   transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <div className="flex items-center gap-2 md:gap-3">
                <span className="text-xl md:text-2xl">{service.icon}</span>
                <span className="text-white font-semibold text-sm md:text-base lg:text-lg whitespace-nowrap">
                  {service.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CSS Animation */}
      <style >{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }
        
        .animate-scroll {
          animation: scroll 60s linear infinite;
          width: max-content;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default ServicesMarquee;