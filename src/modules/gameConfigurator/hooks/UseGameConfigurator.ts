import * as React from 'react'
import { Game, OfflinePlayer, GameUtils } from '../../../games/Game'
import { GAME_TYPE_LEVANTE, OFFLINE_USER_UID, GAME_TYPE_KING } from '../../../games/Game'
import GameConfiguratorUtils from '../GameConfiguratorUtils'
import { isOffline } from '../../../pages/Offline'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Analytics from '../../../Analytics'
import { Location } from '../components/LocationResolver'
import Utils from '../../../Utils'

interface UseGameConfiguratorProps {
    preconfiguredGame: Game,
    onGameCreated: Function
}

function UseGameConfigurator({preconfiguredGame, onGameCreated}: UseGameConfiguratorProps) {
    const [game, setGame] = React.useState<Game>(()=>{
        const newGame = preconfiguredGame || new Game("",
            new Date().toLocaleDateString(),
            { latitude: 0, longitude: 0 },
            true, GAME_TYPE_LEVANTE,
            [], [], 600000, 40, new Array(1).fill(10), 1, 0, [], [], [])

        newGame.date = new Date().toLocaleDateString()
        return newGame
    });
    const navigate = useNavigate()
    const [errorMessage, setErrorMessage] = React.useState("")
    const [randomizePlayersOrder, setRandomizePlayersOrder] = React.useState(false)
    const [groups, setGroups] = React.useState(1)
    const { t } = useTranslation(['main'])
    const fb = window.crawlear.fb

    React.useEffect(()=>{
        window.scrollTo(0,0)
        if (isOffline) {
            onJudgeNumerChange([OfflinePlayer])
        }
    }, [])

    function onGameTypeChange(selectedIndex: number) {
        const newGame: any = {...game}

        Analytics.event('menu', 'playModeChange', selectedIndex)
        newGame.gameType = selectedIndex;
        [newGame.maxTime, newGame.maxPoints] = GameConfiguratorUtils.getMaxTimeAndPointsFromGameType(newGame.gameType)

        setGame(newGame)
    }

    function onLocationResolved(location: Location) {
        if (location.latitude && location.longitude) {
            const newGame: any = {...game}

            newGame.location = location
            setGame(newGame)
        } else {
            setErrorMessage(t('error.nogeolocation'));
        }
    }

    function onJudgeNumerChange(judges: Array<any>) {
        const newGame: any = {...game}
        let action = 'addJudge'

        if (game.judges.length > judges.length) {
            action = 'removeJudge'
        }
        Analytics.event('menu', action, judges.length);
        newGame.judges = [...judges]
        if(isOffline && !newGame.owner.length) {
            newGame.owner.push(OFFLINE_USER_UID)
        }

        setGame(newGame)
        setErrorMessage("")
    }

    function onPlayerNumerChange(players: Array<any>) {
        const newGame: any = {...game}
        let action = 'addPlayer'

        if (game.players.length > players.length) {
            action = 'removePlayer'
        }
        Analytics.event('menu', action, players.length)
        newGame.players = [...players]
        setGame(newGame)
        setErrorMessage("")
    }

    function onMaxPointsChange(points: number) {
        const newGame: any = {...game}

        Analytics.event('menu', 'maxPointsSet', points)
        newGame.maxPoints = points
        setGame(newGame)
    }

    function onMaxTimeChange(time: number) {
        const newGame: any = {...game}

        newGame.maxTime = time
        Analytics.event('menu', 'maxTimeSet', time)
        setGame(newGame)
    }

    function onZonesChange(zones: number) {
        const newGame: any = {...game}

        if(game.zones < zones) {
            newGame.gates.push(10)
        } else {
            newGame.gates.pop()
        }
        newGame.zones = zones
        Analytics.event('menu', 'zonesSet', zones)
        setGame(newGame)
    }

    function onGatesChange(gates: number, i: number) {
        const newGame: any = {...game}

        newGame.gates[i] = gates
        Analytics.event('menu', 'gateSet', gates)
        setGame(newGame)
    }

    function onNameChange(event: MouseEvent) {
        const newGame: any = {...game},
            name = (event.target as HTMLTextAreaElement).value

        if (name) {
            newGame.name = name
            setGame(newGame)
            setErrorMessage("")
        }
    }

    function onGroupsChange(result: number) {
        setGroups(result)
    }

    function onIsPublicChange(event: MouseEvent) {
        const newGame: any = {...game}

        newGame.isPublic = (event.target as HTMLInputElement).value
        setGame(newGame)
    }

    function onGameDirectorChange(jid: number, value: boolean) {
        const jUid: string = game.judges[jid].uid
        const newGame: any = {...game}

        if (value && !newGame.owner.find((elem: string)=>{return elem === jUid})) {
            newGame.owner.push(jUid)
            setGame(newGame)
        } else if(!value && newGame.owner.find((elem: string)=>{return elem === jUid})) {
            const indexOf = newGame.owner.indexOf(jUid)
            newGame.owner.splice(indexOf, 1)
            setGame(newGame)
        }
    }

    function onRandomizePlayersOrder(event: MouseEvent) {
        const value = (event.target as HTMLInputElement).checked

        setRandomizePlayersOrder(value)
    }

    function randomPlayersOrder(game: Game) {
        if(game.players.length) {
            let players = [...game.players]

            players = players.sort((a, b)=>{
                return Math.random() - 0.5
            });

            game.players = players
            GameUtils.redoPlayersIds(game)
        }
    }

    function createGame(groups: number, game: Game) {
        const allGroupsFilled = areAllGroupsFilled(groups, game)
        window.scrollTo(0,0)

        if (!game.name || !game.name.length) {
            setErrorMessage(t('error.nonombre'))
        } else if (!allGroupsFilled) {
            setErrorMessage(t('error.rellenargrupos'))
        } else if (!game.judges.length && game.gameType !== GAME_TYPE_KING) {
            setErrorMessage(t('error.nojueces'))
        } else if (!game.players.length) {
            setErrorMessage(t('error.nojugadores'))
        } else if (game.gameType !== GAME_TYPE_KING && !game.owner.length) {
            setErrorMessage(t('error.nodirectordepartida'))
        } else if ((game.gameType !== GAME_TYPE_KING && allGroupsFilled) ||
                   (game.gameType === GAME_TYPE_KING)) {
            const newGame: any = {...game}

            if (game.gameType === GAME_TYPE_KING) {
                newGame.judges.push({...window.crawlear.user})
                newGame.zones = 1
                newGame.gates = new Array(1).fill(1)
            }
            newGame.uids = Utils.getUidsFromUsers(newGame.players)
            newGame.jids = Utils.getUidsFromUsers(newGame.judges)
            if (randomizePlayersOrder) {
                randomPlayersOrder(newGame)
            }
            GameUtils.init(newGame,
                GameUtils.getGameTypeControlTextValuesInit(newGame.gameType),
                GameUtils.getGameTypeFiascoControlTextValuesInit(newGame.gameType),
                true)
            if (isOffline && onGameCreated) {
                onGameCreated(newGame)
            } else {
                fb.setGame(newGame, (game: Game)=>{
                    newGame.gid = game.gid
                    fb.createGameProgression(newGame)
                    setGame(newGame)
                    navigate("/game")
                }, ()=>{})
            }
        }
    }

    return [game, errorMessage, groups, onGameTypeChange, onLocationResolved, onJudgeNumerChange, onPlayerNumerChange,
        onMaxPointsChange, onMaxTimeChange, onZonesChange, onGatesChange, onNameChange,
        onGroupsChange, onIsPublicChange, onGameDirectorChange, onRandomizePlayersOrder,
        createGame]
}

function areAllGroupsFilled(groups: number, game: Game) {
    const groupsCounter: Array<number> = new Array<number>(groups).fill(0)

    for (let i=0; i<game.players.length; i++) {
        groupsCounter[game.players[i].group]++
    }

    return (typeof(groupsCounter.find((elem)=>{
        return elem === 0
    })) === 'undefined')
}

export default UseGameConfigurator
