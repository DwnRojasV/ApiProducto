let productos = require("./productos.json");

const productosGet = ()=>{
    return productos;
};

const productosSet = (producto)=>{
    productos.push(producto)
    return productos
}

const productosDelete = (id)=>{
    console.log(id);
    productos = productos.filter((prod)=>{
        return prod.id != id;
    }
    );
    console.log(productos);
    return productos;
}



module.exports.productosGetExport = productosGet;
module.exports.productosSetExport = productosSet;
module.exports.productosDeleteExport = productosDelete;