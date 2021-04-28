import zombieModel from '../models/zombie.js'
import mongoose from 'mongoose'


export const getZombies = async (req,res)=>{
    try {
        const allZombies = await zombieModel.find();
        res.status(200).json(allZombies)
    } catch (error) {
        res.status(404).json({message :error.message})
    }
}

export const updateZombie = async(req,res)=>{
    const { id } = req.params;
   
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('the zombie does not exists')

    const updatedZombie = await zombieModel.findByIdAndUpdate(id, req.body , {new:true})

   res.status(204).json(updatedZombie)
   
}
