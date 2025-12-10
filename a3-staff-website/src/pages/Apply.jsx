import React, { useState } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';

const Apply = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        trade: '',
        experience: '',
    });

    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    // 🚀 mailto → /api/send-request 로 전송하는 API 방식
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');

        try {
            const response = await fetch('/api/send-request', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },

                // 서버에서 받는 변수에 맞춰 변환
                body: JSON.stringify({
                    name: formData.fullName,
                    email: formData.email,
                    phone: formData.phone,
                    subject: `New Job Application: ${formData.fullName}`,
                    location: '',
                    message: `
Job Application Details

Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}
Trade: ${formData.trade}
Experience: ${formData.experience}

(Sent from A3 Staff Solutions Website)
                    `.trim(),
                }),
            });

            if (response.ok) {
                setStatus('Application submitted successfully! We will contact you soon.');

                // 폼 초기화
                setFormData({
                    fullName: '',
                    email: '',
                    phone: '',
                    trade: '',
                    experience: '',
                });
            } else {
                let errorMsg = 'Failed to send application.';
                try {
                    const data = await response.json();
                    if (data?.message) errorMsg = data.message;
                } catch { }

                setStatus(errorMsg);
            }
        } catch (error) {
            console.error('Submission error:', error);
            setStatus('An unexpected error occurred. Please try again later.');
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen py-12">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                    <div className="bg-primary-900 py-6 px-8">
                        <h1 className="text-2xl font-bold text-white">Job Application</h1>
                        <p className="text-primary-100 mt-2">Join our team of skilled professionals.</p>
                    </div>

                    <div className="p-8">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input
                                    id="fullName"
                                    label="Full Name"
                                    placeholder="John Doe"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    required
                                />

                                <Input
                                    id="phone"
                                    label="Phone Number"
                                    type="tel"
                                    placeholder="614-582-6286"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <Input
                                id="email"
                                label="Email Address"
                                type="email"
                                placeholder="john@example.com"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />

                            <div>
                                <label htmlFor="trade" className="block text-sm font-medium text-gray-700 mb-1">
                                    Primary Trade / Skill
                                </label>
                                <select
                                    id="trade"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-primary-900 focus:border-primary-900 bg-white"
                                    value={formData.trade}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Select a trade...</option>
                                    <option value="Welder">Welder (MIG/TIG/Stick)</option>
                                    <option value="Pipefitter">Pipefitter</option>
                                    <option value="General Labor">General Labor</option>
                                    <option value="Forklift">Forklift Operator</option>
                                    <option value="HVAC">HVAC Technician</option>
                                    <option value="Electrician">Electrician</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
                                    Years of Experience
                                </label>
                                <select
                                    id="experience"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-primary-900 focus:border-primary-900 bg-white"
                                    value={formData.experience}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Select experience level...</option>
                                    <option value="Entry">Entry Level (0-2 years)</option>
                                    <option value="Mid">Mid Level (3-5 years)</option>
                                    <option value="Senior">Senior Level (5+ years)</option>
                                </select>
                            </div>

                            <div className="pt-4">
                                <Button type="submit" size="lg" className="w-full justify-center">
                                    Submit Application
                                </Button>
                            </div>

                            {status && (
                                <p className="mt-3 text-sm text-gray-600">
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

export default Apply;
