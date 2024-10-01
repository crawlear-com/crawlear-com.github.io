import * as React from 'react'
import Analytics from '../../../../Analytics';

import '../../styles/embed/CopySharer.scss';

function CopySharer({url}) {
  const [copiedStatus, setCopiedStatus] = React.useState(false)
  function onLinkClick() {
    navigator.clipboard?.writeText(url);
    setCopiedStatus(true)
    Analytics.event('share','copy', url);
}

return <span className='copyLogo' onClick={onLinkClick}>
    { copiedStatus ? <>copied!</> : <>copy</>}
</span>;

}

export default CopySharer