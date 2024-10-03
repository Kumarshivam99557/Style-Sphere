const cloudinary = require("cloudinary").v2;
const multer = require('multer');

cloudinary.config({ 
    cloud_name: 'dry2zpwlw', 
    api_key: '395955149649453', 
    api_secret: 'Ds5sxOsm0A4_IqwHdWGoQg_nVnE' // Click 'View API Keys' above to copy your API secret
});


const storage = new multer.memoryStorage()

async function imageUploadUtil(file) {
     
    const result  = await cloudinary.uploader.upload(file,{
        resource_type : "auto"
    });
    return result;
}

const upload = multer({storage});

module.exports = {upload,imageUploadUtil}