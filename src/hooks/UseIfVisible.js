import { useEffect } from 'react';

const UseIfVisible = (elementToObserve, setIsVisible) => {
  useEffect(() => {
    if (elementToObserve) {
        const observer = new IntersectionObserver(
          (entries) => {
              setIsVisible(entries[0].isIntersecting)
          },{root}
        )

        observer.observe(elementToObserve)
        return () => {
          if (elementToObserve) {
            observer.unobserve(elementToObserve)
          }
        }
      }
      /*return () => {
        if (elementToObserve) {
            observer.unobserve(elementToObserve)
          }
      }*/
  }, [elementToObserve]);
};

export default UseIfVisible;