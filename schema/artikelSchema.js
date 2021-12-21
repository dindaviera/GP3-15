const mongoose = require("mongoose")

const artikelSchema = new mongoose.Schema({
    Judul : String,
    Author : String,
    Tanggal : Date,
    Tag : String,
    Penerbit : String, 
    Image: String,
    Deskripsi : String
})

module.exports = mongoose.model("Artikel", artikelSchema)