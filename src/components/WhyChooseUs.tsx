const WhyChooseUs = () => {
  const features = [
    {
      icon: "🎓",
      title: "Expert Trainers",
      description: "Learn from industry professionals with years of hands-on experience in top tech companies."
    },
    {
      icon: "📊",
      title: "Practical Approach",
      description: "Real-world projects and hands-on training to prepare you for actual industry challenges."
    },
    {
      icon: "🎯",
      title: "Placement Guarantee",
      description: "Dedicated placement support with connections to 500+ top UK companies."
    },
    {
      icon: "💡",
      title: "24/7 Support",
      description: "Round-the-clock mentorship and support throughout your learning journey."
    }
  ];

  return (
    <section className="w-full py-5 px-4 sm:px-6 lg:px-8 bg-gray-900 flex justify-center">
      <div className="w-[80%] mt-8">
        {/* Tagline */}
        <div className="text-left mb-">
          <h4 className="text-[#00D4FF] font-semibold uppercase tracking-wider text-sm md:text-base">
            Why Choose Us
          </h4>
          {/* Title - 2 lines */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">
              We Are Here To
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#0066FF]">
                Grow Your Career
              </span>
            </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-left">
          {/* Left Side - Image */}
          <div className="relative">
            
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/why-choose-us.jpg" 
                alt="Why Choose Data Artisans"
                className="w-full h-auto object-cover"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#00D4FF]/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#0066FF]/10 rounded-full blur-2xl"></div>
          </div>

          {/* Right Side - Content */}
          <div>
            {/* Features Grid - 2 rows x 2 columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  {/* Icon - White, no color, no border radius */}
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  {/* Content */}
                  <div>
                    <h3 className="text-white font-bold text-lg mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;