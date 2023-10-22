import * as React from 'react';
import EventManager from '../../EventManager'
import Bluetooth, { MSG_GATES, MSG_POINTS, MSG_START, MSG_STOP, MSG_TIME } from '../Bluetooth'

const NOT_CONNECTED = 0;
const CONNECTED = 1;


function BluetoothButton() {
    const [state, setState] = React.useState(NOT_CONNECTED);
    const [device, setDevice] = React.useState({});
    const eventManager = new EventManager();
    const bt = new Bluetooth();

    function btOnClick() {
        bt.discoverDevice(onDeviceConnected);
    }

    function onDeviceConnected(device) {
        setDevice(device);
        setState(CONNECTED);

        eventManager.listenMessages(MSG_START, onTimeStart);
        eventManager.listenMessages(MSG_STOP, onTimeStop);
        eventManager.listenMessages(MSG_TIME, onTimeChange);
        eventManager.listenMessages(MSG_POINTS, onPointsChange);
        eventManager.listenMessages(MSG_GATES, onGatesChange);
    }

    function onTimeStart() {
        bt.sendStart();
    }

    function onTimeStop() {
        bt.sendStop();
    }

    function onTimeChange(timeEvent) {
        bt.sendTime(timeEvent.detail);
    }

    function onPointsChange(pointsEvent) {
        bt.sendPoints(pointsEvent.detail);
    }

    function onGatesChange(gatesEvent) {
        bt.sendGates(gatesEvent.detail);
    }

    if (state === NOT_CONNECTED) {
        return <div className="controlText" onClick={btOnClick}>Discover Bluetooth Device</div>;
    } else {
        return <div className="controlText">{device.name}</div>;
    }
}

export default BluetoothButton;