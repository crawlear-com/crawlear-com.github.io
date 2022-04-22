import * as React from 'react';
import ControlText from './ControlText';
import { useTranslation } from 'react-i18next';

import dropDownImage from '../resources/img/arrowDown.png';

function ControlTextArray({
    textToken='description.penalizaciones',
    controlTextValues, 
    steps,
    maxValues,
    texts,
    player,
    isClosed=true,
    onValueChange}) {
    let i=0;
    const isFullScore = controlTextValues.length>14;
    const controlArray1 = [], 
        controlArray2 = [];
    const { t } = useTranslation();

    function titleOnClick(event) {
        const element = event.target;

        if (element.classList.contains("controlTextTitle")) {
            element.parentElement.classList.toggle("closed");
        }
    }

    while (i<14 && i<controlTextValues.length) {
        const j = i;

        controlArray1.push(<ControlText key={i} 
            value={controlTextValues[i]} 
            onValueChange={(value)=> {
                onValueChange(value, j, player);
            }}
            maxValue={maxValues[i]}
            initialValue={0} 
            text={texts[i]} 
            step={steps[i]} />);
        i++;
    }

    if (isFullScore) {
        while (i<controlTextValues.length) {
            const j = i;

            controlArray2.push(<ControlText key={i} 
                value={controlTextValues[i]}
                maxValue={maxValues[i]}
                onValueChange={(value)=> {
                    onValueChange(value, j, player);
                }} 
                initialValue={0} 
                text={texts[i]} 
                step={steps[i]} />);
            i++;
        }
    }

    return <>
        <div className={isClosed ? "controlTextContainer closed" : "controlTextContainer"} onClick={titleOnClick}>
            <p key="mainTitle" className="controlTextTitle rounded rounded2">{t(textToken)}
                <img src={dropDownImage} className="dropdown" alt="dropdown icon"></img>
            </p>
                {controlArray1}
        </div>
        {isFullScore ? <div className="controlTextContainer closed" onClick={titleOnClick}>
            <p key="additialTitle" className="controlTextTitle rounded rounded2">{t('description.penalizacionesadicionales')}
                <img src={dropDownImage} className="dropdown" alt="dropdown icon"></img>
            </p>
            {controlArray2}
        </div> : <></>}
    </>;
}

export default ControlTextArray;