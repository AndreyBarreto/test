fetch("http://hp-api.herokuapp.com/api/characters")
  .then((resp) => resp.json())
  .then((data) => {
    console.log(data);
    //agora que começa a brincadeira
    const generateHTML = data
      .map((api) => {
        function houseColor() {
          if (api.house === "Gryffindor") {
            return "grifinoria";
          } else if (api.house === "Slytherin") {
            return "sonserina";
          } else if (api.house === "Ravenclaw") {
            return "corvinal";
          } else if (api.house === "Hufflepuff") {
            return "lufalufa";
          } else {
            api.house = "sem casa";
            return "semcasa";
          }
        }

        return `
            <div class=" flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front ${houseColor()}">
                        <p class="name-character" >${api.name}</p>
                        <p class="house-character">${api.house}</p>
                        <img class="image-character" src=${api.image} /> 
                    </div>
                    <div class="flip-card-back ${houseColor()}">
                        <p>${api.dateOfBirth}</p>
                        <p>${api.eyeColour}</p>
                        <p>${api.hairColour}</p>
                        <p>${api.ancestry}</p>
                        <p>${api.patronus}</p>
                        ${Object.values(api.wand).map((e) => {
                          return `<p>${e}</p>`;
                        }).join("")}
                    </div>
                </div>
            </div>
        `;
      })
      .join("");
    document.getElementById("data").innerHTML = generateHTML;
  });
