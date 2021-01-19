const connectDB = require("./connector");
// const { productModel } = require("./connector");
const Product = require("./Schema");
const data = require("./data");
// const data2 = require("../../../../../Documents/products");

connectDB();

const refreshAll = async () => {
  await Product.deleteMany();
  // console.log(data);
  try {
    await Product.insertMany(data).then((res) => {
      console.log(res);
    });
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
refreshAll();
