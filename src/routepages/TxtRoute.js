import * as React from 'react';
import Analytics from '../Analytics.js';

function TxtRoute({filePath}) {
    React.useEffect(() => {
        Analytics.pageview('/txtRoute/');
    },[]);

    const showFile = async (file) => {
        const reader = new FileReader();

        reader.readAsText(file);
      };

    return showFile(filePath);
}

export default TxtRoute;