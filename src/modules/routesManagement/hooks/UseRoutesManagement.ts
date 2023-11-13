import * as React from 'react'
import Route from '../Route'
import { useTranslation } from 'react-i18next'
import Analytics from '../../../Analytics'
import { Navigate } from 'react-router-dom'

function UseRoutesManagement(onLogin: Function): Array<any> {
    const fb = window.crawlear.fb
    const [state, setState] = React.useState<number>(STATE_MENU)
    const [route, setRoute] = React.useState<Route>(new Route('','',true,'','',{lat:0,lon:0},[''],'',0,0))

    React.useEffect(() => {
        Analytics.pageview('/routesManagement/');
        fb.checkIfLogged(()=>{onLogin(false)});
        window.document.body.classList.add('route');

        return () => {
            window.document.body.classList.remove('route');
        }
    },[]);

    function onViewRoute(route: Route) {
        setRoute(route)
        setState(STATE_VIEW)
    }

    function onCreateRoute(newRoute: Route) {
        if (newRoute) {
            setRoute(newRoute)
        } else {
            setRoute(new Route('','',true,'','',{lat:0,lon:0},[window.crawlear.user.uid],'',0,0))
        }
        
        setState(STATE_CREATE)
    }

    function onBackClick(event: React.MouseEvent<HTMLButtonElement>): void {
        setState(STATE_MENU)
    }

    function onEditClick(event: React.MouseEvent<HTMLDivElement>): void {
        setState(STATE_CREATE)
    }


    return [state, route, onViewRoute, onCreateRoute, onBackClick, onEditClick]
}

export const STATE_MENU = 0
export const STATE_CREATE = 1
export const STATE_VIEW = 2

export default UseRoutesManagement