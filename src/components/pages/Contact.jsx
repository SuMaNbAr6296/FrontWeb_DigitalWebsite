import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
    return (
        <div className="pt-24 md:pt-32 pb-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    <div>
                        <h1 className="text-5xl md:text-6xl font-serif text-[#1a1a1a] mb-8">
                            Let's start a <br /> <span className="text-[#ffe600] bg-black px-2">conversation</span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-12">
                            Have a project in mind? We'd love to hear from you. Fill out the form or reach out directly.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="bg-[#50b848] p-3 rounded-full text-white">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-xl mb-1">Visit Us</h3>
                                    <p className="text-gray-500">
                                        216/3A Gitanjali Apartment, 2nd Floor<br />
                                        AJC Bose Road, Kolkata 700017
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-[#50b848] p-3 rounded-full text-white">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-xl mb-1">Email Us</h3>
                                    <p className="text-gray-500">suman.k@deos.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-[#50b848] p-3 rounded-full text-white">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-xl mb-1">Call Us</h3>
                                    <p className="text-gray-500">+91 98765 43210</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#f9f9f9] p-10 rounded-3xl">
                        <form className="space-y-6">
                            <div>
                                <label className="block font-bold mb-2">Name</label>
                                <input type="text" className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:border-[#50b848]" placeholder="Your Name" />
                            </div>
                            <div>
                                <label className="block font-bold mb-2">Email</label>
                                <input type="email" className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:border-[#50b848]" placeholder="Your Email" />
                            </div>
                            <div>
                                <label className="block font-bold mb-2">Message</label>
                                <textarea className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:border-[#50b848] h-40" placeholder="Tell us about your project"></textarea>
                            </div>
                            <button className="w-full bg-[#1a1a1a] text-white font-bold py-4 rounded-xl hover:bg-[#50b848] transition-colors">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
