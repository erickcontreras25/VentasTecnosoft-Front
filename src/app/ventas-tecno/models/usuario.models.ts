export class Usuario {
    idProducto: number = 0;
    nombreProducto: string = '';
    precio: number = 0;

    constructor(id: number, nombre: string, precio: number) {
        this.idProducto = id;
        this.nombreProducto = nombre;
        this.precio = precio;
    }
}