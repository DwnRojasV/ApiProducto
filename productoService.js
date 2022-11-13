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

const cantidadReservada = (carrito, idProducto)=>{
    for (let i = 0; i < productos.length; i++){
        if(idProducto === productos[i].id){
            productos[i].cantidad -= carrito.cantidad
            i = productos.length
        }
    }
}
const productosGetId = (id)=>{
    let producto = productos.find(
        (elem) =>{
            elem.id === id;
        }
    );
        return producto;
}


module.exports.productosGetExport = productosGet;
module.exports.productosGetIdExport = productosGetId;
module.exports.productosSetExport = productosSet;
module.exports.productosDeleteExport = productosDelete;
module.exports.cantidadReservadaExport = cantidadReservada;