import React from 'react';
import Project1 from '../../assets/File1/Project-1.jpg';
import Project2 from '../../assets/File1/Project-2.jpg';
import Project3 from '../../assets/File1/Project-3.jpg';
import Project4 from '../../assets/File1/Project-4.jpg';

const projects = [
    { id: 1, image: Project1, title: 'Brand Campaign Name', desc: 'A short description of the impact created for this client.' },
    { id: 2, image: Project2, title: 'Brand Campaign Name', desc: 'A short description of the impact created for this client.' },
    { id: 3, image: Project3, title: 'Brand Campaign Name', desc: 'A short description of the impact created for this client.' },
    { id: 4, image: Project4, title: 'Brand Campaign Name', desc: 'A short description of the impact created for this client.' },
];

const Work = () => {
    return (
        <div className="pt-24 md:pt-32 pb-20 bg-white">
            <div className="container mx-auto px-6">
                <h1 className="text-5xl font-serif text-[#1a1a1a] mb-12">Our Work</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {projects.map((item) => (
                        <div key={item.id} className="group cursor-pointer">
                            <div className="bg-gray-200 h-[400px] rounded-2xl overflow-hidden relative mb-6">
                                <img
                                    src={item.image}
                                    alt={`Project ${item.id}`}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                            </div>
                            <span className="text-[#50b848] font-bold uppercase tracking-wider text-sm">Case Study</span>
                            <h3 className="text-3xl font-bold mt-2 mb-2 group-hover:text-[#50b848] transition-colors">{item.title}</h3>
                            <p className="text-gray-500 text-lg">{item.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <div className="bg-[#ffe600] p-16 rounded-xl">
                        <h2 className="text-black text-4xl font-bold mb-6">Want to see more?</h2>
                        <button className="bg-black text-white px-8 py-4 font-bold rounded-full hover:bg-white hover:text-black transition-colors">
                            Download Full Portfolio
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Work;
