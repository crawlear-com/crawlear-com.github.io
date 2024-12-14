import * as React from 'react';

import '../resources/css/ControlTextArrayVisualization.scss';

interface ControlTextArrayVisualizationProps {
    controlTextValues: Array<number>,
    texts: Array<string>
}

function ControlTextArrayVisualization({ controlTextValues, texts }: ControlTextArrayVisualizationProps): React.JSX.Element {
    let i=0;
    const controlArray: Array<React.JSX.Element> = [];

    controlTextValues && controlTextValues.forEach((controltextValue)=>{
        if (controltextValue !== 0) {
            controlArray.push(<div key={i} className="controlTextValues">{texts[i]}: {controltextValue}</div>);
        }
        i++;
    });

    return <>{ controlArray }</>
}

export default ControlTextArrayVisualization;