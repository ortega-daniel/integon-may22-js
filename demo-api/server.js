const express = require("express");
const mongo = require("mongodb").MongoClient;
const cors = require("cors");
const { ObjectId } = require("mongodb");

const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

const app = express();
app.use(express.json())
app.use(cors(corsOptions))
app.crossOriginIsolated = true;
const uri = "mongodb://localhost:27017";

let db, alumnos, autores;
mongo.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err, client) => {
    if (err) {
        return console.log(err);
    }

    db = client.db("cursojavascript");
    console.log("conectado a la db");

    alumnos = db.collection("alumnos");
    autores = db.collection("autores");
    users = db.collection("users");
});


app.get("/demo", (_, res) => {
    res.status(200).json({
        ok: true
    });
});

app.get("/alumnos", (_, res) => {
    alumnos.find().toArray((err, items) => {
        if (err) {
            console.log(err);
            res.status(500).json({ err: err});
            return;
        }

        res.status(200).json({ alumnos: items});
    });
});

app.get("/alumnos/:id", (req, res) => {
    let alumnoId = req.params.id;
    console.log(alumnoId);

    alumnos.findOne({"_id": ObjectId(alumnoId)}, (err, item) => {
        if (err) {
            console.log(err);
            res.status(500).json({ err: err});
            return;
        }

        res.status(200).json({ alumno: item });
    });
});

app.post("/alumnos", (req, res) => {
    alumnos.insertOne({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        ciudad: req.body.ciudad
    }, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).json({ err: err});
            return;
        }

        res.status(200).json({ ok: true});
    });
});

app.get("/autores", (_, res) => {
    autores.find().toArray((err, items) => {
        if (err) {
            console.log(err);
            res.status(500).json({ err: err});
            return;
        }

        res.status(200).json({ autores: items});
    });
});

app.post("/autores", (req, res) => {
    autores.insertOne({
        picture: req.body.picture,
        name: req.body.name,
        email: req.body.email,
        position: req.body.position,
        positionDtl: req.body.positionDtl,
        status: req.body.status,
        employedDate: req.body.employedDate,
    }, (err, _) => {
        if (err) {
            console.log(err);
            res.status(500).json({ err: err});
            return;
        }

        res.status(200).json({ ok: true});
    });
});

app.post("/signin", (req, res) => {
    let email = req.body.email;
    let password = req.body.password;

    users.findOne({ "email": email, "password": password }, (err, user) => {
        if (err) {
            console.log(err);
            res.status(500).json({ err: err});
            return;
        }

        res.status(200).json({ user });
    });
});

app.listen(3000, () => {
    console.log("Escuchando en el puerto 3000...");
});