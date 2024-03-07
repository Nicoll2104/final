import mongoose from "mongoose";

const pedido = new mongoose.Schema(
    {
        fecha_creacion:{type:Date, required: true,},
        fecha_entrega:{type:Date, required: true,},
        subtotal:{type:String, required: true,},
        impuestos:{type:String, required: true,},
        total:{type:String, required: true,},
        createdAt: { type: Date, default: Date.now },
        status:{type:String,default:1}
    })

export default mongoose.model("Pedido", pedido)