const Joi = require('joi')

/*const {carreras} = require('../controllers/carrera.controller')
const detallesCarrera = []

carreras.forEach(carrera => detallesCarrera.push({id: carrera.id, nombre:carrera.nombre}))
const idCarreras = detallesCarrera.map(carrera => carrera.id)
*/
const materiaSchema = Joi.object().keys(
    {
        "nombre": Joi.string().min(5).max(30).required().messages({
            "string.min": "El nombre de la materia debe tener como minimo {#limit}",
            "string.max": "El nombre de la materia debe tener como maximo {#limit}",
            "string.empty": "El nombre de la materia no puede estar vacio",
            "any.required": "El nombre de la materia es requerido"
        }),
        "anio": Joi.number().integer().min(1).max(5).required().messages({
            "number.base": "El año debe ser un número",
            "number.integer": "El año debe ser un número entero",
            "number.min": "El año debe ser al menos {#limit}",
            "number.max": "El año no puede ser mayor a {#limit}",
            "any.required": "El año es requerido"
          })
    }
)


module.exports = materiaSchema;