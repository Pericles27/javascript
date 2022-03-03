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

class Compra{
    constructor(nombre,precio,cant) {
        this.nombre =nombre;
        this.precio = precio;
        this.cuotas = cant;
    }
}

const guardarLocal = (nombre, valor) => { localStorage.setItem(nombre, valor) };

$("#boton").click(function(){
    enviarAlerta(document.getElementById("opcion").value)
});


function enviarAlerta(codigo){
    for (Producto of lista_productos){
        Producto.iva()
    }
    borrar_catalogo()
    $('body').append(`
                        <section id="producto">
                            <h3> ID: ${codigo}</h3>
                            <h3>  Producto: ${nombre_producto(codigo)}</h3>
                            <p> Precio del producto con el IVA incluido:  $${precio_del_producto(codigo)}</p>
                            <p>Cantidad de cuotas sin interes disponibles: ${cantidad_cuotas(codigo)}
                            <br><br>
                        </section>
                        <form class="Form" id="formulario" method="post">
                            <fieldset>
                                <legend>Cuotas</legend>
                                <br><br>
                                <label for="pagos">Ingresá la cantidad de cuotas en las que queres pagar:</label>
                                <input type="number" name="pagos" min="1" max="${cantidad_cuotas(codigo)}" id="pagos">
                                <input type="button" id="boton2" value="Enviar">
                            </fieldset>
                        </form>`);
    $("#boton2").click(function(){
        let produ = document.getElementById("pagos").value
        const comprado = new Compra(nombre_producto(codigo),precio_del_producto(codigo),produ)
        let procesado = JSON.stringify(comprado)
        guardarLocal("carrito",procesado)

        $("#formulario").fadeOut("fast")
        $("#producto").fadeOut("fast")

        $("body").append(`
            <h1>¿Quieres comprar algo más?</h1>`)

        $(".Catalogo").fadeIn("fast")
        $("#contacto").fadeIn("fast")

        let estadoActual = localStorage.getItem("carrito")
        console.log(JSON.parse(estadoActual))
    });
}


function borrar_catalogo(){
    $(".Catalogo").fadeOut("fast")
    $("#contacto").fadeOut("fast");
}








