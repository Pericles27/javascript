class productos{
    constructor(nombre,precio,cant,codigo) {
        this.nombre =nombre;
        this.precio = precio;
        this.cantidad = cant;
        this.codigo = codigo;
        this.vendido = false;
    }
    iva(){
        this.precio=this.precio *1.21;
    }
}
function nombre(){
    let nom = prompt("Ingresa tu nombre: ")
    return nom
}
function saludar(x){
    if (x==0){
        alert("Bienvenido al simulador "+nomb)
    } else{
        alert("Hasta luego "+nomb+" ¡gracias por tu compra!")
    }
}
function cantidad_cuotas(v) {
    const n = lista_productos.find(n => n.codigo == v)
    return (n.cantidad)
}
function pre(v) {
    const n = lista_productos.find(n => n.codigo == v)
    return (n.precio)
}
function cuo(x){
    alert("Puedes pagar este producto en hasta "+x+" de cuotas sin interes")
    let c =parseInt(prompt("En cuantas cuotas quieres pagar: "))
    if (c>x){
        let c =parseInt(prompt("No tenemos esa cantidad de pagos disponible, ingresa una menor: "))
        return c
    } else if (c<0){
        let c =parseInt(prompt("Ingresa una nueva cantidad, el minimo es un pago: "))
        return c
    } else {
        return c
    }
}
function nombre_producto(v) {
    const n = lista_productos.find(n => n.codigo == v)
    return (n.nombre)
}
function venta(){
    let v =prompt("¿Cual producto deseas comprar?: Ingresa el codigo del producto")
    for (productos of lista_productos){
        productos.iva()
    }
    let p = pre(v)
    alert("El precio del producto con el iva es de: $"+p)
    let x = cantidad_cuotas(v)
    let cuotas = cuo(x)
    let final = dividir(p,cuotas)
    let f = nombre_producto(v)
    alert(nomb+", podrás pagar tu "+f+" en "+cuotas+" cuotas de $"+final)
}
function preg(){
    alert("Encontraras nuestro catalogo en la consola: ")
    for (const producto of lista_productos) {
        console.log(producto.nombre+": $"+producto.precio+" Codigo del producto: "+producto.codigo)
    }
    venta()
}
const dividir = (x,y) => x/y;
const PS5 = new productos("PlayStation 5",150000,12,"PS5")
const XBS = new productos("XBox Series S",140000,9,"XBS")
const DLS = new productos("Dualsense",15000,6,"DLS")
const COD = new productos("Call of duty",12000,12,"COD")
const NSW = new productos("Nintendo Switch",125000,9,"NSW")
const lista_productos=[PS5,XBS,DLS,COD,NSW]
lista_productos.sort(function (a, b) {
    return (a.precio - b.precio)
})
let nomb= nombre()
saludar(0)
preg()
saludar()




