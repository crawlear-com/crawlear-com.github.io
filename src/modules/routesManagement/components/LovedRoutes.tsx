import * as React from 'react'
import List from '../../list/List'
import Route from '../Route'
import { itemTransform } from '../../list/components/RouteListTransformer'
import { useTranslation } from 'react-i18next'
import UseLovedRoutes from '../hooks/UseLovedRoutes'

interface LovedRoutesProps {
  onViewRoute: Function
} 

function LovedRoutes({ onViewRoute}: LovedRoutesProps): React.JSX.Element {
  const { t } = useTranslation()
  const routes = UseLovedRoutes()

  return <List title={t('description.rutasguardadas')}
            data={routes}
            readOnly={false}
            onItemAction={(i: number) => {
              window.scrollTo(0, 0)
              onViewRoute(routes[i])
          }}
            transformer={itemTransform}></List>
}

export default LovedRoutes