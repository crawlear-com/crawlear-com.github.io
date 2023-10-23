import * as React from 'react';

import '../../resources/css/ViewNavigator.scss';
import ViewNavigatorColumner from './ViewNavigatorColumner';

function ViewNavigator({col1, col2, children}) {
    let viewNavigator;

    React.useEffect(()=>{
        viewNavigator = new ViewNavigatorColumner(col1.current, col2.current);

        return ()=>{
            viewNavigator.destroy();
        }
    },[]);

    return <div className='viewNavigatorContainer'>
        {children}
    </div>
    ;
}

export default ViewNavigator;