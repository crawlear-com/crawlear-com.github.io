import * as React from 'react'

import '../styles/ListItem.scss'

export interface itemProps {
    title: string,
    content: React.JSX.Element
}

interface ListItemProps {
    item: itemProps
    itemPosition: any
    onOpenClose: Function
    onItemAction?: Function
}

function ListItem({ item, itemPosition, onOpenClose, onItemAction }: ListItemProps) {

    function openCloseItem(event: React.MouseEvent<HTMLSpanElement>) {
        const targetParent = (event.target as HTMLSpanElement).parentElement

        if(targetParent) {
            targetParent.classList.toggle('closed')
            if(!targetParent.classList.contains('closed')) {
                onOpenClose(itemPosition)
            }
        }
    }

    function onItemActionClick(event: React.MouseEvent<HTMLSpanElement>) {
        onItemAction && onItemAction(itemPosition)
    }

    return <div key={itemPosition} className="listItemContainer rounded rounded1 closed">
                <span onClick={openCloseItem} className="textOverflow listItemName bold">{ item.title }</span>
                { onItemAction ? <span className='editButton' onClick={onItemActionClick}>
                    <button className="importantNote playButton"></button></span> : <></> }
                { item.content }
            </div>
}

export default ListItem