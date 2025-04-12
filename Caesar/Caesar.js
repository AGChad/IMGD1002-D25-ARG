

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