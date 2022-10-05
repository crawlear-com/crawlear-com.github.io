import * as React from 'react';

function BluetoothButton(props) {
    function btOnClick(event) {
        navigator.bluetooth.requestDevice({
            acceptAllDevices: true,
            optionalServices: ['battery_service'] // Required to access service later.
          })
          .then(device => {
            console.log("DEVICE!!!!")
            console.log(device);
          })
          .catch(error => { console.error(error); });
    }

    return <div className="controlText" onClick={btOnClick}>BT</div>;
}

export default BluetoothButton;