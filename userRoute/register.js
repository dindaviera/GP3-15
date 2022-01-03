const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const userSchema = require("../schema/userSchema");
const bcrypt = require("bcrypt");
const salt = bcrypt.genSaltSync(10);
const jwt = require("jsonwebtoken");
const cloudinary = require("../conf/cloudinary")
const multer = require("../conf/multer")


router.post("/register", multer.single("foto"), (req, res) => {
    let upload = cloudinary.uploader.upload(req.file.path)
    upload.then((resultUpload => {
    const userModel = new userSchema();
    const encryptedPassword = bcrypt.hashSync(req.body.password, salt);
    userModel.username = req.body.username;
    userModel.password = encryptedPassword;
    userModel.email = req.body.email;
    userModel.jenis_kelamin = req.body.jenis_kelamin;
    userModel.tanggal_lahir = req.body.tanggal_lahir;
    userModel.foto = resultUpload.secure_url,
    userModel.role = req.body.role,
    userModel.cloudinaryId = resultUpload.public_id    


    return userModel.save((err, data) => {
        if (err) {
            res.json({
            msg: "user gagal dimasukan",
        });
        } else {
            res.json({
            msg: "user berhasil dimasukan",
            data,
        });
        }
    });

    res.json({
        msg: "ini dari regsiter",
    });
    }));
})


router.post("/login", (req, res) => {
    payload = {
        username: req.body.username,
        password: req.body.password
    };

    userSchema.findOne({ username: payload.username}, (err, result) => {
        if (err) {
            res.json({
                msg: "salah email",
            });
        } else {
            if(bcrypt.compareSync(req.body.password, result.password)){
                jwt.sign({ payload }, "skilvul", (err, token) => {
                    if(token) {
                        res.json({
                            msg: "berhasil login",
                            result,
                            token,
                        });
                    }
                });
                
            }else {
                res.json({
                    msg: "salah password",
                });
            }
        }
    });
});

module.exports = router;