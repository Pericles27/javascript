class Producto{
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

function precio_del_producto(producto) {
    const cod = lista_productos.find(cod => cod.codigo == producto)
    return (cod.precio)
}

function nombre_producto(producto) {
    const prod = lista_productos.find(prod => prod.codigo == producto)
    return (prod.nombre)
}

const dividir = (x,y) => x/y;
const PS5 = new Producto("PlayStation 5",150000,12,"PS5")
const XBS = new Producto("XBox Series S",140000,9,"XBS")
const DLS = new Producto("Dualsense",15000,6,"DLS")
const COD = new Producto("Call of duty",12000,12,"COD")
const NSW = new Producto("Nintendo Switch",125000,9,"NSW")
const lista_productos=[PS5,XBS,DLS,COD,NSW]


let boton = document.getElementById("boton")
boton.onclick = () =>{enviarAlerta(document.getElementById("opcion").value)}

function enviarAlerta(codigo){
    for (Producto of lista_productos){
        Producto.iva()
    }
    borrar_catalogo()
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `<h3> ID: ${codigo}</h3>
                            <h3>  Producto: ${nombre_producto(codigo)}</h3>
                            <p> Precio del producto con el IVA incluido:  $${precio_del_producto(codigo)}</p>
                            <p>Cantidad de cuotas sin interes disponibles: ${cantidad_cuotas(codigo)}
                            <br><br>
                            <form class="Form">
                                <label for="pagos">Ingresá la cantidad de cuotas en las que queres pagar:</label>
                                <input type="number" name="pagos" min="1" max="${cantidad_cuotas(codigo)}" id="pagos">
                                <button type="submit">Enviar</button> 
                            </form>
                            `;
    document.body.appendChild(contenedor);
}

function borrar_catalogo(){
    let contenido = document.getElementsByClassName("Catalogo");
    contenido[0].parentNode.removeChild(contenido[0]);
    let content = document.getElementsByClassName("Form");
    content[0].parentNode.removeChild(content[0]);
}





