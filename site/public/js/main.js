function click(){
    console.log("hej")
    let lucka = document.querySelector(".lucka")
    lucka.classList.toggle("activate")

    if(lucka.classList.contains("activate")){
        lucka.innerHTML = "Innehåll"
    }else{
        lucka.innerHTML = "<p>1</p>"
    }

}

function registerLucka(lucka){
    lucka.addEventListener("click", click)
}

let luckor = document.querySelectorAll(".lucka")
luckor.forEach( registerLucka )