const mongoose = require("mongoose")
const express = require("express");
const formlayananSchema = require("../schema/formlayananSchema")
const router = express.Router()
const cors = require("cors");
const midtransClient = require("midtrans-client");

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

router.post("/beliLayanan", cors(), (req, res) => {
    let core = new midtransClient.CoreApi({
      isProduction: false,
      serverKey: "SB-Mid-server-YWDynisbW6ttXzM8tovv7cZb",
      clientKey: "SB-Mid-client-_6iL3SFt_aCCE8rR",
    });
  
    let parameter = {
      payment_type: "gopay",
      transaction_details: {
        gross_amount: req.body.Price, // harga dari yang dibayar sama user, ngikutin harga paket / apapun yang kalian tentuin
        order_id: req.body.nama + Math.random(), //selalu diganti biar ga tabrakan ( dinamis )
      },
      item_details: [
        // harus ngikutin apa yang dibeli sama user
        {
          id: req.body.Layanan, // paket1 / paket2 / paket3* ( req.body.id )
          price: req.body.Price, // harus dinamis dikirim dari front end* ( req.body.price )
          quantity: 1, // 1 aja ga usah diganti
          name: req.body.Layanan, //nama paketnya*
        },
      ],
      customer_details: {
        first_name: req.body.nama, //isi dari form user yang dikirim* ( req.body.nama )
        last_name: "", //isi dari form user yang dikirim* ( req.body.nama )
        email: req.body.email, //isi dari form user yang dikirim* ( req.body.email )
        phone: req.body.noHP , //isi dari form user yang dikirim* ( req.body.nomerhp )
      },
      gopay: {
        enable_callback: true, // optional kalo mau di redirect sesudahnya
        callback_url: "https://store.steampowered.com/", // optional halaman tujuan sesudah di redirect
      },
    };
  
    // charge transaction
    core.charge(parameter).then((chargeResponse) => {
      console.log(chargeResponse)
      if (chargeResponse) {
        res.send(chargeResponse);
      } else {
        res.send(404);
      }
    });
  });

module.exports = router