import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, RefreshCw, UserCheck } from 'lucide-react';

const PMS = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const benefits =  [
    {
      icon: Brain,
      title: 'Intelligent Decision Making',
      description: 'AI-powered analytics for informed investment decisions',
    },
    {
      icon: RefreshCw,
      title: 'Real-time Monitoring',
      description: 'Continuous portfolio monitoring and optimization',
    },
    {
      icon: UserCheck,
      title: 'Expert Guidance',
      description: 'Dedicated relationship managers and investment experts',
    },
  ];

  const stats = [
    { value: '99.9%', label: 'System Uptime' },
    { value: '24/7', label: 'Market Monitoring' },
    { value: 'Real-time', label: 'Portfolio Updates' },
  ];

  return (
    <section id="pms" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Portfolio Management Services (PMS)
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Our Portfolio Management Services combine cutting-edge technology
              with expert oversight to deliver superior investment outcomes.
            </p>

            {/* Benefits */}
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <benefit.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {benefit.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-3xl p-8 text-white text-center shadow-xl"
              >
                <motion.h3
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.7 + index * 0.1,
                    type: "spring",
                    stiffness: 200
                  }}
                  className="text-4xl lg:text-5xl font-bold mb-2"
                >
                  {stat.value}
                </motion.h3>
                <p className="text-white/90 text-lg">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PMS;
