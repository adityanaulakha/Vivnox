import React from 'react';

const ContactPage = () => {
  return (
    <section id="contact" className="py-16 lg:py-24 bg-gradient-to-br from-orange-50 via-white to-red-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        {/* Geometric shapes */}
        <div className="absolute top-20 left-20 w-88 h-88 bg-gradient-to-r from-orange-200 to-red-200 opacity-15 transform rotate-45 rounded-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-76 h-76 bg-gradient-to-r from-yellow-200 to-orange-200 opacity-15 transform -rotate-12 rounded-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-r from-red-200 to-pink-200 opacity-10 transform rotate-12 rounded-full animate-pulse animation-delay-4000"></div>
        
        {/* Floating logo elements */}
        <div className="absolute inset-0">
          {Array.from({length: 4}).map((_, i) => (
            <div 
              key={i} 
              className="absolute w-10 h-8 opacity-5 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 1.8}s`,
                animationDuration: `${7 + Math.random() * 2}s`
              }}
            >
              <img src="/Vionix-Logo (1).JPG" alt="" className="w-full h-full object-contain" />
            </div>
          ))}
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-xl text-gray-600">Ready to transform your portfolio management?</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <span className="text-xl">📍</span>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-1">Office</h4>
                <p className="text-gray-600">339, Tower B3, Spaze I Tech Park<br/>Sector-49, Gurugram, Haryana-122018</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <span className="text-xl">📞</span>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-1">Phone</h4>
                <p className="text-gray-600">+91-124-4056631</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <span className="text-xl">✉️</span>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-1">Email</h4>
                <p className="text-gray-600">info@vionix.co.in</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <form className="space-y-6">
              <input type="text" placeholder="Your Name" className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none" />
              <input type="email" placeholder="Your Email" className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none" />
              <textarea rows={5} placeholder="Your Message" className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none resize-vertical"></textarea>
              <button type="submit" className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
