import React from 'react';

const WorkProcess = () => {
  const processSteps = [
    {
      icon: "📚",
      title: "Training",
      description: "Comprehensive training programs designed by industry experts to build strong technical foundations.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: "🎤",
      title: "Mock Interviews",
      description: "Realistic interview simulations with expert feedback to boost confidence and communication skills.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: "📝",
      title: "CV Preparation",
      description: "Professional CV writing and optimization services to highlight your strengths to top recruiters.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: "🎯",
      title: "Job Placement Support",
      description: "End-to-end placement assistance connecting you with top UK companies.",
      color: "from-green-500 to-teal-500"
    }
  ];

  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header - One Line Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Our Work
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#0066FF]">
              {" "}Process
            </span>
          </h2>
        </div>

        {/* Horizontal Flowchart */}
        <div className="relative">
          {/* Desktop Flowchart - Horizontal */}
          <div className="hidden md:block">
            <div className="flex items-start justify-between">
              {processSteps.map((step, index) => (
                <React.Fragment key={index}>
                  {/* Step Card - No Border Radius */}
                  <div className="flex-1 relative group">
                    <div className="relative  transition-all duration-300 p-2  hover:-translate-y-2">
                      {/* Content */}
                      <div className="text-center">
                        {/* Logo with Border Radius */}
                        <div className={`w-20 h-20 mx-auto bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                          {step.icon}
                        </div>
                        
                        {/* Horizontal Line */}
                        {/* <div className="w-12 h-0.5 bg-gradient-to-r from-[#00D4FF] to-[#0066FF] mx-auto mb-4"></div> */}
                        
                        {/* Title and Small Para */}
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Horizontal Line Between Steps - No Border Radius */}
                  {index < processSteps.length - 1 && (
                    <div className="flex-shrink-0 w-16 mx-2">
                      <div className="w-full h-0.5 bg-gradient-to-r from-[#00D4FF] to-[#0066FF] mt-10"></div>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Mobile Flowchart - Vertical */}
          <div className="md:hidden">
            <div className="flex flex-col items-center gap-6">
              {processSteps.map((step, index) => (
                <React.Fragment key={index}>
                  {/* Step Card - No Border Radius */}
                  <div className="w-full relative group">
                    <div className="relative bg-white shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100">
                      {/* Content */}
                      <div className="text-center">
                        {/* Logo with Border Radius */}
                        <div className={`w-20 h-20 mx-auto bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                          {step.icon}
                        </div>
                        
                        {/* Horizontal Line */}
                        <div className="w-12 h-0.5 bg-gradient-to-r from-[#00D4FF] to-[#0066FF] mx-auto mb-4"></div>
                        
                        {/* Title and Small Para */}
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Horizontal Line Between Steps - Vertical Flow */}
                  {index < processSteps.length - 1 && (
                    <div className="relative w-0.5 h-12 bg-gradient-to-b from-[#00D4FF] to-[#0066FF]"></div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;