let i = 1

function click(event){
    // console.log(event.target.id)
    let lucka = event.target
    lucka.classList.toggle("activate")

    if(lucka.classList.contains("activate") && event.target.id === i.toString()){
        if (i.toString() === "1"){
            lucka.innerHTML = "Dags att<br>börja skriva önskelista!"  
        }
        if (i.toString() === "2"){
            lucka.innerHTML = "Snart är det lov!" 
        }
        if (i.toString() === "3"){
            lucka.innerHTML = "Ser du fram emot all julmat?" 
        }
        if (i.toString() === "4"){
            lucka.innerHTML = "Bara 20<br>dagar kvar!" 
        }
        if (i.toString() === "5"){
            lucka.innerHTML = "Ho Ho Ho!" 
        }
        if (i.toString() === "6"){
            lucka.innerHTML = "Bara 18<br>dagar kvar!" 
        }
        if (i.toString() === "7"){
            lucka.innerHTML = "Bara 17<br>dagar kvar!" 
        }
        if (i.toString() === "8"){
            lucka.innerHTML = "Bara 16<br>dagar kvar!" 
        }
        if (i.toString() === "9"){
            lucka.innerHTML = "Bara 15<br>dagar kvar!" 
        }
        if (i.toString() === "10"){
            lucka.innerHTML = "Bara 14<br>dagar kvar!" 
        }
        if (i.toString() === "11"){
            lucka.innerHTML = "Bara 13<br>dagar kvar!" 
        }
        if (i.toString() === "12"){
            lucka.innerHTML = "Bara 12<br>dagar kvar!" 
        }
        if (i.toString() === "13"){
            lucka.innerHTML = "Bara 11<br>dagar kvar!" 
        }
        if (i.toString() === "14"){
            lucka.innerHTML = "Bara 10<br>dagar kvar!" 
        }
        if (i.toString() === "15"){
            lucka.innerHTML = "Bara 9<br>dagar kvar!" 
        }
        if (i.toString() === "16"){
            lucka.innerHTML = "Bara 8<br>dagar kvar!" 
        }
        if (i.toString() === "17"){
            lucka.innerHTML = "Bara 7<br>dagar kvar!" 
        }
        if (i.toString() === "18"){
            lucka.innerHTML = "Bara 6<br>dagar kvar!" 
        }
        if (i.toString() === "19"){
            lucka.innerHTML = "Bara 5<br>dagar kvar!" 
        }
        if (i.toString() === "20"){
            lucka.innerHTML = "Bara 4<br>dagar kvar!" 
        }
        if (i.toString() === "21"){
            lucka.innerHTML = "Bara 3<br>dagar kvar!" 
        }
        if (i.toString() === "22"){
            lucka.innerHTML = "Bara 2<br>dagar kvar!" 
        }
        if (i.toString() === "23"){
            lucka.innerHTML = "Bara 1<br>dag kvar!!!" 
        }
        if (i.toString() === "24"){
            lucka.innerHTML = "JULAFTON!!!" 
        }

        i++
    }

    else if (lucka.classList.contains("activate") && event.target.id !== i.toString()){
        lucka.innerHTML = "Luckan kan inte öppnas än!"
    }

    else{
        lucka.innerHTML = event.target.id
    }

}

function registerLucka(lucka){
    lucka.addEventListener("click", click)
}

let luckor = document.querySelectorAll(".lucka")
luckor.forEach( registerLucka )
