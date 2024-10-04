const express = require("express")
const { handleImageUpload , addProducts,
    fetchAllProducts,
    editProducts,
    deleteProducts,} = require("../../Controllers/admin/products-controllers")
const { upload } = require("../../helpers/cloudinary")

 const router = express.Router();

 router.post("/upload-image" , upload.single('my_file'),handleImageUpload);
 router.post("/add",addProducts);
 router.get("/get",fetchAllProducts);
 router.put("/edit/:id",editProducts);
 router.delete("/delete/:id",deleteProducts);

 module.exports=router;