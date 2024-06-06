const data = require('../../data/data.json')

const carreras = data[0].carreras  //Extraigo del JSON las carreras

const getAllCarreras = (req,res) => {
    res.status(200).json(carreras)
}

const getCarreraById = (req,res) =>{
    const id = req.params.id
    const carrera = carreras.find(carrera => carrera.id == id)
    res.status(200).json(carrera)
}

const createCarrera = (req,res) =>{
    const data = req.body
    let id = 1
    if(carreras.length){
        const listaIds = carreras.map(carrera => carrera.id)
        id = Math.max(...listaIds) + 1
    }
    carreras.push({id,...data})
    return res.status(201).json({mensaje: 'Carrera creada con exito',carrera: carreras[carreras.length-1]})
}

const deleteCarreraById = (req,res) =>{
    const id = req.params.id
    const idxParaBorrar = carreras.findIndex(carrera => carrera.id == id)
    if(idxParaBorrar >= 0){
        const borrada = carreras.splice(idxParaBorrar,1)
        res.status(200).json({mensaje: `La carrera ${borrada[0].nombre} fue borrada con exito`})
    }

}




module.exports = {getAllCarreras,getCarreraById, createCarrera,deleteCarreraById,carreras}