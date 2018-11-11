import React from 'react';
import MainHeader from '../components/Header/MainHeader/';
import MainAccount from '../components/Header/MainAccount/';
import MainBanner from '../components/Header/MainBanner/';

const Home = () => {
    return (
        <div className="Header">
            <MainHeader/>
            <MainAccount/>
            <MainBanner/>
        </div>
    );
};

export default Home;