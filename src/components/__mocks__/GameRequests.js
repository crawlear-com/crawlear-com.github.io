const GameRequests = jest.fn().mockImplementation(() => {
    return jest.fn(() => <div> GameRequests </div>)
})

export default GameRequests