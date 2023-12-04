const express = require("express");
const cors = require("cors");

const PORT = 3000;
const HOST = '0.0.0.0';

const app = express();
app.use(express.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", true);
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, authorization"
    );
    res.header("Access-Control-Allow-Methods", "GET,POST,DELETE,PUT,OPTIONS");
    next();
});

app.use(
    cors({
        credentials: true,
        origin: function (origin, callback) {
            return callback(null, true);
        }
    })
);

// ============ ROUTES ===========
app.get("/", (req, res) => {
    res.status(200).send({
        "message": "Route working"
    });
});

app.post("/say_something", (req, res) => {
    console.log("Datos recibidos");
    const body = req.body;
    console.log(body)
    res.status(200).send();
});

app.post("/ordenar_numeros", (req, res) => {
    console.log("Datos recibidos en /ordenar_numeros");
    const body = req.body;
    let numeros = body.numeros;

    console.log(`Números antes de ordenar: ${numeros.toString()}`)

    numeros.sort((a, b) => a - b);
    console.log(`Números ordenados correctamente: ${numeros.toString()}`)
    res.status(200).send(numeros);
});

// ============ LISTEN SERVER ===========
app.listen(PORT, HOST, () => {
    console.log("Listening on *:" + PORT);
});

function sumar(numeros) {

}