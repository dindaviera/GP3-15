const mongoose = require("mongoose")
const express = require("express");
const artikelSchema = require("../schema/artikelSchema")
const router = express.Router()

router.post("/postArt", (req, res) => {
    const artikel = new artikelSchema();
    artikel.Judul = req.body.Judul,
    artikel.Author = req.body.Author,
    artikel.Tanggal = req.body.Tanggal ,
    artikel.Tag = req.body.Tag,
    artikel.Penerbit = req.body.Penerbit, 
    artikel.Image = req.body.Image,
    artikel.Deskripsi = req.body.Deskripsi

    return artikel.save((err,payload) => {
        if (err) {
            res.json({
                msg : "Data Artikel Gagal Dimasukkan"
            })
        } else {
            res.json({
                msg : "Data Artikel berhasil dimasukkan",
                payload
            })
        }
    })
})

router.get("/getArtikel", (req,res) => {
    return artikelSchema.find({}, (err,result) => {
        if (err) {
            res.sendStatus(404)
        } else {
            res.json({
                result:result
            })
        }
    })
})

router.put("/updateArt", (req,res) => {
    const id = req.body.id;
    const payload = {
    Judul : req.body.Judul,
    Author : req.body.Author,
    Tanggal : req.body.Tanggal ,
    Tag : req.body.Tag,
    Penerbit : req.body.Penerbit, 
    Image : req.body.Image,
    Deskripsi : req.body.Deskripsi
    }
    return artikelSchema.findOneAndUpdate({_id : req.body.id}, payload, (err, result) => {
        if (err) {
            res.json ({
                msg : "data artikel gagal di update"
            })
        } else {
            res.json({
                msg : "data artikel berhasil di update",
                result
            })
        }
    })
})

router.delete("/deleteArt", (req,res) => {
    const id = req.body.id;

    return artikelSchema.findOneAndDelete({_id : id}, (err, result) => {
        if (err) {
            res.sendStatus(404)
        } else {
            res.json({
                msg : "data artikel berhasil dihapus"
            })
        }
    })
})



module.exports = router;