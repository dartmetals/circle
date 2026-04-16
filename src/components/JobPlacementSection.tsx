const JobPlacementSection = () => {
  const placementStats = [
    {
      value: "500+",
      label: "Students Placed",
      icon: "🎓"
    },
    {
      value: "200+",
      label: "Partner Companies",
      icon: "🏢"
    },
    {
      value: "₹25LPA",
      label: "Highest Package",
      icon: "💰"
    },
    {
      value: "95%",
      label: "Placement Rate",
      icon: "📈"
    }
  ];

  const placementSteps = [
    {
      step: "01",
      title: "Skill Assessment",
      description: "Evaluate your current skills and identify areas for improvement."
    },
    {
      step: "02",
      title: "Resume Optimization",
      description: "Get your CV reviewed and optimized by industry experts."
    },
    {
      step: "03",
      title: "Interview Preparation",
      description: "Mock interviews and technical preparation sessions."
    },
    {
      step: "04",
      title: "Job Referrals",
      description: "Direct referrals to our partner companies for interviews."
    }
  ];

  const partnerCompanies = [
    "Google", "Microsoft", "Amazon", "Deloitte", "Accenture", "TCS", "Infosys", "Wipro"
  ];

  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        {/* <div className="text-center mb-12">
          <h4 className="text-[#00D4FF] font-semibold uppercase tracking-wider text-sm md:text-base mb-2">
            Job Placement
          </h4>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Your Dream Job Awaits
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#0066FF]">
              We Make It Happen
            </span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-base md:text-lg">
            Connect with top employers and land your dream job with our comprehensive placement support
          </p>
        </div> */}

        {/* Main Content Grid - Left Content | Right Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full mb-6">
              <span className="text-green-600 font-semibold text-sm">✨ 500+ Students Already Placed</span>
            </div>

            {/* Title */}
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              We Help You Land Your Dream Job at Top Companies
            </h3>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed mb-6">
              Our dedicated placement team works tirelessly to connect you with the best opportunities in the industry. 
              From resume building to interview preparation, we provide end-to-end support to ensure your success.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {placementStats.map((stat, index) => (
                <div key={index} className="bg-white rounded-xl p-4 text-center shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="text-2xl mb-2">{stat.icon}</div>
                  <p className="text-xl font-bold text-[#0066FF]">{stat.value}</p>
                  <p className="text-xs text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Placement Steps */}
            <div className="mb-8">
              <h4 className="text-lg font-bold text-gray-900 mb-4">Our Placement Process</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {placementSteps.map((step) => (
                  <div key={step.step} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-[#00D4FF] to-[#0066FF] rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {step.step}
                    </div>
                    <div>
                      <h5 className="text-gray-900 font-semibold text-sm">{step.title}</h5>
                      <p className="text-gray-500 text-xs">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <button className="px-8 py-3 bg-gradient-to-r from-[#00D4FF] to-[#0066FF] text-white font-semibold rounded-full hover:shadow-lg hover:shadow-[#00D4FF]/30 transition-all duration-300 transform hover:scale-105">
              Get Placement Assistance →
            </button>
          </div>

          {/* Right Side - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/job-placement.jpg" 
                alt="Students celebrating job placement"
                className="w-full h-auto object-cover"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent"></div>
            </div>

            {/* Floating Card - Partner Companies */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 max-w-[200px]">
              <p className="text-xs text-gray-500 mb-2">Hiring Partners</p>
              <div className="flex flex-wrap gap-2">
                {partnerCompanies.slice(0, 4).map((company, idx) => (
                  <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                    {company}
                  </span>
                ))}
                <span className="text-xs bg-[#00D4FF]/10 text-[#0066FF] px-2 py-1 rounded-full font-semibold">
                  +{partnerCompanies.length - 4} more
                </span>
              </div>
            </div>

            {/* Floating Card - Success Rate */}
            <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg p-4 text-center">
              <p className="text-2xl font-bold text-[#0066FF]">95%</p>
              <p className="text-xs text-gray-500">Placement Rate</p>
              <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
                <div className="bg-gradient-to-r from-[#00D4FF] to-[#0066FF] h-1.5 rounded-full w-[95%]"></div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#00D4FF]/10 rounded-full blur-2xl -z-10"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#0066FF]/10 rounded-full blur-2xl -z-10"></div>
          </div>
        </div>

        {/* Partner Companies Section */}
        {/* <div className="mt-16 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500 text-sm mb-6">Trusted by students placed at</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {partnerCompanies.map((company, index) => (
              <span key={index} className="text-gray-400 font-semibold text-lg hover:text-gray-600 transition-colors duration-300">
                {company}
              </span>
            ))}
          </div> */}
        {/* </div> */}
      </div>
    </section>
  );
};

export default JobPlacementSection;