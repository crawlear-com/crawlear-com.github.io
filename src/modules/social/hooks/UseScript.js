"use client"

import { useEffect } from 'react';

const UseScript = (url, id, onLoadedCallback) => {
  useEffect(() => {
    const scriptElement = document.getElementById(id);
    const script = document.createElement('script');

    if(!scriptElement) {
      script.id = id;
      script.src = url;
      script.async = true;
      onLoadedCallback && (script.onload = onLoadedCallback);

      document.body.appendChild(script);
    }

    return () => {
      script.parentElement && document.body.removeChild(script);
    }
  }, [url, id, onLoadedCallback]);
};

export default UseScript;