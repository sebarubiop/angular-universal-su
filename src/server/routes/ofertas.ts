
import { Oferta } from '../models/oferta'

export async function allOfertas(req, res) {
    try {
        const ofertas = await Oferta.find()
            .populate('createdBy', 'name image reviewCounter completationRate')
            .populate('tarea', 'titulo presupuesto status')
            .sort({ '_id': -1 }); // Sort ofertas from newest to oldest
        if (ofertas)
            res.json({ success: true, value: ofertas }); // Return success and ofertas array
        else
            res.json({ success: false, message: 'NO se encuentran ofertas.' }); // Return error of no ofertas found
    } catch (error) {
        res.json({ success: false, message: error })
    }
};

export async function ofertasByUser(req, res) {
    if (!req.params.userId) {
        res.json({ success: false, message: 'User ID no fue provisto.' }); // Return error message
    } else {
        try {
            const ofertas = await Oferta.find({ createdBy: req.params.userId })
                .populate('createdBy', 'name image reviewCounter completationRate')
                .populate({ path: 'tarea', populate: { path: 'createdBy', select: 'name image reviewCounter completationRate' } })
                .sort({ '_id': -1 }); // Sort ofertas from newest to oldest
            if (ofertas)
                res.json({ success: true, value: ofertas }); // Return success and ofertas array
            else
                res.json({ success: false, message: 'NO se encuentran ofertas.' }); // Return error of no ofertas found
        } catch (error) {
            res.json({ success: false, message: error })
        }
    }
}

export function guardarOferta(req, res) {
    if (!req.body.oferta)
        res.json({ success: false, message: 'Debe proporcionar una oferta válida' }); // Return error
    else if (!req.body.createdById)
        res.json({ success: false, message: 'Debe proporcionar createdBy' }); // Return error
    else if (!req.body.tareaId)
        res.json({ success: false, message: 'Debe proporcionar tareaId' }); // Return error
    else {
        const oferta = new Oferta({ // TODO: add createdBy and tarea related
            oferta: req.body.oferta,
            createdBy: req.body.createdById,
            tarea: req.body.tareaId,
            status: 1 // No asignada
        })
        // Save tarea to database
        oferta.save((err) => {
            // Check if error occured
            if (err)
                res.json({ success: false, message: 'NO se pudo guardar la oferta' });
            else
                res.json({
                    success: true,
                    message: 'Oferta creada!',
                    value: oferta
                }); // Return success
        })
    }
}

export async function singleOferta(req, res) {
    // Check if id is present in parameters
    if (!req.params.id)
        res.json({ success: false, message: 'ID no fue provisto.' }); // Return error message
    else {
        try {
            // Check if the oferta id is found in database 
            const oferta = await Oferta.findOne({ _id: req.params.id })
                .populate('createdBy', 'name image reviewCounter completationRate')
                .populate('tarea', 'titulo presupuesto status')
            // Check if the id is a valid ID
            if (oferta)
                res.json({ success: true, value: oferta }); // Return success
            else
                res.json({ success: false, message: 'No se ha encontrado oferta' }); // Return error message
        } catch (error) {
            res.json({ success: false, message: error })
        }
    }
}

export function updateOferta (req, res) {
    // Check if id is present in parameters
    if (!req.params.id) {
        res.json({ success: false, message: 'ID no fue provisto.' }); // Return error message
    } else {
        Oferta.updateOne({ _id: req.params.id }, req.body, (err, raw) => {
            if (err) {
                res.json({ success: false, message: 'Update Error: ' + err }); // Return error message
            } else {
                res.json({ success: true, value: raw }); // Return success
            }
        })
    }
}