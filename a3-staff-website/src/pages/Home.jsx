import React from 'react';
import { Link } from 'react-router-dom';
import { FaHardHat, FaUserCheck, FaStopwatch, FaTools } from 'react-icons/fa';
import Button from '../components/Button';
import Card from '../components/Card';
import { motion } from 'framer-motion';

import { useLanguage } from '../LanguageContext';

const Home = () => {
    const { t } = useLanguage();

    const features = [
        {
            icon: <FaUserCheck className="w-8 h-8 text-accent-600" />,
            title: t('home.reliableTitle'),
            description: t('home.reliableDesc')
        },
        {
            icon: <FaHardHat className="w-8 h-8 text-accent-600" />,
            title: t('home.safetyTitle'),
            description: t('home.safetyDesc')
        },
        {
            icon: <FaStopwatch className="w-8 h-8 text-accent-600" />,
            title: t('home.fastTitle'),
            description: t('home.fastDesc')
        },
        {
            icon: <FaTools className="w-8 h-8 text-accent-600" />,
            title: t('home.expertTitle'),
            description: t('home.expertDesc')
        }
    ];

    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative bg-primary-900 text-white py-20 lg:py-32 overflow-hidden">
                {/* Abstract Background Element */}
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-primary-800 opacity-50 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-accent-600 opacity-10 blur-3xl"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
                            {t('home.heroTitle')}
                        </h1>
                        <p className="max-w-2xl mx-auto text-xl text-gray-300 mb-10">
                            {t('home.heroSubtitle')}
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link to="/apply">
                                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                                    {t('home.applyBtn')}
                                </Button>
                            </Link>
                            <Link to="/client-request">
                                <Button variant="outline" size="lg" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-primary-900">
                                    {t('home.requestBtn')}
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-primary-900">{t('home.whyTitle')}</h2>
                        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                            {t('home.whySubtitle')}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <Card key={index} hoverEffect className="p-6 h-full border-t-4 border-t-accent-600">
                                <div className="mb-4 bg-primary-50 w-16 h-16 rounded-full flex items-center justify-center">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-primary-900 mb-2">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Short Call to Action Section */}
            <section className="py-16 bg-white border-t border-gray-100">
                <div className="max-w-5xl mx-auto px-4 text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('home.ctaTitle')}</h2>
                    <div className="flex justify-center gap-4">
                        <Link to="/contact">
                            <Button variant="primary">{t('home.contactBtn')}</Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
