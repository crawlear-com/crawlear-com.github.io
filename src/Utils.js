
class Utils {
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
}



export default Utils;