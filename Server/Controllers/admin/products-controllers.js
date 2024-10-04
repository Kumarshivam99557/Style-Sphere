const { imageUploadUtil } = require("../../helpers/cloudinary");
const Product = require("../../Models/Products");


// image uploading in clodinary 

const handleImageUpload = async (req, res) => {
  try {
    const b64 = Buffer.from(req.file.buffer).toString("base64");
    const url = "data:" + req.file.mimetype + ";base64," + b64;
    const result = await imageUploadUtil(url);

    res.status(201).json({
      success: true,
      result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "error occurd",
    });
  }
};

// add n new products

const addProducts = async (req, res) => {
  try {
    const {
      image,
      title,
      description,
      category,
      brand,
      price,
      salePrice,
      totalStock,
    } = req.body;

    const newlyCreatedProduct = new  Product({
        image,
      title,
      description,
      category,
      brand,
      price,
      salePrice,
      totalStock,
    });

    await newlyCreatedProduct.save();
     res.status(201).json({
        success:true,
        data:newlyCreatedProduct,
     })
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Error Occured",
    });
  }
};

// fetch all products

const fetchAllProducts = async (req, res) => {
  try {
   
    const listOfData = await Product.find({});
    res.status(200).json({
        success:true,
        data:listOfData
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Error Occured",
    });
  }
};

// edit a procuts

const editProducts = async (req, res) => {
  try {
     const {id}=req.params;
     const {
        image,
        title,
        description,
        category,
        brand,
        price,
        salePrice,
        totalStock,
      } = req.body;
  const findProducts = await Product.findById(id);
  if(!findProducts){
   return  res.status(404).json({
        success:false,
        message:"product not found"
    });
  }  

  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Error Occured",
    });
  }
};

// delete a products

const deleteProducts = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Error Occured",
    });
  }
};

module.exports = {
  handleImageUpload,
  addProducts,
  fetchAllProducts,
  editProducts,
  deleteProducts,
};
