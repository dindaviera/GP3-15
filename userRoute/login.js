const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const userSchema = require("../schema/userSchema");
const bcrypt = require("bcrypt");
const salt = bcrypt.genSaltSync(10);

router.post("/login", (req, res) => {
    payload = {
        username: req.body.username,
        password: req.body.password,
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