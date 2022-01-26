class productos{
    constructor(nombre,precio,cant,codigo) {
        this.nombre =nombre;
        this.precio = precio;
        this.cantidad = cant;
        this.codigo = codigo
    }
    iva(){
        this.precio=this.precio *1.21
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
        alert("Hasta luego "+nomb)
    }
}
function nombre_producto(v){
    if (v =="PS5"){
        let t=  PS5.nombre;
        return t
    } else if (v=="XBS"){
        let t = XBS.nombre
        return t
    }else if (v=="DLS"){
        let t = DLS.nombre
        return t
    } else if (v=="COD") {
        let t = COD.nombre
        return t
    }else if (v=="NSW"){
        let t = NSW.nombre
        return t
    } else {
        alert("El codigo ingresado no corresponde a ninguno de nuestros productos en venta")
    }
}
function cantidad_cuotas(v){
    if (v =="PS5"){
        let t=  PS5.cantidad;
        return t
    } else if (v=="XBS"){
        let t = XBS.cantidad
        return t
    }else if (v=="DLS"){
        let t = DLS.cantidad
        return t
    } else if (v=="COD") {
        let t = COD.cantidad
        return t
    }else if (v=="NSW"){
        let t = NSW.cantidad
        return t
    } else {
        alert("El codigo ingresado no corresponde a ninguno de nuestros productos en venta")
    }
}
function pre(v){
    if (v =="PS5"){
        let t=  PS5.precio;
        return t
    } else if (v=="XBS"){
        let t = XBS.precio
        return t
    }else if (v=="DLS"){
        let t = DLS.precio
        return t
    } else if (v=="COD") {
        let t = COD.precio
        return t
    }else if (v=="NSW"){
        let t = NSW.precio
        return t
    } else {
        alert("El codigo ingresado no corresponde a ninguno de nuestros productos en venta")
    }
}
function precio_iva(v){
    if (v =="PS5"){
        PS5.iva();
    } else if (v=="XBS"){
        XBS.iva()
    }else if (v=="DLS"){
        DLS.iva()
    } else if (v=="COD") {
        COD.iva()
    }else if (v=="NSW"){
        NSW.iva()
    }
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
function venta(){
    let v =prompt("¿Cual producto deseas comprar?: Ingresa el codigo del producto")
    precio_iva(v)
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
saludar()


