const data = require('../../data/data.json')

const materias = data[1].materias


const createMateria = (req,res) =>{
    const dataMateria = req.body
    const idCarrera = req.params.id
    let id = 1
    if(materias.length){
        const ids = materias.map(materia => materia.id)
        id = Math.max(...ids) + 1
    }
    materias.push({id,...dataMateria,idCarrera})
    return res.status(201).json({mensaje: "Materia creada con exito", materia: materias[materias.length-1]})
}

const getMateriasByCarrera = (req,res) =>{
    const idCarrera = req.params.id
    const materiasById = materias.filter(materia => materia.carreraId == idCarrera)
    return res.status(200).json(materiasById)
}

const getAllMaterias = (req,res) =>{
    return res.status(200).json(materias)
}

const getMateriaById = (req,res) =>{
    const id = req.params.id
    const materia = materias.find(materia => materia.id == id)
    res.status(200).json(materia)
}

const deleteMateriaById = (req,res) =>{
    const id = req.params.id
    const idx = materias.findIndex(materia => materia.id == id)
    if(idx >= 0){
        const borrada = materias.splice(idx,1)
        res.status(200).json({mensaje: `La materia ${borrada[0].nombre} fue borrada con exito`})
    }
}

module.exports = {createMateria, getMateriasByCarrera,getAllMaterias,getMateriaById,deleteMateriaById,materias}