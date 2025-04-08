
import PicturePuzzle from './PicturePuzzle.js'

const picturePuzzle = new PicturePuzzle(
    document.querySelectorAll('#puzzle-wrapper > div')[0],
    '../solarpunk.png',
    600
);

// const picturePuzzle2 = new PicturePuzzle(
//     document.querySelectorAll('#puzzle-wrapper > div')[1],
//     '../solarpunk.png',
//     600,
//     4
// );


picturePuzzle.onFinished = function() {
    alert("Good job");
};
