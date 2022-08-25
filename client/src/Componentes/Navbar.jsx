import React from 'react'
import AddImageModal from './AddImageModal'
import SearchBar from './SearchBar'

 const Navbar = ({handleChange}) => {
  return (
    <div>
        <nav className="navbar bg-light p-3">
            <div className="container-fluid">
                <div className='d-flex'>
                <span className="navbar-brand mb-0 h1 ">My Unsplash</span>
                <SearchBar handleChange={handleChange}></SearchBar>
                </div>
                <AddImageModal></AddImageModal>
            </div>
            
        </nav>
    </div>
  )
}

export default Navbar