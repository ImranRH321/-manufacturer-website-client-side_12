import React from 'react';
import Services from '../Services/Services';
import Footer from '../Shared/Footer';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
            <h1>Home page </h1>
            <Banner></Banner>
            <Services></Services>
            <Footer></Footer>
        </div>
    );
};

export default Home;