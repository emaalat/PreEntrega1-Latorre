class compra{
    constructor(carritoDeCompras){
        this.carrito = carritoDeCompras
    }
    obtenerSubtotal(){
        if(this.carrito.length > 0){
            return this.carrito.reduce((acumulador, corte)=> acumulador + corte.precio, 0)
        }
    }
}