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
function cantidad_cuotas(producto) {
    const cuotas = lista_productos.find(cuotas => cuotas.codigo == producto)
    return (cuotas.cantidad)
}
function pre(producto) {
    const cod = lista_productos.find(cod => cod.codigo == producto)
    return (cod.precio)
}
function nombre_producto(producto) {
    const pro = lista_productos.find(pro => pro.codigo == producto)
    return (pro.nombre)
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
                            <br><br>
                            <form class="form">
                                <label for="pagos">Ingresá la cantidad de cuotas en las que queres pagar:</label>
                                <input type="number" name="pagos" min="1" max="${cantidad_cuotas(codigo)}">
                                <button type="button" value="Enviar" id="boton2">Enviar</button>
                            </form>
                            `;
    document.body.appendChild(contenedor);
}

function finalizar(){
    borrar()
}



