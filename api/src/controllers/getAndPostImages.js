const {Image} = require('../db')

async function getImages(req,res){


    try{
        
        const images = await Image.findAll()
        res.send(images)

    }catch(err){
        
    }
    


}

async function postImage(req,res){
        const {label, url}=req.body
    try{
       const newImageAdded= await Image.create({
            label, 
            url
        })
        
        res.send({message:'your image has been added ', yourImage: newImageAdded})
    }catch(err){
        
    }
}

async function getImageByLabel(req,res){
    const {label}=req.params
    try{
        let images = await Image.findAll() 
       let withTheLabel = images.filter(img=>{
        
            return img.label.includes(label)
        })  
        
        res.send(withTheLabel)

    }catch(err){
        
    }
}

module.exports={
    getImages,
    postImage,
    getImageByLabel
}