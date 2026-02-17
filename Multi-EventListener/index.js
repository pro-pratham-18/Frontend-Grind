


function change_color(event){
    if(event.target.nodeName=="P"){
        mydiv.style.cssText="display:flex;justify-content:center;align-items:center";
        event.target.style.color="white";
        console.log("clicked",event.target.textContent);
    }
}

let mydiv =document.getElementById("container");

mydiv.addEventListener("click",change_color)