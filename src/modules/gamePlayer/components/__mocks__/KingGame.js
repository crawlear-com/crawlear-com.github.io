const KingGame = jest.fn().mockImplementation(({
  game,
  onGameEnd,
}) => {
  return jest.fn(() => <div> KingGame </div>)
})

export default KingGame