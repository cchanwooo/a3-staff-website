import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import logo from '../assets/logo.png';

import { useLanguage } from '../LanguageContext';

const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="col-span-1 md:col-span-2">
                        <Link to="/" className="inline-block mb-4">
                            <img src={logo} alt="A3 Staff Solutions" className="h-14 w-auto bg-white rounded p-1" />
                        </Link>
                        <p className="text-gray-400 max-w-sm">
                            {t('footer.companyDesc')}
                        </p>
                        <div className="flex space-x-4 mt-6">
                            <a href="#" className="text-gray-400 hover:text-accent-600 transition-colors">
                                <FaFacebook size={24} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-accent-600 transition-colors">
                                <FaLinkedin size={24} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-accent-600 transition-colors">
                                <FaTwitter size={24} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">{t('footer.quickLinks')}</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className="text-gray-400 hover:text-white transition-colors">{t('nav.home')}</Link>
                            </li>
                            <li>
                                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">{t('nav.services')}</Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">{t('nav.about')}</Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">{t('nav.contact')}</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">{t('footer.contactUs')}</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>2645 N Berkeley Lake Rd NW A #204, Duluth, GA 30096</li>
                            <li className="pt-2">On call: 614-582-6286</li>
                            <li>{t('footer.email')}: john@a3staffsolutions.com</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
                    <p>{t('footer.copyright')}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
