import { t } from "i18next";

class Utils {
    static PLAYER_STATE_STOP = 'stop';
    static PLAYER_STATE_START = 'start';
    static PLAYER_STATE_PAUSE = 'pause';

    static isMobile() {
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
            return true;
        }

        return false;
    }

    static tokenToTexts(tokens) {
        return tokens.map((x)=>{return t(x);});
    }

    static getUidsFromUsers(users) {
        const uids = [];

        users.forEach((user)=>{
            if (user.uid) {
                uids.push(user.uid);
            } 
        });

        return uids;
    }

    static millisToTime(millis) {
        let seconds = Math.floor(millis / 1000);
        let minutes = Math.floor(seconds / 60);
        let hours = Math.floor(minutes / 60);
      
        seconds = seconds % 60;
        minutes = seconds >= 30 ? minutes + 1 : minutes;
        minutes = minutes % 60;
        hours = hours % 24;

        return { 
            h: hours,
            m: minutes,
            s: seconds,
            mm: millis % 1000
        }
    }
    
    static timeToMillis(m,s, mm) {
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
    
    static printTime(time) {
        return `${String(time.m).padStart(2, '0')}:${String(time.s).padStart(2, '0')}:${String(time.mm).padStart(3, '0')}`
    }

    static randomizeArray(array) {
        let currentIndex = array.length,  randomIndex;

        while (currentIndex !== 0) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
    }

    static getWinnerByPoints(inPlayers) {
        const players = [...inPlayers];
        
        players.sort(function(a, b) {
            const bypoints = (a.points - b.points);
    
            if (bypoints === 0) {
                return a.id - b.id;
            }
    
            return bypoints;
          });
    
        return players;
    }

    static getWinnerByPointsAndTime(inPlayers) {
        const players = [...inPlayers];
    
        players.sort(function(a, b) {
            const bypoints = (a.points - b.points);
    
            if (bypoints === 0) {
                return a.time - b.time;
            }
    
            return bypoints;
          });
    
        return players;
    }

    static getOrderedGameResult(game) {
        game = this.calulateFinalGameResult(game);
        game.players = game.players.sort((a, b)=>{
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

    static calulateFinalGameResult(oldGame) {
        const game = {...oldGame};

        game.players.forEach((player)=>{
            let totalPoints = 0,
                totalTime = 0,
                totalGateProgression = 0;

            player.zones.forEach((zone)=>{
                totalPoints += zone.points;
                totalTime += zone.time;
                totalGateProgression += zone.gateProgression;
            });

            player.totalPoints = totalPoints;
            player.totalTime = totalTime;
            player.totalGateProgression = totalGateProgression;
        });

        return game;
    }

    static getMapsURL(latitude, longitude) {
        return `https://www.google.com/maps/search/?api=1&query=${latitude}%2C${longitude}`
    }
}

export default Utils;