const {Router} = require('express')

//Controladores
const carreraController = require('../controllers/carrera.controller')
const carreraMiddleware = require('../middlewares/carrera.middleware')

//Validador de Schemas
const {schemaValidator} = require('../middlewares/schemaValidator')

//Schemas
const carreraSchema = require('../schemas/carrera.schema')


const route = Router()

route.get('/carreras',carreraMiddleware.hayCarreras,carreraController.getAllCarreras) //Obtener todas las carreras
route.get('/carreras/:id',carreraMiddleware.hayCarreras,carreraMiddleware.existeCarreraById,carreraController.getCarreraById) //Obtener una carrera en particular
route.post('/carreras',schemaValidator(carreraSchema),carreraController.createCarrera) //Crear una Carrera
route.delete('/carreras/:id',carreraMiddleware.hayCarreras,carreraMiddleware.existeCarreraById,carreraController.deleteCarreraById) //Borra una carrera en particular


module.exports = route;