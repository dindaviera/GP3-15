const mongoose = require("mongoose")
const express = require("express");
const layananSchema = require("../schema/layananSchema")
const router = express.Router();

router.post("/createLayanan", (req, res) => {
    const layanan = new layananSchema();
    layanan.namaPaket = req.body.namaPaket;
    layanan.hargaLayanan = req.body.hargaLayanan;
    layanan.deskripsiPaket = req.body.deskripsiPaket;
    layanan.kuotaLayanan = req.body.kuotaLayanan;
    
    return layanan.save((err, result) => {
        if (err) {
            res.json({
                msg: "data gagal dimasukkan",
            });
        } else {
            res.json ({
                msg: "data berhasil dimasukkan",
                result,
            });
        }
    });
});

router.get("/getAllLayanan", (req, res) => {
    return layananSchema.find({}, (err, result) => {
        if (err) {
            res.sendStatus(404);
        } else {
            res.json({
                result: result,
            });
        }
    });
});

router.post("/updateLayanan", (req, res) => {
    const id = req.body.id;
    const payload = {
        namaPaket : req.body.namaPaket,
        hargaLayanan : req.body.hargaLayanan,
        deskripsiPaket : req.body.deskripsiPaket,
        kuotaLayanan : req.body.kuotaLayanan
    };
    return layananSchema.findOneAndUpdate({ _id:req.body.id },
        payload, (err, result) => {
        if(err){
            res.json({
                msg: "gagal di update",
            });
        } else {
            res.json({
                msg: "berhasil di update",
                result,
            })
        }
    });
});

router.post("/deleteLayanan", (req, res) => {
    const id = req.body.id;

    return layananSchema.findOneAndDelete({_id: id}, (err, result) => {
        if(err){
            res.sendStatus(404)
        }else {
            res.json({
                msg: "berhasil di hapus",
                result,
            });
        }
    });
});

module.exports = router;