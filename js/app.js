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
    constructor(nro_compra,nombre,precio,cant,cuota) {
        this.nro_compra = nro_compra;
        this.nombre =nombre;
        this.precio = precio;
        this.cuotas = cant;
        this.valor_cuotas= cuota;
    }
}

let carro =[]

const guardarLocal = (nombre, valor) => { sessionStorage.setItem(nombre, valor) };

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
                                <input type="button" id="boton2" value="Agregar al carrito">
                                <input type="button" id="atras" value="Atras">
                            </fieldset>
                        </form>`);

    $("#atras").click(function(){
        $(".Catalogo").fadeIn("fast")
        $("#formulario").remove()
        $("#producto").remove()
    });
    $("#boton2").click(function(nom){
        let a = 1
        let produ = document.getElementById("pagos").value
        let valor = precio_del_producto(codigo)/produ
        let compra = new Compra(a,nombre_producto(codigo),precio_del_producto(codigo),produ,valor)
        carro.push(compra)
        a = a +1
        $("#formulario").remove()
        $("#producto").remove()
        $(".Catalogo").fadeIn("fast")
    });
}


function borrar_catalogo(){
    $(".Catalogo").fadeOut("fast")
}

$("#PS5").click(function(){
    enviarAlerta("PS5")
});

$("#XBS").click(function(){
    enviarAlerta("XBS")
});

$("#NSW").click(function(){
    enviarAlerta("NSW")
});

$("#DLS").click(function(){
    enviarAlerta("DLS")
});

$("#COD").click(function(){
    enviarAlerta("COD")
});

$("#carro").click(function(){
    console.log(carro)
})



