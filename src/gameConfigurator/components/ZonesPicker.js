
   
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import Picker from '../../components/Picker';

function ZonesPicker({onZonesChange, value=1}) {
    const { t } = useTranslation();

    return <div>
        <p>{t('content.seleccionZonas')}:</p>
        <div className="pickerContainer rounded rounded2">
            <Picker value={value} minValue={1} maxValue={40} callback={(result) => {onZonesChange(result)}} initialValue={1} />
        </div>
    </div>;
}

export default ZonesPicker;