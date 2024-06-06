const { Router } = require('express')

//Controladores
const materiaController = require('../controllers/materia.controller')

const carreraMiddleware = require('../middlewares/carrera.middleware')
const materiaMiddleware = require('../middlewares/materia.middleware')

//Validador de Schemas
const { schemaValidator } = require('../middlewares/schemaValidator')

//Schemas
const materiaSchema = require('../schemas/materia.schema')


const route = Router()

route.post('/carreras/:id/materia',
    schemaValidator(materiaSchema),
    carreraMiddleware.existeCarreraById,
    materiaController.createMateria) //Crea un materia dentro de una carrera
route.get('/carreras/:id/materias',
    carreraMiddleware.hayCarreras,
    carreraMiddleware.existeCarreraById,
    materiaMiddleware.existenMateriasEnCarreraById,
    materiaController.getMateriasByCarrera) //Obtener todas la materias de una Carrera
route.get('/materias',
    materiaMiddleware.hayMaterias,
    materiaController.getAllMaterias) //Obtener todas las materias
route.get('/materias/:id',
    materiaMiddleware.existeMateriaById,
    materiaController.getMateriaById) //Obtener una materia en particular
route.delete('/materias/:id',materiaMiddleware.existeMateriaById,materiaController.deleteMateriaById) //Borra una materia en particular


module.exports = route;