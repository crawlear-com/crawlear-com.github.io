import { useEffect } from 'react';

const useScript = (url, id) => {
  useEffect(() => {
    const scriptElement = document.getElementById(id);
    const script = document.createElement('script');
    
    if(!scriptElement) {
      script.id = id;
      script.src = url;
      script.async = true;
  
      document.body.appendChild(script);
    }

    return () => {
      script.parentElement && document.body.removeChild(script);
    }
  }, [url]);
};

export default useScript;