function multiplicar(x,y){
    let resultado = x*y;
    alert(resultado +"!")
}
function saludar(){
    let nombre=prompt("Dime tu nombre: ")
    alert("Bienvenido, "+nombre+"!")
}
saludar()
for (let i = 1; i<=5 ; i++){
    let numero = parseInt(prompt("Ingresa un numero: "));
    alert("el numero ingresado multiplicado por el numero de repeticion da . . .  ")
    multiplicar(numero,i)
}

let num2= parseInt(prompt("Ingresa un numero menor a 100: "));
while (num2 <100){
    alert("El numero multiplicado por 5 da . . . ")
    multiplicar(num2,5)
    num2= parseInt(prompt("ingresa otro numero menor a 100, para terminar ingresa un numero mayor a 100: "));
}
alert("fin de la actividad")

