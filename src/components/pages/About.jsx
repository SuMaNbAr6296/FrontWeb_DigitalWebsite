import React from 'react';

const About = () => {
    return (
        <div className="pt-24 md:pt-32 pb-20 bg-white">
            <div className="container mx-auto px-6">
                <h1 className="text-5xl md:text-7xl font-serif mb-12 text-[#1a1a1a]">
                    About <span className="text-[#50b848]">DEOS</span>
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
                    <div>
                        <h2 className="text-3xl font-bold mb-6">We are a creative digital agency based in Kolkata.</h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            DEOS combines years of experience in creating integrated marketing solutions with creative output to generate a rich digital experience for businesses. We live by our motto – “We create super-rich experiences online!”
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            We understand that each client and each project we undertake is different and so we have developed a repeatable process that we know works. Our methodology puts the user at the heart of the experience from the start.
                        </p>
                    </div>
                    <div className="bg-[#ffe600] p-10 rounded-3xl transform rotate-2">
                        <h3 className="text-2xl font-bold mb-4">Our DNA</h3>
                        <ul className="space-y-4 font-bold text-[#1a1a1a]">
                            <li className="flex items-center gap-3">
                                <span className="w-4 h-4 bg-black rounded-full"></span>
                                Digital First Thinking
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-4 h-4 bg-white rounded-full"></span>
                                Creative Innovation
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-4 h-4 bg-[#50b848] rounded-full"></span>
                                Data Driven Results
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-4 h-4 bg-black rounded-full"></span>
                                User Centric Design
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="bg-[#f5f5f5] p-16 rounded-xl text-center">
                    <h2 className="text-4xl font-bold mb-8">Our Mission</h2>
                    <p className="text-2xl font-serif italic text-gray-700 max-w-4xl mx-auto">
                        "To help brands navigate the digital landscape with creativity, technology, and data-driven insights, creating meaningful connections with their audience."
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
