let nom = prompt("ingresa tu nombre: ")
alert("Bienvenido a mi pagina! "+ nom + "!")
let x = prompt("Ahora ingresa un numero entre 1 y 100: ", "1")
let num1 = parseInt(x)
let suma = num1 + 5
let resta = num1 - 5
let mul = num1 * 5
let div = num1 / 5
if (num1 < 100 && num1 > 0){
    alert("En la consola encontraras tu numero sumado, restado, multiplicado y dividido por 5")
    console.log("Tu numero sumandole 5: ", suma)
    console.log("Tu numero restandole 5: ", resta)
    console.log("tu numero multiplicado por 5: ", mul)
    console.log("Tu numero dividido por 5: ", div)
}
else {
    alert("No haz cumplido con la consigna")
}
alert("Hasta luego " + nom +"!")

