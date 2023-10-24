const CoreGame = jest.fn().mockImplementation(({
  children,
  onGameEnd,
  onRepair,
  playerIndex, 
  zoneIndex
}) => {
  return jest.fn(() => <div> CoreGame </div>)
})

export default CoreGame