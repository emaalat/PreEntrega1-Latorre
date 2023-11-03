function mostrarPrecio (codigo){
    
    switch(codigo){
        case "asado":
            alert("el corte asado vale $1800")
            break
        case "falda":
            alert("el corte falda vale $1000")
            break
        case "entraña":
            alert("el corte entraña vale $2500")
            break
        case "vacio":
            alert("el corte vacio vale $2000")
            break
        case "achuras":
            alert("Las achuras valen $1500")
            break
        default:
            alert("no entendi tu pedido :(")
    }
}

window.onload = function consultarCorte(){

    let preguntar = true

    while (preguntar){
        let tipoDeCorte = prompt("ingresa el tipo de corte que queres consultar:")
    
        if(tipoDeCorte !== "" && tipoDeCorte !== null){
            mostrarPrecio(tipoDeCorte)
        } else{
            console.warn("Ingresa un tipo de corte valido")
        }
        preguntar = confirm("Deseas conocer el precio de otro corte?")
    }

}