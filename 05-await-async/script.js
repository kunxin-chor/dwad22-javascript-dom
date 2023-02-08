// this is going to be an asychronous function
// meaning: there will be some process
// in this function that will take a long
// time to finish and JS, instead of waiting
// for it to finish, should just go on to execute
// the next line of available code
async function loadData() {
  console.log("before loading our data");
  // we can use axios because of the axios script
  // we put in our HTML
  let response = await axios.get("fruits.json"); // the await means 
  // "before executing the next line in this function,
  // wait for axios.get to finish"
  console.log(response.data);
  console.log("finished loading");

//    for (let fruit of response.data) {
//         document.querySelector("#fruit-list")
//             .innerHTML += `<li>${fruit.name} - $${fruit.price} x ${fruit.stock}</li>`
//    }

let fruitList = document.querySelector("#fruit-list");
for (let fruit of response.data) {
    // use JavaScript to create a <li> element
    let liElement = document.createElement('li');
    // set the content of the element
    liElement.innerHTML = `${fruit.name} - $${fruit.price} x ${fruit.stock}`
    // add the newly created <li> element to the <ul>
    fruitList.appendChild(liElement);
    liElement.addEventListener("click", function(){
        alert(fruit.name);
    })
}

 
}

 function main() {
    loadData();
}

main();