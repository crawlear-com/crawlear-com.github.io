import * as React from 'react';
import ControlText from './ControlText';
import { useTranslation } from 'react-i18next';
import { GameContext } from '../context/GameContext';

import dropDownImage from '../resources/img/arrowDown.png';

function ControlTextArray({
    controlTextValuesString,
    textToken,
    steps,
    maxValues,
    texts,
    player,
    zone,
    isClosed=true,
    onValueChange}) {
    
    let i=0;
    const { t } = useTranslation();
    const { game } = React.useContext(GameContext);
    const controlArray1 = [], 
        controlArray2 = [];

    if(!game || !game.players.length) return <></>;

    const playerZone = game.players[player].zones[zone];
    const controlTextValues = controlTextValuesString.indexOf('fiasco')<0 ?
        playerZone.gateProgressionData[playerZone.gateProgression][controlTextValuesString] : 
        playerZone[controlTextValuesString];
    const isFullScore = controlTextValues.length>14;

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

            controlArray2.push(<ControlText key={`fullScore${i}`} 
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

    if (!textToken) {
        return <div className={"controlTextContainer"} onClick={titleOnClick}>
            {controlArray1}
            {controlArray2}
        </div>
    } else {
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
        </>
    }
}

export default ControlTextArray;