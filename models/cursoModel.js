let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let cursoSchema = new Schema({
    nombre: { type: String, require: true},
    precio: { type: String, require: true},
    descripcion: { type: String},
    created_at: { type: Date, default: Date.now() }
});

module.exports = mongoose.model('curso', cursoSchema, 'curso');