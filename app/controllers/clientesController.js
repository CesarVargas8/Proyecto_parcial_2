const { request } = require('express');
let db=require('../../db/db');
let mysql=require('../db/mysql');
let cliente=require('../models/cliente');
module.exports = {
    create:(req,res)=>{
       console.log(req.body);
       mysql.query('insert into clientes SET ?',req.body,(err,rows,fields)=>{
          if(!err)
           res.json(rows);
         else
            res.json(err);
       });
       res.json({mensaje:'Se agrego un cliente'});
    },
    list:(req,res)=>{
       mysql.query('select * from clientes',(err,rows,fields)=>{
          if(err){
            res.json(rows);
          }else{
            res.json(err);
          }
    })},
    searchid:(req,res)=>{
         let id=req.params.id;
         console.log("el id a buscar es "+id);
         mysql.query('select * from clientes where id=?',id,(err,rows,fields)=>{
            if(!err)
               res.json(rows);
            else
               res.json(err);
         })
    }
    ,
    borrar:(req,res)=>{
         let id=req.params.id;
         console.log("El id que buscas es: "+id);
         mysql.query('delete * from clientes where id=?',id,(err,rows,fields)=>{
            if(!err)
               res.json(rows);
            else
               res.json(err);
         })
    }
}