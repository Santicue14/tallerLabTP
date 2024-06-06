const {carreras} = require('../controllers/carrera.controller')

const hayCarreras = (req,res,next) =>{
    if(carreras.length>0){
        next()
    }else{
        return res.status(404).json({mensaje: "No existen carreras :("})
    }
}

const existeCarreraById = (req,res,next) =>{
    const id = req.params.id    
    const idx = carreras.findIndex(c => c.id == id);
    if(idx<0){
        return res.status(404).json({
            error: `No se encuentra la carrera ${id}`
        })
    }
    next()
}


module.exports = {hayCarreras,existeCarreraById}