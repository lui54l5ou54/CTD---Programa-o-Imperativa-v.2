// Calculadora - Nível I

function add(x,y){
    return x+y
}

function sub(x,y){
    return x-y
}

function mult(x,y){
    return x*y
}

function div(x,y){
    return x/y
}

// Calculadora - Nível II

console.log ("-------------- Teste de Operações / Calculador --------------")

console.log(add(20,30))

console.log(sub(40,50))

console.log(mult(5,-7))

console.log(div(27,81))

console.log(div(27,0));

console.log(div(0,81));


// Calculadora - Nível III - Funções Extras

function quadradoDoNumero(n1){
    return n1*n1
}

function mediaDeTresNumeros(n1,n2,n3){
    return (n1+n2+n3)/3
}

function porcentagem(n1,n2){
    return (n2/n1)*100 +"%"
}

console.log(porcentagem(100,20));


console.log(12 % 4 ==0);

console.log(12%4);
console.log(12%7);
