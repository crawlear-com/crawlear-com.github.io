const GameList = jest.fn().mockImplementation(() => {
    return jest.fn(() => <div> GameList </div>)
})

export default GameList