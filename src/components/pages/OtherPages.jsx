import React from 'react';
import Blog1 from '../../assets/BlogFolder/blog_1.jpg';
import Blog2 from '../../assets/BlogFolder/blog_2.jpg';
import Blog3 from '../../assets/BlogFolder/blog_3.jpg';
import Blog4 from '../../assets/BlogFolder/blog_4.jpg';
import Blog5 from '../../assets/BlogFolder/blog_5.jpg';
import Blog6 from '../../assets/BlogFolder/blog_6.jpg';

const blogPosts = [
    { id: 1, image: Blog1, title: 'Top Trends in Social Media for 2026', category: 'Digital Marketing' },
    { id: 2, image: Blog2, title: 'The Future of SEO: What You Need to Know', category: 'SEO' },
    { id: 3, image: Blog3, title: 'Content Marketing Strategies that Convert', category: 'Content' },
    { id: 4, image: Blog4, title: 'Building a Strong Brand Identity', category: 'Branding' },
    { id: 5, image: Blog5, title: 'The Power of Video Marketing', category: 'Video' },
    { id: 6, image: Blog6, title: 'Email Marketing Best Practices', category: 'Email' },
];

export const Blog = () => {
    return (
        <div className="pt-24 md:pt-32 pb-20 bg-white">
            <div className="container mx-auto px-6">
                <h1 className="text-5xl font-serif text-[#1a1a1a] mb-12">Our <span className="text-[#50b848]">Blog</span></h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <div key={post.id} className="border border-gray-100 rounded-xl overflow-hidden group cursor-pointer hover:shadow-lg transition-all">
                            <div className="bg-gray-200 h-48 relative overflow-hidden">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <span className="absolute top-4 left-4 bg-white px-3 py-1 text-xs font-bold uppercase tracking-wider">{post.category}</span>
                            </div>
                            <div className="p-6">
                                <h3 className="font-bold text-xl mb-3 group-hover:text-[#50b848] transition-colors">{post.title}</h3>
                                <p className="text-gray-500 text-sm mb-4">Discover the latest strategies to keep your brand ahead of the curve...</p>
                                <span className="text-[#50b848] font-bold text-sm">Read Article &rarr;</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export const Careers = () => {
    return (
        <div className="pt-24 md:pt-32 pb-20 bg-white">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-serif text-[#1a1a1a] mb-6">Work With <span className="bg-[#ffe600] px-2">Us</span></h1>
                    <p className="text-xl text-gray-600">Join a team of creators, thinkers, and explorers.</p>
                </div>

                <div className="space-y-6">
                    {['Social Media Manager', 'Senior Graphic Designer', 'React Developer', 'SEO Specialist'].map((role, i) => (
                        <div key={i} className="border border-gray-200 p-8 rounded-2xl flex items-center justify-between hover:border-[#50b848] transition-colors group">
                            <div>
                                <h3 className="text-2xl font-bold mb-2">{role}</h3>
                                <p className="text-gray-500">Kolkata • Full Time</p>
                            </div>
                            <button className="px-6 py-3 bg-black text-white rounded-full font-bold group-hover:bg-[#50b848] transition-colors">Apply Now</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
