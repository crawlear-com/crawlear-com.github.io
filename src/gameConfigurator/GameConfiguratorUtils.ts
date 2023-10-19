import { AecarGameScores } from '../components/games/AecarGameScores'
import { IsrccGameScores } from '../components/games/IsrccGameScores'
import { Levante124GameScores } from '../components/games/Levante124GameScores'
import { RegionalZonaRcGameScores } from '../components/games/RegionalZonaRcGameScores'
import { KingGameScores } from '../components/games/KingGameScores'
import { MiniCrawlerPassionGameScores } from '../components/games/MiniCrawlerPassionGameScores'
import { GenericGameScores } from '../components/games/GenericGameScores'
import { Game, GameUtils } from '../model/Game'
import Utils from '../Utils'
import { GAME_TYPE_AECAR,
    GAME_TYPE_ISRCC,
    GAME_TYPE_KING,
    GAME_TYPE_LEVANTE,
    GAME_TYPE_COPAESPANA,
    GAME_TYPE_MINICRAWLERPASSION,
    GAME_TYPE_GENERIC } from '../model/Game'

const GameConfiguratorUtils = {
    getMaxTimeAndPointsFromGameType: (gameType: number): Array<number> => {
        let maxPoints: number = 0,
            maxTime: number = 0

        switch (gameType) {
            case GAME_TYPE_AECAR:
                maxPoints = AecarGameScores.maxPoints
                maxTime = AecarGameScores.maxTime
                break
            case GAME_TYPE_KING:
                maxPoints = KingGameScores.maxPoints
                maxTime = KingGameScores.maxTime
                break
            case GAME_TYPE_ISRCC:
                maxPoints = IsrccGameScores.maxPoints
                maxTime = IsrccGameScores.maxTime
                break
            case GAME_TYPE_LEVANTE:
                maxPoints = Levante124GameScores.maxPoints
                maxTime = Levante124GameScores.maxTime
                break
            case GAME_TYPE_COPAESPANA:
                maxPoints = RegionalZonaRcGameScores.maxPoints
                maxTime = RegionalZonaRcGameScores.maxTime
                break
            case GAME_TYPE_MINICRAWLERPASSION:
                maxPoints = MiniCrawlerPassionGameScores.maxPoints
                maxTime = MiniCrawlerPassionGameScores.maxTime
                break
            case GAME_TYPE_GENERIC:
                maxPoints = GenericGameScores.maxPoints
                maxTime = GenericGameScores.maxTime
                break;
            default: 
                maxPoints = 0
                maxTime = 0
        }

        return [maxTime, maxPoints]
    }
}

export default GameConfiguratorUtils