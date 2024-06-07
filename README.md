# Trabajo final Santicue14 - Taller de Programación 2024 - UNPAZ
## Lista de integrantes: 
- Santiago Ariel Baldini Cuevas

### ¿Como utilizar?
1. Ejecutar en tu terminal **npm install**
2. Ejecutar en tu terminal **npm run dev**
3. Listo! Prueba las siguientes rutas <img src="https://www.svgrepo.com/show/295074/arrow-down-download.svg" alt="Flecha abajo" width="20px" style="position: absolute; top: 1px; padding-left:5px">

## RUTAS DE LA API
    Estas son las siguientes rutas realizadas, cada uno con sus correspondientes Status code, middlewares, etc.

|Verbo|Recurso|Status code|Descripción|
|-----|-------|-----------|-----------|
|Get|/carreras|200|Obtener todas la carreras|
|Get|/carreras/:id|200, 404|Obtener una carrera en particular|
|Post|/carreras|201 , 400|Crear una Carrera|
|Delete|/carreras/:id|200, 404|Borra una carrera en particular|
|Post|/carreras/:id/materia|201, 404, 400|Crea un materia dentro de una carrera|
|Get|/carreras/:id/materias|200, 404| Obtener todas la materias de una Carrera
|Get|/materias|200|Obtener todas las materias|
|Get|/materias/:id|200, 404|Obtener una materia en particular|
|Delete|/materias/:id|200, 404|Borra una materia en particular|

### Dependencias utilizadas
- Joi
- Express
- Dotenv

## Modelo implementado

![DIAGRAMA](DER.png)

### Descripción del modelo DER
- Una **Carrera** puede tener muchas materias.
- Una **Materia** puede solo puede estar en una carrera

### Ejemplo del JSON de Datos
#### JSON GENERAL [ ]
- Carreras: 

        {
    
        {id, nombre, grado, universidad, 
        materias
                [
                {id, nombre, anio, carreraId},
                {id, nombre, anio, carreraId}
                ]
        },

        {id, nombre, grado, universidad, 
        materias 
                [
                {id, nombre, anio, carreraId},
                {id, nombre, anio, carreraId}
                ]
        }
        }

### Schemas de validacion para metodos POST
    Carrera: {nombre, grado, universidad} 
    Materia: {nombre, anio}
