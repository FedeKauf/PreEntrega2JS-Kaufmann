class Producto {
    nombre;
    precio;
    cantidad;
    marca;
    talle;

constructor (nombre,precio,cantidad,marca,talle){
    this.nombre = nombre
    this.precio = precio
    this.cantidad = cantidad
    this.marca = marca
    this.talle = talle
}

    subTotal = () => {
        return this.precio*this.cantidad;
    }
}