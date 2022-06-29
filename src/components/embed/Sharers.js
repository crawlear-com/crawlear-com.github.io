import { useTranslation } from 'react-i18next';
import * as React from 'react';
import FacebookSharer from '../embed/FacebookSharer';
import TwitterSharer from '../embed/TwitterSharer';
import TelegramSharer from '../embed/TelegramSharer';
import WhatsappSharer from '../embed/WhatsappSharer';

function Sharers({url}) {
    const { t } = useTranslation();

    return <div className='sharerContainer rounded rounded3'>
        <div className='bold shareProfileText'>{t('content.comparteenredes')}</div>
        <FacebookSharer url={`https://crawlear.com/${url}`}/>
        <TwitterSharer url={`https://crawlear.com/${url}`} />
        <WhatsappSharer url={`https://crawlear.com/${url}`} />
        <TelegramSharer url={`https://crawlear.com/${url}`} />
    </div>
;
}

export default Sharers;