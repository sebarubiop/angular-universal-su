import { Tarea } from '../models/tarea'
var _lodash = require('lodash')
// const fs = require('fs')

/* ===============================================================
    GET ALL TAREAS
=============================================================== */
export async function allTareas(req, res) {
    // Search database for all tarea posts
    try {
        const tareas = await Tarea.find()
            .populate('createdBy', 'name image reviewCounter completationRate')
            .populate({ path: 'ofertas', populate: { path: 'createdBy', select: 'name image reviewCounter completationRate' } })
            .sort({ '_id': -1 }); // Sort tareas from newest to oldest
        if (tareas)
            res.json({ success: true, value: tareas })
        else
            res.json({ success: false, message: 'NO se encuentran tareas.' })
    } catch (error) {
        res.json({ success: false, message: error })
    }
};

/* ===============================================================
   GET SINGLE TAREA
=============================================================== */
export async function singleTarea(req, res) {
    if (!req.params.id) {
        res.json({ success: false, message: 'ID no fue provisto.' }); // Return error message
    } else {
        try {
            const tarea = await Tarea.findOne({ _id: req.params.id })
                .populate('createdBy', 'name image reviewCounter completationRate')
                .populate({ path: 'ofertas', populate: { path: 'createdBy', select: 'name image reviewCounter completationRate' } })
            if (tarea) {
                res.json({ success: true, value: tarea })
            } else {
                res.json({ success: false, message: 'No se ha encontrado tarea.' })
            }
        } catch (error) {
            res.json({ success: false, message: error })
        }
    }
}

export async function getTareasByUser(req, res) {
    if (!req.params.userId) {
        res.json({ success: false, message: 'User ID no fue provisto.' }); // Return error message
    } else {
        try {
            const tareas = await Tarea.find({ createdBy: req.params.userId })
                .populate('createdBy', 'name image reviewCounter completationRate')
                .populate({ path: 'ofertas', populate: { path: 'createdBy', select: 'name image reviewCounter completationRate' } })
                .sort({ '_id': -1 }); // Sort tareas from newest to oldest
            if (tareas) {
                res.json({ success: true, value: tareas })
            } else {
                res.json({ success: false, message: 'No se ha encontrado tareas.' })
            }
        } catch (error) {
            res.json({ success: false, message: error })
        }
    }
}

// TAREA MODEL
// categoria: { type: String, required: true, validate: categoriaValidators },
//   titulo: { type: String, required: true, validate: tituloValidators },  
//   descripcion: { type: String, validate: descripcionValidators },
//   medio: { type: String, validate: medioValidators},
//   comuna: { type: String, validate: comunaValidators },
//   fecha: { type: Date, validate: fechaValidators },
//   hora: { type: String, validate: horaValidators },
//   minuto: { type: String, validate: minutoValidators },
//   cantidad: { type: Number, validate: cantidadValidators },
//   presupuesto: { type: Number, required: true, validate: presupuestoValidators },
//   createdAt: { type: Date, default: Date.now() },
//   createdBy: { type: String },
//   status: { type: String, validate: statusValidators },

