const GATT_SERVICE = '3feb1e8a-3981-4045-ad39-b225135013a0';
const GATT_CHARACTERISTIC = 'beb5483e-36e1-4688-b7f5-ea07361b26a8';
const GATTIME_CHARACTERISTIC = 'beb5483e-36e1-4688-b7f5-ea07361b25b1';
const GATPOINTS_CHARACTERISTIC = 'beb5483e-36e1-4688-b7f5-ea07361b25b2';
const GATGATES_CHARACTERISTIC = 'beb5483e-36e1-4688-b7f5-ea07361b25b3';

export const MSG_GATES = 'BT_GATES';
export const MSG_POINTS = 'BT_POINTS';
export const MSG_START = 'BT_START';
export const MSG_STOP = 'BT_STOP';
export const MSG_TIME = 'BT_TIME';

interface Bluetooth {
    device: any,
    timeCharacteristic: any,
    timeValueCharacteristic: any,
    pointsCharacteristic: any,
    gatesCharacteristic: any
}

class Bluetooth {
    constructor() {
        this.device = {};
        this.timeCharacteristic = {};
        this.timeValueCharacteristic = {};
        this.pointsCharacteristic = {};
        this.gatesCharacteristic = {};
    }

    discoverDevice (callback:any) {
        navigator.bluetooth.requestDevice({
            filters: [
              { name: 'CrawlearBluetoothDevice' },
              { services: ["3feb1e8a-3981-4045-ad39-b225135013a0"] }]
          }).then(device => {
            this.device = device;
            callback && callback(device);
            return device.gatt.connect();
          }).then(server => server.getPrimaryService(GATT_SERVICE))
          .then(service => {
            const timeStatusPromise = service.getCharacteristic(GATT_CHARACTERISTIC);
            const timeValuePromise = service.getCharacteristic(GATTIME_CHARACTERISTIC);
            const pointsPromise = service.getCharacteristic(GATPOINTS_CHARACTERISTIC);
            const gatesPromise = service.getCharacteristic(GATGATES_CHARACTERISTIC);

            return Promise.all([timeStatusPromise, timeValuePromise, pointsPromise, gatesPromise]);
          })
          .then(([timeStatus, timeValue, points, gates])=>{
            this.timeCharacteristic = timeStatus;
            this.timeValueCharacteristic = timeValue;
            this.pointsCharacteristic = points;
            this.gatesCharacteristic = gates;
          })
          .catch(error => { console.error(error); });
    }

    sendTime(time:string) {
      if(this.timeValueCharacteristic) {
        this.timeValueCharacteristic.writeValue(new TextEncoder().encode(time));  
      }

    }

    sendPoints(points:string) {
      if(this.timeValueCharacteristic) {
        this.timeValueCharacteristic.writeValue(new TextEncoder().encode(points));  
      }
    }

    sendGates(gates:string) {
      if(this.gatesCharacteristic) {
        this.gatesCharacteristic.writeValue(new TextEncoder().encode(gates));  
      }
    }

    sendStart() {
      if(this.timeCharacteristic) {
        const resetEnergyExpended = Uint8Array.of(1);
        this.timeCharacteristic.writeValue(resetEnergyExpended);  
      }
    }

    sendStop() {
      if(this.timeCharacteristic) {
        const resetEnergyExpended = Uint8Array.of(0);
        this.timeCharacteristic.writeValue(resetEnergyExpended);
      }
    }
}

export default Bluetooth;