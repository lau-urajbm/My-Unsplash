import {React, useState, useEffect } from 'react'
import axios from 'axios'
import '../css/UnSplash.css'
import Navbar from './Navbar'

const UnSplash = () => {
  const [images, setImages]=useState([])
  async function getData(){
    const res = await axios.get('http://localhost:3001/images')
      setImages(res.data.reverse())
  }
  useEffect(()=>{
      getData()

  },[])
 
  async function handleChange(e){
    e.preventDefault()
    
    const res = await axios.get(`http://localhost:3001/images/${e.target.value}`)
    
    setImages(res.data.reverse())
  }
  
  return (
    <>
    <Navbar handleChange={handleChange}></Navbar>
    <div className='container contenedor-grid'>
      {images.length >0&& images.map(img=>{
        return(
          <figure className="figure figurecont " /* style={{backgroundImage: `url(${img.url})`}} */>
            <img src={img.url} className="rounded image" alt="..."></img>
            <div className='contenedor-texto'>
              <figcaption className="figure-caption label-text m-3">{img.label}</figcaption> </div>
            
          </figure>
          
        )
      })}
    </div>
    </>
  )
}

export default UnSplash