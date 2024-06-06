const Joi = require('joi')

const carreraSchema = Joi.object().keys(
    {
        "nombre": Joi.string().min(15).max(70).required().messages({
            "string.min": "El nombre de la carrera debe tener como minimo {#limit}",
            "string.max": "El nombre de la carrera debe tener como maximo {#limit}",
            "string.empty": "El nombre de la carrera no puede estar vacio",
            "any.required": "El nombre de la carrera es requerido"
        }),
        "grado": Joi.string().required().valid("Licenciatura","Tecnicatura","Profesorado").messages({
            "any.required": "El grado es requerido",
            "any.only": "Los grados solo pueden ser Licenciatura, Tecnicatura o Profesorado"
        }),
        "universidad": Joi.string().required().valid("UNPAZ","UNLAM","UNGS","UBA").messages({
            "any.required": "La universidad es requerida",
            "any.only": "Las universidades permitidas son UNPAZ, UNLAM, UNGS y UBA"
        })
    }
)


module.exports = carreraSchema;