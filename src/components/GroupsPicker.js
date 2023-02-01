import * as React from 'react';
import { useTranslation } from 'react-i18next';
import Picker from './Picker';
import { isOffline } from './routes/Offline';

function GroupsPicker({onGroupsChange,
    value,
    minValue,
    maxValue}) {
    const { t } = useTranslation();

    return isOffline ? <></> :
        <div>
            <p>{t('content.selecciongrupos')}:</p>
            <div className="pickerContainer horizontalScrollContainer rounded rounded2">
                <Picker minValue={minValue || 1} 
                    maxValue={maxValue || 10}
                    value={value}
                    callback={(result) => {
                        onGroupsChange(result);
                    }} 
                    initialValue={1} />
                </div>
        </div>;
   }


export default GroupsPicker;