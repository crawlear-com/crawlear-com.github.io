import * as React from 'react'
import Analytics from '../../../Analytics'
import { User, UserExtraData } from '../User'

function UseUserViewer(uid: string): [User, UserExtraData, boolean, Function, Function] {
    const [user, setUser] = React.useState<User>({ uid: '', displayName: '', description: '', instagram: '', photoURL: '', registrationDate: ''})
    const [userData, setUserData] = React.useState<UserExtraData>({ judgeGames: 0, pilotGames: 0, routes: 0})
    const [isVisible, setIsVisible] = React.useState(false)

    React.useEffect(() => {
        const firebase = window.crawlear.fbBase

        if (uid && isVisible) {
            firebase.getUser(uid, (user: User) => {
                setUser({ ...user })
                firebase.getUserExtraData(uid, (data: UserExtraData) => {
                    setUserData(data)
                })
            })

            isVisible && Analytics.pageview(`${document.location.pathname}${document.location.search}`)
        }
    }, [isVisible, uid])

    function onScreen(visible: boolean) {
        visible && setIsVisible(visible)
    }

    function getUserType(userData: UserExtraData): number {
        let userType

        if (userData.routes > userData.judgeGames + userData.pilotGames) {
            userType = USER_TYPE_ROUTE
        } else if ((userData.judgeGames - userData.pilotGames) > 0) {
            userType = USER_TYPE_JUDGE
        } else if ((userData.judgeGames - userData.pilotGames) === 0) {
            userType = USER_TYPE_NEUTRAL
        } else {
            userType = USER_TYPE_PILOT
        }

        return userType
    }

    return [user, userData, isVisible, onScreen, getUserType]
}

export const USER_TYPE_PILOT = 0
export const USER_TYPE_JUDGE = 1
export const USER_TYPE_NEUTRAL = 2
export const USER_TYPE_ROUTE = 3
export default UseUserViewer