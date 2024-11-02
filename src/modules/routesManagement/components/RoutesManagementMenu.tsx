import * as React from 'react'
import { useTranslation } from 'react-i18next'
import List from '../../list/List'
import { itemTransform } from '../../list/components/RouteListTransformer'
import RoutesSearch from '../../routesSerch/RoutesSearch'
import LovedRoutes from './LovedRoutes'
import UseRoutesManagementMenu from '../hooks/UseRoutesManagementMenu'
import ErrorBox from '../../../components/ErrorBox'

interface RoutesManagementMenuProps {
    onCreateRoute: Function,
    onViewRoute: Function
}

function RoutesManagementMenu({ onCreateRoute, onViewRoute }: RoutesManagementMenuProps) {
    const { t } = useTranslation(['main'])
    const [routes, onDeleteRoute, error] = UseRoutesManagementMenu()

    return <>
        <div className='headerText bold sectionTitle'>{t('description.seccionderutas')}</div>
        <RoutesSearch></RoutesSearch>
        <div className="routesManagement rounded rounded3">
            <ErrorBox message={error}></ErrorBox>
            <List data={routes}
                readOnly={false}
                transformer={itemTransform}
                onRemoveItem={onDeleteRoute}
                onConfigureItem={(i: number) => {
                    window.scrollTo(0, 0)
                    onCreateRoute(routes[i])
                }}
                title={t('description.misrutas')}
                onItemAction={(i: number) => {
                    window.scrollTo(0, 0)
                    onViewRoute(routes[i])
                }} ></List>
        </div>
        <LovedRoutes onViewRoute={onViewRoute}></LovedRoutes>
        <button className='importantNote' onClick={() => {
            window.scrollTo(0,0)
            onCreateRoute()
        }}>{t('description.crear')}</button>
    </>
}

export default RoutesManagementMenu