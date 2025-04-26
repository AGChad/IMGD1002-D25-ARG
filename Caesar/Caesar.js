window.onload = () => {
    // Constant for the input element
    const inputElem = document.getElementById("encoded");
    // Array constant for the scrollers
    const scrollers = document.querySelectorAll(".scroller");

    // Stores the last shift so shift can
    let lastTotalShift = 0;

    // Gets the width of each letter
    const letterWidth = document.querySelector("li").offsetWidth;

    // Gets the shift value in number of characters from the scrollLeft attribute of each scroller
    const getShiftFromScroll = (scroller) => {
        return Math.round(scroller.scrollLeft / letterWidth) % 26;
    };

    // Computes the total shift between all three scrollers (whole numbers)
    const computeDisplacementShift = (positions) => {
        return (positions[1] - positions[0]) + (positions[2] - positions[1]);
    };

    // Shifts letters by the input amount, ignores non-alphabet characters, retains capitalization
    const letterShift = (deltaShift, text) => {
        // Funky map functions I found online
        return text.split("").map((char) => {
            // Returns the character as is if it's not in the alphabet
            if (!/[a-zA-Z]/.test(char)) return char;
            // Gets the base of the Unicode alphabet (capital letter or not)
            const base = char === char.toUpperCase() ? 65 : 97;
            // Adds the shift to the characters Unicode and loops around values that escape the alphabet's range
            return String.fromCharCode((char.charCodeAt(0) - base + deltaShift + 26) % 26 + base);
        }).join("");
    };

    // Does the math and adds events to allow drag scrolling
    const pointerScroll = (elem) => {
        const dragStart = (ev) => elem.setPointerCapture(ev.pointerId);
        const drag = (ev) => {
            if (elem.hasPointerCapture(ev.pointerId)) {
                elem.scrollLeft -= ev.movementX;
            }
        };
        const dragEnd = (ev) => {
            elem.releasePointerCapture(ev.pointerId);

            const shiftPositions = Array.from(scrollers).map(getShiftFromScroll);
            const newTotalShift = computeDisplacementShift(shiftPositions);
            const deltaShift = newTotalShift - lastTotalShift;

            if (deltaShift !== 0) {
                inputElem.value = letterShift(deltaShift, inputElem.value);
                lastTotalShift = newTotalShift;

                if (inputElem.value === "unity hall 343" ||
                    inputElem.value === "Unity Hall 343" ||
                    inputElem.value === "UNITY HALL 343") {
                    console.log("test");
                    var popup = document.getElementById("popup");
                    popup.classList.toggle("show");
                }
            }
        };

        elem.addEventListener("pointerdown", dragStart);
        elem.addEventListener("pointermove", drag);
        elem.addEventListener("pointerup", dragEnd);
    };

    // Gives each scroller its drag
    scrollers.forEach(pointerScroll);

    // Resets scrollers by returning their shift to 0
    const resetScrollers = () => {
        scrollers.forEach(scroller => {
            scroller.scrollLeft = 0;
        });
    };

    // Resets the scrollers when the encoded text changes
    inputElem.addEventListener("input", (ev) => {
        // Calculates the total shift between the scrollers
        const currentShift = computeDisplacementShift(Array.from(scrollers).map(getShiftFromScroll));

        // If the scrollers are not centered at their origin, reset
        if (currentShift !== 0) {
            resetScrollers();
            lastTotalShift = 0;
        }
    });
};