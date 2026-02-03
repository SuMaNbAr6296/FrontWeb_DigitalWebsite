import React from 'react';
import { Smartphone, Globe, Search, Megaphone, PenTool, Mail } from 'lucide-react';

const Services = () => {
    const services = [
        {
            icon: Globe,
            title: "Website Development",
            desc: "Custom, high-performance websites that look great and convert better. We build responsive, SEO-friendly sites.",
            color: "bg-blue-100 text-blue-600"
        },
        {
            icon: Megaphone,
            title: "Social Media Marketing",
            desc: "Building communities and engaging audiences across all platforms including Instagram, LinkedIn and Twitter.",
            color: "bg-green-100 text-green-600"
        },
        {
            icon: Search,
            title: "SEO Optimization",
            desc: "Boosting visibility and organic traffic with strategic SEO. We help you rank higher on search engines.",
            color: "bg-yellow-100 text-yellow-600"
        },
        {
            icon: Smartphone,
            title: "Mobile App Development",
            desc: "Native and cross-platform mobile applications for iOS and Android.",
            color: "bg-purple-100 text-purple-600"
        },
        {
            icon: PenTool,
            title: "Design & Branding",
            desc: "Creative visuals and compelling copy that tell your brand story and define your identity.",
            color: "bg-pink-100 text-pink-600"
        },
        {
            icon: Mail,
            title: "Performance Marketing",
            desc: "ROI-focused paid advertising across social and search platforms to generate leads.",
            color: "bg-orange-100 text-orange-600"
        }
    ];

    return (
        <div className="pt-24 md:pt-32 pb-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="bg-[#ffe600] text-black font-bold px-4 py-2 rounded-full uppercase tracking-wider text-sm mb-4 inline-block">What We Do</span>
                    <h1 className="text-5xl font-serif text-[#1a1a1a] mt-4">Our Services</h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="border border-gray-100 p-10 rounded-2xl hover:shadow-xl transition-shadow group">
                            <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${service.color}`}>
                                <service.icon size={32} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                            <p className="text-gray-500 leading-relaxed group-hover:text-black transition-colors">
                                {service.desc}
                            </p>
                            <a href="#" className="inline-block mt-6 font-bold text-[#50b848] border-b-2 border-[#50b848] pb-1">Learn More</a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
