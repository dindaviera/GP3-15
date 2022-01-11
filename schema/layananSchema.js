const mongoose = require("mongoose");

const layananSchema = new mongoose.Schema({
    namaPaket: String,
    hargaLayanan: Number,
    sesiIndividual: String,
    konsultasi: String,
});

module.exports = mongoose.model("layanan", layananSchema);