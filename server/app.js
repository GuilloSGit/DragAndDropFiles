const express = require('express')
const app = express();
const fileUpload = require('express-fileupload');
const cors = require('cors');

app.use(fileUpload());
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Something");
});

app.post("/upload", (req, res) => {
    console.log(req.files.file);
    res.send(`File ${req.files.file.name} uploaded`);
});

// Darle ruta al archivo cargado en el servidor
fileUpload.mv(req.files.file.path, "/tmp/", (err) => {
return res.status(500).send(err);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
})
