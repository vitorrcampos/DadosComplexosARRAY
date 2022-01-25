console.log("Crie um array que receba 5 itens e exiba no console.")

 let grandeFamilia = ["Lineu", "Beiçola", "Bebel", "Agostinho", "D.Nenê"]

 console.log(grandeFamilia)





console.log("Utilize um método para adicionar um nome ao inicio do array.")

grandeFamilia.unshift("Florianinho")

console.log(grandeFamilia)





console.log("Utilize um método para remover o último nome do array.")

grandeFamilia.pop()

console.log(grandeFamilia)





console.log("Utilize um método para adicionar dois nomes ao fim do array.")

grandeFamilia.push("Mendonça", "Paulão")

console.log(grandeFamilia)





console.log("Utilize um método para remover o primeiro nome do array.")

grandeFamilia.shift()

console.log(grandeFamilia)





console.log("Utilize um método para organizar em ordem crescente o seguinte array: const numbers = [7,5,6,3,8,9,2,1,4]")

let numbers = [7,5,6,3,8,9,2,1,4]

let numbersEmOrdem = numbers.sort(function (b,a){
    return(b-a)
})

console.log(numbersEmOrdem)
