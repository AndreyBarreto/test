
fetch("http://hp-api.herokuapp.com/api/characters")
.then(function(response) {
    return response.json();
  })
.then(function(data) {
    console.log(data)
    //agora que começa a brincadeira
    data.map((api)=>{
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
        
    
        name+=`
            <div class="${cor()} batata">
            <p class="nome" >${api.name}</p>
            <p class="house">${api.house}</p>
            <img class="image" src=${api.image} alt="" onclick="alert('${api.name}')">
            </div>
        `
    })
        document.getElementById("data").innerHTML=name
        
        
});

