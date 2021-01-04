const { productModel }=require('./connector');

const refreshAll=async ()=>{
    await productModel.deleteMany({})

    await productModel.insertMany({})

}
refreshAll();