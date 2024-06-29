interface User {
    uid: string,
    description: string,
    displayName: string,
    instagram: string,
    photoURL: string,
    registrationDate: string
}

interface UserExtraData {
    judgeGames: number,
    pilotGames: number,
    routes: number
}
export type { User, UserExtraData }