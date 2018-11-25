import React from 'react';

// import { Link } from 'react-router-dom';
import Logo from '../../../static/images/dafault_logo.png'

import './MainHeader.scss';

const MainHeader = () => {
    return (
        <div className="MainHeader">
            <img src={Logo} alt={"logo"}/>
        </div>
    );
  };
  
  export default MainHeader;