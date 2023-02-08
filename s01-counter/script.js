// EIPO
// Event, Input, Processing, Output

let incrementBtn = document.querySelector("#btnIncrement");
incrementBtn.addEventListener("click", function () {


    // remember the return value of document.querySelector
    // is AN OBJECT (a DOM element node object)
    // so we can store a reference to it
    let box = document.querySelector("#box");

    // we take the current number from the box (which is in
    // the innerHTML and therefore a string) and convert it to an integer
    let currentNumber = parseInt(box.innerHTML);
    if (currentNumber < 10) {
        currentNumber = currentNumber + 1;
        box.innerHTML = currentNumber;

        // see if to format the number as green or red
        if (currentNumber % 2 == 0) {
            box.style.backgroundColor = "green";
        } else {
            box.style.backgroundColor = "red";
        }
    }

    // alternatively...
    //box.innerHTML = parseInt(box.innerHTML) + 1;

}); // end incrementBtn

document.querySelector("#btnDecrement").addEventListener("click", function () {
    let box = document.querySelector("#box");

    // we take the current number from the box (which is in
    // the innerHTML and therefore a string) and convert it to an integer
    let currentNumber = parseInt(box.innerHTML);
    if (currentNumber > 0) {
        currentNumber = currentNumber - 1;
        box.innerHTML = currentNumber;

        // see if to format the number as green or red
        if (currentNumber % 2 == 0) {
            box.style.backgroundColor = "green";
        } else {
            box.style.backgroundColor = "red";
        }
    }

}); // end btnDecrement

document.querySelector("#btnReset").addEventListener("click", function () {
    let box = document.querySelector("#box");
    box.innerHTML = 0;
    // see if to format the number as green or red
    if (currentNumber % 2 == 0) {
        box.style.backgroundColor = "green";
    } else {
        box.style.backgroundColor = "red";
    }
})