export async function publicarTarea(req, res) {

    if (!req.body.titulo)
        res.json({ success: false, message: 'Debe proporcionar titulo' }); // Return error
    else if (!req.body.descripcion)
        res.json({ success: false, message: 'Debe proporcionar descripcion' }); // Return error
    else if (!req.body.createdBy)
        res.json({ success: false, message: 'Debe proporcionar createdBy' }); // Return error
    else {
        // Create new tarea object and apply tarea input
        const tarea = new Tarea({
            // categoria: req.body.categoria,
            titulo: req.body.titulo,
            descripcion: req.body.descripcion,
            medio: req.body.medio,
            comuna: req.body.comuna,
            region: req.body.region,
            region_numero: req.body.region_numero,
            fecha: req.body.fecha,
            hora: req.body.hora,
            minuto: req.body.minuto,
            meridian: req.body.meridian,
            cantidad: req.body.cantidad,
            presupuesto: req.body.presupuesto,
            createdBy: req.body.createdBy._id,
            status: 1,// No asignada
        });
        // Save tarea to database
        tarea.save((err) => {
            // Check if error occured
            if (err) {
                // Check if error is an error indicating duplicate account
                if (err.code === 11000)
                    res.json({ success: false, message: 'Tarea ya existe' }); // Return error
                else if (err.errors) {
                    if (err.errors.titulo)
                        res.json({ success: false, message: err.errors.titulo.message }); // Return error
                    else if (err.errors.descripcion)
                        res.json({ success: false, message: err.errors.descripcion.message }); // Return error
                    else if (err.errors.medio)
                        res.json({ success: false, message: err.errors.medio.message }); // Return error
                    else if (err.errors.comuna)
                        res.json({ success: false, message: err.errors.comuna.message }); // Return error
                    else if (err.errors.cantidad)
                        res.json({ success: false, message: err.errors.cantidad.message }); // Return error
                    else if (err.errors.presupuesto)
                        res.json({ success: false, message: err.errors.presupuesto.message }); // Return error
                    else if (err.errors.createdBy)
                        res.json({ success: false, message: err.errors.createdBy.message }); // Return error
                    else if (err.errors.status)
                        res.json({ success: false, message: err.errors.status.message }); // Return error
                    else
                        res.json({ success: false, message: err }); // Return any other error not already covered

                } else {
                    res.json({ success: false, message: 'No se pudo guardar el usuario. Error: ' + err }); // Return error if not related to validation

                }

            } else {
                res.json({
                    success: true,
                    message: 'Tarea creada!',
                    value: tarea
                }); // Return success
            }
        });
    }

}

export async function updateTarea(req, res) {
    // Check if id is present in parameters
    if (!req.params.id) {
        res.json({ success: false, message: 'ID no fue provisto.' }); // Return error message
    } else if (req.body.ofertas) {
        const reqNoOfertas = _lodash.omit(req.body, ['ofertas'])
        Tarea.updateOne({ _id: req.params.id }, reqNoOfertas, (err, raw) => {
            if (err) {
                res.json({ success: false, message: 'Update No Oferta Error: ' + err }); // Return error message
            } else {
                // validate oferta id (req.body.ofertas[0]._id) -- TODO
                Tarea.updateOne({ _id: req.params.id }, { $push: { ofertas: req.body.ofertas } }, (err, raw) => {
                    if (err) {
                        res.json({ success: false, message: 'Update Oferta Error: ' + err }); // Return error message
                    } else {
                        res.json({ success: true, value: raw }); // Return success
                    }
                })
            }
        })
    } else {
        Tarea.updateOne({ _id: req.params.id }, req.body, (err, raw) => {
            if (err) {
                res.json({ success: false, message: 'Update Error: ' + err }); // Return error message
            } else {
                res.json({ success: true, value: raw }); // Return success
            }
        })
    }
}


