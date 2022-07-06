import * as React from 'react';
import logo from '../resources/img/logo5.png'
import Spinner from './Spinner';

function LoadingLogo({logoRef}) {
    return <div className=''>
        <a href="https://crawlear.com" target="_blank" rel="noreferrer">
            <img ref={logoRef} src={logo} className="userViewerLogo" alt="web logo"></img>
        </a>
        <br />
        <Spinner />
    </div>;
}

export default LoadingLogo;