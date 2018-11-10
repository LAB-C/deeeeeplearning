import React from 'react';
import MainHeader from '../components/Header/MainHeader/';
import MainAccount from '../components/Header/MainAccount/';
import MainSubMenu from '../components/Header/MainSubMenu/';

const Home = () => {
    return (
        <div className="Header">
            <MainHeader/>
            <MainAccount/>
            <MainSubMenu/>
        </div>
    );
};

export default Home;