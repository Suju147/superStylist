const express = require('express')
const router = express.Router()
const Fav = require('../favouriteSchema')

router.post('/',async(req,res)=>{
    const result=await Fav.find({user:req.user._id})
    const {prod,img}
})