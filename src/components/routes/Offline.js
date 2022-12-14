import * as React from 'react';
import { useTranslation } from 'react-i18next';

import '../../resources/css/Offline.scss';

const body = window.document.body;

function Offline() {
    const { t } = useTranslation();

    React.useEffect(()=>{
        body.classList.add('offline');
    },[]);

    return <>
        <div className="errorBoxContainer offlineContainer">{t('content.offlineMainText')}</div>
    </>
}

export default Offline;