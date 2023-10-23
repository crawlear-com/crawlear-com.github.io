const ZonesPicker = jest.fn().mockImplementation(({onZonesChange, value=1}) => {
    return jest.fn(() => <div> zonesPicker </div>)
})

export default ZonesPicker