document.querySelector("#btnSearch")
    .addEventListener("click", async function(){
        
        let search = document.querySelector("#search").value;
        let type = document.querySelector(".type:checked").value;
        // do a mock search
        let response = await axios.get("https://www.omdbapi.com",{
            "params": {
                "apikey": "ce8efa56",
                "s": search,
                "type":type
            }
        });
        // axios will basically access the following URL:
        // "http://www.omdbapi.com/?apikey=ce8efa56&s=The+Lord+of+Rings",
        console.log(response.data);

        // INNER HTML
        // for (let m of response.data.Search) {
        //     let template = `<div class="card" style="width: 18rem;">
        //     <img src="${m.Poster}" class="card-img-top">
        //     <div class="card-body">
        //       <h5 class="card-title">${m.Title}</h5>
        //       <ul>
        //             <li>Date of Release:${m.Year}</li>
        //             <li>Type: ${m.Type} </li>
        //       </ul>
        //     </div>
        //   </div>`

        //   document.querySelector('#results').innerHTML += template;
        // }

        for (let m of response.data.Search) {
            let card = document.createElement('div');
            card.style.width = "18rem";
            card.innerHTML = `<img src="${m.Poster}" class="card-img-top">
                 <div class="card-body">
                 <h5 class="card-title">${m.Title}</h5>
                   <ul>
                         <li>Date of Release:${m.Year}</li>
                         <li>Type: ${m.Type} </li>
                 </ul>
                </div>`
            document.querySelector('#results').appendChild(card);
        }
       

    })