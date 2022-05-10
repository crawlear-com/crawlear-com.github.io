import * as React from 'react';
import { useTranslation } from 'react-i18next';
import Picker from './Picker';

function GroupsPicker({onGroupsChange,
    value,
    minValue,
    maxValue}) {
    const { t } = useTranslation();


    return <div>
        <p>{t('content.seleccionPuertas')}:</p>
        <div className="gatesPickerContainer pickerContainer horizontalScrollContainer rounded rounded2">
            <div className='zoneName'>{t('description.grupos')}:</div><br />
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