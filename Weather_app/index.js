
let weatherApi = "https://api.openweathermap.org/data/2.5/weather?&units=metric";
let key = "5a6785ae6aa37b53cdf95182d1b088e5"

let btn = document.getElementById("search");
btn.addEventListener("click", cityTemperatureSearch)

let div = document.getElementById("data");
let cityName = document.querySelector('input');
let mapDiv = document.getElementById("map");

async function cityTemperatureSearch(){
   
    let nameofCity = cityName.value
    let res = await fetch(`${weatherApi}&appId=${key}&q=${nameofCity}`);
    let data = await res.json();
    console.log(data);

    map(data)
}

function map(data){
    div.innerHTML = ""
    let city = document.createElement("h1");
    city.innerText = "City Name: "+"  "+data.name;
    let  temp = document.createElement("h1");
    temp.innerText = "temp : "+" "+data.main.temp;
    
     
    let map = document.createElement("iframe");
    map.src = `https://www.google.com/maps/embed/v1/place?q=${data.name}&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8`
    div.append(city,temp,map);
}

