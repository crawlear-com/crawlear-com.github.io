import { useState, useEffect, useRef, useCallback } from "react"

const NO_CLASSNAME = ''

function useShowHide(className: string): Array<string> {
    const previousY = useRef<number>(0)
    const [translate, setTranslate] = useState('')
    const handleScroll = useCallback(() => {
        if (previousY.current && previousY.current < window.scrollY) {
          setTranslate(className)
        } else if (previousY.current && previousY.current > window.scrollY) {
          setTranslate(NO_CLASSNAME)
        }
        previousY.current = window.scrollY
    }, [className])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
      }, [handleScroll])

      return [translate]
}

export default useShowHide