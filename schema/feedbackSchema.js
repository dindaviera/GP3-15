const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
    namaUser : String,
    komentar : String,
    tanggal : Date
})

module.exports = mongoose.model("feedback", feedbackSchema)