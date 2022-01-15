for (i = 1; i<=5 ; i++){
    let numero = parseInt(prompt("Ingresa un numero: "));
    let resultado = numero * i;
    alert("el numero ingresado multiplicado por el numero de repeticion da: "+ resultado)
}
let num2= parseInt(prompt("Ingresa un numero menor a 100: "));
while (num2 <100){
    let res = num2*5
    alert("El numero multiplicado por 5: " + res)
    num2= parseInt(prompt("Ingresa un numero menor a 100: "));
}
alert("fin de la actividad")

