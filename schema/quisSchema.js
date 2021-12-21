const mongoose = require("mongoose")

const quisSchema = new mongoose.Schema({
    judulQuiz : String,
    isiQuiz : Array
})

module.exports = mongoose.model("quis", quisSchema)