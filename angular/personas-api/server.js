const express = require("express");
const mongo = require("mongodb").MongoClient;
const cors = require("cors");

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

const app = express();
app.use(express.json());
app.use(cors(corsOptions));
app.crossOriginIsolated = true;
const uri = "mongodb://localhost:27017";

let db, personas, vuelos;
mongo.connect(
  uri,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) {
      return console.log(err);
    }

    db = client.db("angulardb");
    console.log("conectado a la db");

    personas = db.collection("personas");
    vuelos = db.collection("vuelos");
  }
);

app.get("/personas", (_, res) => {
  personas.find().toArray((err, items) => {
    if (err) {
      console.log(err);
      res.status(500).json({ err: err });
      return;
    }

    res.status(200).json({ personas: items });
  });
});

app.get("/vuelos", (_, res) => {
  vuelos.find().toArray((err, items) => {
    if (err) {
      console.log(err);
      res.status(500).json({ err: err });
      return;
    }

    res.status(200).json({ vuelos: items });
  });
});

app.post("/vuelos", (req, res) => {
  console.log(req.body);
  vuelos.insertOne(
    {
      noVuelo: req.body.noVuelo,
      fecha: req.body.fecha,
      horario: req.body.horario,
      origen: req.body.origen,
      destino: req.body.destino,
    },
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).json({ err: err });
        return;
      }

      res.status(200).json({ ok: true });
    }
  );
});

app.listen(3000, () => {
  console.log("Escuchando en el puerto 3000...");
});
