
class Utils {
    static isMobile() {
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
            return true;
        }

        return false;
    }

    static millisToTime(millis) {
        const minutes = Math.floor(millis / 60000),
            hours = Math.floor(minutes / 60), 
            seconds = ((millis % 60000) / 1000).toFixed(0);

        return { 
            h: hours,
            m: minutes,
            s: seconds,
            mm: millis % 1000
        }
    }
    
    static timeToMillis(h,m,s) {
        const date = new Date(),
            todayRef = new Date();

        todayRef.setHours(0);
        todayRef.setMinutes(0);
        todayRef.setSeconds(0);

        date.setHours(h);
        date.setMinutes(m);
        date.setSeconds(s);

        return date.getTime() - todayRef.getTime();
    }
    
    static printTime(time) {
        return `${String(time.h).padStart(2, '0')}:${String(time.m).padStart(2, '0')}:${String(time.s).padStart(2, '0')}:${String(time.mm).padStart(3, '0')}`
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

    static getNotmalizedMaxValues(inPlayers, maxPoints, maxTime) {
        const players = [...inPlayers];

        if (maxTime || maxPoints) {
            players.forEach((player)=>{
                player.zones.forEach((zone)=>{
                    if ((maxPoints <= zone.points && maxPoints > 0) || zone.battery) {
                        zone.points = maxPoints
                    }
                    if ((maxTime <= zone.time && maxTime > 0) || zone.battery) {
                        zone.time = maxTime;
                    }
                });
            })
        }

        return players;
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

        game.players.sort((a, b)=>{
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

    static getMapsURL(latitude, longitude) {
        return `https://www.google.com/maps/search/?api=1&query=${latitude}%2C${longitude}`
    }
}

export default Utils;