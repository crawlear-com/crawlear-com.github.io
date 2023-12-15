import * as React from 'react'
import Spinner from './Spinner'

import logo from '../resources/img/logo3.png';
import '../resources/css/WhileLogging.scss';

function WhileLogging() {

        return <div>
            <figure className="logoImg">
                <img alt="crawlear logo" src={logo}></img>
            </figure>
            Loading
            <Spinner></Spinner>
        </div>
}

export default WhileLogging