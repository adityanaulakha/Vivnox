import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useForm } from 'react-hook-form';
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  Award,
  CheckCircle,
  AlertCircle,
} from 'lucide-react';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [submitStatus, setSubmitStatus] = useState({ type: null, message: '' });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Registered Office',
      content: (
        <>
          339, Tower B3, Spaze I Tech Park
          <br />
          Sector-49, Gurugram, Haryana-122018
        </>
      ),
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+91-124-4056631',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@vionix.co.in',
    },
    {
      icon: Globe,
      title: 'Website',
      content: 'www.vionix.co.in',
    },
    {
      icon: Award,
      title: 'LLPIN',
      content: 'ACP-8819',
    },
  ];

  const onSubmit = async (data) => {
    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      setSubmitStatus({
        type: 'success',
        message: 'Thank you for your message! We will get back to you soon.',
      });
      reset();
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus({ type: null, message: '' });
      }, 5000);
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Something went wrong. Please try again.',
      });
    }
  };

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to transform your portfolio management? Contact us today.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">
                    {info.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">{info.content}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-3xl p-8 shadow-xl"
          >
            {/* Status Message */}
            {submitStatus.type && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mb-6 p-4 rounded-xl flex items-center gap-3 ${
                  submitStatus.type === 'success'
                    ? 'bg-green-50 text-green-800 border border-green-200'
                    : 'bg-red-50 text-red-800 border border-red-200'
                }`}
              >
                {submitStatus.type === 'success' ? (
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                ) : (
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                )}
                <span>{submitStatus.message}</span>
              </motion.div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name */}
              <div>
                <input
                  {...register('name', { required: 'Name is required' })}
                  type="text"
                  placeholder="Your Name"
                  className={`w-full px-4 py-3 border-2 rounded-xl transition-colors focus:outline-none focus:border-primary-500 ${
                    errors.name ? 'border-red-300' : 'border-gray-200'
                  }`}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <input
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: 'Invalid email address',
                    },
                  })}
                  type="email"
                  placeholder="Your Email"
                  className={`w-full px-4 py-3 border-2 rounded-xl transition-colors focus:outline-none focus:border-primary-500 ${
                    errors.email ? 'border-red-300' : 'border-gray-200'
                  }`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <input
                  {...register('phone')}
                  type="tel"
                  placeholder="Your Phone (Optional)"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl transition-colors focus:outline-none focus:border-primary-500"
                />
              </div>

              {/* Service */}
              <div>
                <select
                  {...register('service', { required: 'Please select a service' })}
                  className={`w-full px-4 py-3 border-2 rounded-xl transition-colors focus:outline-none focus:border-primary-500 ${
                    errors.service ? 'border-red-300' : 'border-gray-200'
                  }`}
                >
                  <option value="">Select Service</option>
                  <option value="pms">Portfolio Management Services</option>
                  <option value="solutions">Investment Solutions</option>
                  <option value="consultation">Investment Consultation</option>
                  <option value="other">Other</option>
                </select>
                {errors.service && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.service.message}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <textarea
                  {...register('message', { required: 'Message is required' })}
                  rows={5}
                  placeholder="Your Message"
                  className={`w-full px-4 py-3 border-2 rounded-xl transition-colors focus:outline-none focus:border-primary-500 resize-vertical ${
                    errors.message ? 'border-red-300' : 'border-gray-200'
                  }`}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                  isSubmitting
                    ? 'bg-gray-300 cursor-not-allowed'
                    : 'btn-primary hover:shadow-lg'
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
