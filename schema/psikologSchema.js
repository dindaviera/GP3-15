const mongoose = require("mongoose")

const psikologSchema = new mongoose.Schema({
    nama : String,
    pendidikan : String,
    universitas : String,
    kompentensi : String,
    pengalaman : Number,
    kota : String,
    informasi : String,
    image : String
})

module.exports = mongoose.model("psikolog", psikologSchema)