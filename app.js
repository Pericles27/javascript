function multiplo(valor, multiplo){
    resto = valor % multiplo;
    if(resto==0)
        return true;
    else
        return false;
}
function num(){
    let numero = parseInt(prompt("Ingresa un numero: "))
    return numero
}
function nombre(){
    let nom = prompt("Ingresa tu nombre: ")
    return nom
}
let mul3 =[]
let mul5=[]
let saludo = nombre()
alert("Bienvenido, "+saludo+"!")
for (let i = 0; i<5 ; i++ ){
    let numero = num()
    if (multiplo(numero,3)){
        mul3.push(numero);
    }
    if(multiplo(numero,5)){        
        mul5.push(numero);
    }
}
alert("Los siguientes numeros ingresados son multiplos de 3: " + mul3)
alert("los siguientes numeros ingresados son multiplos de 5: " + mul5)
alert("Hasta luego, "+saludo+"!")