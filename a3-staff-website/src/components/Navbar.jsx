import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import Button from './Button';
import classNames from 'classnames';
import logo from '../assets/logo.png';
import { useLanguage } from '../LanguageContext';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { lang, setLang, t } = useLanguage();

    const changeLang = (value) => () => setLang(value);

    const navLinks = [
        { name: t('nav.home'), path: '/' },
        { name: t('nav.services'), path: '/services' },
        { name: t('nav.about'), path: '/about' },
        { name: t('nav.contact'), path: '/contact' },
    ];

    return (
        <nav className="bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20">
                    <div className="flex items-center">
                        <Link to="/" className="flex-shrink-0 flex items-center">
                            <img src={logo} alt="A3 Staff Solutions" className="h-16 w-auto" />
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:ml-6 md:flex md:items-center md:space-x-8">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                className={({ isActive }) =>
                                    classNames(
                                        'text-base font-medium transition-colors duration-200',
                                        isActive ? 'text-primary-900 border-b-2 border-accent-600' : 'text-gray-500 hover:text-primary-900'
                                    )
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}
                        <div className="ml-8 flex items-center space-x-4">
                            <Link to="/apply">
                                <Button variant="primary" size="sm">{t('nav.apply')}</Button>
                            </Link>
                            <Link to="/client-request">
                                <Button variant="outline" size="sm">{t('nav.clientRequest')}</Button>
                            </Link>

                            {/* Language Toggle */}
                            <div className="flex items-center gap-1 border border-gray-200 rounded-full px-1 py-0.5 text-xs bg-gray-50 ml-4">
                                <button
                                    type="button"
                                    onClick={changeLang("ko")}
                                    className={`px-2 py-0.5 rounded-full transition-colors ${lang === "ko"
                                            ? "bg-primary-900 text-white font-semibold shadow-sm"
                                            : "text-gray-500 hover:text-primary-900"
                                        }`}
                                >
                                    한
                                </button>
                                <button
                                    type="button"
                                    onClick={changeLang("en")}
                                    className={`px-2 py-0.5 rounded-full transition-colors ${lang === "en"
                                            ? "bg-primary-900 text-white font-semibold shadow-sm"
                                            : "text-gray-500 hover:text-primary-900"
                                        }`}
                                >
                                    EN
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex items-center md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-900 ml-4"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? <HiX className="block h-6 w-6" /> : <HiMenu className="block h-6 w-6" />}
                        </button>

                        {/* Mobile Language Toggle */}
                        <div className="flex items-center gap-1 border border-gray-200 rounded-full px-1 py-0.5 text-xs bg-gray-50 ml-2 md:hidden">
                            <button
                                type="button"
                                onClick={changeLang("ko")}
                                className={`px-2 py-0.5 rounded-full ${lang === "ko"
                                        ? "bg-primary-900 text-white font-semibold"
                                        : "text-gray-500"
                                    }`}
                            >
                                한
                            </button>
                            <button
                                type="button"
                                onClick={changeLang("en")}
                                className={`px-2 py-0.5 rounded-full ${lang === "en"
                                        ? "bg-primary-900 text-white font-semibold"
                                        : "text-gray-500"
                                    }`}
                            >
                                EN
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden">
                    <div className="pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={({ isActive }) =>
                                    classNames(
                                        'block pl-3 pr-4 py-2 border-l-4 text-base font-medium',
                                        isActive
                                            ? 'bg-primary-50 border-primary-900 text-primary-900'
                                            : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
                                    )
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}
                        <div className="mt-4 px-4 space-y-3 pb-4">
                            <Link to="/apply" onClick={() => setIsOpen(false)} className="block w-full">
                                <Button className="w-full justify-center">{t('nav.apply')}</Button>
                            </Link>
                            <Link to="/client-request" onClick={() => setIsOpen(false)} className="block w-full">
                                <Button variant="outline" className="w-full justify-center">{t('nav.clientRequest')}</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
