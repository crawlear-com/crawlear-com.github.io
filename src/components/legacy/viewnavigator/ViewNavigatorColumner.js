import Utils from "../../../Utils";

const body = window.document.body;

class ViewNavigatorColumner {
    constructor(col1, col2) {
        this.onTouchStartBinded = this.onTouchStart.bind(this);
        this.onTouchMoveBinded = this.onTouchMove.bind(this);
        this.onTouchEndBinded = this.onTouchEnd.bind(this);
        this.onResizeBinded = this.onResize.bind(this);

        this.addEvents();
        this.columnWidth = document.querySelector('.viewNavigatorContainer').clientWidth;
        this.startX = 0;
        this.startY = 0;
        this.col1 = col1;
        this.col2 = col2;

        this.col1.classList.add('current');
        this.col1.style.transform = `translate(0,0)`;
        this.col2.style.transform = `translate(${this.columnWidth}px,0)`;
    }

    onResize() {
        this.columnWidth = document.querySelector('.viewNavigatorContainer').clientWidth;
        this.resetColum();
    }

    resetColum() {
        if (this.col1.classList.contains('current')) {
            this.col1.style.transform = `translate(0px,0)`;
            this.col2.style.transform = `translate(${this.columnWidth}px,0)`;
        } else if (this.col2.classList.contains('current')) { 
            this.col1.style.transform = `translate(${-this.columnWidth}px,0)`;
            this.col2.style.transform = `translate(0px,0)`;
        }
    }

    addEvents() {
        const isMobile = Utils.isMobile();

        body.addEventListener(isMobile ? 'touchstart' : 'mousedown', this.onTouchStartBinded);
        isMobile && body.addEventListener('touchmove', this.onTouchMoveBinded);
        body.addEventListener(isMobile ? 'touchend' : 'mouseup', this.onTouchEndBinded);

        window.addEventListener('resize', this.onResizeBinded);
    }

    removeEvents() {
        const isMobile = Utils.isMobile();

        body.removeEventListener(isMobile ? 'touchstart' : 'mousedown', this.onTouchStartBinded);
        isMobile && body.removeEventListener('touchmove', this.onTouchMoveBinded);
        body.removeEventListener(isMobile ? 'touchend' : 'mouseup', this.onTouchEndBinded);

        window.removeEventListener('resize', this.onResizeBinded);
    }

    destroy() {
        body.classList.remove('completegame');
        body.classList.remove('profile');
        body.classList.remove('feed');
        this.removeEvents();
    }

    onTouchStart(event) {
        const touches = event.touches;

        if (touches && touches.length === 1) {
            this.startX = touches[0].clientX;
            this.startY = touches[0].clientY;
        } else {
            this.startX = event.clientX;
            this.startY = event.clientY;
        }
        this.col1.classList.toggle('animated');
        this.col2.classList.toggle('animated');
    }

    onTouchMove(event) {
        const progressX = Math.round(event.touches ? event.touches[0].clientX : event.clientX) - this.startX;
        const progressY = Math.round(event.touches ? event.touches[0].clientY : event.clientY) - this.startY;

        if (Math.abs(progressX) > Math.abs(progressY)) {
            if (this.col1.classList.contains('current')) {
                this.col1.style.transform = `translate(${progressX}px,0)`;
                this.col2.style.transform = `translate(${progressX+this.columnWidth}px,0)`;
            } else if (this.col2.classList.contains('current')) { 
                this.col1.style.transform = `translate(${progressX-this.columnWidth}px,0)`;
                this.col2.style.transform = `translate(${progressX}px,0)`;
            }    
        }
    }

    onTouchEnd(event) {
        const finalProgressX = (event.touches ? event.changedTouches[0].clientX : event.clientX) - this.startX;
        const finalProgressY = (event.touches ? event.changedTouches[0].clientY : event.clientY) - this.startY;

        if (Math.abs(finalProgressX) > 100 && Math.abs(finalProgressX) > Math.abs(finalProgressY)) {
            if(finalProgressX < 0) {
                if (this.col1.classList.contains('current')) {
                    this.col1.style.transform = `translate(${-this.columnWidth}px,0)`;
                    this.col2.style.transform = `translate(0px,0)`;
    
                    this.col1.classList.remove('current');
                    this.col2.classList.add('current');

                    body.classList.remove('profile');
                    body.classList.add('feed');
                } else if (this.col2.classList.contains('current')) { 
                    this.col1.style.transform = `translate(${-this.columnWidth}px,0)`;
                    this.col2.style.transform = `translate(0px,0)`;
                }
            } else {
                if (this.col1.classList.contains('current')) {
                    this.col1.style.transform = `translate(0px,0)`;
                    this.col2.style.transform = `translate(${this.columnWidth}px,0)`;
                } else if (this.col2.classList.contains('current')) { 
                    this.col1.style.transform = `translate(0px,0)`;
                    this.col2.style.transform = `translate(${this.columnWidth}px,0)`;
    
                    this.col2.classList.remove('current');
                    this.col1.classList.add('current');
                    body.classList.remove('feed');
                    body.classList.add('profile');
                }
            }
        } else {
            this.resetColum();
        }

        this.col1.classList.toggle('animated');
        this.col2.classList.toggle('animated');
    }
}

export default ViewNavigatorColumner;