import React from 'react';

const Clients = () => {
    return (
        <>
            <section className="bg-[#ffe600] py-16 md:py-20 relative overflow-hidden">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-10 md:mb-12 flex items-center justify-center gap-2">
                        Our <span className="text-[#00c853]">Clients</span>
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-10 md:gap-x-8 md:gap-y-12 items-center opacity-80 mix-blend-multiply">
                        {/* Logo Placeholders (Black Text for contrast on Yellow) */}
                        {['Mahindra Rise', 'ACMA', 'Ford', 'IIHT', 'CBRE', 'USAID', 'MTV', 'Messe Frankfurt', 'DuPont', 'Hella'].map((client, i) => (
                            <div key={i} className="font-bold text-base md:text-2xl text-black uppercase tracking-tighter hover:scale-110 transition-transform cursor-pointer break-words">
                                {client}
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 md:mt-16 text-center">
                        <button className="bg-[#00c853] text-white px-8 py-3 font-bold uppercase text-sm tracking-widest hover:bg-[#00e676] transition-colors shadow-lg active:scale-95">
                            Load More
                        </button>
                    </div>
                </div>
            </section>

            {/* ZigZag Divider Section */}
            <section className="py-20 md:py-32 zigzag-pattern relative flex items-center justify-center min-h-[300px] md:min-h-[400px]">
                <div className="text-center bg-white/90 p-8 md:p-10 backdrop-blur-sm rounded-xl shadow-xl mx-4 max-w-lg w-full">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-6">Want to check out our portfolio?</h2>
                    <button className="bg-[#ffe600] text-black px-8 py-4 font-bold uppercase text-sm tracking-widest hover:bg-[#ffea00] hover:scale-105 transition-all shadow-lg border-b-4 border-yellow-600 active:border-b-0 active:translate-y-1 w-full md:w-auto">
                        Our Work
                    </button>
                </div>
            </section>

            {/* News Section */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-5xl font-black text-[#1a1a1a] mb-10 md:mb-16 relative inline-block">
                        Our news<span className="text-[#00c853]">...</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 border-t border-gray-200 pt-10 md:pt-16">
                        {[1, 2].map((item) => (
                            <div key={item} className="group cursor-pointer">
                                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">News / June 25, 2024</span>
                                <h3 className="text-xl md:text-2xl font-bold text-[#1a1a1a] mt-2 mb-4 group-hover:text-[#00c853] transition-colors">
                                    DEOS wins a Gold at the Digixx 2024
                                </h3>
                                <p className="text-gray-500 mb-4 line-clamp-2 text-sm md:text-base">
                                    DEOS wins a Gold at the Digixx 2024 for their outstanding campaign...
                                </p>
                                <span className="text-xs font-bold text-[#00c853] uppercase flex items-center gap-1 group-hover:gap-2 transition-all">
                                    Read More <span>→</span>
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Clients;
