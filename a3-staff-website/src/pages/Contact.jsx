import React, { useState } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

import { useLanguage } from '../LanguageContext';

const Contact = () => {
    const { t } = useLanguage();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('');   // ✅ 전송 상태 메시지

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    // ✅ mailto 대신 우리가 만든 /api/send-request 로 보내는 버전
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');

        try {
            const response = await fetch('/api/send-request', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    // 백엔드에서 받는 나머지 필드는 일단 빈 값으로 보냄
                    phone: '',
                    location: '',
                    subject: '',
                }),
            });

            if (response.ok) {
                setStatus('Message sent successfully! We will contact you soon.');
                setFormData({
                    name: '',
                    email: '',
                    message: '',
                });
            } else {
                let errorMsg = 'Failed to send message. Please try again.';
                try {
                    const data = await response.json();
                    if (data?.message) errorMsg = data.message;
                } catch (err) {
                    // JSON이 아니어도 그냥 기본 메시지 사용
                }
                setStatus(errorMsg);
            }
        } catch (error) {
            console.error('Submission Error:', error);
            setStatus('An error occurred. Please try again later.');
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-primary-900">{t('contact.title')}</h1>
                    <p className="mt-4 text-xl text-gray-600">
                        {t('contact.subtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div>
                        <h2 className="text-2xl font-bold text-primary-900 mb-6">{t('contact.getInTouch')}</h2>
                        <div className="space-y-8">
                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <FaMapMarkerAlt className="w-6 h-6 text-accent-600" />
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-medium text-gray-900">{t('contact.office')}</h3>
                                    <p className="mt-1 text-gray-600">
                                        2645 N Berkeley Lake Rd NW A #204, Duluth, GA 30096
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <FaPhone className="w-6 h-6 text-accent-600" />
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-medium text-gray-900">{t('contact.phone')}</h3>
                                    <p className="mt-1 text-gray-600">
                                        On call: 614-582-6286
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <FaEnvelope className="w-6 h-6 text-accent-600" />
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-medium text-gray-900">{t('contact.email')}</h3>
                                    <p className="mt-1 text-gray-600">
                                        {t('contact.email')}: john@a3staffsolutions.com,simon@a3staffsolutions.com
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 p-6 bg-white rounded-lg shadow-md border border-gray-100">
                            <h3 className="text-lg font-bold text-primary-900 mb-2">{t('contact.officeHours')}</h3>
                            <p className="text-gray-600">{t('contact.hoursWeek')}</p>
                            <p className="text-gray-600">{t('contact.hoursWeekend')}</p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white rounded-lg shadow-lg p-8">
                        <h2 className="text-2xl font-bold text-primary-900 mb-6">{t('contact.formTitle')}</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <Input
                                id="name"
                                label={t('contact.nameLabel')}
                                placeholder="John Doe"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                            <Input
                                id="email"
                                label={t('contact.emailLabel')}
                                type="email"
                                placeholder="john@example.com"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                    {t('contact.messageLabel')}
                                </label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-primary-900 focus:border-primary-900"
                                    placeholder="How can we help you?"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>
                            <Button type="submit" className="w-full justify-center">
                                {t('contact.submitBtn')}
                            </Button>

                            {/* ✅ 전송 상태 메시지 표시 */}
                            {status && (
                                <p className="text-sm mt-2 text-gray-600">
                                    {status}
                                </p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
