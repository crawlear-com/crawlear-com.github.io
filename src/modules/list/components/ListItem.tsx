import * as React from 'react'

import '../styles/ListItem.scss'

export interface itemProps {
    title: string,
    content: React.JSX.Element
}

interface ListItemProps {
    item: itemProps
    itemKey: any
    onOpenClose: Function
    onItemAction?: Function
}

function ListItem({ item, itemKey, onOpenClose, onItemAction }: ListItemProps) {

    function openCloseItem(event: React.MouseEvent<HTMLSpanElement>) {
        const targetParent = (event.target as HTMLSpanElement).parentElement

        if(targetParent) {
            targetParent.classList.toggle('closed')
            if(!targetParent.classList.contains('closed')) {
                onOpenClose(itemKey)
            }
        }
    }

    function onItemActionClick(event: React.MouseEvent<HTMLSpanElement>) {
        onItemAction && onItemAction(itemKey)
    }

    return <div key={itemKey} className="listItemContainer rounded rounded1 closed">
                <span onClick={openCloseItem} className="textOverflow listItemName bold">{ item.title }</span>
                { onItemAction ? <span className='editButton' onClick={onItemActionClick}>
                    <button className="importantNote playButton"></button></span> : <></> }
                { item.content }
            </div>
}

export default ListItem