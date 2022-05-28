const key = "11a96cbd";


const movie = document.getElementById("movie").value;
const container = document.getElementById("container")

function mainfun(event){
    event.preventDefault();

    async function getData(){
        let url = `http://www.omdbapi.com/?s=${movie}&apikey=${key}`;
        try {
            let res = await fetch(url);
            let movieData = await res.json();
            display(movieData.Search)
            console.log(movieData);
        }
        catch(err){
            console.log(err);
            console.log("movie not found");

            nomovie()
        }
    }
    function nomovie(){
     
       let phot =  document.querySelector("#img");
       let img = document.createElement("img");
       img.src = "https://www.arweave.net/I4wkJKQHM53aw9ulOl_MKPmJJ5Ov2LAlxyuHaWe8nYU?ext=gif"
     
       phot.append(img)
    }
    getData()


    // display 

    function display(data){
        container.innerHTML = null;
        data.forEach(function(el) {
            let box = document.createElement("div");
            let img = document.createElement("img");
            img.src = el.Poster;
            let h3 = document.createElement("h3");
            h3.innerText = el.Title;
            let p1 =document.createElement("p");
            p1.innerText = el.Year;
            let p2 = document.createElement("p");
            p2.innerText = `${el.Type}`;
            let p3 = document.createElement("p");
            let random  = Math.floor(Math.random() * 10)+1
            p3.setAttribute("id","rating")
            p3.innerText  = `IMDB rating : ${random}`;
          
            box.append(img,h3,p1,p2,p3);
            container.append(box);
           if(random > 8){
              
              
              document.querySelector("#recomendet").append(box);
           }
        });
    }

     }
    async function movieSearch(q){

        let url = `http://www.omdbapi.com/?s=${q}&apikey=11a96cbd`;
        let res = await fetch(url);
        let data = await res.json();
        return data.Search;
    
    }
    function display(data){
        if(data === undefined){
            return false;
        }
        let displayName = document.getElementById("displayName");
        displayName.innerHTML = null;
        data.forEach(function(el) {
              let div = document.createElement("div");
        let img = document.createElement("img");
        img.src = el.Poster;
        let p = document.createElement("p");
        p.innerText = el.Title;
        div.append(img,p);
        displayName.append(div);
        });
      
    }
    
    
    async function main(){
        let query = document.getElementById("movie").value;
        
        
        let res = movieSearch(query);
        let data = await res;
        console.log(data);
        display(data)
    
    }
    
    let id;
    function a(fun,delay){
        if(id){
            clearTimeout(id)
        }
        id = setTimeout(function() {
            fun()
        }, delay);
    }
