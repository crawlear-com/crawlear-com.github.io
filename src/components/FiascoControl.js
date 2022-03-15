import * as React from 'react';
import ControlTextArray from './ControlTextArray';
import IsrccGameScores from './games/IsrccGameScores';
import { useTranslation } from 'react-i18next';
import Utils from '../Utils';

function FiascoControl({values, onChangeScore}) {
    const { t } = useTranslation(),
        steps = [50,1,1,1,1],
        maxValues = [1,1,1,1,1],
        texts = Utils.tokenToTexts(IsrccGameScores.fiascoTexts);

    return <ControlTextArray
        textToken='points.fiascos'
        controlTextValues={values}
        steps={steps}
        maxValues={maxValues}
        texts={texts}
        onValueChange={onChangeScore}
     />;
;
}

export default FiascoControl;