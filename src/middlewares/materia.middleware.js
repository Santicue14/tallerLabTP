const { carreras } = require('../controllers/carrera.controller')
const {materias} = require('../controllers/materia.controller')

const hayMaterias = (req,res,next) =>{
    const materiasRecorriendoCarreras = carreras.map(carrera => carrera.materias)
    if(materiasRecorriendoCarreras.length>0){
        next()
    }else{
        return res.status(404).json({mensaje: "No existen materias:("})
    }
}

const existenMateriasEnCarreraById = (req,res,next) =>{
    const idCarrera = req.params.id
    const carrera = carreras.find(carrera => carrera.id == idCarrera)
    const materiasById = carrera.materias
    if(materiasById.length == 0){
        return res.status(400).json({mensaje: `No existen materias para la carrera ${idCarrera}`})
    }
    next()
}

const existeMateriaById = (req,res,next) =>{
    const id = req.params.id
    const materiasRecorriendoCarreras = carreras.flatMap(carrera => carrera.materias)
    const idx = materiasRecorriendoCarreras.findIndex(materia => materia.id == id)
    if(idx<0){
        return res.status(404).json({mensaje: `No existe la materia con el id ${id}`})
    }
    next()
}



module.exports = {hayMaterias,existenMateriasEnCarreraById,existeMateriaById}