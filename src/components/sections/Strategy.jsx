import React from 'react';
import { PenTool } from 'lucide-react';

const Strategy = () => {
    return (
        <section className="flex flex-col md:flex-row w-full">
            {/* Left Graphic Side (Image/Illustration Placeholder) */}
            <div className="order-1 md:order-1 w-full md:w-1/2 bg-[#f9f9f9] min-h-[300px] md:min-h-[400px] relative overflow-hidden flex items-center justify-center p-10">
                {/* Simulated Desk Background */}
                <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center"></div>

                <div className="relative z-10 w-full max-w-md">
                    <h2 className="text-3xl md:text-4xl font-light text-gray-400 mb-4 transform -rotate-2 text-center md:text-left">
                        <span className="text-[#50b848]">Strategy.</span> Creativity. <span className="text-[#ffe600]">Results.</span>
                    </h2>
                    <div className="bg-white p-6 shadow-xl rounded-full w-40 h-40 md:w-48 md:h-48 flex items-center justify-center mx-auto border-4 border-[#50b848]">
                        {/* Cactus/Sphere Abstract Placeholder */}
                        <div className="grid grid-cols-6 gap-1 rotate-45">
                            {[...Array(24)].map((_, i) => (
                                <div key={i} className="w-2 h-2 bg-[#50b848] rounded-full"></div>
                            ))}
                        </div>
                    </div>
                    <div className="absolute bottom-6 left-6 md:bottom-10 md:left-0">
                        <PenTool size={48} className="text-black transform rotate-12 md:w-[64px] md:h-[64px]" />
                    </div>
                </div>
            </div>

            {/* Right Content Side (White) */}
            <div className="order-2 md:order-2 w-full md:w-1/2 bg-white p-8 md:p-16 lg:p-24 flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a1a] mb-6">
                    Strategy, Creativity & Results!
                </h2>
                {/* Pink Accent Line */}
                <div className="w-16 h-1 bg-[#e91e63] mb-6 md:mb-8"></div>

                <p className="text-gray-400 italic font-serif mb-6 text-base md:text-lg">
                    Our approach is backed by strategy, creativity and optimized for results.
                </p>

                <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                    We understand that each client and each project we undertake is different and so we have developed a repeatable process that we know works. Our methodology puts the user at the heart of the experience from the start. By working iteratively through a pre-defined set of stages, we create beautiful and usable solutions that work hard and deliver targeted results.
                </p>

                <div className="mt-8 flex justify-end">
                    <div className="bg-[#ffe600] p-3 shadow-md">
                        <span className="font-bold text-xl">^</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Strategy;
