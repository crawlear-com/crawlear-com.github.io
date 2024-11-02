import * as React from 'react';
import ControlText from './ControlText';
import { useTranslation } from 'react-i18next';
import { GameContext } from '../context/GameContext';

import dropDownImage from '../resources/img/arrowdown.png';

interface ControlTextArrayProps {
    controlTextValuesString: string
    textToken: string
    steps: Array<number>
    maxValues: Array<number>
    texts: Array<string>
    player: any
    zone: any
    isClosed: boolean
    onValueChange: Function
}

function ControlTextArray({ controlTextValuesString, textToken, steps, maxValues,
    texts, player, zone, isClosed=true, onValueChange }: ControlTextArrayProps) {

    const { t } = useTranslation(['main']);
    const { game } = React.useContext(GameContext);

    if(!game || !game.players.length) return <></>;

    const playerZone = game.players[player].zones[zone]
    const controlTextValues = controlTextValuesString.indexOf('fiasco')<0 ?
        playerZone.gateProgressionData[playerZone.gateProgression][controlTextValuesString] :
        playerZone[controlTextValuesString];
    const isFullScore = controlTextValues.length>14
    const controlArray = controlTextValues.map((value: number, key: number) => {
        return <ControlText key={texts[key]} value={value}
            onValueChange={(val: number)=> {
                onValueChange(val, key, player);
            }}
            maxValue={maxValues[key]} text={texts[key]} step={steps[key]} />
    })

    function titleOnClick(event: React.MouseEvent<HTMLDivElement>) {
        const element = (event.target as HTMLDivElement);

        if (element.classList.contains("controlTextTitle")) {
            element.parentElement?.classList.toggle("closed");
        }
    }

    if (!textToken) {
        return <div className={"controlTextContainer"} onClick={titleOnClick}>
            { controlArray }
        </div>
    } else {
        return <>
        <div className={isClosed ? "controlTextContainer closed" : "controlTextContainer"} onClick={titleOnClick}>
            <p key="mainTitle" className="controlTextTitle rounded rounded2">{t(textToken)}
                <img src={dropDownImage} className="dropdown" alt="dropdown icon"></img>
            </p>
            { controlArray.slice(0, 14) }
        </div>
        {isFullScore ? <div className="controlTextContainer closed" onClick={titleOnClick}>
            <p key="additialTitle" className="controlTextTitle rounded rounded2">{t('description.penalizacionesadicionales')}
                <img src={dropDownImage} className="dropdown" alt="dropdown icon"></img>
            </p>
            { controlArray.slice(14, controlArray.length) }
        </div> : <></>}
        </>
    }
}

export default ControlTextArray;