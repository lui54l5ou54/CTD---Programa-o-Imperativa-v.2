function soma(a=1,b=3){
    return a+b;
}

console.log(soma());
console.log(soma(3));
console.log(soma(1,2));

let x=5;
let y = (x++) + (++x);
console.log("y= "+y);
x=3;
y=x*(x+1)*x++;
x=5;
y=3;
y*=x+1
console.log("x= "+x);
console.log("y= "+y);


// function soletrar(texto){
//     console.log(texto.replace('-','').toLocaleUpperCasa().split("").join("-"));
// }
// soletrar("digital-house");
// soletrar("ctd");


let valor = 5;

let fatorial =1;

for (let i = valor ; i>1 ; i--) {
    fatorial*=i;
}

console.log("Fatorial = " +fatorial);


for (var i=0; i<50; i+=10){
    console.log(i);
}
console.log(i);


let n1=20;
if (n1>40){
    console.log("n1 maior que 40");
}
//  else{ 
//     console.log("n1 menor que 40");
// }