import * as React from 'react';
import ControlText from './ControlText';
import { useTranslation } from 'react-i18next';

import dropDownImage from '../resources/img/arrowDown.png';

function ControlTextArray({controlTextValues, player, onValueChange, onDirectFiasco, booleanValue}) {
    let i=0;
    const isFullScore = controlTextValues.length>14;
    const controlArray1 = [], controlArray2 = [];
    const { t } = useTranslation();
    const steps = [5,3,2,5,5,3,-1,3,1,5,1,2,3,  1,5,5,3,3,5,5,5,3,3];
    const maxValues = [0,0,0,0,0,0,0,0,0,0,0,0,0,  0,1,0,1,0,0,1,0,0,0];
    const texts = [t('points.vuelco'),
        t('points.tocar'),
        t('points.puerta'),
        t('points.saltoobstaculo'),
        t('points.reparacion'),
        t('points.winch'),
        t('points.puertaprogresion'),
        t('points.equipaje'),
        t('points.distancia'),
        t('points.anclajeindebido'),
        t('points.juez'),
        t('points.saltopelota'),
        t('points.recolocacionbateria'),
        t('points.puertamarchaatras'),

        t('points.nocomunicarcambio'),        
        t('points.conductaincivica'),
        t('points.perdidacarnet'),
        t('points.modificarpista'),
        t('points.perdidadorsal'),
        t('points.modificarcoche'),
        t('points.sacarcoche'),
        t('points.nodorsal'),
        t('incumplimientotecnico')
    ];

    function onBooleanValueChange() {
        onDirectFiasco(player, !booleanValue);
    }

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
                onValueChange(value, player, j);
            }} 
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
                    onValueChange(value, player, j);
                }} 
                initialValue={0} 
                text={texts[i]} 
                step={steps[i]} />);
            i++;
        }
    }

    return <>
        <div className="controlTextContainer closed" onClick={titleOnClick}>
            <p key="mainTitle" className="controlTextTitle rounded rounded2">{t('description.penalizaciones')}
                <img src={dropDownImage} className="dropdown" alt="dropdown icon"></img>
            </p>
                {controlTextValues.length > 7 ? <div key="booleanValue" className="controlText controlTextBoolean">
                    <span className="bold controlTextText">{t('points.bateria')}</span>
                    <span className="controlTextValue" onClick={onBooleanValueChange}>{booleanValue ? "0% (FiASCO)": "100%"}</span>
                </div> : <></>}
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