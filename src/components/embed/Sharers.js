import { useTranslation } from 'react-i18next';
import * as React from 'react';
import FacebookSharer from '../embed/FacebookSharer';
import TwitterSharer from '../embed/TwitterSharer';
import TelegramSharer from '../embed/TelegramSharer';
import WhatsappSharer from '../embed/WhatsappSharer';

function Sharers({uid}) {
    const { t } = useTranslation();

    return <div className='sharerContainer rounded rounded3'>
        <div className='bold shareProfileText'>{t('content.comparteenredes')}</div>
        <FacebookSharer url={`https://crawlear.com/profile?uid=${uid}`}/>
        <TwitterSharer url={`https://crawlear.com/profile?uid=${uid}`} />
        <WhatsappSharer url={`https://crawlear.com/profile?uid=${uid}`} />
        <TelegramSharer url={`https://crawlear.com/profile?uid=${uid}`} />
    </div>
;
}

export default Sharers;