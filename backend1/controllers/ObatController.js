import Obat from "../models/ObatModel.js";

export const getObat = async(req, res) =>{
    try {
        const response = await Obat.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getObatById = async(req, res) =>{
    try {
        const response = await Obat.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createObat = async(req, res) =>{
    try {
        await Obat.create(req.body);
        res.status(201).json({msg: "Obat Created"});
    } catch (error) {
        console.log(error.message);
    }
}

export const upateObat = async(req, res) =>{
    try {
        await Obat.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Obat Updated"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteObat = async(req, res) =>{
    try {
        await Obat.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Obat Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}