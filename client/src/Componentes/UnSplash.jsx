import {React, useState, useEffect } from 'react'
import axios from 'axios'
import '../css/UnSplash.css'
import Navbar from './Navbar'
import swal from 'sweetalert'
import swalR from '@sweetalert/with-react'

const UnSplash = () => {
  const [images, setImages]=useState([])
  
  useEffect(()=>{
      getData()

  },[])
  async function getData(){
    const res = await axios.get('http://localhost:3001/images')
      setImages(res.data.reverse())
  }
  async function handleDelete(id){
    swal({
      title:"Eliminar",
      text:"¿Estás seguro de que deseas eliminar esta foto?",
      icon:"warning",
      buttons:["No", "Si"],

    })
    .then( async respuesta=>{
      if(respuesta){
        const res = await axios.delete(`http://localhost:3001/images/${id}`)
        console.log(res.data)
        swalR(<h1>La imagen ha sido eliminada </h1>)
        
        
    }
    })

  }

  async function handleChange(e){
    e.preventDefault()
    
    const res = await axios.get(`http://localhost:3001/images/${e.target.value}`)
    
    setImages(res.data.reverse())
  }
  
  return (
    <>
    <Navbar handleChange={handleChange}></Navbar>
    <div className='contenedor-grid'>
      {images.length >0&& images.map(img=>{
        return(
          <div className=" figurecont " /* style={{backgroundImage: `url(${img.url})`}} */>
             <button className='closeBtn rounded' title='delete' onClick={()=>handleDelete(img.id)}>X</button> 

            <img src={img.url} className="rounded image" style={{width:'100%'}} alt="..."></img>

             <div className='contenedor-texto'>
             
              <figcaption className="figure-caption label-text m-3">{img.label}</figcaption>
               </div> 
            
          </div>
          
        )
      })}
    </div>
    </>
  )
}

export default UnSplash