const {materias} = require('../controllers/materia.controller')

const hayMaterias = (req,res,next) =>{
    if(materias.length>0){
        next()
    }else{
        return res.status(404).json({mensaje: "No existen materias:("})
    }
}

const existenMateriasEnCarreraById = (req,res,next) =>{
    const idCarrera = req.params.id
    const materiasById = materias.filter(materia => materia.carreraId == idCarrera)
    console.log(materiasById);
    if(materiasById.length == 0){
        return res.status(400).json({mensaje: `No existen materias para la carrera ${idCarrera}`})
    }
    next()
}

const existeMateriaById = (req,res,next) =>{
    const id = req.params.id
    const idx = materias.findIndex(materia => materia.id == id)
    if(idx<0){
        return res.status(404).json({mensaje: `No existe la materia con el id ${id}`})
    }
    next()
}



module.exports = {hayMaterias,existenMateriasEnCarreraById,existeMateriaById}