// exports.allTareas = function (req, res) {
//     let tareas = [
//         {
//             "id": 1,
//             "cliente": "Cliente 1",
//             "categoria": "Tercera edad",
//             "titulo": "Cuidar anciano en su casa",
//             "fecha": "4/13/18",
//             "lugar": "Santiago, Metropolitana",
//             "precio": 20000,
//             "foto": "https://mdbootstrap.com/img/Photos/Avatars/img%20(26).jpg",
//             "status": "Disponible",
//             "profesional": 2,
//             "ofertas": 5,
//             "medio": "presencial"
//         },
//         {
//             "id": 2,
//             "cliente": "Cliente 2",
//             "categoria": "Niños y bebes",
//             "titulo": "Necesito babysitter con experiencia",
//             "fecha": "6/16/18",
//             "lugar": "Valparaiso, Valparaiso",
//             "precio": 50000,
//             "foto": "https://mdbootstrap.com/img/Photos/Avatars/img%20(27).jpg",
//             "status": "Asignado",
//             "profesional": 1,
//             "ofertas": 3,
//             "medio": "online"
//         },
//         {
//             "id": 3,
//             "cliente": "Cliente 3",
//             "categoria": "Discapacitados",
//             "titulo": "Chofer para las terapias de mi hijo",
//             "fecha": "3/27/18",
//             "lugar": "La Serena, Coquimbo",
//             "precio": 100000,
//             "foto": "https://mdbootstrap.com/img/Photos/Avatars/img%20(31).jpg",
//             "status": "Disponible",
//             "profesional": 1,
//             "ofertas": 4,
//             "medio": "presencial"
//         },
//         {
//             "id": 4,
//             "cliente": "Cliente 4",
//             "categoria": "Niños y bebes",
//             "titulo": "Animacion de cumpleaños para niño de 5 años",
//             "fecha": "6/07/18",
//             "lugar": "Talca, Maule",
//             "precio": 60000,
//             "foto": "assets/img/avatar.jpg",
//             "status": "Asignado",
//             "profesional": 3,
//             "ofertas": 7,
//             "medio": "presencial"
//         },
//         {
//             "id": 5,
//             "cliente": "Cliente 5",
//             "categoria": "Otros Servicios",
//             "titulo": "Se necesita barman/woman para evento privado",
//             "fecha": "5/3/18",
//             "lugar": "Valdivia, Los Rios",
//             "precio": 230000,
//             "foto": "https://mdbootstrap.com/img/Photos/Avatars/img%20(4).jpg",
//             "status": "Disponible",
//             "profesional": 1,
//             "ofertas": 10,
//             "medio": "presencial"
//         },
//         {
//             "id": 7,
//             "cliente": "Cliente 7",
//             "categoria": "Otros Servicios",
//             "titulo": "Titulo de servicio 7",
//             "fecha": "7/4/18",
//             "lugar": "Providencia, Santiago",
//             "precio": 99999,
//             "foto": "https://mdbootstrap.com/img/Photos/Avatars/avatar-13.jpg",
//             "status": "Disponible",
//             "profesional": 9,
//             "ofertas": 99,
//             "medio": "presencial"
//         },
//         {
//             "id": 6,
//             "cliente": "Cliente 6",
//             "categoria": "Otros Servicios",
//             "titulo": "Titulo de servicio 6",
//             "fecha": "6/4/18",
//             "lugar": "Providencia, Santiago",
//             "precio": 99999,
//             "foto": "https://mdbootstrap.com/img/Photos/Avatars/avatar-13.jpg",
//             "status": "Disponible",
//             "profesional": 9,
//             "ofertas": 99,
//             "medio": "presencial"
//         },
//         {
//             "id": 8,
//             "cliente": "Cliente 8",
//             "categoria": "Otros Servicios",
//             "titulo": "Titulo de servicio 8",
//             "fecha": "6/4/18",
//             "lugar": "Providencia, Santiago",
//             "precio": 99999,
//             "foto": "https://mdbootstrap.com/img/Photos/Avatars/avatar-13.jpg",
//             "status": "Asignado",
//             "profesional": 9,
//             "ofertas": 99,
//             "medio": "online"
//         },
//         {
//             "id": 35,
//             "cliente": "Cliente 6",
//             "categoria": "Otros Servicios",
//             "titulo": "Titulo de servicio 6",
//             "fecha": "6/4/18",
//             "lugar": "Providencia, Santiago",
//             "precio": 99999,
//             "foto": "https://mdbootstrap.com/img/Photos/Avatars/avatar-13.jpg",
//             "status": "Disponible",
//             "profesional": 9,
//             "ofertas": 99,
//             "medio": "presencial"
//         },
//         {
//             "id": 9,
//             "cliente": "Cliente 9",
//             "categoria": "Otros Servicios",
//             "titulo": "Titulo de servicio 9",
//             "fecha": "6/4/18",
//             "lugar": "Providencia, Santiago",
//             "precio": 99999,
//             "foto": "https://mdbootstrap.com/img/Photos/Avatars/avatar-13.jpg",
//             "status": "Asignado",
//             "profesional": 9,
//             "ofertas": 99,
//             "medio": "online"
//         },
//         {
//             "id": 36,
//             "cliente": "Cliente 6",
//             "categoria": "Otros Servicios",
//             "titulo": "Titulo de servicio 6",
//             "fecha": "6/4/18",
//             "lugar": "Providencia, Santiago",
//             "precio": 99999,
//             "foto": "https://mdbootstrap.com/img/Photos/Avatars/avatar-13.jpg",
//             "status": "Asignado",
//             "profesional": 9,
//             "ofertas": 99,
//             "medio": "presencial"
//         },
//         {
//             "id": 10,
//             "cliente": "Cliente 10",
//             "categoria": "Otros Servicios",
//             "titulo": "Titulo de servicio 10",
//             "fecha": "1/4/18",
//             "lugar": "Providencia, Santiago",
//             "precio": 99999,
//             "foto": "https://mdbootstrap.com/img/Photos/Avatars/avatar-13.jpg",
//             "status": "Disponible",
//             "profesional": 9,
//             "ofertas": 99,
//             "medio": "presencial"
//         },
//         {
//             "id": 11,
//             "cliente": "Cliente 11",
//             "categoria": "Otros Servicios",
//             "titulo": "Titulo de servicio 11",
//             "fecha": "6/4/18",
//             "lugar": "Providencia, Santiago",
//             "precio": 99999,
//             "foto": "https://mdbootstrap.com/img/Photos/Avatars/avatar-13.jpg",
//             "status": "Disponible",
//             "profesional": 9,
//             "ofertas": 99,
//             "medio": "presencial"
//         },
//         {
//             "id": 12,
//             "cliente": "Cliente 12",
//             "categoria": "Otros Servicios",
//             "titulo": "Titulo de servicio 12",
//             "fecha": "6/4/18",
//             "lugar": "Providencia, Santiago",
//             "precio": 99999,
//             "foto": "https://mdbootstrap.com/img/Photos/Avatars/avatar-13.jpg",
//             "status": "Asignado",
//             "profesional": 9,
//             "ofertas": 99,
//             "medio": "online"
//         },
//         {
//             "id": 13,
//             "cliente": "Cliente 13",
//             "categoria": "Otros Servicios",
//             "titulo": "Titulo de servicio 13",
//             "fecha": "6/4/18",
//             "lugar": "Providencia, Santiago",
//             "precio": 99999,
//             "foto": "https://mdbootstrap.com/img/Photos/Avatars/avatar-13.jpg",
//             "status": "Disponible",
//             "profesional": 9,
//             "ofertas": 99,
//             "medio": "presencial"
//         },
//         {
//             "id": 37,
//             "cliente": "Cliente 6",
//             "categoria": "Otros Servicios",
//             "titulo": "Titulo de servicio 6",
//             "fecha": "6/4/18",
//             "lugar": "Providencia, Santiago",
//             "precio": 99999,
//             "foto": "https://mdbootstrap.com/img/Photos/Avatars/avatar-13.jpg",
//             "status": "Disponible",
//             "profesional": 9,
//             "ofertas": 99,
//             "medio": "presencial"
//         },
//         {
//             "id": 38,
//             "cliente": "Cliente 6",
//             "categoria": "Otros Servicios",
//             "titulo": "Titulo de servicio 6",
//             "fecha": "6/4/18",
//             "lugar": "Providencia, Santiago",
//             "precio": 99999,
//             "foto": "https://mdbootstrap.com/img/Photos/Avatars/avatar-13.jpg",
//             "status": "Disponible",
//             "profesional": 9,
//             "ofertas": 99,
//             "medio": "online"
//         },
//         {
//             "id": 14,
//             "cliente": "Cliente 14",
//             "categoria": "Otros Servicios",
//             "titulo": "Titulo de servicio 14",
//             "fecha": "6/4/18",
//             "lugar": "Providencia, Santiago",
//             "precio": 99999,
//             "foto": "https://mdbootstrap.com/img/Photos/Avatars/avatar-13.jpg",
//             "status": "Disponible",
//             "profesional": 9,
//             "ofertas": 99,
//             "medio": "presencial"
//         },
//         {
//             "id": 15,
//             "cliente": "Cliente 15",
//             "categoria": "Otros Servicios",
//             "titulo": "Titulo de servicio 15",
//             "fecha": "6/4/18",
//             "lugar": "Providencia, Santiago",
//             "precio": 99999,
//             "foto": "https://mdbootstrap.com/img/Photos/Avatars/avatar-13.jpg",
//             "status": "Asignado",
//             "profesional": 9,
//             "ofertas": 99,
//             "medio": "presencial"
//         },
//         {
//             "id": 16,
//             "cliente": "Cliente 16",
//             "categoria": "Otros Servicios",
//             "titulo": "Titulo de servicio 16",
//             "fecha": "6/4/18",
//             "lugar": "Providencia, Santiago",
//             "precio": 99999,
//             "foto": "https://mdbootstrap.com/img/Photos/Avatars/avatar-13.jpg",
//             "status": "Disponible",
//             "profesional": 9,
//             "ofertas": 99,
//             "medio": "online"
//         },
//         {
//             "id": 17,
//             "cliente": "Cliente 17",
//             "categoria": "Otros Servicios",
//             "titulo": "Titulo de servicio 17",
//             "fecha": "6/4/18",
//             "lugar": "Providencia, Santiago",
//             "precio": 99999,
//             "foto": "https://mdbootstrap.com/img/Photos/Avatars/avatar-13.jpg",
//             "status": "Disponible",
//             "profesional": 9,
//             "ofertas": 99,
//             "medio": "presencial"
//         },
//         {
//             "id": 18,
//             "cliente": "Cliente 18",
//             "categoria": "Otros Servicios",
//             "titulo": "Titulo de servicio 18",
//             "fecha": "6/4/18",
//             "lugar": "Providencia, Santiago",
//             "precio": 99999,
//             "foto": "https://mdbootstrap.com/img/Photos/Avatars/avatar-13.jpg",
//             "status": "Disponible",
//             "profesional": 9,
//             "ofertas": 99,
//             "medio": "presencial"
//         },
//         {
//             "id": 19,
//             "cliente": "Cliente 19",
//             "categoria": "Otros Servicios",
//             "titulo": "Titulo de servicio 19",
//             "fecha": "6/4/18",
//             "lugar": "Providencia, Santiago",
//             "precio": 99999,
//             "foto": "https://mdbootstrap.com/img/Photos/Avatars/avatar-13.jpg",
//             "status": "Asignado",
//             "profesional": 9,
//             "ofertas": 99,
//             "medio": "online"
//         },
//         {
//             "id": 20,
//             "cliente": "Cliente 20",
//             "categoria": "Otros Servicios",
//             "titulo": "Titulo de servicio 20",
//             "fecha": "6/4/18",
//             "lugar": "Providencia, Santiago",
//             "precio": 99999,
//             "foto": "https://mdbootstrap.com/img/Photos/Avatars/avatar-13.jpg",
//             "status": "Disponible",
//             "profesional": 9,
//             "ofertas": 99,
//             "medio": "presencial"
//         },
//         {
//             "id": 21,
//             "cliente": "Cliente 21",
//             "categoria": "Otros Servicios",
//             "titulo": "Titulo de servicio 21",
//             "fecha": "6/4/18",
//             "lugar": "Providencia, Santiago",
//             "precio": 99999,
//             "foto": "https://mdbootstrap.com/img/Photos/Avatars/avatar-13.jpg",
//             "status": "Disponible",
//             "profesional": 9,
//             "ofertas": 99,
//             "medio": "presencial"
//         },
//         {
//             "id": 22,
//             "cliente": "Cliente 22",
//             "categoria": "Otros Servicios",
//             "titulo": "Titulo de servicio 22",
//             "fecha": "6/4/18",
//             "lugar": "Providencia, Santiago",
//             "precio": 99999,
//             "foto": "https://mdbootstrap.com/img/Photos/Avatars/avatar-13.jpg",
//             "status": "Disponible",
//             "profesional": 9,
//             "ofertas": 99,
//             "medio": "presencial"
//         },
//         {
//             "id": 23,
//             "cliente": "Cliente 23",
//             "categoria": "Otros Servicios",
//             "titulo": "Titulo de servicio 23",
//             "fecha": "6/4/18",
//             "lugar": "Providencia, Santiago",
//             "precio": 99999,
//             "foto": "https://mdbootstrap.com/img/Photos/Avatars/avatar-13.jpg",
//             "status": "Asignado",
//             "profesional": 9,
//             "ofertas": 99,
//             "medio": "online"
//         },
//         {
//             "id": 24,
//             "cliente": "Cliente 24",
//             "categoria": "Otros Servicios",
//             "titulo": "Titulo de servicio 24",
//             "fecha": "6/4/18",
//             "lugar": "Providencia, Santiago",
//             "precio": 99999,
//             "foto": "https://mdbootstrap.com/img/Photos/Avatars/avatar-13.jpg",
//             "status": "Asignado",
//             "profesional": 9,
//             "ofertas": 99,
//             "medio": "presencial"
//         },
//         {
//             "id": 25,
//             "cliente": "Cliente 25",
//             "categoria": "Otros Servicios",
//             "titulo": "Titulo de servicio 25",
//             "fecha": "6/4/18",
//             "lugar": "Providencia, Santiago",
//             "precio": 99999,
//             "foto": "https://mdbootstrap.com/img/Photos/Avatars/avatar-13.jpg",
//             "status": "Disponible",
//             "profesional": 9,
//             "ofertas": 99,
//             "medio": "presencial"
//         },
//         {
//             "id": 26,
//             "cliente": "Cliente 26",
//             "categoria": "Otros Servicios",
//             "titulo": "Titulo de servicio 26",
//             "fecha": "6/4/18",
//             "lugar": "Providencia, Santiago",
//             "precio": 99999,
//             "foto": "https://mdbootstrap.com/img/Photos/Avatars/avatar-13.jpg",
//             "status": "Asignado",
//             "profesional": 9,
//             "ofertas": 99,
//             "medio": "presencial"
//         },
//         {
//             "id": 27,
//             "cliente": "Cliente 27",
//             "categoria": "Otros Servicios",
//             "titulo": "Titulo de servicio 27",
//             "fecha": "6/4/18",
//             "lugar": "Providencia, Santiago",
//             "precio": 99999,
//             "foto": "https://mdbootstrap.com/img/Photos/Avatars/avatar-13.jpg",
//             "status": "Disponible",
//             "profesional": 9,
//             "ofertas": 99,
//             "medio": "presencial"
//         },
//         {
//             "id": 28,
//             "cliente": "Cliente 28",
//             "categoria": "Otros Servicios",
//             "titulo": "Titulo de servicio 28",
//             "fecha": "6/4/18",
//             "lugar": "Providencia, Santiago",
//             "precio": 99999,
//             "foto": "https://mdbootstrap.com/img/Photos/Avatars/avatar-13.jpg",
//             "status": "Disponible",
//             "profesional": 9,
//             "ofertas": 99,
//             "medio": "presencial"
//         },
//         {
//             "id": 29,
//             "cliente": "Cliente 29",
//             "categoria": "Otros Servicios",
//             "titulo": "Titulo de servicio 29",
//             "fecha": "6/4/18",
//             "lugar": "Providencia, Santiago",
//             "precio": 99999,
//             "foto": "https://mdbootstrap.com/img/Photos/Avatars/avatar-13.jpg",
//             "status": "Disponible",
//             "profesional": 9,
//             "ofertas": 99,
//             "medio": "presencial"
//         },
//         {
//             "id": 30,
//             "cliente": "Cliente 30",
//             "categoria": "Otros Servicios",
//             "titulo": "Titulo de servicio 30",
//             "fecha": "6/4/18",
//             "lugar": "Providencia, Santiago",
//             "precio": 99999,
//             "foto": "https://mdbootstrap.com/img/Photos/Avatars/avatar-13.jpg",
//             "status": "Asignado",
//             "profesional": 9,
//             "ofertas": 99,
//             "medio": "online"
//         }
//     ]

//     res.json(tareas)
// }