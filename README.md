# API SPEC

## Quiz Atrributes

| Atrributes | Tipe Data | Deksripsi |
| ------ | ------ | ------ |
| judulQuiz | String | Judul Quiz atau Kategori
| isiQuiz| Array | Berisi soal dan pilihan jawaban dari quiz |
| deskripsiQuiz| String | Deskripsi singkat tentang quiz yang dipilih |

## a. Create Quiz
Request :
- Method : POST
- Endpoint : quis/addquis
- Header :
    - Content-Type : application/json
    - Accept : application/json
- Body :
```javascript 
    "judulQuiz" : "string",
    "isiQuiz" : "array",
    "deskripsiQuiz" : "string"
```
- Response :
```javascript
    "msg" : "Data Berhasil Dimasukkan",
    "payload" : {
        "judulQuiz" : "string",
        "isiQuiz" : "array",
        "deskripsiQuiz" : "string"
    }
```