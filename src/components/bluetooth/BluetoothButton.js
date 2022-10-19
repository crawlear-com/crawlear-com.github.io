import * as React from 'react';
import EventManager from '../../EventManager';
import Bluetooth from './Bluetooth';

const NOT_CONNECTED = 0;
const CONNECTED = 1;
const MSG_START = 'BT_START';
const MSG_STOP = 'BT_STOP';

function BluetoothButton(props) {
    const [state, setState] = React.useState(NOT_CONNECTED);
    const [device, setDevice] = React.useState({});
    const eventManager = new EventManager();
    const bt = new Bluetooth();
    
    React.useEffect(()=>{
        
    }, []);

    function btOnClick() {
        bt.discoverDevice(onDeviceConnected);
    }

    function onDeviceConnected(device) {
        setDevice(device);
        setState(CONNECTED);

        eventManager.listenMessages(MSG_START, onTimeStart);
        eventManager.listenMessages(MSG_STOP, onTimeStop);
    }

    function onTimeStart() {
        bt.sendStart();
    }

    function onTimeStop() {
        bt.sendStop();
    }

    if (state === NOT_CONNECTED) {
        return <div className="controlText" onClick={btOnClick}>Discover Bluetooth Device</div>;
    } else {
        return <div className="controlText">{device.name}</div>;
    }

    
}

export default BluetoothButton;