import { AecarGameScores } from '../../games/AecarGameScores'
import { IsrccGameScores } from '../../games/IsrccGameScores'
import { Levante124GameScores } from '../../games/Levante124GameScores'
import { RegionalZonaRcGameScores } from '../../games/RegionalZonaRcGameScores'
import { KingGameScores } from '../../games/KingGameScores'
import { MiniCrawlerPassionGameScores } from '../../games/MiniCrawlerPassionGameScores'
import { GenericGameScores } from '../../games/GenericGameScores'
import { Game, GameUtils } from '../../games/Game'
import Utils from '../../Utils'
import { GAME_TYPE_AECAR,
    GAME_TYPE_ISRCC,
    GAME_TYPE_KING,
    GAME_TYPE_LEVANTE,
    GAME_TYPE_COPAESPANA,
    GAME_TYPE_MINICRAWLERPASSION,
    GAME_TYPE_GENERIC } from '../../games/Game'

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