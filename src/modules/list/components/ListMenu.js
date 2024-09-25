import * as React from 'react';
import ListMenuItem from './ListMenuItem';
import { useTranslation } from 'react-i18next';

function ListMenu({ itemPosition, onRemoveClick, onConfigureClick}) {
    const { t } = useTranslation(['main'])
    const containerRef = React.useRef(null)

    function toggleMenu() {
        containerRef.current.classList.toggle('closed')
    }

    return <span ref={containerRef} className="listItemMenu rounded closed">
        <div onClick={toggleMenu} >
            <div className="burguerMenuBar"></div>
            <div className="burguerMenuBar"></div>
            <div className="burguerMenuBar"></div>
        </div>            

        <ListMenuItem text={t('description.eliminar')} 
            itemPosition={itemPosition}
            onClickFunction={(event)=>{
                toggleMenu();
                onRemoveClick(event);
            }}/>
        <ListMenuItem text={t('description.crearcomoeste')} 
            itemPosition={itemPosition}
            onClickFunction={onConfigureClick} />
    </span>;
}

export default ListMenu