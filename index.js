const number = document.querySelector("#number");
const wtP = document.querySelector("#wtP");
const ptW = document.querySelector("#ptW");
const result = document.querySelector("p");
let weight;

function convert(){
    if(wtP.checked){
        weight = Number(number.value);
        weight = weight * 2.2046;
        result.innerHTML = weight + "Ibs";

    }else if(ptW.checked){
        weight = Number(number.value);
        weight = weight / 2.2046;
        result.innerHTML = weight + "Kgs";
        

    }else{
        result.innerHTML = "Select a Unit";
    }
}
let button = document.querySelector("button");
button.addEventListener("click", convert);