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
            const {fecha_creacion, fecha_entrga, subtotal, impuestos, total}=req.body
            const pedidos = new pedido({fecha_creacion, fecha_entrga, subtotal, impuestos, total})
        
            await pedido.save()
            res.json({mensaje: 'Pedido agregado con éxito'})
        }catch(error){
            res.status(400).json({error:'no encontramos el id'})
        }
    },

    putPedido: async (req,res)=>{
        const {id}=req.params;
        const {fecha_creacion, fecha_entrga, subtotal, impuestos, total}= req.body

        try{
            const pedidos = await pedido.findByIdAndUpdate(id,{fecha_creacion, fecha_entrga, subtotal, impuestos, total}, {new: true});

            if(!pedidos){
                return res.status(404).json({mensaje: 'El cliente no existe' })
            }
            res.json({ mensaje: 'Pedido actualizado con éxito', pedidos });
        }catch(error){
            res.status(500).json({ error: 'Error interno del servidor' });
        }
    },

    deletePedido: async (req,res)=>{
        try{
            const {id} = req.params;
            const pedidos = await pedido.findByIdAndDelete(id);

            if(!pedidos){
                return res.status(404).json({ mensaje: 'El pedido no existe' });
            }
            res.json({ mensaje: 'El pedido ha sido eliminado' });
        }catch(error){
            res.status(500).json({ error: 'Ocurrió un error al intentar eliminar el usuario' });
        }
    },

    putInactivar: async (req,res)=>{
        try{
            const {id}=req.params
            const pedidos = await pedido.findByIdAndUpdate(id,{status:0},{new:true})
            res.json({pedidos})
        }catch(error){
            res.status(400).json({error: 'Se produjo un error'})
        }
    },

    putActivar: async (req,res)=>{
        try{
            const {id}=req.params
            const pedidos = await pedido.findByIdAndUpdate(id,{status:1},{new:true})
            res.json({pedidos})
        }catch(error){
            res.status(400).json({error: 'Se produjo un error'})
        }
    },
}

export default httpPedido;