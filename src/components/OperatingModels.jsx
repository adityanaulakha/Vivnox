import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Crown, Handshake, Check, Star } from 'lucide-react';

const OperatingModels = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const models = [
    {
      icon: Crown,
      title: 'Complete Control',
      description:
        'Gain greater control and enable smarter decision making across your whole portfolio with everything from portfolio construction and optimization, analysis and risk to trading, across key metrics including ESG, all in one place.',
      features: [
        'Portfolio construction & optimization',
        'Risk analysis & management',
        'ESG metrics integration',
        'Complete transparency',
      ],
      featured: false,
    },
    {
      icon: Handshake,
      title: 'Managed Service',
      description:
        'Expert team manages data collection, reconciliation, and reporting, ensuring accuracy and oversight. Benefit from complete transparency and control of your technology and data.',
      features: [
        'Expert data management',
        'Automated reconciliation',
        'Comprehensive reporting',
        'Dedicated support team',
      ],
      featured: true,
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Choose the operating model that fits you
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We know needs differ and one size, or solution, does not fit all.
            That's why we provide solution options that allow you to choose what
            you need, and when.
          </p>
        </motion.div>

        {/* Models Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {models.map((model, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className={`relative rounded-3xl p-8 transition-all duration-300 ${
                model.featured
                  ? 'bg-gradient-to-br from-primary-600 to-primary-800 text-white scale-105 shadow-2xl'
                  : 'bg-gray-50 hover:shadow-xl'
              }`}
            >
              {/* Featured Badge */}
              {model.featured && (
                <div className="absolute -top-4 right-8 bg-secondary-400 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-1">
                  <Star className="w-4 h-4" />
                  Recommended
                </div>
              )}

              {/* Icon */}
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                  model.featured
                    ? 'bg-white/20 backdrop-blur-sm'
                    : 'bg-primary-600'
                }`}
              >
                <model.icon
                  className={`w-8 h-8 ${
                    model.featured ? 'text-white' : 'text-white'
                  }`}
                />
              </div>

              {/* Content */}
              <h3
                className={`text-2xl font-bold mb-4 ${
                  model.featured ? 'text-white' : 'text-gray-900'
                }`}
              >
                {model.title}
              </h3>

              <p
                className={`text-lg mb-6 leading-relaxed ${
                  model.featured ? 'text-white/90' : 'text-gray-600'
                }`}
              >
                {model.description}
              </p>

              {/* Features List */}
              <ul className="space-y-3">
                {model.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className={`flex items-center gap-3 ${
                      model.featured ? 'text-white/90' : 'text-gray-600'
                    }`}
                  >
                    <Check
                      className={`w-5 h-5 flex-shrink-0 ${
                        model.featured ? 'text-secondary-400' : 'text-green-500'
                      }`}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OperatingModels;
