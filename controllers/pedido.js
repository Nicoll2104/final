import pedido from "../models/pedido.js";
import { generarJWT } from "../middlewares/validar.js";
import { json } from "body-parser";

const httpPedido ={
    getPedido: async (req,res)=>{
        const pedidos = await pedido.find()
        res.json(pedidos)
    },

    getPedidoid: async (req,res)=>{
        const {id}=req.params
        try{
            const pedidos = await pedido.findById(id)
            res.json({pedidos})
        }catch(error){
            res.status(400),json({error:'no encontramos el id'})
        }
    },

    postPedido: async (req,res)=>{
        try{
        }
    }catch(error){
        res.status(400).json({error:'no encontramos el id'})
    }
}