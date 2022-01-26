import * as React from 'react';
import { useTranslation } from 'react-i18next';

import '../resources/css/ControlTextArrayVisualization.scss';

const MODE_OFFICIAL = 1;

function ControlTextArrayVisualization({controlTextValues, pointsMode}) {
    const controlArray = [];
    const { t } = useTranslation();

    if (pointsMode === MODE_OFFICIAL) {
        controlArray.push(<div key={0} className="controlTextValues">{t('points.vuelco')}: {controlTextValues[0]}</div>);
        controlArray.push(<div key={1} className="controlTextValues">{t('points.tocar')}: {controlTextValues[1]}</div>);
        controlArray.push(<div key={2} className="controlTextValues">{t('points.puerta')}: {controlTextValues[2]}</div>);
        controlArray.push(<div key={3} className="controlTextValues">{t('points.saltoobstaculo')}: {controlTextValues[3]}</div>);
        controlArray.push(<div key={4} className="controlTextValues">{t('points.reparacion')}: {controlTextValues[4]}</div>);
        controlArray.push(<div key={5} className="controlTextValues">{t('points.winch')}: {controlTextValues[5]}</div>);
        controlArray.push(<div key={6} className="controlTextValues">{t('points.puertaprogresion')}: {controlTextValues[6]}</div>);
        controlArray.push(<div key={7} className="controlTextValues">{t('points.equipaje')}: {controlTextValues[7]}</div>);
        controlArray.push(<div key={8} className="controlTextValues">{t('points.distancia')}: {controlTextValues[8]}</div>);
        controlArray.push(<div key={9} className="controlTextValues">{t('points.anclajeindebido')}: {controlTextValues[9]}</div>);
        controlArray.push(<div key={10} className="controlTextValues">{t('points.juez')}: {controlTextValues[10]}</div>);
    } else {
        controlArray.push(<div key={0} className="controlTextValues">{t('points.vuelco')}: {controlTextValues[0]}</div>);
        controlArray.push(<div key={1} className="controlTextValues">{t('points.tocar')}: {controlTextValues[1]}</div>);
        controlArray.push(<div key={2} className="controlTextValues">{t('points.puerta')}: {controlTextValues[2]}</div>);
        controlArray.push(<div key={3} className="controlTextValues">{t('points.saltoobstaculo')}: {controlTextValues[3]}</div>);
        controlArray.push(<div key={4} className="controlTextValues">{t('points.reparacion')}: {controlTextValues[4]}</div>);
        controlArray.push(<div key={5} className="controlTextValues">{t('points.winch')}: {controlTextValues[5]}</div>);
        controlArray.push(<div key={6} className="controlTextValues">{t('points.puertaprogresion')}: {controlTextValues[6]}</div>);
    }
    return controlArray;
}

export default ControlTextArrayVisualization;