const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');
const Product = require('../Schema');

router.post('/',(req,res)=>{
    

    const product=new Product({
        _id: mongoose.Types.ObjectId(),
       gender:req.body.gender,
       skin_tone:req.body.skin_tone,
    body_type:req.body.body_type,
    product_type:req.body.product_type,
    statement:req.body.statement,
    ocassion:req.body.ocassion,
    suggestion:req.body.suggestion,
    src:req.body.src,
    });
    product.save()
    .then(result=>{
        console.log(result);
        res.send({
            data:result
        })
    })
    .catch(err=>console.log(err));
});

module.exports=router;


