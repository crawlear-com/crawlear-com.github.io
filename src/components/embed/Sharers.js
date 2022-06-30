import { useTranslation } from 'react-i18next';
import * as React from 'react';
import FacebookSharer from '../embed/FacebookSharer';
import TwitterSharer from '../embed/TwitterSharer';
import TelegramSharer from '../embed/TelegramSharer';
import WhatsappSharer from '../embed/WhatsappSharer';

function Sharers({url, text, headerText}) {
    const { t } = useTranslation();

    return <div className='sharerContainer'>
        <div className='bold shareProfileText'>{headerText}</div>
        <div className='sharers'>
            <FacebookSharer url={`https://crawlear.com/${url}`} text={text} />
            <TwitterSharer url={`https://crawlear.com/${url}`} text={text} />
            <WhatsappSharer url={`https://crawlear.com/${url}`} text={text} />
            <TelegramSharer url={`https://crawlear.com/${url}`} text={text} />
        </div>
    </div>
;
}

export default Sharers;