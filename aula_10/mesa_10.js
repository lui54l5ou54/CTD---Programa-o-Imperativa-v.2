//Arrays e Coleções
// Vamos fortalecer nosso conhecimento sobre arrays explorando diferentes ações. Veremos se eles se comportam como esperamos ou se ocorrem resultados inesperados.
// Em primeiro lugar, vamos praticar as ações mais comuns e necessárias:




// 1. Acessar elementos específicos de um array.

let grupoDeAmigos = [ ["Harry", "Ron", "Hermione"], ["Spiderman", "Hulk", "Ironman"], ["Penélope Glamour", "Pierre Nodoyuna","Patán"] ];
console.log(grupoDeAmigos[2][0]);

// 2. Modificar cada um dos elementos de um array e imprimi-los no console.

let test2 = grupoDeAmigos.join(" #");
console.log(test2);

// 3. Adicionar elementos a um array.

grupoDeAmigos.unshift(["Frodo Bolseiro", "Aragorn", "Peregrin Took", "Samwise", "Merry"]);
console.log(grupoDeAmigos);

// 4. Extrair elementos de um array.

let extracao = grupoDeAmigos.slice(0,2);
console.log(extracao)

// 5. Comparar elementos de um array com os elementos de outro. 

console.log(extracao == grupoDeAmigos);
console.log(extracao =! grupoDeAmigos);



let numbers =[22, 33, 54, 66, 72]
console.log(numbers.length);
//resultado = 5


console.log(grupoDeAmigos[1][0]);
//resultado = spiderman

let str = "uma string qualquer";
let grupoDe4migos = [ [45, 89, 0], ["Digital", "House", true], ["string", "123","false", 54, true, str] ]

console.log(grupoDe4migos[2][grupoDe4migos[2].length - 1]);


//Array Invertido

