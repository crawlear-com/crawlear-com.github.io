import * as React from 'react'
import { useTranslation } from 'react-i18next'
import ListMenu from './components/ListMenu'
import ListItem from './components/ListItem'
import { itemProps } from './components/ListItem'

import './styles/List.scss'

export interface ListProps {
    data: Array<any>,
    transformer: Function,
    readOnly: boolean,
    onRemoveItem?: Function,
    onConfigureItem?: Function,
    title: string,
    onItemAction?: Function,
}

function List({ data, readOnly, onRemoveItem, onConfigureItem, title, onItemAction, transformer}: ListProps) {
    const { t } = useTranslation()
    let i=0, list: Array<any> = []

    function onRemoveItemClick(event: React.MouseEvent<HTMLDivElement>) {
        const position = Number((event.target as HTMLDivElement).getAttribute("data-itemposition"))
        
        if (window.confirm(t('content.seguroborrarpost'))) {
            onRemoveItem && onRemoveItem(position)
        }
    }

    function onConfigureItemClick(event: React.MouseEvent<HTMLDivElement>) {
        const position = Number((event.target as HTMLDivElement).getAttribute("data-itemposition"))

        onConfigureItem && onConfigureItem(position);                
    }

    function onOpenClose() {

    }

    data && data.forEach((item) => {
        list.push(<div key={i}>
            { onConfigureItem && onRemoveItem && <ListMenu key={`menu${i}`} itemPosition={i}
                onConfigureClick={onConfigureItemClick} 
                onRemoveClick={onRemoveItemClick} /> }
            <ListItem key={`item${i}`} item={transformer(item)}
                onItemAction={onItemAction}
                itemPosition={i}
                onOpenClose={onOpenClose} />
        </div>)
        i++;
      });

    if(!data || data.length === 0) {
        list.push(<div key={i} className="centerText smallText">{t('description.noentradas')}</div>);
    }

    return <div className="list rounded rounded3">
            <div className="headerText bold">{title}</div>
            { list }
        </div>;
}

export default List