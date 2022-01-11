const mongoose = require("mongoose")
const express = require("express");
const formlayananSchema = require("../schema/formlayananSchema")
const router = express.Router()

router.post("/addform", (req,res) => {
    const form = new formlayananSchema();
    form.nama = req.body.nama,
    form.email = req.body.email,
    form.noHP =  req.body.noHP,
    form.deskripsiKeluhan =  req.body.deskripsiKeluhan,
    form.psikolog =  req.body.psikolog,
    form.tanggal1 =  req.body.tanggal1,
    form.tanggal2 =  req.body.tanggal2,
    form.tanggal3=  req.body.tanggal3

    return form.save((err,payload) => {
        if (err) {
            res.json({
                msg : "Data Gagal Dimasukkan"
            })
        } else {
            res.json({
                msg : "Data Berhasil Dimasukkan",
                payload
            })
        }
    })
})

module.exports = router
