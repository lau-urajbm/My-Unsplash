import React from 'react'
import { useState } from 'react'

 const SearchBar = ({handleChange}) => {

    const[input, setInput]=useState('')

  return (
    <div>
        <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={handleChange}></input>
        <button className="btn btn-outline-dark" type="submit">Search</button>
      </form>
    </div>
  )
}
export default SearchBar