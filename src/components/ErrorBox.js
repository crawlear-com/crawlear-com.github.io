import * as React from 'react';

import '../resources/css/ErrorBox.scss';

function ErrorBox({message}) {

    if (!message || message.length <=0) return <></>;

    return <div className="errorBoxContainer">
        {message}
    </div>;
}

export default ErrorBox;