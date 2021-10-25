let model = require('../models/cursoModel');

function listar(req,res){
    model.find({},{created_at: false, '__v':false},function(err, cursos){
        if(err){
            res.sendStatus(500);
        }else{
            res.json({
                status:'ok',
                data: cursos
            });
        }
    });
}

function crear(req,res){
    let {name,description,price} = req.body
    let dato = new model;
    dato.nombre = name;
    dato.descripcion = description;
    dato.precio = price;
    dato.save(function(err, cursos){
        if(err){
            res.sendStatus(500);
        }else{
            res.json({
                status:'ok',
                data: cursos
            });
        }
    });
}

function editar(req,res){
    let {name,description,price} = req.body
    let val_id = req.params.id;
    let datos = {
        nombre: name, 
        descripcion: description,
        precio: price
    };
    model.updateOne({_id:val_id}, datos, function(err, curso){
        if(err){
            res.sendStatus(500);
        }else{
            res.json({
                status:'ok',
                data: curso
            });
        }
    });
}

function mostrar(req,res){
    let val_id = req.params.id;
    model.findOne({'_id':val_id},function(err, curso){
        if(err){
            res.sendStatus(500);
        }else{
            res.json({
                status:'ok',
                data: curso
            });
        }
    });
    
}

function eliminar(req,res){
    let val_id = req.params.id;
    model.deleteOne({_id:val_id},function(err, result){
        if(err){
            res.sendStatus(500);
        }else{
            res.json({
                status:'ok',
                mensaje: "Curso eliminado"
            });
        }
    })
}

module.exports = { listar, crear, editar, eliminar , mostrar }