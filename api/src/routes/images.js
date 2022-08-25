const { Router } = require('express')
const { getImages, postImage, getImageByLabel } = require('../controllers/getAndPostImages')
const router = Router()

router.post('/', postImage)
router.get('/', getImages)
router.get('/:label', getImageByLabel)

module.exports=router