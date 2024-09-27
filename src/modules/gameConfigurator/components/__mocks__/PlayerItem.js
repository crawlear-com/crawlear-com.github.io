const PlayerItem = ({player, i, 
  onRemovePlayer, 
  onClickPlayer, 
  onGroupChange, 
  maxGroups, 
  editMode, 
  isForJudge,
  onGameDirectorChange}) => {
  return <li value={i}> {i} </li>
}

export default PlayerItem