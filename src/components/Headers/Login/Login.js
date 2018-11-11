import React from 'react';
import { Link } from 'react-router-dom';

import searchicon from '../../../static/images/search.png'

import './Login.scss';

const Login = () => {
    return(
        <div className="Login">
            <Link to="/signin"><li>sign-in</li></Link>
            <Link to="/signup"><li>sign-up</li></Link>
            <Link to="/mypage"><li className="my">my page</li></Link>

            <input type="text"/>
            <button>
                <img src={searchicon} alt={"search"}/>
            </button>
        </div>
    );
};

export default Login;