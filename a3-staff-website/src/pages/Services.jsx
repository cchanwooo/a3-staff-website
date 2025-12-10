import React from 'react';
import { FaWrench, FaHammer, FaHardHat, FaTruckLoading, FaIndustry, FaDraftingCompass } from 'react-icons/fa';
import Card from '../components/Card';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';

const Services = () => {
    const { t } = useLanguage();

    const services = [
        {
            title: t('services.weldersTitle'),
            icon: <FaIndustry className="w-10 h-10 text-accent-600 mb-4" />,
            description: t('services.weldersDesc')
        },
        {
            title: t('services.laborTitle'),
            icon: <FaHardHat className="w-10 h-10 text-accent-600 mb-4" />,
            description: t('services.laborDesc')
        },
        {
            title: t('services.forkliftTitle'),
            icon: <FaTruckLoading className="w-10 h-10 text-accent-600 mb-4" />,
            description: t('services.forkliftDesc')
        },
        {
            title: t('services.maintenanceTitle'),
            icon: <FaWrench className="w-10 h-10 text-accent-600 mb-4" />,
            description: t('services.maintenanceDesc')
        },
        {
            title: t('services.assemblersTitle'),
            icon: <FaHammer className="w-10 h-10 text-accent-600 mb-4" />,
            description: t('services.assemblersDesc')
        },
        {
            title: t('services.hvacTitle'),
            icon: <FaDraftingCompass className="w-10 h-10 text-accent-600 mb-4" />,
            description: t('services.hvacDesc')
        }
    ];

    return (
        <div className="bg-gray-50 min-h-screen pb-20">
            {/* Header */}
            {/* Header */}
            <div className="bg-primary-900 py-16 text-center text-white">
                <h1 className="text-4xl font-bold mb-4">{t('services.title')}</h1>
                <p className="max-w-2xl mx-auto text-lg text-gray-300">
                    {t('services.subtitle')}
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <Card key={index} hoverEffect className="p-8">
                            <div className="flex flex-col items-center text-center">
                                {service.icon}
                                <h3 className="text-2xl font-semibold text-primary-900 mb-3">{service.title}</h3>
                                <p className="text-gray-600 mb-6">{service.description}</p>
                            </div>
                        </Card>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="mt-20 bg-white rounded-2xl shadow-lg p-8 md:p-12 text-center">
                    <h2 className="text-3xl font-bold text-primary-900 mb-4">{t('services.ctaTitle')}</h2>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                        {t('services.ctaDesc')}
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link to="/client-request">
                            <Button variant="primary" size="lg">{t('services.requestBtn')}</Button>
                        </Link>
                        <Link to="/contact">
                            <Button variant="outline" size="lg">{t('services.contactBtn')}</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
