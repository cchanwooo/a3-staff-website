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

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const recipients = "john@a3staffsolutions.com,simon@a3staffsolutions.com,vanessa@a3staffsolutions.com";
        const subject = `New Job Application: ${formData.fullName}`;
        const body = `
Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}
Trade: ${formData.trade}
Experience: ${formData.experience}

(Sent from A3 Staff Solutions Website)
        `.trim();

        window.location.href = `mailto:${recipients}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
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
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Apply;
