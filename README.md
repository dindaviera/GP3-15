## Quiz Atrributes

| Atrributes | Tipe Data | Deksripsi |
| ------ | ------ | ------ |
| judulQuiz | String | Judul Quiz atau Kategori
| isiQuiz| Array | Berisi soal dan pilihan jawaban dari quiz |
| deskripsiQuiz| String | Deskripsi singkat tentang quiz yang dipilih |

# Create Quiz
Request :
- Method : POST
- Endpoint : quis/addquis
- Header :
    - Content-Type : application/json
    - Accept : application/json
- Body :
```javascript 
    {
        "judulQuiz" : "string",
        "isiQuiz" : "array",
        "deskripsiQuiz" : "string"
    }
```
- Response :
```javascript
    {
        "msg" : "Data Berhasil Dimasukkan",
        "payload" : {
            "judulQuiz" : "string",
            "isiQuiz" : "array",
            "deskripsiQuiz" : "string"
        }
    }
```

# Get All Quiz
Request : 
- Method : GET
- Endpoint : /quis/getAllQuiz
- Header :
    - Accept : application/json
- Response :
```javascript
   {
        "_id" : "string",
        "isiQuiz" : "array",
        "judulQuiz" : "string",
        "deskripsiQuiz" : "string"
    }
```
# Get By ID Quiz
Request : 
- Method : GET
- Endpoint : /quis/getOneQuiz
- Header :
    - Accept : application/json

Body : 
```javascript
    {
        "_id" : "string"
    }
```

Response :
```javascript
   {
        "_id" : "string",
        "isiQuiz" : "array",
        "judulQuiz" : "string",
        "deskripsiQuiz" : "string"
    }
```
# Update Quiz
Request : 
- Method : PUT
- Endpoint : /quis/updateQuiz
- Header :
    - Content-Type : application/json
    - Accept : application/json

Body :
```javascript
    {
        "_id" : "string",
        "isiQuiz" : "array",
        "judulQuiz" : "string",
        "deskripsiQuiz" : "string"
    }
```

Response :
```javascript
    {
        "msg" : "data berhasil di update",
        "result" : {
             "_id" : "string",
            "isiQuiz" : "array",
            "judulQuiz" : "string",
            "deskripsiQuiz" : "string"
        }
    }
```

## Delete Quiz 
Request :
- Method : DELETE
- Endpoint : /quis/deleteQuiz
- Header : 
    - Accept: application/json

Body :
```javascript
    {
        "_id" : "string"
    }
```

Response :
```javascript
    {
        "msg" : "data berhasil dihapus"
    }
```

## Psikolog Atrributes

| Atrributes | Tipe Data | Deksripsi |
| ------ | ------ | ------ |
| nama | String | Nama dari Psikolog |
| pendidikan | String | Pendidikan terakhir yang ditempuh psikolog |
| universitas | String | Universitas tempat psikolog menempuh pendidikan |
| kompetensi | String | Kompetensi atau konsentrasi khusus psikolog |
| pengalaman | Number | Lama waktu menjadi psikolog |
| kota | String | Kota domisili psikolog |
| informasi | String | Informasi tambahan tentang psikolog |
| image | String | Foto psikolog |

## Create Psikolog
Request :
- Method : POST
- Endpoint : psiokolog/addpsikolog
- Header :
    - Content-Type : application/json
    - Accept : application/json
- Body :
```javascript 
    {
        "nama" : "string",
        "pendidikan" : "array",
        "universitas" : "string",
        "kompetensi" : "string",
        "pengalaman" : "string",
        "kota" : "string",
        "informasi" : "string",
        "image" : "string"
    }
```
- Response :
```javascript
    {
        "msg" : "Data Berhasil Dimasukkan",
        "payload" : {
            "_id" : "string",
            "nama" : "string",
            "pendidikan" : "array",
            "universitas" : "string",
            "kompetensi" : "string",
            "pengalaman" : "string",
            "kota" : "string",
            "informasi" : "string",
            "image" : "string"
        }
    }
```

## Get All Psikolog
Request : 
- Method : GET
- Endpoint : /quis/getAllPsikolog
- Header :
    - Accept : application/json

Response :
```javascript
   {
        "_id" : "string",
        "nama" : "string",
        "pendidikan" : "array",
        "universitas" : "string",
        "kompetensi" : "string",
        "pengalaman" : "string",
        "kota" : "string",
        "informasi" : "string",
        "image" : "string"
    }
```
## Get By ID Psikolog
Request : 
- Method : GET
- Endpoint : /quis/getOnePsikolog
- Header :
    - Accept : application/json

