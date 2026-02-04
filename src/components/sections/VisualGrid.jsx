import React from 'react';
import { ArrowRight, Twitter, Facebook, Instagram, Linkedin, MessageCircle, Share2, MousePointer } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import Images
import seoBg from '../../assets/File2/SEO1.jpg';
import contentBg from '../../assets/File2/content_marketing2.jpg';
import ppcBg from '../../assets/File2/PPC3.jpg';
import viewAllBg from '../../assets/File2/view-all-service4.jpg';

const serviceItems = [
    {
        title: 'SEO',
        subtitle: 'Search Engine Optimization',
        bgImage: seoBg,
        icon: MousePointer,
        iconPosition: '-right-10 -top-10', // Tailwind classes for positioning
        iconRotate: 'rotate-12',
        overlayColor: 'bg-[#ffe600]/80', // Fallback or overlay if needed, currently using image
        textColor: 'text-white' // Assuming white text is better on images, adjust based on image brightness
    },
    {
        title: 'Content',
        subtitle: 'Marketing Strategy',
        bgImage: contentBg,
        icon: MessageCircle,
        iconPosition: '-right-10 -bottom-10',
        iconRotate: 'rotate-0',
        textColor: 'text-black', // Adjust based on image
        isBordered: true
    },
    {
        title: 'PPC',
        subtitle: 'Pay Per Click',
        bgImage: ppcBg,
        icon: Share2,
        iconPosition: '-left-10 -bottom-10',
        iconRotate: 'rotate-0',
        textColor: 'text-white'
    }
];

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

                    {serviceItems.map((item, index) => (
                        <div 
                            key={index}
                            className="bg-cover bg-center h-[300px] md:h-[400px] p-10 flex flex-col justify-between group relative overflow-hidden transition-transform duration-500 hover:scale-[1.02] z-0 hover:z-10"
                            style={{ backgroundImage: `url(${item.bgImage})` }}
                        >
                            {/* Overlay for better text readability */}
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors z-0"></div>

                            <div className={`absolute ${item.iconPosition} opacity-20 transform ${item.iconRotate} transition-transform group-hover:rotate-45 ${item.textColor} z-10`}>
                                <item.icon size={150} />
                            </div>
                            
                            <div className="relative z-10">
                                <h3 className={`text-3xl font-bold ${item.textColor} mb-2 drop-shadow-md`}>{item.title}</h3>
                                <p className={`${item.textColor} font-medium drop-shadow-sm`}>{item.subtitle}</p>
                            </div>
                            
                            <ArrowRight className={`${item.textColor} w-10 h-10 transform group-hover:translate-x-2 transition-transform z-10`} />
                        </div>
                    ))}

                    {/* View All Services Block */}
                    <Link 
                        to="/services"
                        className="bg-cover bg-center h-[300px] md:h-[400px] p-10 flex flex-col justify-center items-center text-center group cursor-pointer relative overflow-hidden"
                        style={{ backgroundImage: `url(${viewAllBg})` }}
                    >
                         {/* Overlay */}
                         <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors z-0"></div>

                        <div className="relative z-10">
                            <div className="w-20 h-20 rounded-full border-4 border-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform mx-auto">
                                <ArrowRight size={32} className="text-white"/>
                            </div>
                            <h3 className="text-xl font-bold uppercase tracking-widest text-white drop-shadow-md">View All<br />Services</h3>
                        </div>
                    </Link>

                </div>
            </div>
        </section>
    );
};

export default VisualGrid;
