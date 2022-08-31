

function microondas(t, p){

    switch (p){
        case "Pipoca":
            if(t==10){
                console.log("Prato pronto, bom apetite!!!")
            } else if(t<10){
                console.log("tempo insuficiente")
            } else if(t >= 2 * 10 && t < 3* 10){
                console.log("A comida torrou!")
            } else{
                console.log("kabum!!!")
            }    
            break;
    
        case "Macarrão":
            if(t==8){
                console.log("Prato pronto, bom apetite!!!")
            } else if(t<8){
                console.log("tempo insuficiente")
            } else if(t >= 2 * 8 && t < 3* 8){
                console.log("A comida torrou!")
            } else{
                console.log("kabum!!!")
            }
            break;
    
        case "Carne":
            if(t==15){
                console.log("Prato pronto, bom apetite!!!")
            } else if(t<15){
                console.log("tempo insuficiente")
            } else if(t >= 2 * 15 && t < 3* 15){
                console.log("A comida torrou!")
            } else{
                console.log("kabum!!!")
            }
            break;
    
        case "Feijão":
            if(t==12){
                console.log("Prato pronto, bom apetite!!!")
            } else if(t<12){
                console.log("tempo insuficiente")
            } else if(t >= 2 * 12 && t< 3* 12){
                console.log("A comida torrou!")
            } else{
                console.log("kabum!!!")
            }
            break;
    
        case "Brigadeiro":
            if(t==8){
                console.log("Prato pronto, bom apetite!!!")
            } else if(t<8){
                console.log("tempo insuficiente")
            } else if(t >= 2 * 8 && t< 3* 8){
                console.log("A comida torrou!")
            } else{
                console.log("kabum!!!")
            }
        break;
    
        default:
            console.log("Prato inexistente");
    }
}

microondas(t, p);




// let prato = "Feijão";
// let tempo = "25";


// let prato = "Carne";
// let tempo = "52";