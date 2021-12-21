const mongoose = require("mongoose")
const express = require("express");
const quisSchema = require("../schema/quisSchema")
const router = express.Router()

router.post("/addquis", (req, res) => {
    const quis = new quisSchema();
    quis.judulQuiz = req.body.judulQuiz,
    quis.isiQuiz = req.body.isiQuiz

    return quis.save((err,payload) => {
        if (err) {
            res.json({
                msg : "Data Gagal Dimasukkan"
            })
        } else {
            res.json({
                msg : "Data berhasil dimasukkan",
                payload
            })
        }
    })
})

router.get("/getAllQuiz", (req,res) => {
    return quisSchema.find({}, (err,result) => {
        if (err) {
            res.sendStatus(404)
        } else {
            res.json({
                result:result
            })
        }
    })
})

router.put("/updateQuiz", (req,res) => {
    const id = req.body.id;
    const payload = {
        judulQuiz : req.body.judulQuiz,
        isiQuiz : req.body.isiQuiz
    }
    return quisSchema.findOneAndUpdate({_id : req.body.id}, payload, (err, result) => {
        if (err) {
            res.json ({
                msg : "gagal di update"
            })
        } else {
            res.json({
                msg : "data berhasil di update",
                result
            })
        }
    })
})

router.delete("/deleteQuiz", (req,res) => {
    const id = req.body.id;

    return quisSchema.findOneAndDelete({_id : id}, (err, result) => {
        if (err) {
            res.sendStatus(404)
        } else {
            res.json({
                msg : "data berhasil dihapus"
            })
        }
    })
})



module.exports = router