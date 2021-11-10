import ControlText from './components/ControlText';

const MODE_SIMPLE = 0;
const MODE_OFFICIAL = 1;


const Utils = {
    secondsToTime(millis) {
        const minutes = Math.floor(millis / 60000),
            hours = Math.floor(minutes / 60), 
            seconds = ((millis % 60000) / 1000).toFixed(0);

        return { 
            h: hours,
            m: minutes,
            s: seconds,
            mm: millis % 1000
        }
    },
    printTime(time) {
        return `${String(time.h).padStart(2, '0')}:${String(time.m).padStart(2, '0')}:${String(time.s).padStart(2, '0')}:${String(time.mm).padStart(3, '0')}`
    },
    randomizeArray(array) {
        let currentIndex = array.length,  randomIndex;

        while (currentIndex !== 0) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
    },
    getControlTextArray: function(mode, controlTextValues, callback, i, t) {
        let controlTextArray = [];

        if (mode === MODE_OFFICIAL) {
            controlTextArray.push(<ControlText value={controlTextValues[0]} onValueChange={(value)=> {callback(value, i, 0)}} initialValue={0} text={t('points.vuelco')} step={5} />);
            controlTextArray.push(<ControlText value={controlTextValues[1]} onValueChange={(value)=> {callback(value, i, 1)}} initialValue={0} text={t('points.tocar')} step={3} />);
            controlTextArray.push(<ControlText value={controlTextValues[2]} onValueChange={(value)=> {callback(value, i, 2)}} initialValue={0} text={t('points.puerta')} step={2} />);
            controlTextArray.push(<ControlText value={controlTextValues[3]} onValueChange={(value)=> {callback(value, i, 3)}} initialValue={0} text={t('points.saltoobstaculo')} step={5} />);
            controlTextArray.push(<ControlText value={controlTextValues[4]} onValueChange={(value)=> {callback(value, i, 4)}} initialValue={0} text={t('points.reparacion')} step={5} />);
            controlTextArray.push(<ControlText value={controlTextValues[5]} onValueChange={(value)=> {callback(value, i, 5)}} initialValue={0} text={t('points.winch')} step={3} />);
            controlTextArray.push(<ControlText value={controlTextValues[6]} onValueChange={(value)=> {callback(value, i, 6)}} initialValue={0} text={t('points.puertaprogresion')} step={-1} />);
            controlTextArray.push(<ControlText value={controlTextValues[7]} onValueChange={(value)=> {callback(value, i, 7)}} initialValue={0} text={t('points.distancia')} step={1} />);
            controlTextArray.push(<ControlText value={controlTextValues[8]} onValueChange={(value)=> {callback(value, i, 8)}} initialValue={0} text={t('points.anclajeindebido')} step={5} />);
            controlTextArray.push(<ControlText value={controlTextValues[9]} onValueChange={(value)=> {callback(value, i, 9)}} initialValue={0} text={t('points.juez')} step={1} />);
        } else {
            controlTextArray.push(<ControlText value={controlTextValues[0]} onValueChange={(value)=> {callback(value, i, 0)}} initialValue={0} text={t('points.vuelco')} step={5} />);
            controlTextArray.push(<ControlText value={controlTextValues[1]} onValueChange={(value)=> {callback(value, i, 1)}} initialValue={0} text={t('points.tocar')} step={3} />);
            controlTextArray.push(<ControlText value={controlTextValues[2]} onValueChange={(value)=> {callback(value, i, 2)}} initialValue={0} text={t('points.puerta')} step={2} />);
            controlTextArray.push(<ControlText value={controlTextValues[3]} onValueChange={(value)=> {callback(value, i, 3)}} initialValue={0} text={t('points.saltoobstaculo')} step={5} />);
            controlTextArray.push(<ControlText value={controlTextValues[4]} onValueChange={(value)=> {callback(value, i, 4)}} initialValue={0} text={t('points.reparacion')} step={5} />);
            controlTextArray.push(<ControlText value={controlTextValues[5]} onValueChange={(value)=> {callback(value, i, 5)}} initialValue={0} text={t('points.winch')} step={3} />);
            controlTextArray.push(<ControlText value={controlTextValues[6]} onValueChange={(value)=> {callback(value, i, 6)}} initialValue={0} text={t('points.puertaprogresion')} step={-1} />);
        }

        return controlTextArray;
    }
}


export default Utils;