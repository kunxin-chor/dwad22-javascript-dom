let currentNumber = 0;
updateDisplay();


function updateDisplay() {
    let box  = document.querySelector("#box");
    box.innerHTML = currentNumber;
    if (currentNumber % 2 ==0) {
        box.style.backgroundColor = "green";
    } else {
        box.style.backgroundColor = "red";
    }
    if (currentNumber == 10) {
        document.querySelector("#btnIncrement").disabled = true;
    } else {
        document.querySelector("#btnIncrement").disabled = false;
    }
}

function changeNumber(delta) {
    let modifiedNumber = currentNumber + delta;
    if (modifiedNumber >= 0 && modifiedNumber <= 10) {
        currentNumber = modifiedNumber;
    }
}

document.querySelector("#btnIncrement")
    .addEventListener("click", function(){
        changeNumber(1)
        updateDisplay();
    });

document.querySelector("#btnDecrement")
    .addEventListener("click", function(){
        changeNumber(-1);
        updateDisplay();
    })

document.querySelector("#btnReset")
    .addEventListener("click", function(){
        currentNumber = 0;
        updateDisplay();
    })