Body : 
```javascript
    {
        "_id" : "string"
    }
```

Response :
```javascript
   {
        "_id" : "string"
        "nama" : "string",
        "pendidikan" : "array",
        "universitas" : "string",
        "kompetensi" : "string",
        "pengalaman" : "string",
        "kota" : "string",
        "informasi" : "string",
        "image" : "string"
    }
```
## Update Psikolog
Request : 
- Method : PUT
- Endpoint : /quis/updatePsikolog
- Header :
    - Content-Type : application/json
    - Accept : application/json

Body :
```javascript
    {
        "_id" : "string"
        "nama" : "string",
        "pendidikan" : "array",
        "universitas" : "string",
        "kompetensi" : "string",
        "pengalaman" : "string",
        "kota" : "string",
        "informasi" : "string",
        "image" : "string"
    }
```

Response :
```javascript
    {
        "msg" : "data berhasil di update",
        "result" : {
            "_id" : "string",
            "nama" : "string",
            "pendidikan" : "array",
            "universitas" : "string",
            "kompetensi" : "string",
            "pengalaman" : "string",
            "kota" : "string",
            "informasi" : "string",
            "image" : "string"
        }
    }
```

## Delete Psikolog
Request :
- Method : DELETE
- Endpoint : /quis/deletePsikolog
- Header : 
    - Accept: application/json

Body :
```javascript
    {
        "_id" : "string"
    }
```

Response :
```javascript
    {
        "msg" : "data berhasil dihapus"
    }
```

## Artikel Atrributes

| Atrributes | Tipe Data | Deskripsi |
| ------ | ------ | ------ |
| Judul | String | Judul dari artikel 
| Author| String| Penulis yang menulis artikel |
| Tanggal | Date | Tanggal artikel dibuat |
| Tag | String | Tag semacam kategori untuk tiap artikel |
| Penerbit | String | Yang menerbitkan artikel |
| Image| String | Berisi link gambar untuk artikel |
| cloudinaryId| String | Merupakan link database yang menampung gambar |
| Deskripsi | String | Isi dari artikel  |

# Create Artikel
Request :
- Method : POST
- Endpoint : artikel/postArt
- Header :
    - Content-Type : application/json
    - Accept : application/json
- Body :
```javascript 
    {
    "Judul" : "string",
    "Author" : "string",
    "Tanggal" : "date" ,
    "Tag" : "string",
    "Penerbit" : "string", 
    "Image" : "string",
    "Deskripsi" : "string"
    }
```
- Response :
```javascript
    {
        "msg" : "Data Artikel berhasil dimasukkan",
        "payload" : {
    "Judul" : "string",
    "Author" : "string",
    "Tanggal" : "date" ,
    "Tag" : "string",
    "Penerbit" : "string", 
    "Image" : "string",
    "Deskripsi" : "string"
        }
    }
```

# Get All Artikel
Request : 
- Method : GET
- Endpoint : /artikel/getArtikel
- Header :
    - Accept : application/json
- Response :
```javascript
   {
    "_id" : "string",
    "Judul" : "string",
    "Author" : "string",
    "Tanggal" : "date" ,
    "Tag" : "string",
    "Penerbit" : "string", 
    "Image" : "string",
    "Deskripsi" : "string"
    }
```
# Update Artikel
Request : 
- Method : PUT
- Endpoint : /artikel/updateArt
- Header :
    - Content-Type : application/json
    - Accept : application/json

Body :
```javascript
    {
    "_id" : "string",
    "Judul" : "string",
    "Author" : "string",
    "Tanggal" : "date" ,
    "Tag" : "string",
    "Penerbit" : "string", 
    "Image" : "string",
    "Deskripsi" : "string"
    }
```

Response :
```javascript
    {
        "msg" : "data artikel berhasil di update",
        "result" : {
    "_id" : "string",
    "Judul" : "string",
    "Author" : "string",
    "Tanggal" : "date" ,
    "Tag" : "string",
    "Penerbit" : "string", 
    "Image" : "string",
    "Deskripsi" : "string"
        }
    }
```

## Delete Artikel
Request :
- Method : DELETE
- Endpoint : /artikel/deleteArt
- Header : 
    - Accept: application/json

Body :
```javascript
    {
        "_id" : "string"
    }
```

