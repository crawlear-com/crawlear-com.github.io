const GATT_SERVICE = '3feb1e8a-3981-4045-ad39-b225135013a0';
const GATT_CHARACTERISTIC = 'beb5483e-36e1-4688-b7f5-ea07361b26a8';

class Bluetooth {
    constructor() {
        this.device = {};
        this.timeCharacteristic = {};
    }

    discoverDevice (callback) {
        navigator.bluetooth.requestDevice({
            acceptAllDevices: true,
            optionalServices: [GATT_SERVICE] 
          }).then(device => {
            this.device = device;
            callback && callback(device);
            return device.gatt.connect();
          }).then(server => server.getPrimaryService(GATT_SERVICE))
          .then(service => service.getCharacteristic(GATT_CHARACTERISTIC))
          .then(characteristic => {
            this.timeCharacteristic = characteristic;
          })
          .catch(error => { console.error(error); });
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