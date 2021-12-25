let nom = prompt("ingresa tu nombre: ")
alert("Bienvenido a mi pagina! "+ nom + "!")
var x = prompt("Ahora ingresa un numero: ", "0")
var y = prompt("Ingresa otro: ", "0")
var num1 = parseInt(x)
var num2 = parseInt(y)

var suma = num1 + num2
var resta = num1 - num2
var mul = num1 * num2
var div = num1 / num2
console.log("los numeros sumados dan : " + suma)
console.log("los numeros restados dan: " + resta)
console.log("los numeros multiplicados dan: " + mul)
console.log("los numeros divididos dan: " + div)

alert(nom + " ,en la consola encontraras los resultados")