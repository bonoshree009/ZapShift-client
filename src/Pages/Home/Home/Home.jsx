import React from 'react';
import Banner from '../banner/Banner';
import HowItWorks from '../HowItWorks';
import OurServices from '../OurServices';
import SelesTeam from '../SalesTeam'

const Home = () => {
    return (
        <div>
         <Banner></Banner>
         <HowItWorks></HowItWorks>
         <OurServices></OurServices>
         <SelesTeam></SelesTeam>
        </div>
    );
};

export default Home;