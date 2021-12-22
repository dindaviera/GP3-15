const mongoose = require("mongoose");

const layananSchema = new mongoose.Schema({
    namaPaket: String,
    hargaLayanan: Number,
    deskripsiPaket: Array,
    kuotaLayanan: Number,
});

module.exports = mongoose.model("layanan", layananSchema);