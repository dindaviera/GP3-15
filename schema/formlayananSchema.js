const mongoose = require("mongoose");

const formlayananSchema = new mongoose.Schema({
    nama : String,
    email : String,
    noHP : String,
    deskripsiKeluhan : String,
    psikolog : String,
    tanggal1 : Date,
    tanggal2 : Date,
    tanggal3 : Date

})

module.exports = mongoose.model("fromLayanan", formlayananSchema)