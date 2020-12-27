var d = document,
    wrap = d.querySelector('.wrap'),
    items = d.querySelector('.items'),
    itemCount = d.querySelectorAll('.item').length,
    scroller = d.querySelector('.scroller'),
    pos = 0,
    transform = Modernizr.prefixed('transform');

function setTransform() {
    items.style[transform]='translate3d('+(-pos * items.offsetWidth)+'px,0,0)';
}

function prev(){
    pos = Math.max(pos - 1,0);
    setTransform();
}
function next(){
    pos = Math.min(pos + 1, itemCount - 1);
    setTransform();
}

window.addEventListener('resize',setTransform);