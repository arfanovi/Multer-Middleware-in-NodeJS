const express = require('express');
const multer = require('multer');
const PORT = 3001;

const app = express();


// This is multer middleware with the destination directory file upload 
const upload = multer({dest: 'uploads/'});


app.get('/', (req, res) =>{
    res.send(`
        
        <h2>File Upload</h2>
        <form action='/upload' method="POST" enctype="multipart/form-data">
        <input type = 'file' name ="file"/>
        <button type="submit">Upload</button>
        
        </form>
        `)
})

app.post('/upload', upload.single('file'), (req, res) => {
    if (req.file) {
        res.status(200).send('File uploaded')
    } else {
        req.status(400).send('file upload failed')
    }
})



app.listen(PORT, () =>{
    console.log('Server is Running ')
})