Response :
```javascript
    {
        "msg" : "data artikel berhasil dihapus"
    }
```
## Feedback Atrributes

| Atrributes | Tipe Data | Deskripsi |
| ------ | ------ | ------ |
| namaUser | String | Nama dari user yang mengisi feedback  |
| komentar | String| Ulasan dari feedback yang diberikan  |
| tanggal | Date | Tanggal feedback dibuat |
 
# Create Feedback
Request :
- Method : POST
- Endpoint : feedback/postFeedback
- Header :
    - Content-Type : application/json
    - Accept : application/json
- Body :
```javascript 
    {
    "namaUser" : "string",
    "komentar" : "string",
    "tanggal" : "date" ,
    }
```
- Response :
```javascript
    {
        "msg" : "Data berhasil dimasukkan",
        "payload" : {
    "namaUser" : "string",
    "komentar" : "string",
    "tanggal" : "date" ,
        }
    }
```

# Get All Feedback
Request : 
- Method : GET
- Endpoint : /feedback/getFeedback
- Header :
    - Accept : application/json
- Response :
```javascript
   {
    "_id" : "string",
    "namaUser" : "string",
    "komentar" : "string",
    "tanggal" : "date" ,
    }
```
# Update Feedback
Request : 
- Method : PUT
- Endpoint : /feedback/updateFeedback
- Header :
    - Content-Type : application/json
    - Accept : application/json

Body :
```javascript
    {
    "_id" : "string",
   "namaUser" : "string",
   "komentar" : "string",
   "tanggal" : "date" ,
    }
```

Response :
```javascript
    {
        "msg" : "data berhasil di update",
        "result" : {
    "_id" : "string",
    "namaUser" : "string",
    "komentar" : "string",
    "tanggal" : "date" ,
        }
    }
```

## Delete Feedback
Request :
- Method : DELETE
- Endpoint : /feedback/deleteFeedback
- Header : 
    - Accept: application/json

Body :
```javascript
    {
        "_id" : "string"
    }
```

Response :
```javascript
    {
        "msg" : "data berhasil dihapus"
    }
```
## Layanan Atrributes

| Atrributes | Tipe Data | Deksripsi |
| ------ | ------ | ------ |
| namaPaket | String | Judul Paket  |
| hargaLayanan | Number | Berisi harga dari masing masing layanan |
| deskripsiPaket| Array | Deskripsi singkat tentang layanan |
| kuotaLayanan | Number | Berisi jumlah kuota peserta per layanan |

# Create Layanan
Request :
- Method : POST
- Endpoint : layanan/createLayanan
- Header :
    - Content-Type : application/json
    - Accept : application/json
- Body :
```javascript 
    {
        "namaPaket" : "string",
        "hargaLayanan" : "Number",
        "deskripsiPaket" : "Array",
        "kuotaLayanan" : "Number"
    }
```
- Response :
```javascript
    {
        "msg" : "Data Berhasil Dimasukkan",
        "payload" : {
            "namaPaket" : "string",
            "hargaLayanan" : "Number",
            "deskripsiPaket" : "Array",
            "kuotaLayanan" : "Number"
        }
    }
```

# Get All Layanan
Request : 
- Method : GET
- Endpoint : /layanan/getAllLayanan
- Header :
    - Accept : application/json
- Response :
```javascript
   {
        "namaPaket" : "string",
        "hargaLayanan" : "Number",
        "deskripsiPaket" : "Array",
        "kuotaLayanan" : "Number"
    }
```

# Update Layanan
Request : 
- Method : POST
- Endpoint : /layanan/updateLayanan
- Header :
    - Content-Type : application/json
    - Accept : application/json

Body :
```javascript
    {
        "_id" : "string",
        "namaPaket" : "string",
        "hargaLayanan" : "Number",
        "deskripsiPaket" : "Array",
        "kuotaLayanan" : "Number"
    }
```

Response :
```javascript
    {
        "msg" : "berhasil di update",
        "result" : {
             "_id" : "string",
            "namaPaket" : "string",
            "hargaLayanan" : "Number",
            "deskripsiPaket" : "Array",
            "kuotaLayanan" : "Number"
        }
    }
```

## Delete Layanan
Request :
- Method : POST
- Endpoint : /layanan/deleteLayanan
- Header : 
    - Accept: application/json

Body :
```javascript
    {
        "_id" : "string"
    }
```

Response :
```javascript
    {
        "msg" : "berhasil dihapus"
    }
```


```



