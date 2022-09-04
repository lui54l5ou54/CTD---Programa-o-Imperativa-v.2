//“Lista de Compras”

let listaDeCompras = [ "arroz", "feijão", "macarão", "carne", "ovos", "farinha", "oleo", "leite", "queijo"];


//JOIN

console.log("Seja um array chamado listaDeCompras =" + listaDeCompras);

console.log("O método Join junta os elementos de um array usando um separador que especificamos, como virgula(,) ou traveção(-), ex: ")

let expJoin1 = listaDeCompras.join();

let expJoin2 = listaDeCompras.join(" - ");

console.log("Exemplo do Join usando virgula(,):" + expJoin1);

console.log("Exemplo do Join usando traveção(-):" + expJoin2);


//POP

console.log("Pop elimina o último elemento de um array, e retorna o elemento eliminado")

let expPop = listaDeCompras.pop();

console.log(listaDeCompras);

console.log(expPop);


//PUSH

console.log("O método .push() recebe um ou mais elemeno ao final do array, e retorna o comprimento do novo array, ex:");

let listaDeCompras2 = listaDeCompras.push("queijo", "manteiga");

console.log(listaDeCompras2);
console.log(listaDeCompras);

//SHIFT

console.log("O método .shift() elimina o primeiro elemento do array e retorna o elemento eliminado:");

let shiftEx = listaDeCompras.shift();

console.log("O retorno do shift() será: " +shiftEx);
console.log( "A nova listaDeCompras será: " + listaDeCompras);

//UNSHIFT

console.log("O método .unshift() adiciona um ou mais elementos ao início de um array e retorna o novo comprimento do array");

let unshiftEx = listaDeCompras.unshift("arroz", " papel higiênico");

console.log("A nova listaDeCompras será: " +listaDeCompras);

console.log("O retorno desse método é: " + unshiftEx);
