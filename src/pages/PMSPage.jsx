import React from 'react';

const PMSPage = () => {
  const benefits = [
    {
      icon: '🧠',
      title: 'Intelligent Decision Making',
      description: 'AI-powered analytics for informed investment decisions',
    },
    {
      icon: '🔄',
      title: 'Real-time Monitoring',
      description: 'Continuous portfolio monitoring and optimization',
    },
    {
      icon: '✅',
      title: 'Expert Guidance',
      description: 'Dedicated relationship managers and investment experts',
    },
  ];

  const stats = [
    { value: '99.9%', label: 'System Uptime' },
    { value: '24/7', label: 'Market Monitoring' },
    { value: 'Real-time', label: 'Portfolio Updates' },
  ];

  const features = [
    {
      icon: '📈',
      title: 'Performance Tracking',
      description: 'Comprehensive performance analytics with detailed attribution analysis and benchmark comparisons.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: '🛡️',
      title: 'Risk Management',
      description: 'Advanced risk assessment tools including VaR modeling, stress testing, and scenario analysis.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: '📊',
      title: 'Portfolio Analytics',
      description: 'Deep insights into portfolio composition, sector allocation, and asset distribution.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: '🎯',
      title: 'Goal-Based Investing',
      description: 'Customized investment strategies aligned with your financial goals and risk appetite.',
      color: 'from-green-500 to-teal-500'
    }
  ];

  return (
    <section id="pms" className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 pt-20 pb-16 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-200 to-purple-200 opacity-20 transform rotate-45 rounded-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-orange-200 to-yellow-200 opacity-20 transform -rotate-12 rounded-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 opacity-0 animate-fadeInUp">
          <span className="text-blue-600 font-semibold text-lg tracking-wider uppercase mb-4 block">
            Premium Services
          </span>
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Portfolio Management Services
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mt-2">
              (PMS)
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our Portfolio Management Services combine cutting-edge technology
            with expert oversight to deliver superior investment outcomes.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Benefits */}
          <div className="opacity-0 animate-fadeInUp animation-delay-200">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
              Why Choose Our PMS?
            </h2>
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 text-2xl">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {benefit.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 gap-6 opacity-0 animate-fadeInUp animation-delay-400">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 text-white text-center shadow-xl hover:scale-105 transition-transform duration-300"
              >
                <h3 className="text-4xl lg:text-5xl font-bold mb-2">
                  {stat.value}
                </h3>
                <p className="text-white/90 text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-20">
          <div className="text-center mb-12 opacity-0 animate-fadeInUp animation-delay-600">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive PMS Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to manage and grow your wealth effectively
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 opacity-0 animate-fadeInUp"
                style={{ animationDelay: `${800 + index * 100}ms` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 text-3xl`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-3xl p-12 text-white text-center shadow-2xl opacity-0 animate-fadeInUp animation-delay-1200">
          <div className="flex items-center justify-center mb-6">
            <span className="text-6xl">🏆</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Elevate Your Investment Strategy?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied clients who trust our Portfolio Management Services
            for their wealth creation journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
              Get Started Today
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-4 px-8 rounded-xl transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PMSPage;
