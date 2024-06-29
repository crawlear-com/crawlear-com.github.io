import * as React from 'react'

function UseRouteLove(rid: string, onLove?: Function): Array<any> {
  const [lid, setLid] = React.useState<string | null>(null)
  const [state, setState] = React.useState(false)
  const isLogged = window.crawlear && window.crawlear.user && window.crawlear.user.uid

  React.useEffect(() => {
    const fb = window.crawlear.fb

    if(isLogged) {
      fb.getRouteLove(window.crawlear.user.uid, rid, (value: boolean, lid: string) => {
        setState(value)
        setLid(lid)
      }, ()=>{})
    }
  }, [])

  function changeStateOnClick(e: React.MouseEvent<HTMLSpanElement>): void {
    const fb = window.crawlear.fb

    if (isLogged) {
      onLove && onLove(!state)
    
      if (!state) {
        fb.loveRoute(window.crawlear.user.uid, rid, (lid: string) => {
          setLid(lid)
        }, ()=>{})
      } else {
        fb.unloveRoute(lid, () => {
          setLid(null)
        }, ()=>{})
      }
      setState(!state)
    }
  }

  return [state, changeStateOnClick]
}

export default UseRouteLove