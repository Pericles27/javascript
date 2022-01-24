function multiplo(){
    let mul = parseInt(prompt("Ingresa el multiplo que quieres buscar: "))
    resto = num() % mul;
    if(resto==0)
        return ("si");
    else
        return ("no");
}
function res (){
    let respuesta =(("El numero ingresado "+ multiplo()+ " es multiplo"));
    alert(respuesta)
}
function num(){
    let numero = parseInt(prompt("Ingresa un numero: "))
    return numero
}
function nombre(){
    let nom = prompt("Ingresa tu nombre: ")
    return nom
}
function saludar(x){
    if (x==0){
        alert("Bienvenido al simulador "+nomb)
    } else{
        alert("Hasta luego "+nomb)
    }
}
let nomb = nombre()
saludar(0)
res()
saludar(2)