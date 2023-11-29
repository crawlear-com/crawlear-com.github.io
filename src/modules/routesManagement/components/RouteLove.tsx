import * as React from 'react'
import UseRouteLove from '../hooks/UseRouteLove'

import '../styles/RouteLove.scss'

interface RouteLoveProps {
  rid: string,
  onLove?: Function
}

function RouteLove({rid, onLove}: RouteLoveProps) {
  const [isLoved, changeStateOnClick] = UseRouteLove(rid, onLove)


  return <span onClick={changeStateOnClick} className='routeLoveContainer'>
    <span title='love' className={ isLoved ? 'loveIcon loved' : 'loveIcon noloved'}></span>
  </span>
}

export default RouteLove