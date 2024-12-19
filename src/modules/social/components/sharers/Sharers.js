import * as React from 'react';
import FacebookSharer from './FacebookSharer';
import TwitterSharer from './TwitterSharer';
import TelegramSharer from './TelegramSharer';
import WhatsappSharer from './WhatsappSharer';
import CopySharer from './CopySharer';

import '../../styles/sharers/Sharers.scss'

function Sharers({url, text, headerText}) {
    return <div className='sharerContainer'>
        <div className='bold shareProfileText'>{headerText}</div>
        <div className='sharers'>
            <FacebookSharer url={`https://crawlear.com/${url}`} text={text} />
            <TwitterSharer url={`https://crawlear.com/${url}`} text={text} />
            <WhatsappSharer url={`https://crawlear.com/${url}`} text={text} />
            <TelegramSharer url={`https://crawlear.com/${url}`} text={text} />
            <CopySharer url={`https://crawlear.com/${url}`} />
        </div>
    </div>
;
}

export default Sharers;