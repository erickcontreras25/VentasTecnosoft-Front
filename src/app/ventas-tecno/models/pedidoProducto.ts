import { Producto } from "./producto.models";

export class PedidoProducto {
    id: number = 0;
    pedidoId: number = 0;
    productoId: number = 0;
    cantidad: number = 0;
    subTotal: number = 0.0;
    producto: Producto = new Producto();

}