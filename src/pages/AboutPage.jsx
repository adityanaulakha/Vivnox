import React from 'react';

const AboutPage = () => {
  return (
    <section id="about" className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 via-white to-orange-50 relative overflow-hidden">
      {/* Enhanced Background decorative elements */}
      <div className="absolute inset-0">
        {/* Logo-inspired geometric shapes */}
        <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-r from-orange-200 to-red-200 opacity-20 transform rotate-45 rounded-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-200 to-teal-200 opacity-20 transform -rotate-12 rounded-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-yellow-200 to-orange-200 opacity-15 transform rotate-12 rounded-full animate-pulse animation-delay-4000"></div>
        
        {/* Floating logo elements */}
        <div className="absolute inset-0">
          {Array.from({length: 4}).map((_, i) => (
            <div 
              key={i} 
              className="absolute w-10 h-8 opacity-5 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 1.5}s`,
                animationDuration: `${5 + Math.random() * 3}s`
              }}
            >
              <img src="/Vionix-Logo (1).JPG" alt="" className="w-full h-full object-contain" />
            </div>
          ))}
        </div>
        
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-16 gap-3 h-full">
            {Array.from({length: 256}).map((_, i) => (
              <div key={i} className="bg-gray-400 rounded-sm animate-pulse" style={{animationDelay: `${i * 30}ms`}}></div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 opacity-0 animate-fadeInUp">
            About <span className="text-blue-600">Us</span>
          </h2>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto opacity-0 animate-fadeInUp animation-delay-200 font-light">
            Asset and portfolio management solutions
          </p>
        </div>

        {/* Main Content Section */}
        <div className="mb-20 opacity-0 animate-fadeInUp animation-delay-400">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-8 leading-tight text-center">
              Revamp your portfolio management with 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> innovative, tailored solutions</span> 
              and comprehensive managed services.
            </h3>
            
            <div className="space-y-8 text-lg lg:text-xl text-gray-600 leading-relaxed">
              <p>
                Vionix provides portfolio management solution that leverages technology and expert oversight, 
                enabling private market players to achieve unparalleled efficiency and accuracy.
              </p>
              
              <p>
                By integrating advanced analytics and domain expertise, Vionix empowers investors to make informed decisions, 
                optimize their strategies, and drive growth. Our innovative ideas provides real-time insights and comprehensive 
                reporting capabilities, ensuring you stay ahead of the curve.
              </p>
              
              <p>
                With personalized support and guidance from our expert-managed services, 
                Vionix helps you navigate complex investment landscapes with confidence.
              </p>
            </div>
          </div>
        </div>

        {/* Operating Models Section */}
        <div className="opacity-0 animate-fadeInUp animation-delay-600">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Choose the operating model that fits you
            </h3>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We know needs differ and one size, or solution, does not fit all. That's why we provide solution options 
              that allow you to choose what you need, and when - complete with our expert team to help you be more effective, agile and efficient.
            </p>
          </div>

          {/* Operating Models Cards */}
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Complete Control */}
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">👑</span>
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Complete Control</h4>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Gain greater control and enable smarter decision making across your whole portfolio with everything from 
                portfolio construction and optimization, analysis and risk to trading, across key metrics including ESG, all in one place.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Want managed services? This is available, so you benefit from complete transparency and control of your technology and data.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center gap-3 text-gray-600">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  Portfolio construction & optimization
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  Risk analysis & management
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  ESG metrics integration
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  Complete transparency
                </li>
              </ul>
            </div>

            {/* Managed Service */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-3xl p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative">
              <div className="absolute -top-4 right-8 bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-sm font-bold">
                Recommended
              </div>
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">🤝</span>
              </div>
              <h4 className="text-2xl font-bold mb-4">Managed Service</h4>
              <p className="text-lg leading-relaxed mb-6 text-white/90">
                Expert team manages data collection, reconciliation, and reporting, ensuring accuracy and oversight. 
                Benefit from complete transparency and control of your technology and data.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                  Expert data management
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                  Automated reconciliation
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                  Comprehensive reporting
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                  Dedicated support team
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
