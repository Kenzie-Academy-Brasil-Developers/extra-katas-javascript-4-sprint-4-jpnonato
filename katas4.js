const gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";

const lotrCitiesArray = ["Mordor","Gondor","Rohan","Beleriand","Mirkwood","Dead Marshes","Rhun","Harad"];

const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit";

let sec1 = document.getElementById("kata1")
let sec2 = document.getElementById("kata2")
let sec3 = document.getElementById("kata3")
let sec4 = document.getElementById("kata4")
let sec5 = document.getElementById("kata5")
let sec6 = document.getElementById("kata6")
let sec7 = document.getElementById("kata7")
let sec8 = document.getElementById("kata8")
let sec9 = document.getElementById("kata9")
let sec10 = document.getElementById("kata10")

function kata1() {
    let criarh3 = document.createElement("h3")
    sec1.appendChild(criarh3)
    criarh3.innerText = "Kata 1: "

    let cities = gotCitiesCSV.split(",")
    let criarp = document.createElement("p")
    sec1.appendChild(criarp)
    criarp.innerText = cities

    
};

kata1();


function kata2(){
    let criarh3 = document.createElement("h3")
    sec2.appendChild(criarh3)
    criarh3.innerText = "Kata 2: "
    
    let best = bestThing.split(" ")
    let criarp = document.createElement("p")
    sec2.appendChild(criarp)
    criarp.innerText = best
};

kata2();


function kata3(){
    let criarh3 = document.createElement("h3")
    sec3.appendChild(criarh3)
    criarh3.innerText = "Kata 3: "

    let cities = gotCitiesCSV.replace(/,/g, ";" )
    let criarp = document.createElement("p")
    sec3.appendChild(criarp)
    criarp.innerText = cities
};

kata3();


// function kata4(){
//     let cities = gotCitiesCSV.replace(/,/g, ";" )
//     let criarp = document.createElement("p")
//     sec4.appendChild(criarp)
//     criarp.innerText = cities
// };

// kata4();


function kata5(){
    let criarh3 = document.createElement("h3")
    sec5.appendChild(criarh3)
    criarh3.innerText = "Kata 5: "

    let cities = []
    for(let i =0; i < 5; i++){
        cities.push(lotrCitiesArray[i])
    }
    let criarp = document.createElement("p")
    sec5.appendChild(criarp)
    criarp.innerText = cities
    
};

kata5();


function kata6(){
    let criarh3 = document.createElement("h3")
    sec6.appendChild(criarh3)
    criarh3.innerText = "Kata 6: "

    let cities = []
    for(let i = 7; i > 2; i--){
        cities.push(lotrCitiesArray[i])
    }
    let criarp = document.createElement("p")
    sec6.appendChild(criarp)
    criarp.innerText = cities
    
};

kata6();


function kata7(){
    let criarh3 = document.createElement("h3")
    sec7.appendChild(criarh3)
    criarh3.innerText = "Kata 7: "

    let cities = []
    for(let i = 2; i < 5; i++){
        cities.push(lotrCitiesArray[i])
    }
    let criarp = document.createElement("p")
    sec7.appendChild(criarp)
    criarp.innerText = cities
    
};

kata7();


function kata8(){
    let criarh3 = document.createElement("h3")
    sec8.appendChild(criarh3)
    criarh3.innerText = "Kata 8: "

    let removed = lotrCitiesArray.splice(2,1)
    let criarp = document.createElement("p")
    sec8.appendChild(criarp)
    criarp.innerText = lotrCitiesArray
    
};

kata8();


function kata9(){
    let criarh3 = document.createElement("h3")
    sec9.appendChild(criarh3)
    criarh3.innerText = "Kata 9: "

    let removed = lotrCitiesArray.splice(-2,2)
    let criarp = document.createElement("p")
    sec9.appendChild(criarp)
    criarp.innerText = lotrCitiesArray

};

kata9();


function kata10(){
    let criarh3 = document.createElement("h3")
    sec10.appendChild(criarh3)
    criarh3.innerText = "Kata 10: "

    let adicionado = lotrCitiesArray.splice(2,0, "Rohan")
    let criarp = document.createElement("p")
    sec10.appendChild(criarp)
    criarp.innerText = lotrCitiesArray
    
};

