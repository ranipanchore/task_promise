let api = "https://jsonplaceholder.typicode.com/photos"

let main = document.querySelector("#main");

// console.log(api);

photoData()
async function photoData(){
try {
    let res = await  fetch(api);
// console.log(res);
let data =await res.json();
// console.log(data);

display(data);
} 
 catch (error) {
    console.log(error);
}
}

function display(show){
    
show.forEach(function(element,index){
    //   return el; required for map method of array to receive new array of element
    console.log(element);

   let div = document.createElement("div");

    let title = document.createElement("h1");
title.innerText = element.title;

let img = document.createElement("img");
img.src = element.url;

    div.append(img,title);
    main.append(div);
})

}
