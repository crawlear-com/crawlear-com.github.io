import * as React from 'react'
import { useTranslation } from 'react-i18next'
import Route from '../Route'
import List from '../../list/List'
import { itemTransform } from '../../list/components/RouteListTransformer'

interface RoutesManagementMenuProps {
    onCreateRoute: Function,
    onViewRoute: Function
}

function RoutesManagementMenu({ onCreateRoute, onViewRoute }: RoutesManagementMenuProps) {
    const { t } = useTranslation()
    const [routes, setRoutes] = React.useState<Array<Route>>([])
    const fb = window.crawlear.fb

    React.useEffect(() => {
        window.crawlear && window.crawlear.user && 
        window.crawlear.user.uid && fb.getRoutesFromUser(window.crawlear.user.uid, (routes: Array<Route>) => {
            setRoutes(routes)
        }, () => {

        })
    }, [])

    function onDeleteRoute(i: number) {
        const newRoutes = [...routes]

        fb.removeRoute(newRoutes[i].rid, newRoutes[i].gpx?.gid, () => {
            delete newRoutes[i]
            setRoutes(newRoutes)
        }, () => {})
    }

    return <>
        <div className='headerText bold sectionTitle'>{t('description.seccionderutas')}</div>
        <div className="routesManagement rounded rounded3">
            <List data={routes} 
                readOnly={false}
                transformer={itemTransform}
                onRemoveItem={onDeleteRoute}
                onConfigureItem={(i: number) => {
                    window.scrollTo(0, 0)
                    onCreateRoute(routes[i])
                }}
                title={t('description.rutas')} 
                onItemAction={(i: number) => {
                    window.scrollTo(0, 0)
                    onViewRoute(routes[i])
                }} ></List>
        </div>
        <button className='importantNote' onClick={() => {
            onCreateRoute()
        }}>{t('description.crear')}</button>
    </>
}

export default RoutesManagementMenu