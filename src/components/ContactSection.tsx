import { useState, type ChangeEvent, type FormEvent} from 'react';
import { Mail, MapPin, Phone, User, Mail as MailIcon, Phone as PhoneIcon, MessageSquare } from 'lucide-react';

const CTASection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  });

  const courses = [
    "IT Trainings",
    "CV Marketing",
    "Placement Support",
    "On Job Support",
    "Internship Placement",
    "CV Preparation",
    "Career Counseling",
    "Mock Interviews"
  ];

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for registering! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      course: '',
      message: ''
    });
  };

  return (
    <section className="w-full py-5 px-4 sm:px-6 lg:px-8 bg-gray-50 flex justify-center">
      <div className="w-[85%] md:w-[80%]">
        {/* Header Section - Reduced text sizes */}
        <div className="text-center mb-8 md:mb-10">
          <h4 className="text-[#00D4FF] font-semibold uppercase tracking-wider text-xs md:text-sm mb-1 md:mb-2">
            Get in Touch
          </h4>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">
            Ready to Start Your Journey?
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#0066FF]">
              Register Today
            </span>
          </h2>
          <p className="text-gray-600 mt-2 md:mt-3 max-w-2xl mx-auto text-sm md:text-base">
            Empower your journey with us. Register today to unlock exclusive opportunities and unparalleled support on your path to success.
          </p>
        </div>

        {/* Two Column Layout - Reduced gap */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* Left Side - Contact Details - Reduced padding and text sizes */}
          <div className="bg-gradient-to-br from-[#00D4FF] to-[#0066FF] rounded-xl md:rounded-2xl p-5 md:p-6 text-white">
            {/* Logo - Smaller */}
            <div className="mb-4 md:mb-5">
              <img
                src="/da-logo-removebg-preview.png"
                alt="Data Artisans Logo"
                className="w-32 md:w-40 h-auto object-contain"
              />
            </div>

            <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">Data Artisans</h3>
            <p className="text-white/80 text-xs md:text-sm mb-5 md:mb-6 leading-relaxed">
              Data Artisans is dedicated to crafting innovative, precise, and scalable solutions that empower businesses with data-driven insights.
            </p>

            {/* Contact Info - Reduced spacing */}
            <div className="space-y-4 md:space-y-5">
              {/* Phone */}
              <a
                href="tel:+441234567890"
                className="flex items-center gap-3 md:gap-4 group hover:translate-x-2 transition-transform duration-300"
              >
                <div className="w-9 h-9 md:w-10 md:h-10 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition">
                  <Phone size={16} className="text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm md:text-base">Phone</h4>
                  <p className="text-white/70 text-xs md:text-sm">+44 123 456 7890</p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:info@dataartisans.com"
                className="flex items-center gap-3 md:gap-4 group hover:translate-x-2 transition-transform duration-300"
              >
                <div className="w-9 h-9 md:w-10 md:h-10 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition">
                  <Mail size={16} className="text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm md:text-base">Email</h4>
                  <p className="text-white/70 text-xs md:text-sm">info@dataartisans.com</p>
                </div>
              </a>

              {/* Location */}
              <a
                href="https://www.google.com/maps/place/Data+Artisans+Limited/@51.5425872,0.0501553,17z/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 md:gap-4 group hover:translate-x-2 transition-transform duration-300"
              >
                <div className="w-9 h-9 md:w-10 md:h-10 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition">
                  <MapPin size={16} className="text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm md:text-base">Location</h4>
                  <p className="text-white/70 text-xs md:text-sm">London, UK</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right Side - Registration Form - Reduced padding and text sizes */}
          <div className="bg-white rounded-xl md:rounded-2xl shadow-xl p-5 md:p-6">
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 md:mb-5">Register Now</h3>
            
            <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
              {/* Name Field */}
              <div>
                <label className="block text-gray-700 font-medium text-sm md:text-base mb-1">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full pl-9 pr-3 py-2 text-sm md:text-base border border-gray-300 rounded-lg focus:outline-none focus:border-[#00D4FF] focus:ring-2 focus:ring-[#00D4FF]/20 transition"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-gray-700 font-medium text-sm md:text-base mb-1">Email Address</label>
                <div className="relative">
                  <MailIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-9 pr-3 py-2 text-sm md:text-base border border-gray-300 rounded-lg focus:outline-none focus:border-[#00D4FF] focus:ring-2 focus:ring-[#00D4FF]/20 transition"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              {/* Phone Field */}
              <div>
                <label className="block text-gray-700 font-medium text-sm md:text-base mb-1">Phone Number</label>
                <div className="relative">
                  <PhoneIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full pl-9 pr-3 py-2 text-sm md:text-base border border-gray-300 rounded-lg focus:outline-none focus:border-[#00D4FF] focus:ring-2 focus:ring-[#00D4FF]/20 transition"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              {/* Course Selection Field */}
              <div>
                <label className="block text-gray-700 font-medium text-sm md:text-base mb-1">Which course are you interested in?</label>
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 text-sm md:text-base border border-gray-300 rounded-lg focus:outline-none focus:border-[#00D4FF] focus:ring-2 focus:ring-[#00D4FF]/20 transition bg-white"
                >
                  <option value="">Select a course</option>
                  {courses.map((course, index) => (
                    <option key={index} value={course}>{course}</option>
                  ))}
                </select>
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-gray-700 font-medium text-sm md:text-base mb-1">Message (Optional)</label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-2.5 text-gray-400" size={16} />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={2}
                    className="w-full pl-9 pr-3 py-2 text-sm md:text-base border border-gray-300 rounded-lg focus:outline-none focus:border-[#00D4FF] focus:ring-2 focus:ring-[#00D4FF]/20 transition"
                    placeholder="Tell us more about your goals..."
                  ></textarea>
                </div>
              </div>

              {/* Submit Button - Smaller */}
              <button
                type="submit"
                className="w-full py-2 md:py-2.5 bg-gradient-to-r from-[#00D4FF] to-[#0066FF] text-white font-semibold text-sm md:text-base rounded-lg hover:shadow-lg hover:shadow-[#00D4FF]/30 transition-all duration-300 transform hover:scale-105"
              >
                Register Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;