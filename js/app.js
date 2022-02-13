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
function cantidad_cuotas(v) {
    const n = lista_productos.find(n => n.codigo == v)
    return (n.cantidad)
}
function pre(v) {
    const n = lista_productos.find(n => n.codigo == v)
    return (n.precio)
}
function nombre_producto(v) {
    const n = lista_productos.find(n => n.codigo == v)
    return (n.nombre)
}

const dividir = (x,y) => x/y;
const PS5 = new productos("PlayStation 5",150000,12,"PS5")
const XBS = new productos("XBox Series S",140000,9,"XBS")
const DLS = new productos("Dualsense",15000,6,"DLS")
const COD = new productos("Call of duty",12000,12,"COD")
const NSW = new productos("Nintendo Switch",125000,9,"NSW")
const lista_productos=[PS5,XBS,DLS,COD,NSW]

let boton = document.getElementById("boton")
boton.onclick = () =>{enviarAlerta(respuesta())}


let seleccion = document.getElementById("opcion")
seleccion.addEventListener("change",respuesta)

function respuesta(){
    let res = document.getElementById("opcion").value;
    return res
}
function enviarAlerta(codigo){
    for (productos of lista_productos){
        productos.iva()
    }
    borrar()
    crear(codigo)
}
function borrar(){
    let contenido = document.getElementsByClassName("catalogo");
    contenido[0].parentNode.removeChild(contenido[0]);
    let content = document.getElementsByClassName("form");
    content[0].parentNode.removeChild(content[0]);
}
function crear(codigo){
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `<h3> ID: ${codigo}</h3>
                            <h3>  Producto: ${nombre_producto(codigo)}</h3>
                            <p> Precio del producto con el IVA incluido:  $${pre(codigo)}</p>
                            <p>Cantidad de cuotas sin interes disponibles: ${cantidad_cuotas(codigo)}

                            `;
    document.body.appendChild(contenedor);
}





