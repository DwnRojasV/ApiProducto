let productos = require("./productos.json");

const productosGet = ()=>{
    return productos;
};

const productosSet = (producto)=>{
    productos.push(producto);
}




module.exports.productosGetExport = productosGet;
module.exports.productosSetExport = productosSet;