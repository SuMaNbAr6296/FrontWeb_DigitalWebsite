import React from 'react';
import DeosLogo from '../../assets/DEOS.svg';

const Hero = () => {
    return (
        <section className="relative w-full min-h-screen overflow-hidden bg-white pt-24 pb-12 md:pt-32 md:pb-24 flex items-center">

            {/* Background Layer: Yellow Diagonal Shape */}
            <div
                className="absolute top-0 bottom-0 right-[20%] w-[120%] md:w-[80%] bg-[#ffe600] z-0 transform skew-x-[-15deg] origin-top-right translate-x-[20%]"
                style={{ clipPath: 'polygon(20% 0%, 100% 0%, 80% 100%, 0% 100%)' }}
            ></div>

            {/* Background Layer: Green Right Shape */}
            <div
                className="absolute top-0 bottom-0 right-0 w-[50%] md:w-[40%] bg-[#50b848] z-0 transform skew-x-[-15deg] origin-top-right translate-x-[40%]"
            ></div>

            {/* Container for Content */}
            <div className="container mx-auto px-6 md:px-12 relative z-10 w-full">

                <div className="max-w-5xl">
                    {/* Small Squiggle Top */}
                    <div className="mb-6">
                        <svg width="60" height="15" viewBox="0 0 60 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 7.5C5 7.5 7 2 10 2C13 2 15 7.5 18 7.5C21 7.5 23 2 26 2C29 2 31 7.5 34 7.5C37 7.5 39 2 42 2C45 2 47 7.5 50 7.5C53 7.5 55 2 58 2" stroke="black" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </div>

                    <h1 className="text-5xl sm:text-6xl md:text-8xl font-normal text-black leading-[1.1] mb-10 font-serif-headline tracking-tight">
                        We create <br />
                        super-rich <br />
                        experiences online!
                    </h1>

                    {/* Squiggle Under 'super-rich' (Visual placement simulated via SVG below text block or inline) */}
                    <div className="w-32 md:w-48">
                        <svg width="100%" height="20" viewBox="0 0 200 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 10C10 5 20 15 30 10C40 5 50 15 60 10C70 5 80 15 90 10C100 5 110 15 120 10C130 5 140 15 150 10C160 5 170 15 180 10" stroke="black" strokeWidth="3" strokeLinecap="round" />
                        </svg>
                    </div>
                </div>

                {/* Bee Icon - Bottom Left */}
                <div className="absolute left-0 bottom-[-40px] md:bottom-[-80px] z-20">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-white border-2 border-black rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-2xl md:text-4xl"><img src={DeosLogo} alt="DEOS" className="h-15 w-15 md:h-30 md:w-30 object-contain" /></span>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
