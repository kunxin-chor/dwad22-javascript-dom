/*
 We want the user to key in their
 weight and height. When they press the
 Calculate BMI button, display their BMI

*/

document.querySelector("#btnCalculate")
    .addEventListener('click', function(){

        // INPUT: extract data from user
       let weightTextbox = document.querySelector("#weight");
       let weight = parseFloat(weightTextbox.value);

       let heightTextbox = document.querySelector("#height");
       let height = parseFloat(heightTextbox.value);
   
    // find the first element with the class 'units' that has been checked
    // let selectedRadioButton = document.querySelector('.units:checked');
    // let unit = selectedRadioButton.value;
    // find all the possible buttons
    let allRadioButtons = document.querySelectorAll(".units");
    let selectedUnit = null;
    for (let rb of allRadioButtons) {
        // we are accessing the `checked` key in the
        // `rb` object to see if it is true
        if (rb.checked == true) {
            selectedUnit = rb.value;
            break;
        }
    }

    let bmi = 0;
    // PROCESSING: calculate BMI
    if (unit==="si") {
    bmi = weight / height ** 2;
    bmi = bmi.toFixed(2);
    } else if (unit ==='imperial') {
    bmi = (weight / height  ** 2) * 703;
    bmi = bmi.toFixed(2);
    }

    // OUTPUT
    document.querySelector("#resultsDiv").style.display = "block";
    document.querySelector("#results").innerHTML = bmi;
    })