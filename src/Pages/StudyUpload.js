import React from 'react';

import MainHeader from '../components/Header/MainHeader/';
import MainAccount from '../components/Header/MainAccount/';
import Upload from '../components/Study/StudyUpload/';

const StudyUpload = () => {
    return (
        <div className="StudyUpload">
            <MainHeader/>
            <MainAccount/>
            <Upload/>
        </div>
    );
  };
  
  export default StudyUpload;