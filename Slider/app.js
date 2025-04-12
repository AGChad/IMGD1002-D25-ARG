
import PicturePuzzle from './PicturePuzzle.js'

const picturePuzzle = new PicturePuzzle(
    document.querySelectorAll('#puzzle-wrapper > div')[0],
    './Slider/non_corporate_logo.png',
    400
);

// const picturePuzzle2 = new PicturePuzzle(
//     document.querySelectorAll('#puzzle-wrapper > div')[1],
//     '../solarpunk.png',
//     600,
//     4
// );


picturePuzzle.onFinished = function() {
    setTimeout(function(){
        window.location.href = "home.html";
    }, 1000);
};
