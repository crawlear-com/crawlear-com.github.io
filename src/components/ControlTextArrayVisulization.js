import * as React from 'react';
import { useTranslation } from 'react-i18next';

import '../resources/css/ControlTextArrayVisualization.scss';

function ControlTextArrayVisualization({controlTextValues}) {
    let i=0;
    const controlArray = [];
    const { t } = useTranslation();
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

    controlTextValues.forEach((controltextValue)=>{
        controlArray.push(<div key={i} className="controlTextValues">{texts[i]}: {controltextValue}</div>);
        i++;
    });

    return controlArray;
}

export default ControlTextArrayVisualization;