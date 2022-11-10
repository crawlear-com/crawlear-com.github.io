import * as React from 'react';
import ButtonText from './ButtonText';
import { useTranslation } from 'react-i18next';
import { GameContext } from './context/GameContext';

import dropDownImage from '../resources/img/arrowDown.png';

function ButtonTextArray({
    buttonTextValuesString,
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
    const buttonTextValues = buttonTextValuesString.indexOf('fiasco')<0 ?
        playerZone.gateProgressionData[playerZone.gateProgression][buttonTextValuesString] : 
        playerZone[buttonTextValuesString];
    const isFullScore = buttonTextValues.length>14;

    function titleOnClick(event) {
        const element = event.target;

        if (element.classList.contains("buttonTextTitle")) {
            element.parentElement.classList.toggle("closed");
        }
    }

    while (i<14 && i<buttonTextValues.length) {
        const j = i;

        controlArray1.push(<ButtonText key={i} 
            value={buttonTextValues[i]} 
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
        while (i<buttonTextValues.length) {
            const j = i;

            controlArray2.push(<ButtonText key={i} 
                value={buttonTextValues[i]}
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
        return <div className={"buttonTextContainer"} onClick={titleOnClick}>
            {controlArray1}
            {controlArray2}
        </div>
    } else {
        return <>
        <div className={isClosed ? "buttonTextContainer closed" : "buttonTextContainer"} onClick={titleOnClick}>
            <p key="mainTitle" className="buttonTextTitle rounded rounded2">{t(textToken)}
                <img src={dropDownImage} className="dropdown" alt="dropdown icon"></img>
            </p>
                {controlArray1}
        </div>
        {isFullScore ? <div className="buttonTextContainer closed" onClick={titleOnClick}>
            <p key="additialTitle" className="buttonTextTitle rounded rounded2">{t('description.penalizacionesadicionales')}
                <img src={dropDownImage} className="dropdown" alt="dropdown icon"></img>
            </p>
            {controlArray2}
        </div> : <></>}
        </>
    }
}

export default ButtonTextArray;