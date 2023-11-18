const carrito = []

const  cortes = [
    {imagen:"🐮", codigo:1, nombre: "vacio ", precio:2500},
    {imagen:"🍖", codigo:2, nombre: "asado ", precio:1900},
    {imagen:"🥓", codigo:3, nombre: "entraña ", precio:1800},
    {imagen:"🥩", codigo:4, nombre: "bife ", precio:1500},
    {imagen:"🐑", codigo:5, nombre: "cordero ", precio:3000},
]

function buscarCorte (codigo){
    let corteSeleccionado = cortes.find((corte)=> corte.codigo === codigo)
    return corteSeleccionado
}

function comprar (){
    let codigo = prompt("Ingresa el codigo numerico del corte de carne.")
    let corteElegido = buscarCorte(parseInt(codigo))
    
    if (corteElegido !== undefined){
        carrito.push(corteElegido)
        alert(corteElegido.nombre +  " se agrego al carrito.")
        let respuesta = confirm("Desea elegir algun otro corte?")
        if (respuesta === true){
            comprar()
        }else{
            console.clear()
            const shop = new compra(carrito)
            let subTotal= shop.obtenerSubtotal()
            console.table(carrito)
            console.log("💰 El costo de tu compra es: $", subTotal, "\nMuchas gracias por la compra.")
        }

    }else{
        alert("❌Error de codigo de prenda ingresado.\nResfresca para realizar nuevamente la busqueda.")
    }
}





