import * as React from 'react';
import { useTranslation } from 'react-i18next';
import Picker from './Picker';

import '../resources/css/PlayerHandicap.scss'

function PlayerHandicap({
  handicap,
  onHandicapChange
}) {
  const { t } = useTranslation();

    function onPlayerHandicapChange(handicap) {
      onHandicapChange(handicap);
    }

  return <div className='gameProgressionItem rounded rounded3'>
    <div className='handicapContainer'>
      {t('description.bonificacionaccesorios')}: <Picker 
        callback={onPlayerHandicapChange}
        minValue={-5}
        maxValue={0}
        initialValue={0}
        value={handicap}
      />
    </div>
  </div>;
}

export default PlayerHandicap;