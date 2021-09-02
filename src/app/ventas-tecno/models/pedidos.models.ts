import { Cliente } from "./cliente.models";
import { PedidoProducto } from "./pedidoProducto";

export class Pedidos {
    idPedido: number = 0;
    horaConfirmacion: any;
    clienteId: number = 0;
    aprobado: boolean = false;
    pedidoProducto: PedidoProducto[] = [];
    cliente: Cliente = new Cliente();


}