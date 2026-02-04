import React from 'react';
import { Facebook, Twitter, Linkedin, Youtube, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-[#1a1a1a] text-white pt-16 md:pt-20 pb-10 font-sans">
            <div className="container mx-auto px-6">

                {/* Main Footer Content - 3 Column Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16 border-t border-white/10 pt-10 md:pt-16">

                    {/* Column 1: Brand & About */}
                    <div className="flex flex-col items-start">
                        <Link to="/" className="text-3xl font-bold mb-6 text-white tracking-wide block hover:opacity-80 transition-opacity">
                            Digital Exposure<br />
                            <span className="text-sm tracking-[0.3em] text-gray-400 uppercase font-bold">Online Services</span>
                        </Link>
                        <p className="text-gray-400 text-sm mb-8 leading-relaxed font-medium max-w-sm">
                            We are a full service creative digital marketing agency based in Kolkata. We combine our years of experience in creating integrated marketing solutions with creative output.
                        </p>
                    </div>

                    {/* Column 2: Address & Services */}
                    <div>
                        <div className="mb-8 md:mb-10">
                            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Location</h4>
                            <p className="text-gray-400 text-sm font-medium leading-relaxed">
                                216/3A Gitanjali Apartment, 2nd Floor<br />
                                AJC Bose Road kolkata 700017
                            </p>
                        </div>

                        <div className="space-y-3">
                            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Services</h4>
                            <p className="text-gray-400 text-sm font-medium hover:text-[#ffe600] transition-colors cursor-pointer">Digital Strategy and Planning</p>
                            <p className="text-gray-400 text-sm font-medium hover:text-[#ffe600] transition-colors cursor-pointer">Social Media Marketing</p>
                            <p className="text-gray-400 text-sm font-medium hover:text-[#ffe600] transition-colors cursor-pointer">Website Design and Development</p>
                            <p className="text-gray-400 text-sm font-medium hover:text-[#ffe600] transition-colors cursor-pointer">SEO and Search Engine Marketing</p>
                        </div>
                    </div>

                    {/* Column 3: Social & Contact */}
                    <div className="flex flex-col justify-between h-full">
                        <div>
                            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Connect</h4>
                            <div className="flex gap-6 mb-8 md:mb-12">
                                {[Facebook, Twitter, Linkedin, Youtube].map((Icon, i) => (
                                    <a key={i} href="#" className="text-white hover:text-[#ffe600] transition-colors transform hover:scale-110 duration-200"><Icon size={24} /></a>
                                ))}
                            </div>

                            <div className="flex items-center gap-3 text-gray-400 mb-2 hover:text-white transition-colors cursor-pointer">
                                <Mail size={18} />
                                <span className="text-sm font-medium">Contact us here</span>
                            </div>

                            <div className="mt-4 md:mt-8">
                                <a href="mailto:suman.k@deos.com" className="text-gray-400 hover:text-white text-sm font-medium border-b border-transparent hover:border-white pb-0.5 transition-all">
                                    suman.k@deos.com
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </footer>
    );
};

export default Footer;
