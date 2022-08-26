const { Router } = require('express')
const { getImages, postImage, getImageByLabel, deleteImage } = require('../controllers/getAndPostImages')
const router = Router()

router.post('/', postImage)
router.get('/', getImages)
router.get('/:label', getImageByLabel)
router.delete('/:id', deleteImage)

module.exports=router