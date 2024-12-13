import { Game, GAME_TYPE_AECAR,
    GAME_TYPE_ISRCC,
    GAME_TYPE_KING,
    GAME_TYPE_LEVANTE,
    GAME_TYPE_COPAESPANA,
    GAME_TYPE_MINICRAWLERPASSION,
    GAME_TYPE_GENERIC } from "../../games/Game";
import { GameProgressionZone, Zone } from "../../games/GameInterfaces";
import { getGameContent as getAecarGameContent, gameExtras as aecarExtras, AecarGameScores } from '../../games/AecarGameScores';
import { getGameContent as getIsrccGameContent, gameExtras as isrccExtras, IsrccGameScores } from '../../games/IsrccGameScores';
import { getGameContent as getLevanteGameContent, gameExtras as levante124Extras, Levante124GameScores } from '../../games/Levante124GameScores';
import { getGameContent as getRegionalZonaRcGameContent, gameExtras as regionalZonaRcExtras, RegionalZonaRcGameScores } from '../../games/RegionalZonaRcGameScores';
import { getGameContent as getMiniCrawlerPassionGameContent, gameExtras as miniCrawlerPassionExtras, MiniCrawlerPassionGameScores } from '../../games/MiniCrawlerPassionGameScores';
import { getGameContent as getGenericGameContent, gameExtras as genericExtras, GenericGameScores } from '../../games/GenericGameScores';
import { gameExtras as kingExtras } from '../../games/KingGameScores';
import Utils from "../../Utils";
import * as React  from "react";

import fiascoIcon from '../resources/img/iconFiasco.png';
import batteryIcon from '../resources/img/iconBattery.png';


export const isIndividualGame = (game: Game): boolean => {
    return game.gameType === GAME_TYPE_KING
}

export const isGroupGameFinished = (game: Game, gameProgression: Array<any>, jidGroup: number) => {
    let result = true

    if (isIndividualGame(game)) return true;

    Object.entries(gameProgression).forEach((group)=>{
        if (Number(group[0]) === jidGroup) {
            Object.entries(group[1]).forEach((player: Array<any>)=>{
                Object.entries(player[1]).forEach((zone: Array<any>)=>{
                    if(zone[1].status === STATUS_WAITING ||
                        zone[1].status === STATUS_REPAIR ||
                        zone[1].status === STATUS_PLAYING) {

                        result = false;
                    }
                })
            })
        }
    })

    return result;
}

export const onRepairEnd = (gid: number, playerId: number, group: number, zoneIndex: number, zone: GameProgressionZone) => {
    const fb = window.crawlear?.fb

    zone.status = STATUS_WAITING
    delete zone.repairData
    fb.setGameProgression(gid, playerId, group, zoneIndex, zone)
}

export const updateGameFromProgression = (progression: Array<any>, game: Game): any => {
    const newGame = { ...game };

    Object.entries(progression).forEach((user: Array<any>)=>{
        Object.entries(user[1]).forEach((zone: Array<any>)=>{
            if(zone[1].data) {
                newGame.players[user[0]].zones[zone[0]] = zone[1].data;
            }
        })
    })

    return newGame
}

export const getGroupFromJid = (game: Game, jid: string): number => {
    const judge = game.judges.find(element => element.uid === jid);

    return (judge ? judge.group : 0);
}

export const getGameExtras = (gameType: number) => {
    let gameExtras

    if (gameType === GAME_TYPE_AECAR) {
        gameExtras = aecarExtras;
    } else if (gameType === GAME_TYPE_ISRCC) {
        gameExtras = isrccExtras;
    } else if (gameType === GAME_TYPE_LEVANTE) {
        gameExtras = levante124Extras;
    } else if (gameType === GAME_TYPE_COPAESPANA) {
        gameExtras = regionalZonaRcExtras;
    } else if (gameType === GAME_TYPE_KING) {
        gameExtras = kingExtras;
    } else if (gameType === GAME_TYPE_MINICRAWLERPASSION) {
        gameExtras = miniCrawlerPassionExtras;
    } else if (gameType === GAME_TYPE_GENERIC) {
        gameExtras = genericExtras;
    }

    return gameExtras
}

