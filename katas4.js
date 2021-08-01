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


 function kata4(){
    let criarh3 = document.createElement("h3")
    sec4.appendChild(criarh3)
    criarh3.innerText = "Kata 4: "

    let cities = lotrCitiesArray.join()
    let criarp = document.createElement("p")
    sec4.appendChild(criarp)
    criarp.innerText = cities
 };

 kata4();


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

//katas bonus//
function kata21(){
    let sec21 = document.getElementById("bonus1")
    let criarh3 = document.createElement("h3")
    sec21.appendChild(criarh3)
    criarh3.innerText = "Kata-bônus 1: "

    let newBestThing = bestThing.split(" ")
    let result = 0
    for(let i = 0; i < newBestThing.length; i++){
        if( newBestThing[i] === "only"){
           result += i
        }  else {
            result += 0
        }
    }
    let criarp = document.createElement("p")
    sec21.appendChild(criarp)
    criarp.innerText = result
    
};

kata21();

function kata22(){
    let sec22 = document.getElementById("bonus2")
    let criarh3 = document.createElement("h3")
    sec22.appendChild(criarh3)
    criarh3.innerText = "Kata-bônus 2: "

    let newBestThing = bestThing.split(" ")
    let result = 0
    for(let i = 0; i < newBestThing.length; i++){
        if( newBestThing[i] === newBestThing[newBestThing.length - 1]){    
           result += i
        }  else {
            result += 0
        }
    }
    let criarp = document.createElement("p")
    sec22.appendChild(criarp)
    criarp.innerText = result
    
};

kata22();


function kata23(){
    let sec23 = document.getElementById("bonus3")
    let criarh3 = document.createElement("h3")
    sec23.appendChild(criarh3)
    criarh3.innerText = "Kata-bônus 3: "

    let cities = gotCitiesCSV.split(",")
    let result = []
    let a = []
    for(let i = 0; i < cities.length; i++){
        if( (cities[i].includes("aa") === true) || (cities[i].includes("ee") === true )){    
           result.push(cities[i])
        } if ((cities[i].includes("ii") === true) || (cities[i].includes("oo") === true)){
            result.push(cities[i])
        } if (cities[i].includes("uu") === true){
            result.push(cities[i])
        } else {
            a.push(cities[i])
        }
    }

    let criarp = document.createElement("p")
    sec23.appendChild(criarp)
    criarp.innerText = result
    
}

kata23();


function kata24(){
    let sec24 = document.getElementById("bonus4")
    let criarh3 = document.createElement("h3")
    sec24.appendChild(criarh3)
    criarh3.innerText = "Kata-bônus 4: "

    let result = []
    let a = []
    for(let i = 0; i < lotrCitiesArray.length; i++){
        if(lotrCitiesArray[i].slice(-2) === "or"){    
           result.push(lotrCitiesArray[i])
        }  else {
            a.push(lotrCitiesArray[i])
        }
    }

    let criarp = document.createElement("p")
    sec24.appendChild(criarp)
    criarp.innerText = result
    
}

kata24();



function kata25(){
    let sec25 = document.getElementById("bonus5")
    let criarh3 = document.createElement("h3")
    sec25.appendChild(criarh3)
    criarh3.innerText = "Kata-bônus 5: "

    let result = []
    let a = []
    let cities = bestThing.split(" ")
    for(let i = 0; i < cities.length; i++){
        if(cities[i].slice(0,1) === "b"){    
           result.push(cities[i])
        }  else {
            a.push(cities[i])
        }
    }

    let criarp = document.createElement("p")
    sec25.appendChild(criarp)
    criarp.innerText = result
    
}

kata25();



function kata26(){
    let sec26 = document.getElementById("bonus6")
    let criarh3 = document.createElement("h3")
    sec26.appendChild(criarh3)
    criarh3.innerText = "Kata-bônus 6: "

    let result = ""
    for(let i = 0; i < lotrCitiesArray.length; i++){
        if(lotrCitiesArray[i] === "Mirkwood"){    
           result = "sim"
        }  else {

        }
    }

    let criarp = document.createElement("p")
    sec26.appendChild(criarp)
    criarp.innerText = result
    
}

kata26();


function kata27(){
    let sec27 = document.getElementById("bonus7")
    let criarh3 = document.createElement("h3")
    sec27.appendChild(criarh3)
    criarh3.innerText = "Kata-bônus 7: "

    let result = ""
    let a = ""
    for(let i = 0; i < lotrCitiesArray.length; i++){
        if(lotrCitiesArray[i] === "Hollywood"){    
           result = "sim"
        }  else {
            result = "não"
        }
    }

    let criarp = document.createElement("p")
    sec27.appendChild(criarp)
    criarp.innerText = result
    
}

kata27();


function kata28(){
    let sec28 = document.getElementById("bonus8")
    let criarh3 = document.createElement("h3")
    sec28.appendChild(criarh3)
    criarh3.innerText = "Kata-bônus 8: "

    let result = 0
    for(let i = 0; i < lotrCitiesArray.length; i++){
        if(lotrCitiesArray[i] === "Mirkwood"){    
           result = i
        }  else {
           result += 0
        }
    }

    let criarp = document.createElement("p")
    sec28.appendChild(criarp)
    criarp.innerText = result
    
}

kata28();



function kata29(){
    let sec29 = document.getElementById("bonus9")
    let criarh3 = document.createElement("h3")
    sec29.appendChild(criarh3)
    criarh3.innerText = "Kata-bônus 9: "

    let result = []
    let a = []
    for(let i = 0; i < lotrCitiesArray.length; i++){
        if(lotrCitiesArray[i].includes(" ") === true){    
           result.push(lotrCitiesArray[i])
           let criarp = document.createElement("p")
           sec29.appendChild(criarp)
           criarp.innerText = result
        } else {
            a.push(lotrCitiesArray[i])
        }
    }

    
}

kata29();



function kata30(){
    let sec30 = document.getElementById("bonus10")
    let criarh3 = document.createElement("h3")
    sec30.appendChild(criarh3)
    criarh3.innerText = "Kata-bônus 10: "

    let result = []
    for(let i = lotrCitiesArray.length - 1; i >= 0; i--){ 
        result.push(lotrCitiesArray[i])  
    }

    let criarp = document.createElement("p")
    sec30.appendChild(criarp)
    criarp.innerText = result
    
}

kata30();



function kata31(){
    let sec31 = document.getElementById("bonus11")
    let criarh3 = document.createElement("h3")
    sec31.appendChild(criarh3)
    criarh3.innerText = "Kata-bônus 11: "

    let result = lotrCitiesArray.sort()
    let criarp = document.createElement("p")
    sec31.appendChild(criarp)
    criarp.innerText = result
    
}

kata31();



function kata32(){
    let sec32 = document.getElementById("bonus12")
    let criarh3 = document.createElement("h3")
    sec32.appendChild(criarh3)
    criarh3.innerText = "Kata-bônus 12: "

    let result = lotrCitiesArray.sort(function comparar(a, b){
        if(a.length > b.length){
           return 1
        } if(a.length < b.length){
            return -1
         } if(a.length = b.length){
            return 0
         }
    })
    let criarp = document.createElement("p")
    sec32.appendChild(criarp)
    criarp.innerText = result
    
}

kata32();
