import React from 'react';
import { ArrowRight, Twitter, Facebook, Instagram, Linkedin, MessageCircle, Share2, MousePointer } from 'lucide-react';
import { Link } from 'react-router-dom';

const VisualGrid = () => {
    return (
        <section className="w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2">

                {/* Left Large Block - Marketing */}
                <div className="bg-[#1a1a1a] min-h-[400px] lg:min-h-full relative overflow-hidden flex items-center justify-center p-8 md:p-10 group">
                    {/* Background decorative elements */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                        <Twitter size={400} />
                    </div>

                    <div className="relative z-10 text-center w-full">
                        {/* Bird / Man Illustration Placeholder */}
                        <div className="w-48 h-48 md:w-80 md:h-80 mx-auto mb-6 md:mb-8 relative transform scale-75 md:scale-100 transition-transform">
                            {/* Blue Bird Body */}
                            <div className="absolute inset-x-0 bottom-0 h-48 bg-[#29b6f6] rounded-full blur-md group-hover:blur-sm transition-all duration-500"></div>
                            {/* Man on top substitute */}
                            <div className="absolute inset-x-0 bottom-24 flex justify-center">
                                <div className="bg-yellow-400 p-4 rounded-full border-4 border-black">
                                    <Facebook size={40} className="text-black" />
                                </div>
                            </div>
                            {/* Clouds */}
                            <div className="absolute top-10 -left-6 md:-left-10 text-gray-600/30"><Instagram size={60} /></div>
                            <div className="absolute top-20 -right-6 md:-right-10 text-gray-600/30"><Linkedin size={60} /></div>
                        </div>

                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">Social Media</h2>
                        <h2 className="text-3xl md:text-5xl font-bold text-[#29b6f6]">Marketing</h2>

                        <Link to="/services" className="inline-block mt-8 bg-[#29b6f6] text-white px-8 py-3 rounded-full font-bold uppercase tracking-widest hover:bg-white hover:text-[#29b6f6] transition-colors">
                            Learn More
                        </Link>
                    </div>
                </div>

                {/* Right Grid - 2x2 Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2">

                    {/* Block 1 */}
                    <div className="bg-[#ffe600] h-[300px] md:h-[400px] p-10 flex flex-col justify-between group hover:bg-[#ffea00] transition-colors relative overflow-hidden">
                        <div className="absolute -right-10 -top-10 opacity-20 transform rotate-12 transition-transform group-hover:rotate-45">
                            <MousePointer size={150} />
                        </div>
                        <div className="relative z-10">
                            <h3 className="text-3xl font-bold text-black mb-2">SEO</h3>
                            <p className="text-black font-medium">Search Engine Optimization</p>
                        </div>
                        <ArrowRight className="text-black w-10 h-10 transform group-hover:translate-x-2 transition-transform" />
                    </div>

                    {/* Block 2 */}
                    <div className="bg-white h-[300px] md:h-[400px] p-10 flex flex-col justify-between border-b border-r border-gray-100 group relative overflow-hidden">
                        <div className="absolute -right-10 -bottom-10 opacity-10 text-gray-500">
                            <MessageCircle size={150} />
                        </div>
                        <div className="relative z-10">
                            <h3 className="text-3xl font-bold text-black mb-2">Content</h3>
                            <p className="text-gray-500 font-medium">Marketing Strategy</p>
                        </div>
                        <ArrowRight className="text-black w-10 h-10 transform group-hover:translate-x-2 transition-transform" />
                    </div>

                    {/* Block 3 */}
                    <div className="bg-[#50b848] h-[300px] md:h-[400px] p-10 flex flex-col justify-between group relative overflow-hidden">
                        <div className="absolute -left-10 -bottom-10 opacity-20 text-black">
                            <Share2 size={150} />
                        </div>
                        <div className="relative z-10">
                            <h3 className="text-3xl font-bold text-white mb-2">PPC</h3>
                            <p className="text-white font-medium">Pay Per Click</p>
                        </div>
                        <ArrowRight className="text-white w-10 h-10 transform group-hover:translate-x-2 transition-transform" />
                    </div>

                    {/* Block 4 */}
                    <div className="bg-[#f5f5f5] h-[300px] md:h-[400px] p-10 flex flex-col justify-center items-center text-center group cursor-pointer hover:bg-gray-200 transition-colors">
                        <div className="w-20 h-20 rounded-full border-4 border-black flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <ArrowRight size={32} />
                        </div>
                        <h3 className="text-xl font-bold uppercase tracking-widest">View All<br />Services</h3>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default VisualGrid;
