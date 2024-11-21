import * as React from 'react'
import { useTranslation } from 'react-i18next'
import List, { Transformer } from '../../list/List'
import { itemTransform, itemKey } from '../../list/components/RouteListTransformer'
import Route from '../Route'
import RoutesSearch from '../../routesSerch/RoutesSearch'
import LovedRoutes from './LovedRoutes'
import UseRoutesManagementMenu from '../hooks/UseRoutesManagementMenu'
import ErrorBox from '../../../components/ErrorBox'
import Utils from '../../../Utils'

import '../styles/RoutesManagementMenu.scss'

interface RoutesManagementMenuProps {
    onCreateRoute: Function,
    onViewRoute: Function
}

function RoutesManagementMenu({ onCreateRoute, onViewRoute }: RoutesManagementMenuProps) {
    const { t } = useTranslation(['main'])
    const [routes, onDeleteRoute, error] = UseRoutesManagementMenu()
    const transformer: Transformer = {
        transform: itemTransform,
        key: itemKey
    }

    return <>
        <div className='headerText bold sectionTitle'>{t('description.seccionderutas')}</div>
        <div className="createRoute rounded rounded3">
            { t('description.crearruta') }
            <button className='importantNote' onClick={() => {
                window.scrollTo(0,0)
                onCreateRoute()
            }}>{t('description.crear')}</button>
        </div>
        <RoutesSearch></RoutesSearch>
        <div className="routesManagement rounded rounded3">
            <ErrorBox message={error}></ErrorBox>
            <List data={routes}
                readOnly={false}
                transformer={transformer}
                onRemoveItem={onDeleteRoute}
                onConfigureItem={(rid: string) => {
                    const [route] = Utils.findElementInArray(routes, rid, (item: Route, i: number) => item.rid === rid)

                    if (route) {
                        window.scrollTo(0, 0)
                        onCreateRoute(route)    
                    }
                }}
                title={t('description.misrutas')}
                onItemAction={(rid: string) => {
                    const [route] = Utils.findElementInArray(routes, rid, (item: Route, i: number) => item.rid === rid)

                    if (route) {
                        window.scrollTo(0, 0)
                        onViewRoute(route)    
                    }
                }} ></List>
        </div>
        <LovedRoutes onViewRoute={onViewRoute}></LovedRoutes>
    </>
}

export default RoutesManagementMenu