const mongoose = require("mongoose")
const express = require("express");
const psikologSchema = require("../schema/psikologSchema")
const cloudinary = require("../conf/cloudinary");
const multer = require("../conf/multer")
const router = express.Router()

router.post("/addPsikolog", multer.single("image") , (req, res) => {
    let upload = cloudinary.uploader.upload(req.file.path)
    upload.then((resultUpload)=> {
        const psikolog = new psikologSchema();
        psikolog.nama = req.body.nama,
        psikolog.pendidikan = req.body.pendidikan,
        psikolog.universitas = req.body.universitas,
        psikolog.kompetensi = req.body.kompetensi,
        psikolog.pengalaman = req.body.pengalaman,
        psikolog.kota = req.body.kota,
        psikolog.informasi = req.body.informasi,
        psikolog.image = resultUpload.secure_url;
        psikolog.cloudinaryId = resultUpload.public_id


        return psikolog.save((err,payload) => {
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
})

router.get("/getAllPsikolog", (req,res) => {
    return psikologSchema.find({}, (err,result) => {
        if (err) {
            res.sendStatus(404)
        } else {
            res.json({
                result:result
            })
        }
    })
})

router.post("/getOnePsikolog", (req,res) => {
    return psikologSchema.findOne({_id: req.body.id})
})

router.put("/updatePsikolog", multer.single("image") ,(req,res) => {
    let upload = cloudinary.uploader.upload(req.file.path)
    upload.then((resultUpload) => {
        const id = req.body.id;
        const payload = {
            nama : req.body.nama,
            pendidikan : req.body.pendidikan,
            universitas : req.body.universitas,
            kompetensi : req.body.kompetensi,
            pengalaman : req.body.pengalaman,
            kota : req.body.kota,
            informasi : req.body.informasi,
            image : resultUpload.secure_url,
            cloudinaryId : resultUpload.public_id
        }
        return psikologSchema.findOneAndUpdate({_id : req.body.id}, payload, (err, result) => {
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
})

router.delete("/deletePsikolog", (req,res) => {
    const id = req.body.id;

    return psikologSchema.findOneAndDelete({_id : id}, (err, result) => {
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