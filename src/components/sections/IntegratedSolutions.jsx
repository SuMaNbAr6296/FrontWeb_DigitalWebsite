import React from 'react';

const IntegratedSolutions = () => {
    return (
        <section className="flex flex-col md:flex-row w-full">
            {/* Left Content Side (White) */}
            <div className="w-full md:w-1/2 bg-white p-8 md:p-16 lg:p-24 flex flex-col justify-center order-2 md:order-1">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a1a] mb-6 md:mb-8">
                    Integrated Digital Solutions
                </h2>
                {/* Pink Accent Line */}
                <div className="w-16 h-1 bg-[#e91e63] mb-6 md:mb-8"></div>

                <p className="text-base md:text-lg text-gray-400 italic font-serif mb-6">
                    Insights, Metrics and Analytics - Everything is connected!
                </p>

                <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                    In a digital world where everything's connected, we believe that the approach to digital communications has to be joined-up too. Our approach combines creativity & technology and blends a diverse range of digital marketing disciplines — from mobile and responsive web design to search and social media campaigns — all under one roof.
                </p>
            </div>

            {/* Right Graphic Side (Grey with Phone illustration simulation) */}
            <div className="w-full md:w-1/2 bg-[#e0e0e0] min-h-[300px] md:min-h-auto relative overflow-hidden flex items-center justify-center order-1 md:order-2">
                {/* Simulated Wire */}
                <div className="absolute top-0 bottom-0 left-1/4 w-1 bg-[#5d4037] transform skew-x-12 opacity-80"></div>
                <div className="absolute top-0 bottom-0 right-1/4 w-1 bg-[#5d4037] transform -skew-x-12 opacity-80"></div>

                <div className="relative z-10 text-center py-20 md:py-0">
                    {/* Outline Text Effect */}
                    <h2 className="text-5xl md:text-6xl lg:text-8xl font-bold text-transparent" style={{ WebkitTextStroke: '2px #50b848' }}>
                        Everything
                    </h2>
                    <div className="absolute -top-6 -right-0 md:-top-10 md:-right-10 text-[#ffe600] transform rotate-12">
                        {/* Phone Handset SVG Placeholder */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="md:w-[120px] md:h-[120px]">
                            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 1.23 0 2.44.2 3.57.57.35.13.46.75.24 1.02l-2.2 2.2z" />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IntegratedSolutions;
