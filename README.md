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