import { Game, GAME_TYPE_LEVANTE } from "../../../games/Game"

const UseGameViewer = (gid: string): Array<any> => {
    return [new Game("", new Date().toLocaleDateString(),{ latitude: 0, longitude: 0 },
        true, GAME_TYPE_LEVANTE, [], [], 600000, 40, new Array(1).fill(10), 1, 0, [], [], [])]
}

export default UseGameViewer
