const mongoose = require("mongoose")
const express = require("express");
const feedbackSchema = require("../schema/feedbackSchema")
const router = express.Router()

router.post("/postFeedback", (req, res) => {
    const feed = new feedbackSchema();
    feed.namaUser = req.body.namaUser,
    feed.komentar = req.body.komentar,
    feed.tanggal = req.body.tanggal

    return feed.save((err,payload) => {
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

router.get("/getFeedback", (req,res) => {
    return feedbackSchema.find({}, (err,result) => {
        if (err) {
            res.sendStatus(404)
        } else {
            res.json({
                result:result
            })
        }
    })
})

router.put("/updateFeedback", (req,res) => {
    const id = req.body.id;
    const payload = {
        namaUser : req.body.namaUser,
        komentar : req.body.komentar,
        tanggal : req.body.tanggal
    }
    return feedbackSchema.findOneAndUpdate({_id : req.body.id}, payload, (err, result) => {
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

router.delete("/deleteFeedback", (req,res) => {
    const id = req.body.id;

    return feedbackSchema.findOneAndDelete({_id : id}, (err, result) => {
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