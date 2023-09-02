import React from 'react';
import Banner from '../Banner/Banner';
import OurServices from '../OurServices/OurServices';
import WorkProcess from '../WorkProcess/WorkProcess';
import FAQ from '../FAQ/FAQ';
import OurClients from '../OurClients/OurClients';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OurServices></OurServices>
            <WorkProcess></WorkProcess>
            <FAQ></FAQ>
            <OurClients></OurClients>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;