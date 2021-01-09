import mongoose from "mongoose";

const favSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  items: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Product",
      },
      image: {
        type: String,
        required: true,
      },
    },
  ],
});

module.exports=Fav=mongoose.model('favrouite',favSchema);