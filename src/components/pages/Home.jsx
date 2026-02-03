import React from 'react';
import Hero from '../sections/Hero';
import VisualGrid from '../sections/VisualGrid';
import IntegratedSolutions from '../sections/IntegratedSolutions';
import Strategy from '../sections/Strategy';
import Clients from '../sections/Clients';

const Home = () => {
    return (
        <>
            <Hero />
            <VisualGrid />
            <IntegratedSolutions />
            <Strategy />
            <Clients />
        </>
    );
};

export default Home;
