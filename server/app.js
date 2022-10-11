const express = require('express')
const app = express();
const fileUpload = require('express-fileupload');
const cors = require('cors');

app.use(fileUpload());
app.use(cors());
app.use(express.json());

app.post("/upload", (req, res) => {
    res.send(`¡El archivo: ${req.files.file.name}, fue cargado exitosamente!`);
    res.status(200);
    let keys = Object.keys(req.files.file);
    console.log(`¡El archivo: ${req.files.file.name}, fue cargado exitosamente!`);
    console.log(`\nPuede ver más información útil iterando por los siguientes elementos del objeto 'req.files.file':`);
    keys.map(key => console.log(key)); // Elementos para iterar
    console.log('\nEjemplo:')
    console.log('Tamaño del archivo: ' + req.files.file.size);
    console.log('Tipo de archivo: ' + req.files.file.mimetype);
    // console.log('MD5 del archivo: ' + req.files.file.md5);
    // console.log('Función mover del archivo: ' + req.files.file.mv);
});

// Darle ruta al archivo cargado en el servidor
app.listen(3000, () => {
    console.log("Server running on port 3000");
})
