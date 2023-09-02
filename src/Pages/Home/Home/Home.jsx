import React from 'react';
import Banner from '../Banner/Banner';
import OurServices from '../OurServices/OurServices';
import WorkProcess from '../WorkProcess/WorkProcess';
import FAQ from '../FAQ/FAQ';
import OurClients from '../OurClients/OurClients';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OurServices></OurServices>
            <WorkProcess></WorkProcess>
            <FAQ></FAQ>
            <OurClients></OurClients>
        </div>
    );
};

export default Home;