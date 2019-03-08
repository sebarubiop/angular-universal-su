const mongoose = require('mongoose'); // Node Tool for MongoDB
mongoose.Promise = global.Promise; // Configure Mongoose Promises
const Schema = mongoose.Schema; // Import Schema from Mongoose

// let categoriaLengthChecker = (categoria) => {
//   if (!categoria) {
//     return false;
//   } else {
//     if (categoria.length < 2 || categoria.length > 15) {
//       return false;
//     } else {
//       return true;
//     }
//   }
// };

// let validCategoria = (categoria) => {
//   if (!categoria) {
//     return false;
//   } else {
//     const regExp = new RegExp(/^[a-zA-Z]+$/);
//     return regExp.test(categoria);
//   }
// };

// const categoriaValidators = [
//   {
//     validator: categoriaLengthChecker,
//     message: 'Categoría debe tener entre 2 y 15 caracteres'
//   },
//   {
//     validator: validCategoria,
//     message: 'Categoria debe tener solo letras'
//   }
// ];

let tituloLengthChecker = (titulo) => {
  if (!titulo) {
    return false;
  } else {
    if (titulo.length < 5 || titulo.length > 50) {
      return false;
    } else {
      return true;
    }
  }
};

const tituloValidators = [
  {
    validator: tituloLengthChecker,
    message: 'Título debe tener entre 5 y 50 caracteres'
  }
];

let descripcionLengthChecker = (descripcion) => {
  if (!descripcion) {
    return false;
  } else {
    if (descripcion.length < 10 || descripcion.length > 500) {
      return false;
    } else {
      return true;
    }
  }
};

const descripcionValidators = [
  {
    validator: descripcionLengthChecker,
    message: 'Descripción debe tener entre 10 y 500 caracteres'
  }
];

// let medioLengthChecker = (medio) => {
//   if (!medio) {
//     return false;
//   } else {
//     if (medio.length < 2 || medio.length > 15) {
//       return false;
//     } else {
//       return true;
//     }
//   }
// };

// let validMedio = (medio) => {
//   if (!medio) {
//     return false;
//   } else {
//     const regExp = new RegExp(/^[a-zA-Z]+$/);
//     return regExp.test(medio);
//   }
// };

// const medioValidators = [
//   {
//     validator: medioLengthChecker,
//     message: 'Medio debe tener entre 2 y 15 caracteres'
//   },
//   {
//     validator: validMedio,
//     message: 'Medio debe tener solo letras'
//   }
// ];

let comunaLengthChecker = (comuna) => {
  if (!comuna) {
    return false;
  } else {
    if (comuna.length < 5 || comuna.length > 50) {
      return false;
    } else {
      return true;
    }
  }
};

const comunaValidators = [
  {
    validator: comunaLengthChecker,
    message: 'Comuna debe tener entre 5 y 50 caracteres'
  },
];

let cantidadLengthChecker = (cantidad) => {
  if (!cantidad) {
    return false;
  } else {
    if (cantidad < 1 || cantidad > 20) {
      return false;
    } else {
      return true;
    }
  }
};

let validCantidad = (cantidad) => {
  if (!cantidad) {
    return false;
  } else {
    const regExp = new RegExp(/^[0-9]+$/);
    return regExp.test(cantidad);
  }
};

const cantidadValidators = [
  {
    validator: cantidadLengthChecker,
    message: 'Cantidad debe ser entre 1 a 20 profesionales'
  },
  {
    validator: validCantidad,
    message: 'Cantidad debe ser dígitos'
  }
];

let presupuestoLengthChecker = (presupuesto) => {
  if (!presupuesto) {
    return false;
  } else {
    if (presupuesto < 0 || presupuesto > 1000000) {
      return false;
    } else {
      return true;
    }
  }
};

let validPresupuesto = (presupuesto) => {
  if (!presupuesto) {
    return false;
  } else {
    const regExp = new RegExp(/^[0-9]+$/);
    return regExp.test(presupuesto);
  }
};

const presupuestoValidators = [
  {
    validator: presupuestoLengthChecker,
    message: 'Presupuesto debe ser entre $0 a $1.000.000'
  },
  {
    validator: validPresupuesto,
    message: 'Presupuesto debe ser dígitos'
  }
];

// let statusLengthChecker = (status) => {
//   if (!status) {
//     return false;
//   } else {
//     if (status.length < 2 || status.length > 15) {
//       return false;
//     } else {
//       return true;
//     }
//   }
// };

// let validStatus = (status) => {
//   if (!status) {
//     return false;
//   } else {
//     const regExp = new RegExp(/^[a-zA-Z ]+$/);
//     return regExp.test(status);
//   }
// };

// const statusValidators = [
//   {
//     validator: statusLengthChecker,
//     message: 'Status debe tener entre 2 y 15 caracteres'
//   },
//   {
//     validator: validStatus,
//     message: 'Status debe tener solo letras y espacios'
//   }
// ];

// Tarea Model Definition
const tareaSchema = new Schema({
  // categoria: { type: String, validate: categoriaValidators },
  titulo: { type: String, required: true, validate: tituloValidators },
  descripcion: { type: String, validate: descripcionValidators },
  medio: { type: Number },
  comuna: { type: String, validate: comunaValidators },
  region: { type: String },
  region_numero: { type: String },
  fecha: { type: String },
  hora: { type: String },
  minuto: { type: String },
  meridian: { type: String },
  cantidad: { type: Number, validate: cantidadValidators },
  presupuesto: { type: Number, required: true, validate: presupuestoValidators },
  createdAt: { type: Date, default: Date.now },
  status: { type: Number },
  active: { type: Boolean },
  createdBy: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  ofertas: [{
    type: Schema.ObjectId,
    ref: 'Oferta'
  }]
  // Add photo urls, status, link with ofertas, comentarios, cliente, profesional
});

// Export Module/Schema
export const Tarea = mongoose.model('Tarea', tareaSchema, 'tareas')
