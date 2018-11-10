import React from 'react';
import MainHeader from '../components/Header/MainHeader/';
import MainAccount from '../components/Header/MainAccount/';

const Home = () => {
    return (
        <div className="Header">
            <MainHeader/>
            <MainAccount/>
        </div>
    );
};

export default Home;