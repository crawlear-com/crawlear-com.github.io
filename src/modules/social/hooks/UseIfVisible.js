import { useEffect } from 'react';

const UseIfVisible = (elementToObserve, setIsVisible) => {
  useEffect(() => {
    if (elementToObserve) {
        const observer = new IntersectionObserver(
          (entries) => {
              setIsVisible(entries[0].isIntersecting)
          },{}
        )

        observer.observe(elementToObserve);

        return () => {
          if (elementToObserve) {
            observer.unobserve(elementToObserve)
          }
        }
      }

  }, [elementToObserve, setIsVisible]);
};

export default UseIfVisible;