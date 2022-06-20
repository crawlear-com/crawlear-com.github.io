import { useEffect } from 'react';

const useScript = (url, id) => {
  useEffect(() => {
    const scriptElement = document.getElementById(id);
    const script = document.createElement('script');
    
    if(!scriptElement) {
      script.src = url;
      script.async = true;
  
      document.body.appendChild(script);
    }

    return () => {
      document.body.removeChild(script);
    }
  }, [url]);
};

export default useScript;