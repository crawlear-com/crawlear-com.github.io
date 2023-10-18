const GameRequests = jest.fn().mockImplementation(() => {
    console.log('GameRequests')

    return jest.fn(() => <div> GameRequests </div>)
})

export default GameRequests