
export const PLAYER_STATE_STOP = 'stop';
export const PLAYER_STATE_START = 'start';
export const PLAYER_STATE_PAUSE = 'pause';

export function isMobile() {
    return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
}

export function isIphone() {
    return (/iPhone|iPad|iPod/i.test(navigator.userAgent));
}

export function  isFirefox() {
    return (/Firefox/i.test(navigator.userAgent));
}

export function  sanitizeUrl(url) {
    const params = url.indexOf('?');

    if (params >= 0) {
        url = url.slice(0, params);
    }

    if (url[url.length - 1] !== '/') {
        url += '/';
    }

    return url;
}

export function  isYoutubeUrl(url) {
    var regExp = /^.*(youtube.com|youtu.be)\/(watch\?v=|embed\/|v\/|shorts\/|)(.*?((?=[&#?])|$))/;
    var match = url.match(regExp);

    return (match && match[3].length === 11);
}

export function  isGoogleMapsUrl(url) {
    var regExp = /^https?:\/\/maps\.app\.goo\.gl\/(.*)/;
    var match = url.match(regExp);

    return (match && match[1]);
}

export function  isInstagramUrl(url) {
    var regExp = /(?:(?:http|https):\/\/)?(?:www.)?(?:instagram.com|instagr.am|instagr.com)(?:\/(?:.?)*)*\/(?:reel|p|tv)\/(.*)*(?:\/)*/;
    var match = this.sanitizeUrl(url).match(regExp);

    return match && match[1];
}

export function  getTiktokVideoId(url) {
    var regExp = /(?:(?:http|https):\/\/)?(?:www.)?tiktok.com\/@(.*)\/video\/(.*)*/;
    var match = this.sanitizeUrl(url).match(regExp);

    if ((match && match[1] && match[2])) {
        return match[2]
    } else {
        return null;
    }
}

export function  isTiktokUrl(url) {
    var regExp = /(?:(?:http|https):\/\/)?(?:www.)?tiktok.com\/@(.*)\/video\/(.*)*/;
    var match = this.sanitizeUrl(url).match(regExp);

    return (match && match[1] && match[2]);
}

export function  isFacebookUrl(url) {
    var regExp = /(?:https?:\/\/)?(?:www\.)?(mbasic.facebook|m\.facebook|facebook|fb)\.(com|me)\/(?:(?:\w\.)*#!\/)?(?:pages\/)?(?:[\w\-.]*\/)*([\w\-.]*)/;
    var match = this.sanitizeUrl(url).match(regExp);

    return (match && match[1] && match[2]);
}

export function  tokenToTexts(t, tokens) {
    return tokens.map((x) => { return t(x); });
}

export function  getUidsFromUsers(users) {
    const uids = [];

    users.forEach((user) => {
        if (user.uid) {
            uids.push(user.uid);
        }
    });

    return uids;
}

export function  millisToTime(millis) {
    let seconds = Math.floor(millis / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);

    seconds = seconds % 60;
    minutes = minutes % 60;
    hours = hours % 24;

    return {
        h: hours,
        m: minutes,
        s: seconds,
        mm: millis % 1000
    }
}

export function  timeToMillis(m, s, mm) {
    const date = new Date(),
        todayRef = new Date();

    todayRef.setMinutes(0);
    todayRef.setSeconds(0);
    todayRef.setMilliseconds(0);

    date.setMinutes(m);
    date.setSeconds(s);
    date.setMilliseconds(mm);

    return date.getTime() - todayRef.getTime();
}

export function  printTime(time) {
    return `${String(time.m).padStart(2, '0')}:${String(time.s).padStart(2, '0')}:${String(time.mm).padStart(3, '0')}`
}

export function  randomizeArray(array) {
    let currentIndex = array.length, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

export function  getWinnerByPoints(inPlayers) {
    const players = [...inPlayers];

    players.sort(function (a, b) {
        const bypoints = (a.points - b.points);

        if (bypoints === 0) {
            return a.id - b.id;
        }

        return bypoints;
    });

    return players;
}

export function  getWinnerByPointsAndTime(inPlayers) {
    const players = [...inPlayers];

    players.sort(function (a, b) {
        const bypoints = (a.points - b.points);

        if (bypoints === 0) {
            return a.time - b.time;
        }

        return bypoints;
    });

    return players;
}

export function  getOrderedGameResult(game) {
    game = this.calulateFinalGameResult(game);
    game.players = game.players.sort((a, b) => {
        const bypoints = (a.totalPoints - b.totalPoints);

        if (bypoints === 0) {
            const bytime = a.totalTime - b.totalTime

            if (bytime === 0) {
                return b.totalGateProgression - a.totalGateProgression;
            }
            return bytime;
        }

        return bypoints;
    });

    return game;
}

export function  calulateFinalGameResult(oldGame) {
    const game = { ...oldGame };

    game.players.forEach((player) => {
        let totalPoints = 0,
            totalTime = 0,
            totalGateProgression = 0;

        player.zones.forEach((zone) => {
            totalPoints += zone.totalPoints;
            totalTime += zone.time;
            totalGateProgression += zone.gateProgression;
        });

        player.totalPoints = totalPoints;
        player.totalTime = totalTime;
        player.totalGateProgression = totalGateProgression;
    });

    return game;
}

export function  getMapsURL(latitude, longitude) {
    return `https://www.google.com/maps/search/?api=1&query=${latitude}%2C${longitude}`
}

export function  findElementInArray(array, value, comparison) {
    let position = 0
    let elementFound = array.find((item, i) => {
        if (comparison(item, value)) {
            position = i
        }
        return comparison(item, value)
    })

    return [elementFound, position]
}