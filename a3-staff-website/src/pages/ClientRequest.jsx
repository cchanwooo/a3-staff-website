import React, { useState } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';

const ClientRequest = () => {
    const [formData, setFormData] = useState({
        companyName: '',
        contactName: '',
        email: '',
        phone: '',
        staffingNeeds: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const recipients = "john@a3staffsolutions.com,simon@a3staffsolutions.com,vanessa@a3staffsolutions.com";
        const subject = `New Staffing Request: ${formData.companyName}`;
        const body = `
Company: ${formData.companyName}
Contact: ${formData.contactName}
Email: ${formData.email}
Phone: ${formData.phone}
Staffing Needs: ${formData.staffingNeeds}
Message: ${formData.message}

(Sent from A3 Staff Solutions Website)
        `.trim();

        window.location.href = `mailto:${recipients}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    return (
        <div className="bg-white min-h-screen py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-3xl font-bold text-primary-900">Request Staffing</h1>
                    <p className="mt-4 text-lg text-gray-600">
                        Tell us about your workforce needs. We provide tailored staffing solutions to keep your business moving forward.
                    </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-8 md:p-10 shadow-sm border border-gray-100">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Input
                                id="companyName"
                                label="Company Name"
                                placeholder="Acme Industries"
                                value={formData.companyName}
                                onChange={handleChange}
                                required
                            />
                            <Input
                                id="contactName"
                                label="Contact Person"
                                placeholder="Jane Smith"
                                value={formData.contactName}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Input
                                id="email"
                                label="Email Address"
                                type="email"
                                placeholder="jane@acme.com"
                                value={formData.email}
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

                        <div>
                            <label htmlFor="staffingNeeds" className="block text-sm font-medium text-gray-700 mb-1">
                                Type of Staff Needed
                            </label>
                            <select
                                id="staffingNeeds"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-primary-900 focus:border-primary-900 bg-white"
                                value={formData.staffingNeeds}
                                onChange={handleChange}
                            >
                                <option value="">Select all that apply...</option>
                                <option value="Welders">Welders</option>
                                <option value="General Labor">General Labor</option>
                                <option value="Industrial">Industrial Maintenance</option>
                                <option value="Multiple">Multiple Trades</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                Additional Details / Job Description
                            </label>
                            <textarea
                                id="message"
                                rows="4"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-primary-900 focus:border-primary-900"
                                placeholder="Please describe the project duration, number of workers needed, and specific skills required."
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                        </div>

                        <div className="pt-2">
                            <Button type="submit" size="lg" className="w-full justify-center">
                                Send Request
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ClientRequest;
