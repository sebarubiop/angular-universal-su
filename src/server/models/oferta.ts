const mongoose = require('mongoose'); // Node Tool for MongoDB
mongoose.Promise = global.Promise; // Configure Mongoose Promises
const Schema = mongoose.Schema; // Import Schema from Mongoose

// Oferta Model Definition
const ofertaSchema = new Schema({
    oferta: { type: Number },
    createdAt: { type: Date, default: Date.now },
    status: { type: Number },
    active: { type: Boolean },
    createdBy: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    tarea: {
        type: Schema.ObjectId,
        ref: 'Tarea'
    },
});

// Export Module/Schema
export const Oferta = mongoose.model('Oferta', ofertaSchema, 'ofertas');
