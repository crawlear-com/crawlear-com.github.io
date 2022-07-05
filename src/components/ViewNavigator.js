import * as React from 'react';

import '../resources/css/ViewNavigator.scss';

const body = window.document.body;

function ViewNavigator({col1, col2, col3, children}) {
    let viewNavigator;

    React.useEffect(()=>{
        viewNavigator = new ViewNavigatorColumner(col1.current, col2.current, col3.current);
    },[]);

    return <div className='viewNavigatorContainer'>
        {children}
    </div>
    ;
}

class ViewNavigatorColumner {
    constructor(col1, col2, col3) {
        body.addEventListener('touchstart', this.onTouchStart.bind(this));
        body.addEventListener('touchmove', this.onTouchMove.bind(this));
        body.addEventListener('touchend', this.onTouchEnd.bind(this));

        this.columnWidth = document.querySelector('.viewNavigatorContainer').clientWidth;
        this.startX = 0;
        this.col1 = col1;
        this.col2 = col2;
        this.col3 = col3;

        this.currentCol = col2;
        this.currentCol.classList.add('current');
        this.col1.style.transform = `translate(-${this.columnWidth}px,0)`;
        this.col2.style.transform = `translate(0,0)`;
        this.col3.style.transform = `translate(${this.columnWidth}px,0)`;

        body.classList.add('completegame');
    }

    onTouchStart(event) {
        const touches = event.touches;

        if(touches && touches.length === 1) {
            const touch = touches[0];

            this.startX = touch.clientX;
        }
    }
    onTouchMove(event) {
        const progressX = Math.round(event.touches[0].clientX) - this.startX;

        if (this.col1.classList.contains('current')) {
            this.col1.style.transform = `translate(${progressX}px,0)`;
            this.col2.style.transform = `translate(${progressX+this.columnWidth}px,0)`;
            this.col3.style.transform = `translate(${progressX+this.columnWidth*2}px,0)`;
        } else if (this.col2.classList.contains('current')) { 
            this.col1.style.transform = `translate(${progressX-this.columnWidth}px,0)`;
            this.col2.style.transform = `translate(${progressX}px,0)`;
            this.col3.style.transform = `translate(${progressX+this.columnWidth}px,0)`;
        } else if (this.col3.classList.contains('current')) { 
            this.col1.style.transform = `translate(${progressX-this.columnWidth*2}px,0)`;
            this.col2.style.transform = `translate(${progressX-this.columnWidth}px,0)`;
            this.col3.style.transform = `translate(${progressX}px,0)`;
        }
    }
    onTouchEnd(event) {
        const finalProgressX = event.changedTouches[0].clientX - this.startX;
        
        if (Math.abs(finalProgressX) > 100) {
            if(this.startX > finalProgressX) {
                if (this.col1.classList.contains('current')) {
                    this.col1.style.transform = `translate(${-this.columnWidth}px,0)`;
                    this.col2.style.transform = `translate(0px,0)`;
                    this.col3.style.transform = `translate(${this.columnWidth}px,0)`;
    
                    this.col1.classList.remove('current');
                    this.col2.classList.add('current');
                    body.classList.remove('profile');
                    body.classList.add('completegame');
                } else if (this.col2.classList.contains('current')) { 
                    this.col1.style.transform = `translate(${-2*(this.columnWidth*2)}px,0)`;
                    this.col2.style.transform = `translate(${-this.columnWidth}px,0)`;
                    this.col3.style.transform = `translate(0px,0)`;
    
                    this.col2.classList.remove('current');
                    this.col3.classList.add('current');
                    body.classList.remove('completegame');
                    body.classList.add('feed');
                } else if (this.col3.classList.contains('current')) { 
                    this.col1.style.transform = `translate(${-2*(this.columnWidth*2)}px,0)`;
                    this.col2.style.transform = `translate(${-this.columnWidth}px,0)`;
                    this.col3.style.transform = `translate(0px,0)`;
                }
            } else {
                if (this.col1.classList.contains('current')) {
                    this.col1.style.transform = `translate(0px,0)`;
                    this.col2.style.transform = `translate(${this.columnWidth}px,0)`;
                    this.col3.style.transform = `translate(${2*this.columnWidth*2}px,0)`;
                } else if (this.col2.classList.contains('current')) { 
                    this.col1.style.transform = `translate(0px,0)`;
                    this.col2.style.transform = `translate(${this.columnWidth}px,0)`;
                    this.col3.style.transform = `translate(${2*this.columnWidth*2}px,0)`;
    
                    this.col2.classList.remove('current');
                    this.col1.classList.add('current');
                    body.classList.remove('completegame');
                    body.classList.add('profile');
                } else if (this.col3.classList.contains('current')) { 
                    this.col1.style.transform = `translate(${-this.columnWidth}px,0)`;
                    this.col2.style.transform = `translate(0px,0)`;
                    this.col3.style.transform = `translate(${this.columnWidth}px,0)`;
                    
                    this.col3.classList.remove('current');
                    this.col2.classList.add('current');
                    body.classList.remove('feed');
                    body.classList.add('completegame');
                }
            }
        } else {
            if (this.col1.classList.contains('current')) {
                this.col1.style.transform = `translate(0px,0)`;
                this.col2.style.transform = `translate(${this.columnWidth}px,0)`;
                this.col3.style.transform = `translate(${2*this.columnWidth*2}px,0)`;
            } else if (this.col2.classList.contains('current')) { 
                this.col1.style.transform = `translate(${-this.columnWidth}px,0)`;
                this.col2.style.transform = `translate(0px,0)`;
                this.col3.style.transform = `translate(${this.columnWidth*2}px,0)`;
            } else if (this.col3.classList.contains('current')) { 
                this.col1.style.transform = `translate(${-this.columnWidth*2}px,0)`;
                this.col2.style.transform = `translate(${-this.columnWidth}px,0)`;
                this.col3.style.transform = `translate(0px,0)`;
            }
        }
    }
}

export default ViewNavigator;