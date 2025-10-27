import React from 'react';
import { motion } from 'framer-motion';

const ContactPage = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } }
  };

  const slideUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const slideLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  const slideRight = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const contactMethods = [
    {
      icon: '📍',
      title: 'Office',
      content: '339, Tower B3, Spaze I Tech Park, Sector-49, Gurugram, Haryana-122018',
      color: 'from-blue-500 to-indigo-600',
      link: 'https://maps.google.com',
      linkText: 'Get Directions'
    },
    {
      icon: '📞',
      title: 'Phone',
      content: '+91-124-4056631',
      color: 'from-cyan-400 to-blue-500',
      link: 'tel:+911244056631',
      linkText: 'Call Us'
    },
    {
      icon: '✉️',
      title: 'Email',
      content: 'info@vionix.co.in',
      color: 'from-sky-400 to-cyan-500',
      link: 'mailto:info@vionix.co.in',
      linkText: 'Send Email'
    },
  ];

  const quickLinks = [
    { icon: '💼', text: 'Schedule a Meeting', desc: 'Book a consultation with our experts' },
    { icon: '📄', text: 'Download Brochure', desc: 'Learn more about our services' },
    { icon: '❓', text: 'FAQs', desc: 'Find answers to common questions' },
  ];

  return (
    <main id="contact" className="bg-gradient-to-b from-white via-slate-50 to-white overflow-x-hidden">
      {/* Hero Section - Modern Split Design */}
      <section className="pt-28 md:pt-28 bg-gradient-to-br from-white via-blue-50 to-indigo-50 relative overflow-hidden">
        {/* Animated Background Blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-72 md:w-[500px] h-72 md:h-[500px] bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-80 md:w-[600px] h-80 md:h-[600px] bg-gradient-to-tr from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.div variants={slideUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200 mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
              <span className="text-xs font-bold text-blue-900 uppercase tracking-wider">We're Here to Help</span>
            </motion.div>

            <motion.h1 
              variants={slideUp}
              className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 mb-6 leading-[1.1]"
            >
              Get in <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Touch</span>
            </motion.h1>

            <motion.p 
              variants={slideUp}
              className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto"
            >
              Ready to transform your portfolio management? Our team is here to answer your questions and help you get started.
            </motion.p>
          </motion.div>

          {/* Contact Cards Grid */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-6 mb-16"
          >
            {contactMethods.map((method, i) => (
              <motion.div
                key={i}
                variants={slideUp}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}></div>
                
                <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-slate-200 group-hover:shadow-2xl group-hover:border-blue-300 transition-all duration-300 h-full flex flex-col items-center text-center">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${method.color} flex items-center justify-center mb-6 text-3xl shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                    {method.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{method.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-grow">{method.content}</p>
                  
                  <a 
                    href={method.link}
                    className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 group-hover:gap-3 transition-all"
                  >
                    {method.linkText}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Main Contact Section - Asymmetric Split Layout */}
      <section className="py-10 md:py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Left - Contact Form (3 columns) */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideLeft}
              className="lg:col-span-3"
            >
              <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-6 md:p-8 lg:p-12 shadow-xl border border-slate-200">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 mb-3">
                  Send us a <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Message</span>
                </h2>
                <p className="text-slate-600 mb-8">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>

                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-900 mb-2">Full Name</label>
                      <input 
                        type="text" 
                        placeholder="John Doe" 
                        className="w-full px-4 py-4 bg-white border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:outline-none transition-all text-slate-900 placeholder:text-slate-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-900 mb-2">Email Address</label>
                      <input 
                        type="email" 
                        placeholder="john@example.com" 
                        className="w-full px-4 py-4 bg-white border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:outline-none transition-all text-slate-900 placeholder:text-slate-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-900 mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      placeholder="+91 98765 43210" 
                      className="w-full px-4 py-4 bg-white border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:outline-none transition-all text-slate-900 placeholder:text-slate-400"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-900 mb-2">Subject</label>
                    <select className="w-full px-4 py-4 bg-white border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:outline-none transition-all text-slate-900 appearance-none cursor-pointer">
                      <option>General Inquiry</option>
                      <option>Portfolio Management Services</option>
                      <option>Technical Support</option>
                      <option>Partnership Opportunities</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-900 mb-2">Your Message</label>
                    <textarea 
                      rows={6} 
                      placeholder="Tell us more about how we can help you..." 
                      className="w-full px-4 py-4 bg-white border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:outline-none transition-all resize-vertical text-slate-900 placeholder:text-slate-400"
                    ></textarea>
                  </div>

                  <motion.button 
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
                  >
                    Send Message
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Right - Quick Info & Links (2 columns) */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideRight}
              className="lg:col-span-2 space-y-6"
            >
              {/* Response Time Card */}
              <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-700 rounded-3xl p-6 md:p-8 shadow-2xl text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                <div className="relative z-10">
                  <div className="text-4xl md:text-5xl mb-4">⚡</div>
                  <h3 className="text-xl md:text-2xl font-black mb-2">Quick Response</h3>
                  <p className="text-blue-100 mb-4">We typically respond within</p>
                  <div className="text-3xl md:text-4xl font-black">24 Hours</div>
                  <p className="text-sm text-blue-200 mt-4">For urgent matters, call us directly</p>
                </div>
              </div>

              {/* Quick Links */}
              <div className="space-y-4">
                {quickLinks.map((link, i) => (
                  <motion.button
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ scale: 1.03, x: 5 }}
                    className="w-full bg-white rounded-2xl p-6 shadow-lg border border-slate-200 hover:shadow-xl hover:border-blue-300 transition-all text-left group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform flex-shrink-0">
                        {link.icon}
                      </div>
                      <div className="flex-grow">
                        <h4 className="text-base font-bold text-slate-900 mb-1">{link.text}</h4>
                        <p className="text-sm text-slate-600">{link.desc}</p>
                      </div>
                      <svg className="w-5 h-5 text-blue-600 group-hover:translate-x-1 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </motion.button>
                ))}
              </div>

              {/* Office Hours */}
              <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-3xl p-6 md:p-8 shadow-2xl text-white">
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-3xl md:text-4xl">🕐</div>
                  <h3 className="text-xl md:text-2xl font-black">Office Hours</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center pb-3 border-b border-white/20">
                    <span className="text-blue-200">Monday - Friday</span>
                    <span className="font-bold">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-white/20">
                    <span className="text-blue-200">Saturday</span>
                    <span className="font-bold">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-200">Sunday</span>
                    <span className="font-bold text-blue-300">Closed</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section - Full Width */}
      <section className="py-10 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
              Visit Our <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Office</span>
            </h2>
            <p className="text-lg text-slate-600">Located in the heart of Gurugram's business district</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
          >
            <div className="aspect-[16/9] md:aspect-[21/9] bg-slate-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.5987647654345!2d77.06261397550302!3d28.433046975765494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d18de4e62c4d7%3A0x8cc15e0b9d1e3e01!2sSpaze%20iTech%20Park%2C%20Sohna%20-%20Gurgaon%20Rd%2C%20Block%20S%2C%20Sector%2049%2C%20Gurugram%2C%20Haryana%20122018!5e0!3m2!1sen!2sin!4v1730000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="py-10 bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-700 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-400/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center text-white"
          >
            <div className="text-5xl md:text-6xl mb-6">🚀</div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who trust us with their portfolio management. Let's discuss how we can help you achieve your financial goals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-6 md:px-8 py-4 rounded-full bg-white text-blue-600 text-sm md:text-base font-bold hover:bg-blue-50 transition-all shadow-2xl hover:shadow-white/30 group"
              >
                Schedule Consultation
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-6 md:px-8 py-4 rounded-full border-2 border-white/40 backdrop-blur-sm text-white text-sm md:text-base font-bold hover:bg-white/10 transition-all"
              >
                Call: +91-124-4056631
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
