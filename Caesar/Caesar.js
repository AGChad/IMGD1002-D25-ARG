window.onload = () => {
    const pointerScroll = (elem) => {
        const dragStart = (ev) => elem.setPointerCapture(ev.pointerId);
        const dragEnd = (ev) => elem.releasePointerCapture(ev.pointerId);
        const drag = (ev) => elem.hasPointerCapture(ev.pointerId) && (elem.scrollLeft -= ev.movementX);

        elem.addEventListener("pointerdown", dragStart);
        elem.addEventListener("pointerup", dragEnd);
        elem.addEventListener("pointermove", drag);
    }

    document.querySelectorAll(".scroller").forEach(pointerScroll);
}

function letterShift(x, y, code) {
    let shift = x + y;

    let mapString = code.split('');

    let newString = "";
    for (let i = 0; i < mapString.length; i++) {
        let unicode = mapString[i].charCodeAt(0);
        unicode += shift;
        if (unicode > 90) {
            unicode -= 26;
        } else if (unicode < 65) {
            unicode += 26;
        }

        newString += String.fromCharCode(unicode);
    }

    return newString;
}