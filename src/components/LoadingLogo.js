import * as React from 'react';
import Spinner from './Spinner';
import UseIfVisible from '../hooks/UseIfVisible';

import logo from '../resources/img/logo5.png';


function LoadingLogo({onVisible}) {
    const logoRef = React.useRef(null);
    const [statusRendered, setStatusRendered] = React.useState(false);
    const [isVisible, setIsVisible] = React.useState(false);

    React.useEffect(()=>{
        setStatusRendered(true);
    },[]);

    UseIfVisible(logoRef.current, (visible)=>{
        if(!isVisible && visible) {
            setIsVisible(true);
            onVisible(true);
        }
    });

    return <div className=''>
        <a href="https://crawlear.com" target="_blank" rel="noreferrer">
            <img ref={logoRef} src={logo} className="userViewerLogo" alt="web logo"></img>
        </a>
        <br />
        <Spinner />
    </div>;
}

export default LoadingLogo;