import multer from "multer";
import {CloudinaryStorage} from 'multer-storage-cloudinary'
import cloudinary from 'cloudinary'

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key : process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params : {
        folder: "uploads",
        formate: async(req, file) => 'png',
        public_id : (req, res) => file.originalname.split('.')[0] + ""
    }
})

const cloudinaryFileUploader = multer({ storage: storage})

export default cloudinaryFileUploader