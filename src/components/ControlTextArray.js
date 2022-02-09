import * as React from 'react';
import ControlText from './ControlText';
import { useTranslation } from 'react-i18next';

function ControlTextArray({controlTextValues, player, onValueChange, onDirectFiasco, booleanValue}) {
    let i=0;
    const isFullScore = controlTextValues.length>14;
    const controlArray = [];
    const { t } = useTranslation();
    const steps = [5,3,2,5,5,3,-1,3,1,5,1,2,3,  1,5,5,3,3,5,5,5];
    const maxValues = [0,0,0,0,0,0,0,0,0,0,0,0,0,  0,1,0,1,0,0,1,0];
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

    controlArray.push(<div key="mainTitle" className="rounded rounded2">{t('description.penalizaciones')}:</div>);

    if (controlTextValues.length > 7) {
        controlArray.push(<div key="booleanValue" className="controlText controlTextBoolean">
            <span className="bold controlTextText">{t('points.bateria')}</span>
            <span className="controlTextValue" onClick={onBooleanValueChange}>{
                booleanValue ? "0% (FiASCO)": "100%"
            }</span>
        </div>);
    }

    while (i<14 && i<controlTextValues.length) {
        const j = i;

        controlArray.push(<ControlText key={i} 
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
        controlArray.push(<p key="additialTitle" className="rounded rounded2">{t('description.penalizacionesadicionales')}:</p>);
        while (i<controlTextValues.length) {
            const j = i;

            controlArray.push(<ControlText key={i} 
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

    return controlArray;
}

export default ControlTextArray;