function productos (nombre,precio,cant,codigo) {
    this.nombre =nombre;
    this.precio = precio;
    this.cantidad = cant;
    this.codigo = codigo
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
function cuo(x){
    alert("Puedes pagar este producto en hasta "+(x).cantidad+" de cuotas sin interes")
    let c =parseInt(prompt("En cuantas cuotas quieres pagar: "))
    if (c>(x).cantidad){
        let c =parseInt(prompt("No tenemos esa cantidad de pagos disponible, ingresa una menor: "))
        return c
    } else if (c<0){
        let c =parseInt(prompt("Ingresa una nueva cantidad, el minimo es un pago: "))
        return c
    } else {
        return c
    }
}
function venta(){
    let v =prompt("¿Cual producto deseas comprar?: Ingresa el codigo del producto")
    let cuotas = cuo(v)
    let final = dividir(v.precio,cuotas)
    alert("Podrás pagar tu "+v.nombre+" en "+cuotas+" de $"+final)
}
function preg(){
    alert("Encontraras nuestro catalogo en la consola: ")
    console.log(PS5.nombre+": "+"$"+PS5.precio+" Codigo del producto: "+PS5.codigo)
    console.log(XBS.nombre+": "+"$"+XBS.precio+" Codigo del producto: "+XBS.codigo)
    console.log(DLS.nombre+": "+"$"+DLS.precio+" Codigo del producto: "+DLS.codigo)
    console.log(COD.nombre+": "+"$"+COD.precio+" Codigo del producto: "+COD.codigo)
    console.log(NSW.nombre+": "+"$"+NSW.precio+" Codigo del producto: "+NSW.codigo)
    venta()
}
const dividir = (x,y) => x/y;
const PS5 = new productos("PlayStation 5",150000,12,"PS5")
const XBS = new productos("XBox Series S",140000,9,"XBS")
const DLS = new productos("Dualsense",15000,6,"DLS")
const COD = new productos("Call of duty",12000,12,"COD")
const NSW = new productos("Nintendo Switch",125000,9,"NSW")
let nomb= nombre()
saludar(0)
preg()