export const getGameContent = (gameType: number, playerId: number, zone: number) => {
    let method,
        childrenContent

    if (gameType === GAME_TYPE_AECAR) {
        method = getAecarGameContent
    } else if (gameType === GAME_TYPE_ISRCC) {
        method = getIsrccGameContent
    } else if (gameType === GAME_TYPE_LEVANTE) {
        method = getLevanteGameContent
    } else if (gameType === GAME_TYPE_COPAESPANA) {
        method = getRegionalZonaRcGameContent
    } else if (gameType === GAME_TYPE_KING) {
    } else if (gameType === GAME_TYPE_MINICRAWLERPASSION) {
        method = getMiniCrawlerPassionGameContent
    } else if (gameType === GAME_TYPE_GENERIC) {
        method = getGenericGameContent
    }

    method && (childrenContent = method(playerId, zone))

    return childrenContent
}

export const getAllGameTexts = (gameType: number, t: Function) => {
    return [getGameTexts(gameType, t), getFiascoGameTexts(gameType, t)]
}

export const getGameTexts = (gameType: number, t: Function) => {
    let gameTypeTexts = Utils.tokenToTexts(t, AecarGameScores.texts)

    if(gameType === GAME_TYPE_ISRCC) {
        gameTypeTexts = Utils.tokenToTexts(t, IsrccGameScores.texts);
    }

    if(gameType === GAME_TYPE_LEVANTE) {
        gameTypeTexts = Utils.tokenToTexts(t, Levante124GameScores.texts);
    }

    if(gameType ===GAME_TYPE_COPAESPANA) {
        gameTypeTexts = Utils.tokenToTexts(t, RegionalZonaRcGameScores.texts);
    }

    if(gameType ===GAME_TYPE_MINICRAWLERPASSION) {
        gameTypeTexts = Utils.tokenToTexts(t, MiniCrawlerPassionGameScores.texts);
    }

    if(gameType ===GAME_TYPE_GENERIC) {
        gameTypeTexts = Utils.tokenToTexts(t, GenericGameScores.texts);
    }

    return gameTypeTexts
}

export const getFiascoGameTexts = (gameType: number, t: Function) => {
    let fiascoGameTypeTexts = Utils.tokenToTexts(t, AecarGameScores.fiascoTexts);

    if(gameType === GAME_TYPE_ISRCC) {
        fiascoGameTypeTexts = Utils.tokenToTexts(t, IsrccGameScores.fiascoTexts);
    }

    if(gameType === GAME_TYPE_LEVANTE) {
        fiascoGameTypeTexts = Utils.tokenToTexts(t, Levante124GameScores.fiascoTexts);
    }

    if(gameType ===GAME_TYPE_COPAESPANA) {
        fiascoGameTypeTexts = Utils.tokenToTexts(t, RegionalZonaRcGameScores.fiascoTexts);
    }

    if(gameType ===GAME_TYPE_MINICRAWLERPASSION) {
        fiascoGameTypeTexts = Utils.tokenToTexts(t, MiniCrawlerPassionGameScores.fiascoTexts);
    }

    if(gameType ===GAME_TYPE_GENERIC) {
        fiascoGameTypeTexts = Utils.tokenToTexts(t, GenericGameScores.fiascoTexts);
    }

    return fiascoGameTypeTexts
}

export const getGamePlayerResultIcon = (game: Game, zone: Zone) => {
    let icon = <></>

    if (zone.fiascoControlTextValues) {
        if (zone.fiascoControlTextValues[4]) {
            icon = <img src={batteryIcon} alt="battery" />;
        } else if ((game.maxTime && zone.time === (game.maxTime + game.courtesyTime)) ||
            (game.maxPoints && zone.totalPoints === game.maxPoints) ||
            (zone.fiascoControlTextValues.filter(x=>x>0).length > 0)) {
            icon = <img src={fiascoIcon} alt="fiasco" />;
        } else {
            icon = <></>;
        }

    } else {
        if (zone.battery) {
            icon = <img src={batteryIcon} alt="fiasco" />;
        } else if ((game.maxTime && zone.time === (game.maxTime + game.courtesyTime)) ||
                   (game.maxPoints && zone.totalPoints === game.maxPoints)){
            icon = <img src={fiascoIcon} alt="battery" />;
        } else {
            icon = <></>;
        }
    }

    return icon
}


export const STATUS_WAITING = 'waiting';
export const STATUS_PLAYING = 'playing';
export const STATUS_REPAIR = 'repair';
export const STATUS_DONE = 'done';
