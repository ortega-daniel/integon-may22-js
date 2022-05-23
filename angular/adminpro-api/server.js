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

let db, users;
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
    users = db.collection("users-adminpro");
  }
);

app.post("/register", (req, res) => {
  users.findOne({ email: req.body.email }, (err, user) => {
    if (err) {
      console.log(err);
      res.status(500).json({ err: err });
      return;
    }

    if (user != null) {
      res.status(200).json({ ok: false });
    } else {
      users.insertOne(
        {
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
        },
        (err, _) => {
          if (err) {
            console.log(err);
            res.status(500).json({ err: err });
            return;
          }

          res.status(200).json({ ok: true });
        }
      );
    }
  });
});

app.post("/login", (req, res) => {
  let email = req.body.email;
  let password = req.body.password;

  users.findOne({ email: email, password: password }, (err, user) => {
    if (err) {
      console.log(err);
      res.status(500).json({ err: err });
      return;
    }

    res.status(200).json(user);
  });
});

app.listen(3000, () => {
  console.log("Escuchando en el puerto 3000...");
});
