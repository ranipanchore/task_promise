let form = document.querySelector("form");

let upi= document.getElementById("upi");
let pwd = document.getElementById("pwd");
pwd.value = 123;
let btn = document.getElementById("btn");

let status_process = document.querySelector("#status_process");

btn.addEventListener("click", add);

let img1 = document.createElement("img");
img1.style.width = "150px";
img1.style.height = "150px";
img1.style.textAlign = "center";
img1.setAttribute("id", "img1")


let img2 = document.createElement("img");
img2.style.width = "150px";
img2.style.height = "150px";
img2.style.textAlign = "center";


let img3 = document.createElement("img");
img3.style.width = "150px";
img3.style.height = "150px";
img3.style.textAlign = "center";

function add(){
   
    event.preventDefault();
    form.style.display= "none";
   
    img1.style.display= "block";
    status_process.appendChild(img1);
    img1.src =  "https://europe1.discourse-cdn.com/figma/original/3X/6/1/6173a1aae8372541cfe858bbadccf198e2935f89.gif"
    img1.title = "process";
    
    setTimeout((e) => {
        img1.style.display= "none";
        if(pwd.value == 123){
            status_process.appendChild(img2);
            img2.src =  "https://www.icegif.com/wp-content/uploads/2023/08/icegif-727.gif";
            img2.title = "success";
            img2.style.display= "block";
        }
        else if(pwd.value!=123)
        {
            status_process.appendChild(img3);
            img3.src =  "https://cdn.pixabay.com/animation/2023/01/01/10/31/10-31-59-692_512.gif";
            img3.title = "failed";
        }
    }, 5000)

   
}




