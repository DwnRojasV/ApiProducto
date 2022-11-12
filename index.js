const express = require("express");
const cors = require("cors");
const body_parse = require("body-parser");
const path = require("path");

//se importa los servicios
const productoService = require("./productoService");


const app = express();
const port = 8081;

app.use(cors());
app.use(body_parse.json());

const pathName = "/";
const pathAdmin = pathName+"admin";

app.get(pathName,
    (req, res)=>{
        console.log("Recibimos peticion");
        console.log(req);
        res.send(productoService.productosGetExport());
    }
    );

app.get(pathAdmin,
    (req, res)=>{
        console.log("Recibimos la peticion");
        console.log(req);
        res.send(productoService.productosGetExport());
    }
);
app.post(pathAdmin,
        (req, res)=>{
            console.log("Recibimos peticion ");
            consolo.log(req.body);
            let producto = productoService.productosSetExport(req.body)
        }
    )




app.listen(port,
    ()=>{
        console.log("Subio el app productos en el puerto "+ port)
    }
    )