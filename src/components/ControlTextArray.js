import * as React from 'react';
import ControlText from './ControlText';
import { useTranslation } from 'react-i18next';

const MODE_OFFICIAL = 1;

function ControlTextArray({controlTextValues, player, pointsMode, onValueChange}) {
    const controlArray = [];
    const { t } = useTranslation();

    if (pointsMode === MODE_OFFICIAL) {
        controlArray.push(<ControlText key={0} value={controlTextValues[0]} onValueChange={(value)=> {onValueChange(value, player, 0)}} initialValue={0} text={t('points.vuelco')} step={5} />);
        controlArray.push(<ControlText key={1} value={controlTextValues[1]} onValueChange={(value)=> {onValueChange(value, player, 1)}} initialValue={0} text={t('points.tocar')} step={3} />);
        controlArray.push(<ControlText key={2} value={controlTextValues[2]} onValueChange={(value)=> {onValueChange(value, player, 2)}} initialValue={0} text={t('points.puerta')} step={2} />);
        controlArray.push(<ControlText key={3} value={controlTextValues[3]} onValueChange={(value)=> {onValueChange(value, player, 3)}} initialValue={0} text={t('points.saltoobstaculo')} step={5} />);
        controlArray.push(<ControlText key={4} value={controlTextValues[4]} onValueChange={(value)=> {onValueChange(value, player, 4)}} initialValue={0} text={t('points.reparacion')} step={5} />);
        controlArray.push(<ControlText key={5} value={controlTextValues[5]} onValueChange={(value)=> {onValueChange(value, player, 5)}} initialValue={0} text={t('points.winch')} step={3} />);
        controlArray.push(<ControlText key={6} value={controlTextValues[6]} onValueChange={(value)=> {onValueChange(value, player, 6)}} initialValue={0} text={t('points.puertaprogresion')} step={-1} />);
        controlArray.push(<ControlText key={7} value={controlTextValues[7]} onValueChange={(value)=> {onValueChange(value, player, 7)}} initialValue={0} text={t('points.equipaje')} step={3} />);
        controlArray.push(<ControlText key={8} value={controlTextValues[8]} onValueChange={(value)=> {onValueChange(value, player, 8)}} initialValue={0} text={t('points.distancia')} step={1} />);
        controlArray.push(<ControlText key={9} value={controlTextValues[9]} onValueChange={(value)=> {onValueChange(value, player, 9)}} initialValue={0} text={t('points.anclajeindebido')} step={5} />);
        controlArray.push(<ControlText key={10} value={controlTextValues[10]} onValueChange={(value)=> {onValueChange(value, player, 10)}} initialValue={0} text={t('points.juez')} step={1} />);
    } else {
        controlArray.push(<ControlText key={0} value={controlTextValues[0]} onValueChange={(value)=> {onValueChange(value, player, 0)}} initialValue={0} text={t('points.vuelco')} step={5} />);
        controlArray.push(<ControlText key={1} value={controlTextValues[1]} onValueChange={(value)=> {onValueChange(value, player, 1)}} initialValue={0} text={t('points.tocar')} step={3} />);
        controlArray.push(<ControlText key={2} value={controlTextValues[2]} onValueChange={(value)=> {onValueChange(value, player, 2)}} initialValue={0} text={t('points.puerta')} step={2} />);
        controlArray.push(<ControlText key={3} value={controlTextValues[3]} onValueChange={(value)=> {onValueChange(value, player, 3)}} initialValue={0} text={t('points.saltoobstaculo')} step={5} />);
        controlArray.push(<ControlText key={4} value={controlTextValues[4]} onValueChange={(value)=> {onValueChange(value, player, 4)}} initialValue={0} text={t('points.reparacion')} step={5} />);
        controlArray.push(<ControlText key={5} value={controlTextValues[5]} onValueChange={(value)=> {onValueChange(value, player, 5)}} initialValue={0} text={t('points.winch')} step={3} />);
        controlArray.push(<ControlText key={6} value={controlTextValues[6]} onValueChange={(value)=> {onValueChange(value, player, 6)}} initialValue={0} text={t('points.puertaprogresion')} step={-1} />);
    }
    return controlArray;
}

export default ControlTextArray;