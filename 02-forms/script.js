
// First step: what is the event?
let submitBtn = document.querySelector("#btnSubmit");
submitBtn.addEventListener("click", function(){
    // let nameTextbox = document.querySelector("#name");
    // let emailTextbox = document.querySelector("#email");

    // let name = nameTextbox.value;
    // let email = emailTextbox.value;

    // only read the value in the event callback function
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;

    console.log("name =", name);
    console.log("email =", email);

    // we can select elements by their name attribute
    // The NAME attribute only make sense for <input type="">
    // document.querySelectorAll(`[name="services"]`);
    
    // select all the radio buttons with the class of services
    // document.querySelectorAll(".services");

    // if we just want the checked radio button
    let checkedRadioButton = document.querySelector('.services:checked');
    let serviceLevel = checkedRadioButton ? checkedRadioButton.value : "unspecified";
    console.log("service level =", serviceLevel);

    let checkedCheckboxes = document.querySelectorAll('.hear-about:checked');
    let selectedValues = [];
    for (let checkbox of checkedCheckboxes) {
        selectedValues.push(checkbox.value);
    }
    console.log("selectedValues =", selectedValues);

    // find the country that has been selected
    let countryDropdown = document.querySelector("#country");
    let country = countryDropdown.value;

    console.log("country =", country);

    // extracting the value from a textarea
    // is the same extracting from a textbox
    let commentTextbox = document.querySelector("#comments");
    let comments = commentTextbox.value;

    console.log("comments =", comments);


})
