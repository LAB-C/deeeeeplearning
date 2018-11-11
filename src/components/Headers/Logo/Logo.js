import React from 'react';
import { Link } from 'react-router-dom'

import Logos from '../../../static/images/dafault_logo.png'

import './Logo.scss';

const Logo = () => {
    return (
    <div className="MainHeader">
        <Link to="/"><img src={Logos} alt={"logo"}/></Link>
    </div>
);
};

export default Logo;