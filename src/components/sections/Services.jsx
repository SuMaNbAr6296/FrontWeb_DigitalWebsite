import React from 'react';
import { Globe, Smartphone, Megaphone, Search, PenTool, BarChart, FileJson, Mail, Users } from 'lucide-react';

const services = [
    {
        icon: Globe,
        title: 'Website Development',
        desc: 'Custom, high-performance websites that look great and convert better.',
        color: 'text-[#297fb2]', // Blue
        hoverBorder: 'hover:border-[#297fb2]'
    },
    {
        icon: Users,
        title: 'Social Media Marketing',
        desc: 'Building communities and engaging audiences across all platforms.',
        color: 'text-[#91c744]', // Green
        hoverBorder: 'hover:border-[#91c744]'
    },
    {
        icon: Search,
        title: 'Search Engine Optimization',
        desc: 'Boosting visibility and organic traffic with strategic SEO.',
        color: 'text-[#297fb2]',
        hoverBorder: 'hover:border-[#297fb2]'
    },
    {
        icon: BarChart,
        title: 'Performance Marketing',
        desc: 'ROI-focused paid advertising across social and search platforms.',
        color: 'text-[#91c744]',
        hoverBorder: 'hover:border-[#91c744]'
    },
    {
        icon: PenTool,
        title: 'Design & Copywriting',
        desc: 'Creative visuals and compelling copy that tell your brand story.',
        color: 'text-[#297fb2]',
        hoverBorder: 'hover:border-[#297fb2]'
    },
    {
        icon: Smartphone,
        title: 'Mobile App Development',
        desc: 'Native and cross-platform mobile applications for iOS and Android.',
        color: 'text-[#91c744]',
        hoverBorder: 'hover:border-[#91c744]'
    },
    {
        icon: Mail,
        title: 'E-mail Marketing & CRM',
        desc: 'Personalized campaigns to nurture leads and retain customers.',
        color: 'text-[#297fb2]',
        hoverBorder: 'hover:border-[#297fb2]'
    },
    {
        icon: FileJson,
        title: 'Metaverse Development',
        desc: 'Future-ready immersive experiences in the virtual world.',
        color: 'text-[#91c744]',
        hoverBorder: 'hover:border-[#91c744]'
    }
];

const Services = () => {
    return (
        <section id="services" className="py-16 md:py-24 bg-[#1a1a1a] relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-sm font-bold text-[#91c744] uppercase tracking-widest mb-3">What We Do</h2>
                    <h3 className="text-4xl md:text-5xl font-black text-white mb-6">Our Services</h3>
                    <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
                        We provide a comprehensive suite of digital services to help your business grow and thrive in the digital age.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`group p-8 rounded-2xl border border-white/5 bg-[#212121] transition-all duration-300 hover:-translate-y-2 ${service.hoverBorder} hover:shadow-2xl`}
                        >
                            <div className={`w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${service.color}`}>
                                <service.icon size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-white transition-colors">{service.title}</h3>
                            <p className="text-zinc-500 text-sm leading-relaxed group-hover:text-zinc-300 transition-colors">
                                {service.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
