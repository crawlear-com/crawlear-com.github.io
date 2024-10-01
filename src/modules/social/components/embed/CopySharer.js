import * as React from 'react'
import Analytics from '../../../../Analytics';
import { useTranslation } from 'react-i18next';

import '../../styles/embed/CopySharer.scss';

function CopySharer({url}) {
  const { t } = useTranslation(['main']);
  const [copiedStatus, setCopiedStatus] = React.useState(false)
  function onLinkClick() {
    navigator.clipboard?.writeText(url);
    setCopiedStatus(true)
    Analytics.event('share','copy', url);
}

return <span className='copyLogo' onClick={onLinkClick}>
    { copiedStatus ? <>{t('description.copiado')}!</> : <>{t('description.copiar')}</>}
</span>;

}

export default CopySharer