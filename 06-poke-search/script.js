document.querySelector("#btnSearch").addEventListener("click", async function(){
    
    let search = document.querySelector("#search").value;
    
    let response = await axios.get("https://pokeapi.co/api/v2/pokemon/" + search);
    console.log(response.data);

    let name = response.data.name;
    let image = response.data.sprites.other["official-artwork"].front_default

    console.log(name, image);

    document.querySelector("#name").innerHTML = name;
    document.querySelector("#image").src = image;
})