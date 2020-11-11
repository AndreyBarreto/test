
fetch("http://hp-api.herokuapp.com/api/characters")
.then(function(response) {
    return response.json();
  })
.then(function(data) {
    console.log(data)
    //agora que começa a brincadeira
    const generateHTML = data.map((api)=>{
        function cor(){
            if (api.house==="Gryffindor"){
                return "grifinoria"
            }else if(api.house==="Slytherin"){
                return "sonserina"
            }else if(api.house==="Ravenclaw"){
                return "corvinal"
            }else if (api.house==='Hufflepuff'){
                return "lufalufa"
            }else{
                api.house="⠀⠀⠀⠀⠀⠀⠀⠀"
                return "semcasa"
            }    
        }   
        
        return `
            <div class="${cor()} batata">
            <p class="nome" >${api.name}</p>
            <p class="house">${api.house}</p>
            <a href="https://www.w3schools.com" target=><img class="image" src=${api.image} alt="lalala" > </a>
            </div>
        `
    })
        document.getElementById("data").innerHTML=generateHTML
        
        
});

