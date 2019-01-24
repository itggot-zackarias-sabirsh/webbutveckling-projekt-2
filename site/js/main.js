function click(event){
    // console.log(event.target.id)
    let lucka = event.target
    lucka.classList.toggle("activate")

    if(lucka.classList.contains("activate")){
        lucka.innerHTML = "Innehåll"
    }else{
        lucka.innerHTML = event.target.id
    }

}

function registerLucka(lucka){
    lucka.addEventListener("click", click)
}

let luckor = document.querySelectorAll(".lucka")
luckor.forEach( registerLucka )