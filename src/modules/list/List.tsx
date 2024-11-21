import * as React from 'react'
import { useTranslation } from 'react-i18next'
import ListMenu from './components/ListMenu'
import ListItem from './components/ListItem'

import './styles/List.scss'

export interface Transformer {
    transform: Function,
    key: any
}

export interface ListProps {
    data: Array<any>,
    transformer: Transformer,
    readOnly: boolean,
    onRemoveItem?: Function,
    onConfigureItem?: Function,
    title: string,
    onItemAction?: Function,
}

function List({ data, readOnly, onRemoveItem, onConfigureItem, title, onItemAction, transformer}: ListProps) {
    const { t } = useTranslation(['main'])
    let i=0, list: Array<any> = []

    function onRemoveItemClick(event: React.MouseEvent<HTMLDivElement>) {
        const key = (event.target as HTMLDivElement).getAttribute("data-key")

        if (window.confirm(t('content.seguroborrarpost'))) {
            onRemoveItem && onRemoveItem(key)
        }
    }

    function onConfigureItemClick(event: React.MouseEvent<HTMLDivElement>) {
        const key = (event.target as HTMLDivElement).getAttribute("data-key")

        onConfigureItem && onConfigureItem(key);
    }

    function onOpenClose() {

    }

    data && data.forEach((item) => {
        list.push(<div key={i}>
            { onConfigureItem && onRemoveItem && <ListMenu key={`menu${i}`} itemKey={transformer.key(item)}
                onConfigureClick={onConfigureItemClick}
                onRemoveClick={onRemoveItemClick} /> }
            <ListItem key={transformer.key(item)} item={transformer.transform(item)}
                onItemAction={onItemAction}
                itemKey={transformer.key(item)}
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