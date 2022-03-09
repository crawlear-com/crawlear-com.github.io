import * as React from 'react';

import '../resources/css/ControlTextArrayVisualization.scss';

function ControlTextArrayVisualization({controlTextValues, texts}) {
    let i=0;
    const controlArray = [];

    controlTextValues.forEach((controltextValue)=>{
        if (controltextValue !== 0) {
            controlArray.push(<div key={i} className="controlTextValues">{texts[i]}: {controltextValue}</div>);
        }
        i++;
    });

    return controlArray;
}

export default ControlTextArrayVisualization;