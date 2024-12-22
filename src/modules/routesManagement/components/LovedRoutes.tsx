import * as React from 'react'
import List, { Transformer } from '../../list/List'
import { itemTransform, itemKey } from '../../list/transformers/RouteListTransformer'
import { useTranslation } from 'react-i18next'
import UseLovedRoutes from '../hooks/UseLovedRoutes'
import ErrorBox from '../../../components/ErrorBox'
import { findElementInArray } from '../../../Utils'
import type Route from '../Route'

import '../styles/LovedRoutes.scss'

interface LovedRoutesProps {
  onViewRoute: Function
}

function LovedRoutes({ onViewRoute}: LovedRoutesProps): React.JSX.Element {
  const { t } = useTranslation(['main'])
  const [routes, error] = UseLovedRoutes()
  const transformer: Transformer = {
    transform: itemTransform,
    key: itemKey
  }

  return <div className='lovedRoutesContainer'>
    <ErrorBox message={error}></ErrorBox>
    <List title={t('description.rutasguardadas')}
      data={routes}
      readOnly={false}
      transformer={transformer}
      onItemAction={(rid: string) => {
        const [route] = findElementInArray(routes, rid, (item: Route, value: string)=>item.rid===value)

        if (route) {
          window.scrollTo(0, 0)
          onViewRoute(route)
        }
      }}></List>
  </div>
}

export default LovedRoutes