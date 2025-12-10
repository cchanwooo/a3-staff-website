import React from 'react';
import { FaShieldAlt, FaHandshake, FaUserFriends } from 'react-icons/fa';
import teamMeeting from '../assets/team_meeting.png';

import { useLanguage } from '../LanguageContext';

const About = () => {
    const { t } = useLanguage();

    return (
        <div className="bg-white">
            {/* Hero */}
            <div className="relative bg-primary-800 py-20 text-center text-white">
                <div className="max-w-4xl mx-auto px-4">
                    <h1 className="text-4xl font-bold mb-6">{t('about.title')}</h1>
                    <p className="text-xl text-gray-200">
                        {t('about.subtitle')}
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Mission */}
                <div className="mb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-primary-900 mb-6">{t('about.missionTitle')}</h2>
                        <p className="text-lg text-gray-600 mb-6">
                            {t('about.missionDesc1')}
                        </p>
                        <p className="text-lg text-gray-600">
                            {t('about.missionDesc2')}
                        </p>
                    </div>
                    <div className="rounded-lg h-80 flex items-center justify-center overflow-hidden shadow-xl">
                        <img src={teamMeeting} alt="A3 Staff Solutions Team" className="w-full h-full object-cover" />
                    </div>
                </div>

                {/* Values */}
                <div className="border-t border-gray-100 pt-16">
                    <h2 className="text-3xl font-bold text-primary-900 text-center mb-12">{t('about.valuesTitle')}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <div className="text-center">
                            <div className="bg-primary-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                                <FaShieldAlt className="text-primary-900 w-10 h-10" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{t('about.safetyTitle')}</h3>
                            <p className="text-gray-600">
                                {t('about.safetyDesc')}
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="bg-primary-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                                <FaHandshake className="text-primary-900 w-10 h-10" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{t('about.integrityTitle')}</h3>
                            <p className="text-gray-600">
                                {t('about.integrityDesc')}
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="bg-primary-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                                <FaUserFriends className="text-primary-900 w-10 h-10" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{t('about.commitmentTitle')}</h3>
                            <p className="text-gray-600">
                                {t('about.commitmentDesc')}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
