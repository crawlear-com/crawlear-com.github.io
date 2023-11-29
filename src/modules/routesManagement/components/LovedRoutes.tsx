import * as React from 'react'
import List from '../../list/List'
import { itemTransform } from '../../list/components/RouteListTransformer'
import { useTranslation } from 'react-i18next'
import UseLovedRoutes from '../hooks/UseLovedRoutes'
import ErrorBox from '../../../components/ErrorBox'

import '../styles/LovedRoutes.scss'

interface LovedRoutesProps {
  onViewRoute: Function
} 

function LovedRoutes({ onViewRoute}: LovedRoutesProps): React.JSX.Element {
  const { t } = useTranslation()
  const [routes, error] = UseLovedRoutes()

  return <div className='lovedRoutesContainer'>
    <ErrorBox message={error}></ErrorBox>
    <List title={t('description.rutasguardadas')}
      data={routes}
      readOnly={false}
      transformer={itemTransform}
      onItemAction={(i: number) => {
        window.scrollTo(0, 0)
        onViewRoute(routes[i])
      }}></List>
  </div>
}

export default LovedRoutes