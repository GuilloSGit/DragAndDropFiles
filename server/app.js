const express = require('express')
const app = express();
const fileUpload = require('express-fileupload');
const cors = require('cors');

app.use(fileUpload());
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send(`/${req.method} ${req.url}`);
});

app.post("/upload", (req, res) => {
    console.log(req.files.file);
    res.send(`${req.files.file.name} was successfully uploaded`);
});

// Darle ruta al archivo cargado en el servidor
app.use(express.static('uploads'));

app.listen(3000, () => {
    console.log("Server running on port 3000");
})
