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

class Compra{
    constructor(nombre,precio,cant,cuota) {
        this.nombre =nombre;
        this.precio = precio;
        this.cuotas = cant;
        this.valor_cuotas= cuota;
    }
}

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
    $("#boton2").click(function(){
        let produ = document.getElementById("pagos").value
        let valor = dividir(precio_del_producto(codigo),produ)
        let compra = new Compra(nombre_producto(codigo),precio_del_producto(codigo),produ,valor)
        carro.push(compra)
        $("#formulario").remove()
        $("#producto").remove()
        $(".Catalogo").fadeIn("fast")
    });
    $("#atras").click(function(){
        $(".Catalogo").fadeIn("fast")
        $("#formulario").remove()
        $("#producto").remove()
    });
}

let endpoint = "https://api.bluelytics.com.ar/v2/latest"
fetch(endpoint)
    .then(response => response.json())
    .then( data => mostrarData(data))
    .catch( error => console.log(error))


const mostrarData =(data)=> {
    console.log(data)
}

function borrar_catalogo(){
    $(".Catalogo").fadeOut("fast")
}

let carro =[]

const guardarLocal = (nombre, valor) => { localStorage.setItem(nombre, valor) };

$("#boton").click(function(){
    enviarAlerta(document.getElementById("opcion").value)
});

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
    borrar_catalogo()
    for (const compra of carro){
        $('body').append(`
        <section id="producto">
            <h1>Producto: ${compra.nombre}</h1>
            <h3>precio total: ${compra.precio}</h3>
            <h3>cantidad de cuotas: ${compra.cuotas}</h3>
            <h3> valor de cada cuota: ${compra.valor_cuotas}</h3>
        </section>`);
    }
    $('body').append(`
    <input type="button" value="Ir a pagar" id="pagar">
    `);
    $("#pagar").click(function(){
        $("#pagar").remove()
        $('body').append(`
        <form class="Form" id="formulario" method="post">
            <fieldset>
                <label>Ingrese su nombre: </label>
                <input type="text" placeholder="Ingrese su nombre">
                <br><br>
                <label>Numero de documento</label>
                <input type="text" placeholder="ingrese su numero de documento"
                <br><br>
                <label>Numero de tarjeta</label>
                <input type="text" max-len=19 min-len=15 placeholder="Ingrese los numeros del frente de la tarjeta" required>
                <br><br>
                <input type="submit" id="final" value="Enviar">
            </fieldset>
        </form> 
        `); 
        $("#final").submit(function(){
            let guardar = JSON.stringify(carro)
            guardarLocal("carrito",guardar)
        })
    })
})


const dividir = (x,y) => x/y;
const PS5 = new Producto("PlayStation 5",150000,12,"PS5")
const XBS = new Producto("XBox Series S",140000,9,"XBS")
const DLS = new Producto("Dualsense",15000,6,"DLS")
const COD = new Producto("Call of duty",12000,12,"COD")
const NSW = new Producto("Nintendo Switch",125000,9,"NSW")
const lista_productos=[PS5,XBS,DLS,COD,NSW]






