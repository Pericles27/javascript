const multiplicar = (x,y) => x*y;
const dividir = (x,y) => x/y;
function saludar(){
    let nombre=prompt("Dime tu nombre: ")
    alert("Bienvenido al simulador de cuotas, "+nombre+"!")
}
saludar()
let a = prompt("¿Iniciamos?: ")
while (a == "si"){
    let valor = parseInt(prompt("Ingresa el valor del producto: "))
    let cuotas = parseInt(prompt("Ingresa el numero de cuotas: "))
    alert("serán "+cuotas+" cuotas de $"+dividir(valor,cuotas))
    a = prompt("¿Seguimos?: si/no")
}
alert("fin de la actividad")

