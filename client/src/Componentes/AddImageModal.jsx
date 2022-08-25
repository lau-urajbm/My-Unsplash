import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import swal from '@sweetalert/with-react'

const AddImageModal = () => {
    const [label, setLabel]=useState('')
    const [url, setUrl]=useState('')
    async function handleSubmit(e){
        e.preventDefault()
        console.log(e.target.value.label)
    }
    function handleChange(e){
        e.preventDefault()
        if(e.target.name==='label'){
            setLabel(e.target.value)
            console.log(label)
        }
        else if(e.target.name==='url'){
            setUrl(e.target.value)
            console.log(url)
        }

        
    }
   async function handleSubmit(e){
      e.preventDefault()
      if(label.length && url.length){
        console.log(label.length)
        const res = await axios.post('http://localhost:3001/images/', {label,url})
        
        swal(
          <div>
            <h1>Your Photo has been added with:</h1>
            <p>Label: {res.data.yourImage.label}</p>
            <p>URL: {res.data.yourImage.url}</p>
          </div>
        )
      }
    }

  return (
    <div>
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Add a Photo</button>
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Add a new image</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label for="recipient-name" className="col-form-label">Label</label>
            <input onChange={handleChange} type="text" name='label' className="form-control" id="recipient-name"></input>
          </div>
          <div className="mb-3">
            <label for="message-text" className="col-form-label">Photo URL</label>
            <input onChange={handleChange} className="form-control" name='url'id="message-text"></input>
          </div>
        </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={handleSubmit}>Add Photo</button>
      </div>
    </div>
  </div>
</div>
    </div>
    
  )
}

export default AddImageModal