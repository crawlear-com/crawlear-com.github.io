const GameList = jest.fn().mockImplementation(() => {
    console.log('GameList')

    return jest.fn(() => <div> GameList </div>)
})

export default GameList