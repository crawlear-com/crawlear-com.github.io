import * as React from 'react'

function UseRouteLove(rid: string, onLove?: Function): Array<any> {
  const [lid, setLid] = React.useState<string | null>(null)
  const [state, setState] = React.useState(false)
  const fb = window.crawlear.fb

  React.useEffect(() => {
    fb.getRouteLove(window.crawlear.user.uid, rid, (value: boolean, lid: string) => {
      setState(value)
      setLid(lid)
    }, ()=>{})
  }, [])

  function changeStateOnClick(e: React.MouseEvent<HTMLSpanElement>): void {
    if (window.crawlear && window.crawlear.user && window.crawlear.user.uid) {
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