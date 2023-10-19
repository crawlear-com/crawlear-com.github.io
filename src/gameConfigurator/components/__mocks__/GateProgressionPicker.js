const GateProgressionPicker = jest.fn().mockImplementation(({onGatesChange,
    zones, 
    value,
    minValue,
    maxValue}) => {
    return jest.fn(() => <div> gayeProgressionPicker </div>)
})

export default GateProgressionPicker