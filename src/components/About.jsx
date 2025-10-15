import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Target, Rocket, Users, BarChart3 } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: Target,
      title: 'Precision',
      description: 'Accurate portfolio optimization',
    },
    {
      icon: Rocket,
      title: 'Innovation',
      description: 'Cutting-edge technology solutions',
    },
    {
      icon: Users,
      title: 'Expertise',
      description: 'Expert-managed services',
    },
    {
      icon: BarChart3,
      title: 'Analytics',
      description: 'Real-time insights and reporting',
    },
  ];

  return (
    <section id="about" className="section-padding bg-gray-50">
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
            About Us
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Asset and portfolio management solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-6 leading-tight">
              Revamp your portfolio management with innovative, tailored
              solutions
            </h3>

            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Vionix provides portfolio management solution that leverages
                technology and expert oversight, enabling private market players
                to achieve unparalleled efficiency and accuracy.
              </p>

              <p>
                By integrating advanced analytics and domain expertise, Vionix
                empowers investors to make informed decisions, optimize their
                strategies, and drive growth. Our innovative ideas provides
                real-time insights and comprehensive reporting capabilities,
                ensuring you stay ahead of the curve.
              </p>

              <p>
                With personalized support and guidance from our expert-managed
                services, Vionix helps you navigate complex investment
                landscapes with confidence.
              </p>
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 text-center shadow-lg card-hover"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
