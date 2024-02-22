import { OrdersModel } from "../models/ordersModel.js";

const OrdersController = {
    getAllOrders: async (req, res) => {
        try{
            const allOrders = await OrdersModel.getAllOrders();
            res.json(allOrders);
        } catch (error) {
            res.status(500).json({ error: "Ocurrió un error al obtener todas las ordenes"});
        }
    },
    getOrders: async (req, res) => {
        try {
            const order = await OrdersModel.getOrder(req.params.orderId);
            if (order.length >0){
                res.json(order[0])
            } else {
                res.status(404).send("Order no encontrada");
            }
        } catch (error) {
            console.error("Error al obetener la orden:", error);
            res.status(500).send("Ocurrio un erorr ak obtener la categoria");
        }
    },
    createNewOrder: async (req, res) => {
        const {} = ;
        if (! || !) {
            return 
        }
    }
}