kata10();


function kata11(){
    let sec11 = document.getElementById("kata11")
    let criarh3 = document.createElement("h3")
    sec11.appendChild(criarh3)
    criarh3.innerText = "Kata 11: "

    let adicionado = lotrCitiesArray.splice(5,1, "Deadest Marshes")
    let criarp = document.createElement("p")
    sec11.appendChild(criarp)
    criarp.innerText = lotrCitiesArray
    
};

kata11();


function kata12(){
    let sec12 = document.getElementById("kata12")
    let criarh3 = document.createElement("h3")
    sec12.appendChild(criarh3)
    criarh3.innerText = "Kata 12: "

    let newBestThing = bestThing.slice(0,14)
    let criarp = document.createElement("p")
    sec12.appendChild(criarp)
    criarp.innerText = newBestThing
    
};

kata12();


function kata13(){
    let sec13 = document.getElementById("kata13")
    let criarh3 = document.createElement("h3")
    sec13.appendChild(criarh3)
    criarh3.innerText = "Kata 13: "

    let newBestThing = bestThing.slice(-12)
    let criarp = document.createElement("p")
    sec13.appendChild(criarp)
    criarp.innerText = newBestThing
    
};

kata13();


function kata14(){
    let sec14 = document.getElementById("kata14")
    let criarh3 = document.createElement("h3")
    sec14.appendChild(criarh3)
    criarh3.innerText = "Kata 14: "

    let newBestThing = bestThing.slice(22, 38)
    let criarp = document.createElement("p")
    sec14.appendChild(criarp)
    criarp.innerText = newBestThing
    
};

kata14();


function kata15(){
    let sec15 = document.getElementById("kata15")
    let criarh3 = document.createElement("h3")
    sec15.appendChild(criarh3)
    criarh3.innerText = "Kata 15: "

    let newBestThing = bestThing.substr(-12)
    let criarp = document.createElement("p")
    sec15.appendChild(criarp)
    criarp.innerText = newBestThing
    
};

kata15();



function kata16(){
    let sec16 = document.getElementById("kata16")
    let criarh3 = document.createElement("h3")
    sec16.appendChild(criarh3)
    criarh3.innerText = "Kata 16: "

    let newBestThing = bestThing.substring(22, 38)
    let criarp = document.createElement("p")
    sec16.appendChild(criarp)
    criarp.innerText = newBestThing
    
};

kata16();



function kata17(){
    let sec17 = document.getElementById("kata17")
    let criarh3 = document.createElement("h3")
    sec17.appendChild(criarh3)
    criarh3.innerText = "Kata 17: "

    let removed = lotrCitiesArray.pop(lotrCitiesArray.length -1)
    let criarp = document.createElement("p")
    sec17.appendChild(criarp)
    criarp.innerText =lotrCitiesArray
    return removed
    
};

kata17();



function kata18(){
    let sec18 = document.getElementById("kata18")
    let criarh3 = document.createElement("h3")
    sec18.appendChild(criarh3)
    criarh3.innerText = "Kata 18: "

    lotrCitiesArray.push("Deadest Marshes")
    let criarp = document.createElement("p")
    sec18.appendChild(criarp)
    criarp.innerText = lotrCitiesArray
    
};

kata18();



function kata19(){
    let sec19 = document.getElementById("kata19")
    let criarh3 = document.createElement("h3")
    sec19.appendChild(criarh3)
    criarh3.innerText = "Kata 19: "

    let removed = lotrCitiesArray.shift()
    let criarp = document.createElement("p")
    sec19.appendChild(criarp)
    criarp.innerText = lotrCitiesArray
    
};

kata19();



function kata20(){
    let sec20 = document.getElementById("kata20")
    let criarh3 = document.createElement("h3")
    sec20.appendChild(criarh3)
    criarh3.innerText = "Kata 20: "

    let removed = lotrCitiesArray.unshift("Mordor")
    let criarp = document.createElement("p")
    sec20.appendChild(criarp)
    criarp.innerText = lotrCitiesArray
    
};

kata20();
