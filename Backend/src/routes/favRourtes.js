const express = require("express");
const router = express.Router();
const Fav = require("../favouriteSchema");
const Product = require("../Schema");
const verifyToken = require("./verifyUser");

router.get("/", verifyToken, async (req, res) => {
  try {
    const fav = await Fav.find({ user: req.user._id });
    if (fav[0]) {
      res.send(fav[0].items);
    } else {
      res.send([]);
    }    
  } catch (err) {
    res.send({error:err})
  }
});

router.post("/:id", verifyToken, async (req, res) => {
  const favourite = await Fav.find({ user: req.user._id });
  const prod = await Product.findById(req.params.id);
  if (favourite[0]) {
    var p = favourite[0].items.filter((p)=>p.product.toString()===req.params.id.toString());
    if(p[0]){
      res.send({message:"Already in fav"});
    }else{
      try {
        const hello = new Fav({
          user: req.user._id,
          items: [...favourite[0].items, { product: prod, img: req.body.img }],
        });
        await Fav.deleteOne(favourite._id);
        await hello.save();
        res.send({ message: "updated" });      
      } catch (err) {
        res.send({error:err})
      }
  }
  } else {
    const createdFav = new Fav({
      user: req.user._id,
      items: [{ product: prod, img: req.body.img }],
    });
    const nnw = await createdFav.save();
    res.send({ message: "created" });
  }
});

router.get("/:id", verifyToken, async (req, res) => {
  const favourite = await Fav.find({ user: req.user._id });
  try {
    const hello = new Fav({
      user: req.user._id,
      items: favourite[0].items.filter(
        (p) => p.product.toString() !== req.params.id.toString()
      ),
    });
    await Fav.deleteOne(favourite._id);
    await hello.save();
    res.send(hello.items);
  } catch (err) {
    res.send({ error: err });
  }
});

module.exports = router;
